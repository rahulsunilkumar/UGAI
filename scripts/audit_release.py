"""Check the static release and metadata without uploading files or making requests."""
import argparse
import hashlib
import json
import struct
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.assets=[];self.meta={};self.canonical=None;self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag in ('script','img') and a.get('src'):self.assets.append(a['src'])
        if tag=='link' and a.get('rel') in ('stylesheet','icon'):self.assets.append(a['href'])
        if tag=='meta':self.meta[a.get('property',a.get('name',''))]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--dist',type=Path,default=Path(__file__).resolve().parents[1]/'dist')
    parser.add_argument('--require-url',action='store_true')
    args=parser.parse_args();root=args.dist
    for name in ['index.html','404.html','content.js','app.js','styles.css','.nojekyll','assets/share-card.png']:
        assert (root/name).is_file(),'Missing release file: '+name
    page=Page((root/'index.html').read_text())
    for ref in page.assets:
        parts=urlsplit(ref)
        assert not parts.scheme and not parts.netloc,'Unexpected external runtime dependency: '+ref
        assert not parts.path.startswith('/'),'Asset would break under a repository path: '+ref
        assert (root/unquote(parts.path)).is_file(),'Missing asset: '+ref
    assert page.meta['og:title']=='MRO Operations Guide'
    assert page.meta['og:description'] and page.meta['og:image:alt']
    assert page.meta['twitter:card']=='summary_large_image'
    assert struct.unpack('>II',(root/'assets/share-card.png').read_bytes()[16:24])==(1200,630)
    raw=(root/'content.js').read_text();data=json.loads(raw.split('window.GUIDE = ',1)[1].rstrip(';\n'))
    assert data['records'][0]['title']=='MRO Operations Guide'
    pdf=root/data['source']['pdf']
    assert hashlib.sha256(pdf.read_bytes()).hexdigest()==data['source']['pdfSha256'],'Source PDF does not match content metadata'
    assets=[im['src'] for r in data['records'] for s in r.get('steps',[]) for im in s['images']]
    assets += [b['image']['src'] for r in data['records'] for b in r.get('blocks',[]) if b['type']=='image']
    assert len(assets)==431 and all((root/p).is_file() for p in assets)
    configured=bool(page.canonical)
    if configured:
        assert urlsplit(page.canonical).scheme=='https'
        assert page.meta['og:url']==page.canonical
        assert page.meta['og:image'].startswith(page.canonical)
        assert page.canonical in (root/'404.html').read_text()
    if args.require_url:assert configured,'Approved deployment URL is not configured; run configure_site.py before release.'
    print(f'Checked {len(data["records"])} records, {len(assets)} screenshots, source PDF, runtime assets, sharing metadata, and 404 page.')
    print('Deployment URL: '+(page.canonical if configured else 'not configured — local preview only.'))

if __name__=='__main__':main()
