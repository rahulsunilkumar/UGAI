"""Set deployment URLs and cache versions locally. This does not publish anything."""
import argparse
import hashlib
import html
import re
from pathlib import Path
from urllib.parse import urlsplit, urljoin

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--url',required=True,help='Approved HTTPS site root, including repository path if applicable')
    parser.add_argument('--dist',type=Path,default=Path(__file__).resolve().parents[1]/'dist')
    args=parser.parse_args()
    parts=urlsplit(args.url)
    if parts.scheme!='https' or not parts.hostname or parts.username or parts.password or parts.query or parts.fragment:
        parser.error('Use the approved HTTPS site root without credentials, a query, or a fragment.')
    base=args.url.rstrip('/')+'/'
    for name in ['index.html','404.html','app.js','styles.css','content.js','assets/share-card.png']:
        if not (args.dist/name).is_file():parser.error('Missing release file: '+name)
    version=lambda name:hashlib.sha256((args.dist/name).read_bytes()).hexdigest()[:12]
    index=args.dist/'index.html';text=index.read_text()
    for name in ['app.js','styles.css','content.js']:
        text=re.sub(r'(["\'])'+re.escape(name)+r'(?:\?v=[a-f0-9]+)?(["\'])',lambda m:m[1]+name+'?v='+version(name)+m[2],text)
    image=urljoin(base,'assets/share-card.png')+'?v='+version('assets/share-card.png')
    text=re.sub(r'(<meta property="og:image" content=")[^"]*(">)',lambda m:m[1]+html.escape(image,quote=True)+m[2],text)
    metadata=f'<!-- deployment-urls:start -->\n  <link rel="canonical" href="{html.escape(base,quote=True)}">\n  <meta property="og:url" content="{html.escape(base,quote=True)}">\n  <!-- deployment-urls:end -->'
    text=re.sub(r'<!-- deployment-urls:start -->.*?<!-- deployment-urls:end -->',lambda _:metadata,text,flags=re.S)
    index.write_text(text)
    error=args.dist/'404.html';text=error.read_text()
    text=re.sub(r'(<a id="home-link" href=")[^"]*(")',lambda m:m[1]+html.escape(base,quote=True)+m[2],text)
    error.write_text(text)
    print('Configured local files for '+base+' — nothing uploaded or published.')

if __name__=='__main__':main()
