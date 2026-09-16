"""Deterministic PDF-to-Markdown conversion. No network or model calls.

Raw page evidence is kept separately from editable sections. PDF coordinates use
points from the top-left. All PDFium access is serialized: its API is not thread-safe.
"""
from __future__ import annotations
import hashlib
import io
import json
import math
import re
import threading
import uuid
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import xml.etree.ElementTree as ET

import pdfplumber
import pypdfium2 as pdfium

RENDER_LOCK = threading.RLock()
SCHEMA = 'guide-package/1.0'
STEP = re.compile(r'\bStep\s+(\d+)\s*[.:)]\s*', re.I)
KINDS = {'overview', 'procedure', 'reference', 'practice', 'administration'}


def now():
    return datetime.now(timezone.utc).isoformat(timespec='seconds')


def slug(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')[:75] or 'untitled'


def normalized(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())


def atomic_json(path, value):
    import time
    temp = path.with_suffix('.tmp')
    temp.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')
    # Windows-specific: retry on permission errors
    for attempt in range(5):
        try:
            temp.replace(path)
            break
        except PermissionError:
            if attempt == 4:
                raise
            time.sleep(0.05 * (attempt + 1))  # Exponential backoff


def docx_headings(path):
    """Use optional Word headings as exact-match hints, never substitute its text."""
    if not path.exists():
        return {}
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    with ZipFile(path) as z:
        if z.getinfo('word/document.xml').file_size > 32 * 1024 * 1024:
            raise ValueError('The Word document XML exceeds the supported size.')
        root = ET.fromstring(z.read('word/document.xml'))
        style_levels = {}
        if 'word/styles.xml' in z.namelist():
            if z.getinfo('word/styles.xml').file_size > 8 * 1024 * 1024:
                raise ValueError('The Word style definitions exceed the supported size.')
            styles = ET.fromstring(z.read('word/styles.xml'))
            for s in styles.findall('w:style', ns):
                name = s.find('w:name', ns)
                v = name.get('{'+ns['w']+'}val', '') if name is not None else ''
                m = re.search(r'heading\s*(\d)', v, re.I)
                if m:
                    style_levels[s.get('{'+ns['w']+'}styleId')] = int(m[1])
        result = {}
        for p in root.findall('.//w:body/w:p', ns):
            style = p.find('w:pPr/w:pStyle', ns)
            if style is None:
                continue
            v = style.get('{'+ns['w']+'}val', '')
            m = re.search(r'Heading(\d)', v, re.I)
            level = style_levels.get(v, int(m[1]) if m else None)
            text = ''.join(t.text or '' for t in p.findall('.//w:t', ns))
            if level and text.strip():
                result[normalized(text)] = level
        return result


def inside(box, outer):
    x = (box[0] + box[2]) / 2
    y = (box[1] + box[3]) / 2
    return outer[0] <= x <= outer[2] and outer[1] <= y <= outer[3]


def union(a, b):
    return [min(a[0], b[0]), min(a[1], b[1]), max(a[2], b[2]), max(a[3], b[3])]


def render_page(pdf, number, scale=1.5):
    with RENDER_LOCK:
        with pdfium.PdfDocument(pdf) as doc:
            if number < 1 or number > len(doc):
                raise ValueError('Page number is outside the document.')
            page = doc[number-1]
            width, height = page.get_size()
            if width <= 0 or height <= 0 or width * height > 16_000_000:
                raise ValueError('This PDF page is too large to render safely.')
            scale = min(scale, math.sqrt(20_000_000 / (width * height)))
            bitmap = page.render(scale=scale)
            image = bitmap.to_pil().copy()
            bitmap.close()
            page.close()
            return image


def render_crop(pdf, page, box, output):
    image = render_page(pdf, page, 2)
    with RENDER_LOCK:
        with pdfium.PdfDocument(pdf) as doc:
            p = doc[page-1]
            w, h = p.get_size()
            p.close()
    x0, y0, x1, y1 = box
    if not all(math.isfinite(v) for v in box) or not (0 <= x0 < x1 <= w and 0 <= y0 < y1 <= h):
        raise ValueError('Crop must be inside the page and have a positive size.')
    crop = image.crop((round(x0*image.width/w), round(y0*image.height/h), round(x1*image.width/w), round(y1*image.height/h)))
    if crop.width < 4 or crop.height < 4:
        raise ValueError('Select a larger crop.')
    crop.save(output, 'PNG')
    return crop.size


def borderless_tables(page, lines, images, ruled):
    """Conservative aligned-column detection; each result still requires review."""
    words = page.extract_words()
    result = []
    def cells(line):
        ws = [w for w in words if abs(w['top']-line['box'][1]) < 2 and w['x0'] >= page.width*.086]
        groups = []
        for w in ws:
            if not groups or w['x0']-groups[-1]['right'] > max(14, line['size']*1.8):
                groups.append({'text': w['text'], 'left': w['x0'], 'right': w['x1']})
            else:
                groups[-1]['text'] += ' '+w['text']; groups[-1]['right'] = w['x1']
        return groups
    for i, header in enumerate(lines):
        if header['bold'] < .8 or any(inside(header['box'], t['box']) for t in ruled+result) or any(inside(header['box'], im['box']) for im in images):
            continue
        columns = cells(header)
        if not 2 <= len(columns) <= 6:
            continue
        candidates = []; previous = header
        for line in lines[i+1:]:
            if line['box'][1]-previous['box'][3] > max(30, header['size']*3.5) or line['size'] > header['size']*1.15 or any(inside(line['box'], im['box']) for im in images):
                break
            row = cells(line)
            if row:
                if len(row) > len(columns):
                    break
                candidates.append((line, row)); previous = line
        full = [row for line,row in candidates if len(row)==len(columns)]
        if len(full) < 3:
            continue
        anchors = [sorted(row[c]['left'] for row in full)[len(full)//2] for c in range(len(columns))]
        rows = [[g['text'] for g in columns]]
        box = header['box'][:]
        for line, row in candidates:
            values = ['']*len(columns)
            for j, cell in enumerate(row):
                col = j if len(row)==len(columns) else min(range(len(anchors)), key=lambda c:abs(anchors[c]-cell['left']))
                values[col] = (values[col]+' '+cell['text']).strip()
            rows.append(values); box = union(box, line['box'])
        result.append({'id': f'p{page.page_number}-table-{i+1}', 'box': box, 'rows': rows, 'method': 'aligned columns'})
    return result


def scan(pdf, progress):
    pages = []
    with pdfplumber.open(pdf) as doc:
        if not 1 <= len(doc.pages) <= 1500:
            raise ValueError('Please use a PDF with 1 to 1,500 pages.')
        for number, p in enumerate(doc.pages, 1):
            if p.width * p.height > 16_000_000:
                raise ValueError(f'Page {number} is larger than the supported page size.')
            lines = []
            for i, line in enumerate(p.extract_text_lines(return_chars=True)):
                chars = line['chars']
                lines.append({'id': f'p{number}-l{i+1}', 'text': line['text'],
                              'box': [round(line[k], 2) for k in ('x0', 'top', 'x1', 'bottom')],
                              'size': round(max((c['size'] for c in chars), default=0), 2),
                              'bold': sum('bold' in c.get('fontname', '').lower() for c in chars)/max(1, len(chars))})
            images = [{'id': f'p{number}-i{i+1}', 'box': [round(im[k], 2) for k in ('x0', 'top', 'x1', 'bottom')]}
                      for i, im in enumerate(p.images) if im['width'] > 5 and im['height'] > 5]
            # Ruled tables are extracted only when their cells do not lie inside screenshots.
            tables = []
            for i, table in enumerate(p.find_tables({'vertical_strategy': 'lines_strict', 'horizontal_strategy': 'lines_strict'})):
                if len(table.cells) < 4 or any(inside(table.bbox, im['box']) for im in images):
                    continue
                rows = table.extract()
                if len(rows) > 1 and max(map(len, rows), default=0) > 1:
                    tables.append({'id': f'p{number}-t{i+1}', 'box': list(table.bbox), 'rows': rows})
            tables.extend(borderless_tables(p, lines, images, tables))
            pages.append({'number': number, 'width': p.width, 'height': p.height,
                          'lines': lines, 'images': images, 'tables': tables})
            p.close()
            progress('Reading pages', number, len(doc.pages))
    return pages


def repeating_key(line, page):
    text = re.sub(r'\d+', '#', line['text'].strip().lower())
    return (text, round(line['box'][1]/page['height'], 2))


def table_markdown(rows):
    count = max(map(len, rows), default=0)
    clean = lambda cell: str(cell or '').replace('|', '\\|').replace('\n', '<br>')
    values = [[clean(c) for c in row] + ['']*(count-len(row)) for row in rows]
    lines = ['| ' + ' | '.join(row) + ' |' for row in values]
    if lines:
        lines.insert(1, '| ' + ' | '.join(['---']*count) + ' |')
    return '\n'.join(lines)


def convert(folder: Path, title: str, progress=lambda *args: None):
    pdf = folder/'source.pdf'
    headings = docx_headings(folder/'source.docx')
    pages = scan(pdf, progress)
    repeats = Counter(k for p in pages for k in set(repeating_key(l, p) for l in p['lines']))
    image_repeats = Counter(tuple(round(v) for v in im['box']) for p in pages for im in p['images'])
    sizes = Counter(round(l['size'], 1) for p in pages for l in p['lines'] if len(l['text']) > 40)
    body_size = sizes.most_common(1)[0][0] if sizes else 10
    assets, sections, events, markings = [], [], [], set()
    ledger = []
    for p in pages:
        progress('Organizing content', p['number'], len(pages))
        good_images = []
        for im in p['images']:
            b = im['box']
            repeated = image_repeats[tuple(round(v) for v in b)] >= max(3, len(pages)*.45)
            reason = 'repeated page furniture' if repeated and (b[3] < p['height']*.22 or b[1] > p['height']*.8) else ''
            ledger.append({'id': im['id'], 'page': p['number'], 'kind': 'image', 'disposition': reason or 'image component'})
            if not reason and b[2]-b[0] > 65 and b[3]-b[1] > 20:
                good_images.append(b[:])
        # Merge overlapping image components; PDF rendering keeps WordArt and labels.
        groups = []
        for box in good_images:
            hits = [g for g in groups if not (box[2] < g[0] or box[0] > g[2] or box[3] < g[1] or box[1] > g[3])]
            for g in hits:
                box = union(box, g)
                groups.remove(g)
            groups.append(box)
        for i, box in enumerate(groups):
            aid = f'p{p["number"]}-figure-{i+1}'
            # Four-point padding includes near-edge callouts without deleting original evidence.
            box = [max(0, box[0]-4), max(0, box[1]-4), min(p['width'], box[2]+4), min(p['height'], box[3]+4)]
            asset = {'id': aid, 'page': p['number'], 'box': box, 'path': f'assets/{aid}.png', 'caption': f'Source illustration, page {p["number"]}', 'reviewed': False}
            assets.append(asset)
            events.append({'type': 'image', 'page': p['number'], 'box': box, 'asset': aid, 'id': aid})
        for table in p['tables']:
            events.append({'type': 'table', 'page': p['number'], **table})
            ledger.append({'id': table['id'], 'page': p['number'], 'kind': 'table', 'disposition': 'included'})
        for l in p['lines']:
            text = l['text'].strip()
            if re.search(r'\bCUI\b|Controlled Unclassified|DISTRIBUTION STATEMENT', text, re.I):
                markings.add(text)
            box = l['box']
            is_margin = box[1] < p['height']*.22 or box[1] > p['height']*.8
            repeating = repeats[repeating_key(l, p)] >= max(3, len(pages)*.45)
            reason = ''
            if repeating and is_margin:
                reason = 'repeated header or footer'
            elif re.fullmatch(r'\d+', text) and box[2] < p['width']*.086:
                reason = 'line number'
            elif any(inside(box, t['box']) for t in p['tables']):
                reason = 'represented in table'
            elif any(inside(box, b) for b in groups):
                reason = 'represented in rendered illustration'
            if not reason:
                if box[0] < p['width']*.086:
                    text = re.sub(r'^\d+\s+', '', text)
                if text:
                    events.append({'type': 'text', 'page': p['number'], **l, 'text': text})
            ledger.append({'id': l['id'], 'page': p['number'], 'kind': 'text', 'disposition': reason or 'included'})
        if sum(len(l['text']) for l in p['lines']) < 30:
            events.append({'type': 'scan', 'page': p['number'], 'id': f'p{p["number"]}-scan', 'box': [0,0,p['width'],p['height']]})
    events.sort(key=lambda e: (e['page'], e['box'][1], e['box'][0]))
    def hint_for(text):
        return headings.get(normalized(text)) or headings.get(normalized(re.sub(r'^(?:[a-z]|[A-Z]\d)\)\s+', '', text)))
    # Match wrapped Word headings against adjacent PDF lines, retaining every line ID.
    merged_events = []
    ix = 0
    while ix < len(events):
        e = events[ix]
        if e['type'] == 'text' and e['bold'] > .55:
            candidate = dict(e)
            extra = []
            for j in range(ix+1, min(ix+4, len(events))):
                following = events[j]
                if following['type'] != 'text' or following['page'] != e['page'] or following['box'][1]-candidate['box'][3] > 16 or following['bold'] < .55:
                    break
                candidate['text'] += ' '+following['text']
                candidate['box'] = union(candidate['box'], following['box'])
                extra.append(following['id'])
                if hint_for(candidate['text']):
                    e = candidate
                    e['extra_ids'] = extra[:]
                    ix = j
                    break
        merged_events.append(e)
        ix += 1
    events = merged_events
    group = 'Getting started'
    current = None
    last_event = None
    ended = False
    def new_section(name, event, kind='reference', issue=None):
        s = {'id': 's-'+event['id'], 'title': name[:240], 'group': group, 'kind': kind,
             'markdown': '', 'source_ids': [], 'pages': [], 'status': 'draft', 'included': True,
             'exclusion_reason': '', 'issues': [issue] if issue else [], 'asset_ids': []}
        sections.append(s)
        return s
    for ix, e in enumerate(events):
        if e['type'] == 'text':
            t = e['text']
            step = STEP.search(t)
            if step and step.start() != 0 and not t.startswith('Read Statement:'):
                step = None
            hint = hint_for(t)
            if t.endswith('.') or (current and current['kind']=='procedure' and not ended and len(t.split())<3):
                hint = None
            large = e['size'] >= body_size * 1.22
            generic = re.match(r'^(?:Lesson\s+\d+\s*[:–-]|Topic\s+\d+\b|Knowledge Check\b|Lesson Conclusion\b|Course Exercise\b|Acronym List\b|Glossary\b)', t, re.I)
            lettered = re.match(r'^(?:[a-z]|[A-Z]\d)\)\s+\S', t)
            metadata = re.match(r'^(?:Associated|Prerequisites|Read Statement|Note:|Tip:|Warning:|Question:|Answer:|Step\s+\d|End of procedure)', t, re.I)
            heading = not step and not metadata and len(t) < 150 and ('....' not in t) and (hint or large or generic or (lettered and e['bold'] > .45))
            # Do not split ordinary bold UI labels in the middle of a procedure.
            if not heading and not metadata and not step and not t.endswith('.') and len(t) < 90 and e['bold'] > .88 and (current is None or current['kind'] != 'procedure' or ended):
                heading = True
            if heading:
                if large and last_event and current and last_event['type']=='text' and e['page']==last_event['page'] and last_event['size'] >= body_size*1.22 and e['box'][1]-last_event['box'][3] < 35 and len(current['source_ids']) <= 3:
                    current['title'] += ' '+t
                    if current['title'].lower().startswith('lesson '):
                        group = current['title']; current['group'] = group
                else:
                    if re.match(r'^Lesson\s+\d+\s*[:–-]', t, re.I):
                        group = t
                    elif re.match(r'^Course Exercise$', t, re.I):
                        group = 'Practice'
                    elif re.match(r'^Course Wrap Up$', t, re.I):
                        group = 'Course wrap-up'
                    elif re.match(r'^(?:Acronym List|Glossary|Index)$', t, re.I):
                        group = 'Reference'
                    kind = 'practice' if re.search(r'knowledge check|exercise|assessment', t, re.I) else 'overview' if re.match(r'^Lesson\b|Overview\b', t, re.I) else 'reference'
                    if re.match(r'^How to\b', t, re.I):
                        kind = 'procedure'
                    if re.search(r'course agenda|instructor|classroom|housekeeping|administration|attendance|^schedule$|^break\b|^lunch\b|class schedule', t, re.I):
                        kind = 'administration'
                    current = new_section(t, e, kind)
                ended = False
                current['source_ids'].extend([e['id']]+e.get('extra_ids', []))
                current['pages'] = sorted(set(current['pages']+[e['page']]))
                last_event = e
                continue
            if current is None or (ended and step and int(step[1]) == 1):
                current = new_section(f'Procedure on page {e["page"]}' if step else f'Opening material', e, 'procedure' if step else 'reference', 'Check the section title and boundary.')
                ended = False
            if step:
                if current['kind'] not in ('practice',):
                    current['kind'] = 'procedure'
                prefix = t[:step.start()].strip()
                addition = (prefix+'\n\n' if prefix else '')+f'### Step {step[1]}\n\n'+t[step.end():]
                current['markdown'] += '\n\n'+addition
            else:
                block_start = bool(metadata or re.match(r'^[•●▪]\s|^\d+[.)]\s|^[a-z]\)\s', t))
                separated = not last_event or last_event['type'] != 'text' or e['page'] != last_event['page'] or e['box'][1]-last_event['box'][3] > body_size*.65
                separator = '\n\n' if block_start or separated else ' '
                current['markdown'] += separator+t
            if re.match(r'^End of procedure', t, re.I):
                ended = True
        else:
            if current is None:
                current = new_section('Opening material', e)
            if e['type'] == 'image':
                a = next(a for a in assets if a['id']==e['asset'])
                current['markdown'] += f'\n\n![{a["caption"]}](../{a["path"]})\n\n'
                current['asset_ids'].append(a['id'])
            elif e['type'] == 'table':
                current['markdown'] += '\n\n'+table_markdown(e['rows'])+'\n\n'
                if 'Check table columns and reading order.' not in current['issues']:
                    current['issues'].append('Check table columns and reading order.')
            elif e['type'] == 'scan':
                current['issues'].append(f'Page {e["page"]} has little or no extractable text. OCR is not enabled; transcribe or retain a page crop.')
        current['source_ids'].extend([e['id']]+e.get('extra_ids', []))
        current['pages'] = sorted(set(current['pages']+[e['page']]))
        last_event = e
    for s in sections:
        s['markdown'] = s['markdown'].strip()
        nums = [int(n) for n in re.findall(r'^### Step (\d+)\s*$', s['markdown'], re.M)]
        if nums and nums != list(range(1,len(nums)+1)):
            s['issues'].append('Check step numbering: '+', '.join(map(str,nums))+'.')
        if s['asset_ids']:
            s['issues'].append('Review screenshot boundaries and placement.')
        if s['kind']=='administration':
            s['issues'].append('Decide whether this classroom material belongs in the user guide.')
        if len(s['markdown']) > 18000:
            s['issues'].append('Long section: consider splitting into smaller topics.')
    evidence = {'schema': SCHEMA, 'source_sha256': hashlib.sha256(pdf.read_bytes()).hexdigest(), 'pages': pages, 'ledger': ledger}
    atomic_json(folder/'evidence.json', evidence)
    (folder/'assets').mkdir(exist_ok=True)
    # Images are rendered by page to avoid opening the full PDF for every crop.
    grouped = {}
    for a in assets:
        grouped.setdefault(a['page'], []).append(a)
    for count, (number, group_assets) in enumerate(grouped.items(),1):
        im = render_page(pdf, number, 2)
        p = pages[number-1]
        for a in group_assets:
            b = a['box']
            crop = im.crop((round(b[0]*im.width/p['width']),round(b[1]*im.height/p['height']),round(b[2]*im.width/p['width']),round(b[3]*im.height/p['height'])))
            crop.save(folder/a['path'], 'PNG')
            a['width'], a['height'] = crop.size
        progress('Preserving illustrations', count, len(grouped))
    package = {'schema': SCHEMA, 'id': folder.name, 'title': title, 'created': now(), 'updated': now(), 'revision': 1,
               'source': {'filename': json.loads((folder/'job.json').read_text()).get('filename','source.pdf') if (folder/'job.json').exists() else 'source.pdf',
                          'sha256': hashlib.sha256(pdf.read_bytes()).hexdigest(), 'pages': len(pages),
                          'word_hints': len(headings), 'word_matches': sum(normalized(s['title']) in headings for s in sections)},
               'classification': 'CUI' if any(re.search(r'\bCUI\b|Controlled Unclassified', m, re.I) for m in markings) else 'Not specified — review source',
               'source_markings': sorted(markings), 'sections': sections, 'assets': assets,
               'notes': ['Rule-based extraction; verify reading order and image placement against the PDF.',
                         'No OCR or generative AI is used. Raw extraction evidence is retained.']}
    atomic_json(folder/'project.json', package)
    return package


def validate_package(package):
    if package.get('schema') != SCHEMA:
        raise ValueError('Unsupported content schema.')
    if not isinstance(package.get('sections'), list) or len(package['sections']) > 10000:
        raise ValueError('Invalid sections.')
    ids = set()
    for s in package['sections']:
        if not re.fullmatch(r'[a-zA-Z0-9_-]{1,100}', s.get('id','')) or s['id'] in ids:
            raise ValueError('Section IDs must be unique and safe.')
        ids.add(s['id'])
        if not isinstance(s.get('title'), str) or not s['title'].strip() or len(s['title']) > 500:
            raise ValueError('Each section needs a title of 500 characters or fewer.')
        if s.get('kind') not in KINDS or s.get('status') not in ('draft','reviewed'):
            raise ValueError('Invalid section type or review status.')
        if not isinstance(s.get('markdown'), str) or len(s['markdown']) > 2_000_000:
            raise ValueError('Section content is too large.')
        if not s.get('included', True) and not s.get('exclusion_reason','').strip():
            raise ValueError('Give a reason for each excluded section.')
    return True


def export_package(folder, package, include_source=False):
    validate_package(package)
    name = slug(package['title'])
    out = folder/'exports'
    out.mkdir(exist_ok=True)
    destination = out/f'{name}-r{package["revision"]}-{uuid.uuid4().hex[:6]}.zip'
    asset_by_id = {a['id']: a for a in package['assets']}
    known_paths = {f'../{a["path"]}': a for a in package['assets']}
    manifest = {k:v for k,v in package.items() if k not in ('sections','assets')}
    manifest['exported'] = now()
    manifest['sections'] = []
    manifest['assets'] = []
    used = set()
    toc = [f'# {package["title"]}', '', f'Classification: {package["classification"]}', '',
           'Reviewable conversion. Consult manifest.json for source references and review status.', '']
    # Validate image references before creating any export artifact.
    for s in package['sections']:
        if s.get('included', True):
            for target in re.findall(r'!\[[^\]]*\]\(([^)]+)\)', s['markdown']):
                if target not in known_paths:
                    raise ValueError(f'Unknown image in {s["title"]}: {target}. Use an image from this conversion.')
    with ZipFile(destination, 'w', ZIP_DEFLATED) as z:
        for i, s in enumerate(package['sections'],1):
            row = {k:v for k,v in s.items() if k!='markdown'}
            row['asset_ids'] = [known_paths[target]['id'] for target in re.findall(r'!\[[^\]]*\]\(([^)]+)\)', s['markdown']) if target in known_paths]
            row['order'] = i
            row['file'] = f'content/{s["id"]}.md' if s.get('included',True) else None
            manifest['sections'].append(row)
            if row['file']:
                # IDs make Markdown paths stable even when titles/order change.
                front = '\n'.join(f'{k}: {json.dumps(v,ensure_ascii=False)}' for k,v in {'id':s['id'],'title':s['title'],'group':s['group'],'kind':s['kind'],'source_pages':s['pages'],'status':s['status']}.items())
                z.writestr(row['file'], f'---\n{front}\n---\n\n# {s["title"]}\n\n{s["markdown"]}\n')
                toc.append(f'- [{s["title"]}]({row["file"]}) · {s["status"]}')
                for target in re.findall(r'!\[[^\]]*\]\(([^)]+)\)', s['markdown']):
                    if target not in known_paths:
                        raise ValueError(f'Unknown image in {s["title"]}: {target}. Use an image from this conversion.')
                    used.add(known_paths[target]['id'])
        for aid in sorted(used):
            a = asset_by_id[aid]
            z.write(folder/a['path'], a['path'])
            manifest['assets'].append(a)
        z.writestr('manifest.json',json.dumps(manifest,ensure_ascii=False,indent=2))
        z.writestr('README.md','\n'.join(toc)+'\n\n## Package format\n\nEdit the Markdown files in content/. The manifest holds navigation order, groups, source locations, and review state. Assets are rendered PDF crops. This export is a content package, not a published website.\n')
        z.write(folder/'evidence.json','review/source-evidence.json')
        if include_source:
            z.write(folder/'source.pdf','source/source.pdf')
    return destination
