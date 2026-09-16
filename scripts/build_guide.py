"""Build the full local guide from paired Word and Word-exported PDF sources.

Text comes from DOCX. PDF page coordinates preserve screenshot annotations.
No remote services or generative models are called.
"""
import argparse, bisect, hashlib, html, json, math, re, shutil, subprocess
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from difflib import SequenceMatcher
from pathlib import Path
from zipfile import ZipFile
from lxml import etree as ET
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
NS={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
STEP=re.compile(r'\bStep\s+(\d+)[.:]\s*')
LESSONS=[(333,1019,'Requesting and Inducting Items'),(1019,1199,'Tracking Assets'),(1199,1466,'Turn-In/Sellback'),(1466,1521,'Configurations'),(1521,1550,'Visits'),(1550,1768,'Work Orders'),(1768,1928,'Inventory Transactions'),(1928,1950,'Production Execution Workbench')]
def clean(s):return re.sub(r'\s+',' ',s).strip()
def norm(s):return re.sub('[^a-z0-9]','',s.lower())
def slug(s):return re.sub('[^a-z0-9]+','-',s.lower()).strip('-')
def title(s):return re.sub(r'^(?:Topic\s+\d+\s*[–-]\s*|How to\s+|B\d\)\s*)','',s,flags=re.I).strip()
def paragraph_text(p):return ''.join(p.xpath('./w:r/w:t/text() | ./w:hyperlink//w:t/text()',namespaces=NS)).strip()
def paragraph_html(p,start=0):
    out=[];skip=start
    for r in p.xpath('./w:r | ./w:hyperlink/w:r',namespaces=NS):
        s=''.join(r.xpath('.//w:t/text()',namespaces=NS))
        if skip: used=min(skip,len(s));s=s[used:];skip-=used
        if not s:continue
        val=html.escape(s);b=r.find('w:rPr/w:b',NS);i=r.find('w:rPr/w:i',NS)
        if b is not None and b.get('{'+NS['w']+'}val') not in ('false','0'):val='<strong>'+val+'</strong>'
        if i is not None and i.get('{'+NS['w']+'}val') not in ('false','0'):val='<em>'+val+'</em>'
        out.append(val)
    return ''.join(out)

def main():
    ap=argparse.ArgumentParser();ap.add_argument('--docx',required=True);ap.add_argument('--pdf',required=True);ap.add_argument('--layout',required=True);ap.add_argument('--pdftoppm',required=True);args=ap.parse_args()
    out=ROOT/'dist';qa=ROOT/'qa';qa.mkdir(exist_ok=True);(out/'assets/screenshots').mkdir(parents=True,exist_ok=True)
    with ZipFile(args.docx) as z:doc=ET.fromstring(z.read('word/document.xml'))
    elements=doc.findall('.//w:body//w:p',NS)
    blocks=[]
    for i,p in enumerate(elements):
        s=p.find('w:pPr/w:pStyle',NS)
        blocks.append(dict(index=i,text='' if any(ET.QName(a).localname=='txbxContent' for a in p.iterancestors()) else paragraph_text(p),style=s.get('{'+NS['w']+'}val') if s is not None else '',html=paragraph_html(p)))
    layout_meta=Path(args.layout).with_suffix('.meta.json')
    if layout_meta.exists():
        assert json.loads(layout_meta.read_text())['pdfSha256']==hashlib.sha256(Path(args.pdf).read_bytes()).hexdigest(), 'PDF changed. Run scan_pdf.py again before building.'
    layouts=json.loads(Path(args.layout).read_text());pdfsteps=[s for p in layouts for s in p['steps']]
    source_steps=[]
    for b in blocks:
        m=STEP.search(b['text'])
        if m and (m.start()==0 or b['text'].startswith('Read Statement:')):
            source_steps.append(dict(index=b['index'],number=int(m[1]),text=b['text'][m.end():],html=paragraph_html(elements[b['index']],m.end())))
    assert len(source_steps)==len(pdfsteps)==423
    for w,p in zip(source_steps,pdfsteps):
        assert w['number']==p['number'],(w,p)
        pdfbody=STEP.split(p['text'],maxsplit=1)[-1]
        a=norm(w['text'])[:45];b=norm(pdfbody)[:45]
        assert SequenceMatcher(None,a,b).ratio()>.82,(w,p)
        w['pdf']=p
    pointkeys=[(p['page'],p['top']) for p in pdfsteps]
    # Each crop joins all screenshot components for one source step on one page.
    imagegroups=defaultdict(list)
    for p in layouts:
        if not 20<=p['page']<=281:continue
        for im in p['images']:
            if im['width']>70 and im['height']>10 and 146<im['top'] and im['bottom']<647:
                si=bisect.bisect_right(pointkeys,(p['page'],im['top']+2))-1
                assert si>=0
                imagegroups[(si,p['page'])].append(im)
    assert set(i for i,p in imagegroups)==set(range(423)), 'Missing screenshot mapping'
    assets=[]
    def add_crop(name,page,box,description):
        filename=f'assets/screenshots/{name}.webp'
        assets.append(dict(src=filename,page=page,box=box,alt=description))
        return assets[-1]
    for (si,page),images in sorted(imagegroups.items()):
        lo=min(x['top'] for x in images);hi=max(x['bottom'] for x in images)
        extras=[im for im in layouts[page-1]['images'] if im['top']>=lo-12 and im['bottom']<=hi+12 and im['top']>146]
        allims=images+extras
        box=[max(52,min(x['x0'] for x in allims)-4),max(147,min(x['top'] for x in allims)-4),min(500,max(x['x1'] for x in allims)+5),min(645,max(x['bottom'] for x in allims)+4)]
        bodylines=[l for l in layouts[page-1]['lines'] if re.match(r'^\d+\s+\S',l['text']) and l['x0']<54]
        previous=max((l['bottom'] for l in bodylines if l['bottom']<=lo),default=147)
        following=min((l['top'] for l in bodylines if l['top']>=hi),default=645)
        box[1]=max(box[1],previous+1)
        box[3]=min(box[3],following-1)
        # Do not crop text from the following step or header into an image.
        nextline=next((l['top'] for l in layouts[page-1]['lines'] if l['top']>hi and re.match(r'^\d+\s+(?:Step|Note|Tip|End of)',l['text'])),None)
        if nextline:box[3]=min(box[3],nextline-1)
        im=add_crop(f'step-{si+1:03d}-p{page}',page,box,f'Annotated Oracle screenshot for source step {source_steps[si]["number"]}, guide page {page}.')
        source_steps[si].setdefault('images',[]).append(im)
    records=[];proc=[];prev=333
    known={'How to Search for a Work Order':'search-work-order','How to Update a Work Order':'update-work-order','Update Visits':'update-visit','Search for a Product':'search-product','Topic 3 – Return Material from Work Order':'return-material'}
    for end in [b['index'] for b in blocks[333:1928] if b['text'].lower()=='end of procedure.']:
        steps=[s for s in source_steps if prev<=s['index']<end]
        h=[b for b in blocks[prev:steps[0]['index']] if b['style'] in ('Heading4','Heading5','Heading6')][-1]
        start=h['index'];lesson=next(i+1 for i,(lo,hi,t) in enumerate(LESSONS) if lo<=start<hi)
        ls=LESSONS[lesson-1];sub=h['style']=='Heading6';meta_start=1269 if sub else start
        headings=[b for b in blocks[ls[0]:start+1] if b['style']=='Heading4'];topic=headings[-1]['text'] if headings else ls[2]
        if h['style']=='Heading4':topic=''
        if sub:topic='Misidentified Item Turn-In'
        rec=dict(id=known.get(h['text'],slug(h['text'])),kind='procedure',title=title(h['text']),sourceTitle=h['text'],lesson=lesson,category=ls[2],topic=title(topic),sourceStart=start,sourceEnd=end,steps=[],prerequisites=[],purpose='',role='',mvp='',pages=sorted(set(s['pdf']['page'] for s in steps)),part=(int(h['text'][1]) if sub else None))
        mode=None
        for b in blocks[meta_start:steps[0]['index']+1]:
            t=b['text'];t=STEP.split(t,maxsplit=1)[0] if STEP.search(t) else t
            if re.match(r'Associated.*(?:RBAC|Role Based)',t):rec['role']=t.split(':',1)[1].strip();mode=None
            elif t.startswith('Associated MVP:'):rec['mvp']=t.split(':',1)[1].strip();mode=None
            elif t.startswith('Prerequisites/Set-ups:'):
                mode='prerequisite';v=t.split(':',1)[1].strip()
                if v:rec['prerequisites'].append(v)
            elif t.startswith('Read Statement:'):rec['purpose']=t.split(':',1)[1].strip();mode=None
            elif mode=='prerequisite' and t and not b['style'].startswith('Heading'):rec['prerequisites'].append(t)
        if not rec['role']:rec['role']='See source context'
        if not rec['prerequisites']:rec['prerequisites']=['No prerequisites are stated in this procedure.']
        rec['summary']=re.sub(r'^The steps below illustrate how to\s+','',rec['purpose'],flags=re.I)
        if rec['summary']:rec['summary']=rec['summary'][0].upper()+rec['summary'][1:]
        else:rec['summary']='Instructions for '+rec['title'].lower()+'.'
        if rec['id']=='update-work-order':rec['summary']='Find a released work order and complete an operation using the Work Order Operations form.'
        if rec['id']=='search-product':rec['summary']='Use a serial number to find an item instance and view its product information.'
        if rec['id']=='search-work-order':rec['summary']='Find released work orders using a Visit Number or BOM Resource.'
        if rec['id']=='update-visit':rec['summary']='Find a maintenance visit, open its details, and apply your updates.'
        if rec['id']=='return-material':rec['summary']='Find work order materials, select a locator, and return the material.'
        if rec['id']=='send-d7-wash-post-outbound-transaction-to-d035k':rec['title']+=' (non-engine)'
        for k,s in enumerate(steps):
            stop=steps[k+1]['index'] if k+1<len(steps) else end
            details=[dict(text=b['text'],html=b['html'],type='list' if b['style']=='ListParagraph' else 'note' if b['text'].startswith(('Note:','Tip:')) else 'paragraph') for b in blocks[s['index']+1:stop] if b['text'] and not b['style'].startswith('Heading')]
            # Drawing labels live inside text boxes and are included in the rendered image.
            details=[d for d in details if d['text'] not in ['Responsibility (Menu)','Sub-menu','HTML/Form']]
            text=s['text'];q=re.search(r'[‘\']([^’\']{3,65})[’\']',text)
            heading=(q[1] if q else clean(text.split('. ')[0]))
            if k==0 and 'navigate to' in text.lower():heading='Open '+re.sub(r'^\(\d+\)\s*','',text.split('>')[-1].strip()).rstrip('.')
            if len(heading)>80:heading='Step '+str(s['number'])
            rec['steps'].append(dict(number=k+1,sourceNumber=s['number'],title=heading,text=text,html=s['html'],details=details,images=s.get('images',[]),page=s['pdf']['page'],sourceParagraph=s['index']))
        proc.append(rec);records.append(rec);prev=end+1
    assert len(proc)==45 and sum(len(p['steps']) for p in proc)==423

    def prose_record(id,title_,group,indices,pages,summary=''):
        bs=[]
        for ix in indices:
            b=blocks[ix];t=b['text']
            if not t:continue
            if t.startswith('Read Statement:'):t=t[len('Read Statement:'):].strip();h=html.escape(t)
            else:h=b['html']
            bs.append(dict(type='list' if b['style']=='ListParagraph' else 'paragraph',text=t,html=h))
        r=dict(id=id,kind='reference',title=title_,category=group,summary=summary,blocks=bs,pages=pages,sourceTitle=title_)
        records.append(r);return r
    intro=prose_record('introduction','Introduction to MRO','Getting started',range(227,232),[10],'The MRO mission and the scheduler’s role.')
    intro['blocks'].append(dict(type='paragraph',text='Oracle complex Maintenance, Repair, and Overhaul (cMRO) User Guide',html='Additional reference: <a class="text-link" href="https://docs.oracle.com/cd/E26401_01/doc.122/e49039/T289136T299317.htm#1917916" target="_blank" rel="noopener noreferrer">Oracle cMRO User Guide ↗</a>'))
    session=prose_record('starting-oracle','Starting your Oracle session','Getting started',[],[9],'Access your assigned training or working environment.')
    session['blocks']=[dict(type='paragraph',text='Your training or system administrator provides the environment URL and sign-in information. These details are not included in the source guide.',html='Your training or system administrator provides the environment URL and sign-in information. These details are not included in the source guide.')]
    vocabulary=prose_record('vocabulary','MRO vocabulary','Getting started',range(234,240),[10,11],'Understand the terms used throughout the instructions.')
    interface=prose_record('application-interface','Application user interface','Getting started',[],[11,12,13,14],'Identify the home page, navigator, forms, and fields.')
    intro_crops=[(243,11,[53,365,412,566]),(245,12,[53,176,410,406]),(251,12,[53,437,410,612]),(255,13,[53,209,412,369]),(257,13,[53,434,412,589]),(259,14,[53,165,412,290])]
    for ix,page,box in intro_crops:
        interface['blocks'].append(dict(type='paragraph',text=blocks[ix]['text'],html=blocks[ix]['html']))
        interface['blocks'].append(dict(type='image',image=add_crop(f'interface-{ix}',page,box,'Annotated '+blocks[ix]['text'].split(':')[0]+' reference, guide page '+str(page)+'.')))
    navigation=prose_record('navigation','Navigating Oracle','Getting started',range(262,266),[14],'Move between forms and access help.')
    navigation['blocks'].append(dict(type='image',image=add_crop('navigation',14,[53,378,300,408],'Oracle navigation menus, guide page 14.')))
    toolbar=prose_record('toolbar','Toolbar reference','Getting started',[268],[14,15],'Identify the toolbar actions available on Oracle forms.')
    toolbar['blocks'].append(dict(type='image',image=add_crop('toolbar',14,[53,465,411,503],'Numbered Oracle toolbar reference, guide page 14.')))
    toolbar['blocks'].append(dict(type='ordered-list',items=[blocks[i]['text'] for i in range(270,289)]))
    tables=doc.findall('.//w:tbl',NS)
    def table_rows(t):return [[clean(' '.join(c.xpath('.//w:t/text()',namespaces=NS))) for c in row.findall('w:tc',NS)] for row in t.findall('w:tr',NS)]
    shortcuts=prose_record('keyboard-shortcuts','Keyboard shortcuts','Getting started',[290],[15,16],'Common keys for forms, records, and queries.')
    shortcuts['blocks'].append(dict(type='table',rows=table_rows(tables[1])))
    glossary=prose_record('glossary','Acronym glossary','Reference',[],[290],'Acronyms and definitions from the source guide.')
    glossary['blocks'].append(dict(type='table',rows=table_rows(tables[2])))
    jobaids=prose_record('job-aids','Job aid references','Reference',range(1981,2011),[288],'Companion documents listed in the guide. The files themselves were not supplied.')
    jobaids['blocks'].insert(0,dict(type='notice',text='These are references, not downloadable attachments. Use your organization’s approved document library to locate the current job aids.',html='These are references, not downloadable attachments. Use your organization’s approved document library to locate the current job aids.'))
    for i,(lo,hi,name) in enumerate(LESSONS):
        lessonprocs=[p for p in proc if p['lesson']==i+1]
        overview=[b for b in blocks[lo:hi] if b['style']=='Heading3' and b['text']=='Overview']
        bs=[]
        if overview:
            start=overview[0]['index']+1
            for b in blocks[start:hi]:
                if b['style'].startswith('Heading'):break
                if b['text']:bs.append(dict(type='paragraph',text=re.sub('^Read Statement:\\s*','',b['text']),html=html.escape(re.sub('^Read Statement:\\s*','',b['text']))))
        resources=[];capture=False
        for b in blocks[lo:hi]:
            if b['style']=='Heading3' and b['text'].startswith('Additional Resource'):capture=True;continue
            if capture and b['style'].startswith('Heading'):capture=False
            if capture and b['text']:resources.append(b['text'])
        lessonrec=dict(id='lesson-'+str(i+1),kind='lesson',lesson=i+1,title=name,category='Lesson '+str(i+1),summary='',blocks=bs,children=[p['id'] for p in lessonprocs],resources=resources,pages=[[18,127,148,213,221,226,258,283][i]],sourceTitle='Lesson '+str(i+1)+': '+name)
        if i==7:
            lessonrec['blocks']=[dict(type='paragraph',text=blocks[1931]['text'],html=blocks[1931]['html']),dict(type='notice',text='The instructions for this lesson are in the separate Production Execution Workbench Guide and Production Execution Workbench Classroom Guide. Those documents were not supplied with this draft.',html='The instructions for this lesson are in the separate <strong>Production Execution Workbench Guide</strong> and <strong>Production Execution Workbench Classroom Guide</strong>. Those documents were not supplied with this draft.')]
            lessonrec['resources']=[blocks[j]['text'] for j in range(1935,1948)]
        recaphead=next((b['index'] for b in blocks[lo:hi] if b['text']=='Lesson Conclusion'),None)
        if recaphead is not None:lessonrec['recap']=' '.join(b['text'] for b in blocks[recaphead+1:hi] if b['text'] and not b['style'].startswith('Heading'))
        records.append(lessonrec)
    practice=[]
    for i,(lo,hi,name) in enumerate(LESSONS[:7]):
        start=next(b['index'] for b in blocks[lo:hi] if b['text']=='Knowledge Check')
        end=next(b['index'] for b in blocks[start+1:hi] if b['style'].startswith('Heading'))
        questions=[];q=None
        for b in blocks[start+1:end]:
            t=b['text']
            if t.startswith('Question:'):
                if q:questions.append(q)
                q=dict(question=t.split(':',1)[1].strip(),options=[],answer='')
            elif t.startswith('Answer:'):q['answer']=t.split(':',1)[1].strip()
            elif q and re.match(r'^[A-D]\)',t):q['options'].append(t)
            elif q and not q['question']:q['question']=t
        if q:questions.append(q)
        rec=dict(id='practice-'+str(i+1),kind='practice',title=name,category='Practice',lesson=i+1,summary='Check your understanding of Lesson '+str(i+1)+'.',questions=questions,pages=[max(s['page'] for p in proc if p['lesson']==i+1 for s in p['steps'])],sourceTitle='Lesson '+str(i+1)+' Knowledge Check',children=[p['id'] for p in proc if p['lesson']==i+1])
        records.append(rec);practice.append(rec['id'])
    exercise=prose_record('course-exercise','Course exercise','Practice',range(1958,1962),[285],'Practice planning a visit, releasing work, and completing an end-item turn-in.')
    exercise['blocks'].insert(0,dict(type='notice',text='Use an assigned training scenario and an approved training environment. The source guide expects a scenario to be provided separately.',html='Use an assigned training scenario and an approved training environment. The source guide expects a scenario to be provided separately.'))
    practice.append(exercise['id'])
    overview=dict(id='guide-overview',kind='home',title='MRO Operations Guide',category='Guide contents',summary='Procedures, Oracle references, and practice material from the Scheduler Instructor Guide.',pages=[2],sourceTitle='Table of Contents')
    records.insert(0,overview)
    getting=[r['id'] for r in records if r.get('category')=='Getting started']
    nav=[dict(id='getting-started',title='Getting started',items=getting)]
    for i,(lo,hi,name) in enumerate(LESSONS):
        ps=[p for p in proc if p['lesson']==i+1];groups=[]
        for p in ps:
            key=p['topic']
            g=next((g for g in groups if g['title']==key),None)
            if not g:g=dict(title=key,items=[]);groups.append(g)
            g['items'].append(p['id'])
        nav.append(dict(id='lesson-'+str(i+1),title=name,number=i+1,overview='lesson-'+str(i+1),groups=groups))
    nav.extend([dict(id='practice',title='Practice',items=practice),dict(id='reference',title='Reference',items=['glossary','job-aids'])])
    # Adjacent procedures are suggested within the same lesson, preserving the source sequence.
    for p in proc:
        siblings=[x for x in proc if x['lesson']==p['lesson']];j=siblings.index(p)
        p['related']=[x['id'] for x in siblings[j+1:j+3]] or [x['id'] for x in siblings[max(0,j-2):j]]
        if p['part']:
            p['prerequisites']+=['This is part '+str(p['part'])+' of Misidentified Item Turn-In. Review the shared prerequisites and the preceding parts of that workflow.']
    # Rasterize the annotated PDF regions; retain sharp text and red callouts.
    old_manifest={a['src']:a for a in json.loads((qa/'extraction-manifest.json').read_text())} if (qa/'extraction-manifest.json').exists() else {}
    def render_asset(a):
        dest=out/a['src'];dest.parent.mkdir(parents=True,exist_ok=True)
        if not dest.exists() or old_manifest.get(a['src'],{}).get('box')!=a['box'] or Path(args.pdf).stat().st_mtime>dest.stat().st_mtime:
            b=a['box'];scale=240/72;temp=qa/(Path(a['src']).stem)
            subprocess.run([args.pdftoppm,'-f',str(a['page']),'-l',str(a['page']),'-r','240','-x',str(math.floor(b[0]*scale)),'-y',str(math.floor(b[1]*scale)),'-W',str(math.ceil((b[2]-b[0])*scale)),'-H',str(math.ceil((b[3]-b[1])*scale)),'-singlefile','-png',args.pdf,str(temp)],capture_output=True,check=True)
            with Image.open(str(temp)+'.png') as im:im.convert('RGB').save(dest,'WEBP',lossless=True,method=4)
            Path(str(temp)+'.png').unlink()
        with Image.open(dest) as im:a['width'],a['height']=im.size
        return a['src']
    with ThreadPoolExecutor(max_workers=6) as pool:
        for i,_ in enumerate(pool.map(render_asset,assets)):
            if (i+1)%80==0:print('Checked',i+1,'of',len(assets),'annotated regions',flush=True)
    (out/'assets/source').mkdir(exist_ok=True);shutil.copyfile(args.pdf,out/'assets/source/guide.pdf')
    data=dict(source=dict(title='Maintenance MRO Scheduler Instructor Guide',date='07 August 2026',version='4.0',classification='CUI',category='CTI',dissemination='F, DL ONLY',controller='DAF · AFLCMC/GBM',pdf='assets/source/guide.pdf',sha256=hashlib.sha256(Path(args.docx).read_bytes()).hexdigest(),pdfSha256=hashlib.sha256(Path(args.pdf).read_bytes()).hexdigest()),records=records,navigation=nav,stats=dict(lessons=8,procedures=45,steps=423,screenshots=len(assets),pages=290))
    (out/'content.js').write_text('/* CUI. Extracted locally from the supplied source pair. */\nwindow.GUIDE = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
    (qa/'extraction-manifest.json').write_text(json.dumps(assets,indent=2))
    (qa/'retention.json').write_text(json.dumps(dict(procedureSourceRanges=[dict(id=p['id'],start=p['sourceStart'],end=p['sourceEnd']) for p in proc],omitted=['Attendance, introductions, and classroom schedule','Video introduction without supplied media','Vocabulary placeholder','Instructor-only delivery directions, congratulatory wrap-up, and course survey'],adapted=['Read Statement labels removed from user prose','Classroom sign-in directions converted to an access prerequisite notice','Knowledge checks moved to Practice with answers disclosed on request','External workbench guides retained as clearly unavailable references','Short summaries and step headings added for navigation']),indent=2))
    print(json.dumps(data['stats']), 'records',len(records),flush=True)

if __name__=='__main__':main()
