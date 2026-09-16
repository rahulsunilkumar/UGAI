#!/usr/bin/env python3
"""Local Guide Dissector. Run: python3 dissector/app.py"""
from __future__ import annotations
import argparse
import copy
import json
import mimetypes
import re
import secrets
import shutil
import threading
import traceback
import uuid
from concurrent.futures import ThreadPoolExecutor
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse, parse_qs, unquote

from engine import (atomic_json, convert, docx_headings, export_package, now,
                    render_crop, render_page, validate_package)

HERE = Path(__file__).resolve().parent
DATA = HERE.parent/'conversions'
TOKEN = secrets.token_urlsafe(32)
POOL = ThreadPoolExecutor(max_workers=1)
LOCK = threading.RLock()
MAX_UPLOAD = 200*1024*1024


def project_dir(identifier):
    if not re.fullmatch(r'[a-f0-9]{12}', identifier):
        raise ValueError('Invalid conversion ID.')
    folder = DATA/identifier
    if not folder.is_dir():
        raise FileNotFoundError('Conversion not found.')
    return folder


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8'))


def create_job(filename):
    identifier = uuid.uuid4().hex[:12]
    folder = DATA/identifier
    folder.mkdir(parents=True)
    atomic_json(folder/'job.json', {'id':identifier,'filename':Path(filename.replace('\\','/')).name[:240],
                                  'title':Path(filename).stem[:240], 'status':'uploaded','phase':'Ready to convert',
                                  'current':0,'total':0,'created':now()})
    return folder


def launch(folder):
    with LOCK:
        job = read_json(folder/'job.json')
        if job['status'] in ('queued','processing','ready'):
            raise ValueError('This conversion has already started.')
        job.update(status='queued',phase='Waiting to convert',error=None)
        atomic_json(folder/'job.json',job)
    def work():
        def progress(phase,current,total):
            with LOCK:
                job.update(status='processing',phase=phase,current=current,total=total)
                atomic_json(folder/'job.json',job)
        try:
            progress('Opening document',0,1)
            package=convert(folder,job['title'],progress)
            with LOCK:
                job.update(status='ready',phase='Ready for review',current=1,total=1,
                           sections=len(package['sections']),pages=package['source']['pages'])
                atomic_json(folder/'job.json',job)
        except Exception as exc:
            with LOCK:
                job.update(status='error',phase='Conversion stopped',error=str(exc) or type(exc).__name__)
                atomic_json(folder/'job.json',job)
            traceback.print_exc()
    POOL.submit(work)


class Handler(BaseHTTPRequestHandler):
    server_version = 'GuideDissector/1.0'

    def log_message(self, fmt, *args):
        # Avoid placing filenames, document text or URL parameters in routine logs.
        pass

    def respond_headers(self, status=200, ctype='application/json', length=None, disposition=None):
        self.send_response(status)
        self.send_header('Content-Type',ctype)
        self.send_header('Cache-Control','no-store')
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Referrer-Policy','no-referrer')
        self.send_header('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' blob:; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'")
        if length is not None:
            self.send_header('Content-Length',str(length))
        if disposition:
            self.send_header('Content-Disposition',disposition)
        self.end_headers()

    def json(self, value, status=200):
        raw=json.dumps(value,ensure_ascii=False).encode()
        self.respond_headers(status,length=len(raw))
        self.wfile.write(raw)

    def file(self,path,download=False):
        if not path.is_file():
            raise FileNotFoundError('File not found.')
        ctype=mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
        self.respond_headers(ctype=ctype,length=path.stat().st_size,
                     disposition=f'attachment; filename="{path.name}"' if download else None)
        with path.open('rb') as stream:
            shutil.copyfileobj(stream,self.wfile)

    def permitted(self,mutating=False):
        allowed={f'127.0.0.1:{self.server.server_port}',f'localhost:{self.server.server_port}'}
        host=self.headers_in.get('Host','')
        if host not in allowed:
            raise PermissionError('Use the localhost URL printed by this app.')
        origin=self.headers_in.get('Origin')
        if origin and origin != 'http://'+host:
            raise PermissionError('Requests must come from this local app.')
        if self.headers_in.get('Sec-Fetch-Site') == 'cross-site':
            raise PermissionError('Cross-site requests are not allowed.')
        if mutating and not secrets.compare_digest(self.headers_in.get('X-Dissector-Token',''),TOKEN):
            raise PermissionError('Session expired. Reload the app and try again.')

    def body(self,limit=12*1024*1024):
        n=int(self.headers_in.get('Content-Length','0'))
        if not 0<n<=limit:
            raise ValueError('Request body is missing or too large.')
        value=self.rfile.read(n)
        if len(value)!=n:
            raise ValueError('Upload was interrupted.')
        return value

    def upload(self,path,signature):
        n=int(self.headers_in.get('Content-Length','0'))
        if not 0<n<=MAX_UPLOAD:
            raise ValueError('Choose a file smaller than 200 MB.')
        self.connection.settimeout(120)
        part=path.with_suffix('.upload')
        try:
            with part.open('wb') as out:
                remaining=n
                first=True
                while remaining:
                    chunk=self.rfile.read(min(1024*1024,remaining))
                    if not chunk:
                        raise ValueError('Upload was interrupted.')
                    if first and signature not in chunk[:1024]:
                        raise ValueError('The file does not match the expected PDF or Word format.')
                    first=False
                    out.write(chunk)
                    remaining-=len(chunk)
            part.replace(path)
        finally:
            part.unlink(missing_ok=True)

    def do_GET(self):
        self.dispatch(False)

    def do_POST(self):
        self.dispatch(True)

    def dispatch(self,mutating):
        self.headers_in=self.headers
        try:
            self.permitted(mutating)
            parsed=urlparse(self.path)
            route=parsed.path.strip('/').split('/')
            query=parse_qs(parsed.query)
            if not mutating:
                if parsed.path in ('/','/index.html'):
                    return self.file(HERE/'web/index.html')
                if parsed.path in ('/app.js','/styles.css','/logo.svg','/favicon.svg'):
                    return self.file(HERE/'web'/parsed.path[1:])
                if parsed.path=='/api/session':
                    return self.json({'token':TOKEN,'dataFolder':str(DATA)})
                if parsed.path=='/api/projects':
                    jobs=[]
                    for p in DATA.glob('*/job.json'):
                        job=read_json(p)
                        if (p.parent/'project.json').exists():
                            pkg=read_json(p.parent/'project.json')
                            job.update(title=pkg['title'],reviewed=sum(s['status']=='reviewed' for s in pkg['sections']),sections=len(pkg['sections']))
                        jobs.append(job)
                    return self.json(sorted(jobs,key=lambda j:j['created'],reverse=True))
            if mutating and parsed.path=='/api/projects':
                filename=query.get('name',['document.pdf'])[0]
                if not filename.lower().endswith('.pdf'):
                    raise ValueError('Choose a PDF file.')
                folder=create_job(filename)
                try:
                    self.upload(folder/'source.pdf',b'%PDF-')
                except Exception:
                    shutil.rmtree(folder)
                    raise
                return self.json(read_json(folder/'job.json'),201)
            if len(route)>=3 and route[:2]==['api','projects']:
                folder=project_dir(route[2])
                action=route[3] if len(route)>3 else ''
                if not mutating:
                    if action=='job':
                        return self.json(read_json(folder/'job.json'))
                    if action=='':
                        return self.json(read_json(folder/'project.json'))
                    if action=='page' and len(route)==5:
                        number=int(route[4]);cache=folder/'preview';cache.mkdir(exist_ok=True)
                        target=cache/f'page-{number}.png'
                        with LOCK:
                            if not target.exists():
                                render_page(folder/'source.pdf',number).save(target,'PNG')
                        return self.file(target)
                    if action=='evidence' and len(route)==5:
                        n=int(route[4]);data=read_json(folder/'evidence.json')
                        if not 1<=n<=len(data['pages']):
                            raise ValueError('Invalid page.')
                        return self.json({'page':data['pages'][n-1],'ledger':[x for x in data['ledger'] if x['page']==n]})
                    if action=='assets' and len(route)==5 and re.fullmatch(r'[a-zA-Z0-9_-]+\.png',route[4]):
                        return self.file(folder/'assets'/route[4])
                    if action=='download' and len(route)==5 and re.fullmatch(r'[a-z0-9-]+\.zip',route[4]):
                        return self.file(folder/'exports'/route[4],True)
                    if action=='source':
                        return self.file(folder/'source.pdf',True)
                else:
                    with LOCK:
                        if action=='word':
                            if read_json(folder/'job.json')['status']!='uploaded':
                                raise ValueError('Add the Word document before starting conversion.')
                            self.upload(folder/'source.docx',b'PK')
                            hints=docx_headings(folder/'source.docx')
                            return self.json({'headings':len(hints)})
                        if action=='convert':
                            launch(folder)
                            return self.json({'started':True})
                        if action=='save':
                            incoming=json.loads(self.body())
                            previous=read_json(folder/'project.json')
                            if incoming.get('revision')!=previous['revision']:
                                return self.json({'error':'This conversion changed in another tab. Reload before saving.'},409)
                            package=copy.deepcopy(previous)
                            for key in ('title','classification'):
                                if not isinstance(incoming.get(key),str) or not 1<=len(incoming[key])<=500:
                                    raise ValueError('Title and classification are required (maximum 500 characters).')
                                package[key]=incoming[key]
                            sections=incoming.get('sections')
                            package['sections']=sections
                            validate_package(package)
                            evidence=read_json(folder/'evidence.json')
                            known={row['id'] for row in evidence['ledger']} | {a['id'] for a in previous['assets']} | {f'p{n}-scan' for n in range(1,previous['source']['pages']+1)}
                            for s in sections:
                                if not isinstance(s.get('group'),str) or len(s['group'])>500:
                                    raise ValueError('Invalid section group.')
                                if not isinstance(s.get('pages'),list) or any(type(p)!=int or p<1 or p>previous['source']['pages'] for p in s['pages']):
                                    raise ValueError('Invalid source pages.')
                                if not isinstance(s.get('source_ids'),list) or not set(s['source_ids'])<=known:
                                    raise ValueError('Unknown source references.')
                                if not isinstance(s.get('issues'),list) or any(not isinstance(x,str) for x in s['issues']):
                                    raise ValueError('Invalid review issues.')
                            # Every original source reference must remain assigned, including exclusions.
                            before={x for s in previous['sections'] for x in s['source_ids']}
                            after={x for s in sections for x in s['source_ids']}
                            if not before<=after:
                                raise ValueError('Source references would be lost. Merge or exclude a section instead of deleting it.')
                            package.update(revision=previous['revision']+1,updated=now())
                            atomic_json(folder/'project.json',package)
                            return self.json({'revision':package['revision'],'updated':package['updated']})
                        if action=='crop':
                            body=json.loads(self.body())
                            package=read_json(folder/'project.json')
                            if body.get('revision')!=package['revision']:
                                return self.json({'error':'Save or reload before adding a crop.'},409)
                            page=int(body['page']);box=list(map(float,body['box']))
                            if len(box)!=4:
                                raise ValueError('Invalid crop rectangle.')
                            aid='crop-'+uuid.uuid4().hex[:10]
                            target=folder/'assets'/f'{aid}.png'
                            width,height=render_crop(folder/'source.pdf',page,box,target)
                            asset={'id':aid,'page':page,'box':box,'path':f'assets/{aid}.png','caption':f'Source illustration, page {page}','width':width,'height':height,'reviewed':False}
                            package['assets'].append(asset)
                            package.update(revision=package['revision']+1,updated=now())
                            atomic_json(folder/'project.json',package)
                            return self.json({'asset':asset,'revision':package['revision']})
                        if action=='export':
                            body=json.loads(self.body())
                            package=read_json(folder/'project.json')
                            if body.get('revision')!=package['revision']:
                                return self.json({'error':'Save the latest changes before exporting.'},409)
                            file=export_package(folder,package,bool(body.get('includeSource')))
                            return self.json({'url':f'/api/projects/{folder.name}/download/{file.name}','path':str(file)})
            raise FileNotFoundError('Page not found.')
        except (BrokenPipeError,ConnectionResetError):
            pass
        except PermissionError as exc:
            self.json({'error':str(exc)},403)
        except FileNotFoundError as exc:
            self.json({'error':str(exc)},404)
        except (ValueError,KeyError,TypeError,IndexError) as exc:
            self.json({'error':str(exc)},400)
        except Exception:
            traceback.print_exc()
            self.json({'error':'The operation could not finish. Check the local terminal for details.'},500)


def main():
    global DATA
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port',type=int,default=8770)
    parser.add_argument('--data-dir',type=Path,default=DATA)
    parser.add_argument('--import-pdf',type=Path)
    parser.add_argument('--word',type=Path)
    args=parser.parse_args()
    DATA=args.data_dir.resolve();DATA.mkdir(parents=True,exist_ok=True)
    # A stopped process cannot leave an in-progress conversion looking alive forever.
    for p in DATA.glob('*/job.json'):
        job=read_json(p)
        if job['status'] in ('processing','queued'):
            job.update(status='error',error='The app stopped during conversion. Choose Retry to start again.')
            atomic_json(p,job)
    server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler)
    if args.import_pdf:
        folder=create_job(args.import_pdf.name)
        shutil.copyfile(args.import_pdf,folder/'source.pdf')
        if args.word:
            shutil.copyfile(args.word,folder/'source.docx')
        launch(folder)
        print(f'Imported conversion: {folder.name}',flush=True)
    print(f'Guide Dissector: http://127.0.0.1:{args.port}/\nLocal files: {DATA}\nPress Ctrl+C to stop.',flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nStopping. An active conversion will finish writing before exit.',flush=True)
    finally:
        server.server_close();POOL.shutdown(wait=True)


if __name__=='__main__':
    main()
