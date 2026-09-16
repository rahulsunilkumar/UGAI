"""Check an actual local conversion without calling external services."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import tempfile
from zipfile import ZipFile
from PIL import Image
from engine import validate_package, export_package

parser=argparse.ArgumentParser();parser.add_argument('folder',type=Path);parser.add_argument('--expected-steps',type=int);args=parser.parse_args()
p=json.loads((args.folder/'project.json').read_text());e=json.loads((args.folder/'evidence.json').read_text())
validate_package(p)
assert hashlib.sha256((args.folder/'source.pdf').read_bytes()).hexdigest()==p['source']['sha256']
assigned={x for s in p['sections'] for x in s['source_ids']}
required={x['id'] for x in e['ledger'] if x['disposition']=='included'}
assert required<=assigned, f'Unassigned source blocks: {required-assigned}'
assert len({s['id'] for s in p['sections']})==len(p['sections'])
for a in p['assets']:
 with Image.open(args.folder/a['path']) as im:
  assert im.size==(a['width'],a['height']);im.verify()
steps=sum(len(re.findall(r'^### Step \d+\s*$',s['markdown'],re.M)) for s in p['sections'])
if args.expected_steps is not None:assert steps==args.expected_steps,(steps,args.expected_steps)
path=export_package(args.folder,p)
with ZipFile(path) as z:
 assert z.testzip() is None
 manifest=json.loads(z.read('manifest.json'))
 for s in manifest['sections']:
  if not s['file']:continue
  text=z.read(s['file']).decode()
  for ref in re.findall(r'!\[[^\]]*\]\(\.\./([^)]+)\)',text):assert ref in z.namelist(),ref
 assert len([s for s in manifest['sections'] if s['file']])==len([s for s in p['sections'] if s['included']])
print(f'Checked {p["source"]["pages"]} pages, {len(p["sections"])} sections, {steps} steps, {len(p["assets"])} images, source coverage, and ZIP links.')
print(f'Export: {path}')
