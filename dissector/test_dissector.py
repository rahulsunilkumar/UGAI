"""Run from this folder: python3 -m unittest -v.

The optional full-guide audit runs with: python3 audit_conversion.py CONVERSION_DIR
Tests use synthetic extraction layouts, not any company document.
"""
import copy
import http.client
import json
from pathlib import Path
import tempfile
import threading
import unittest
from unittest.mock import patch
from zipfile import ZipFile

import app
import engine


def line(i,text,y,bold=0,size=10):
    return {'id':f'p1-l{i}','text':text,'box':[54,y,500,y+10],'size':size,'bold':bold}


def layout():
    return [{'number':1,'width':612,'height':792,'images':[],'tables':[], 'lines':[
        line(1,'Lesson 1: Inventory',100,1,18),line(2,'a) Receive an item',150,1),
        line(3,'Prerequisites: Existing item.',180),line(4,'Step 1. Open the form.',205),
        line(5,'Note: See Step 4. for another option.',235),line(6,'Step 2. Enter the item.',260),
        line(7,'End of procedure.',300),line(8,'Knowledge Check',330,1),
        line(9,'Question: Which item?',355),line(10,'Answer: The selected item.',380)]}]


class EngineTest(unittest.TestCase):
    def setUp(self):
        self.temp=tempfile.TemporaryDirectory();self.folder=Path(self.temp.name)/'abc123abc123';self.folder.mkdir()
        (self.folder/'source.pdf').write_bytes(b'%PDF-FAKE-NO-REAL-CONTENT')
        with patch('engine.scan',return_value=layout()):
            self.package=engine.convert(self.folder,'Example guide')

    def tearDown(self):
        self.temp.cleanup()

    def test_steps_references_and_coverage(self):
        procedures=[s for s in self.package['sections'] if s['kind']=='procedure']
        self.assertEqual(len(procedures),1)
        self.assertEqual(procedures[0]['markdown'].count('### Step '),2)
        self.assertIn('See Step 4.',procedures[0]['markdown'])
        self.assertTrue(any(s['kind']=='practice' for s in self.package['sections']))
        self.assertEqual({x for s in self.package['sections'] for x in s['source_ids']},{x['id'] for x in layout()[0]['lines']})

    def test_markdown_package_exclusion_and_stable_paths(self):
        excluded=self.package['sections'][-1];excluded.update(included=False,exclusion_reason='Exercise retained elsewhere.')
        path=engine.export_package(self.folder,self.package)
        with ZipFile(path) as z:
            manifest=json.loads(z.read('manifest.json'))
            self.assertIsNone(manifest['sections'][-1]['file'])
            self.assertNotIn('source/source.pdf',z.namelist())
            self.assertIn('review/source-evidence.json',z.namelist())
            names=[n for n in z.namelist() if n.startswith('content/')]
        self.package['title']='Renamed guide';self.package['sections'][0]['title']='Different heading'
        with ZipFile(engine.export_package(self.folder,self.package,True)) as z:
            self.assertEqual(names,[n for n in z.namelist() if n.startswith('content/')])
            self.assertIn('source/source.pdf',z.namelist())

    def test_validation(self):
        p=copy.deepcopy(self.package);p['sections'][0]['included']=False
        with self.assertRaises(ValueError):engine.validate_package(p)
        p=copy.deepcopy(self.package);p['sections'][0]['id']='../../escape'
        with self.assertRaises(ValueError):engine.validate_package(p)
        p=copy.deepcopy(self.package);p['sections'][0]['markdown']='![remote](https://example.invalid/x.png)'
        with self.assertRaises(ValueError):engine.export_package(self.folder,p)

    def test_no_text_page_preserved(self):
        p=layout();p[0]['lines']=[]
        with patch('engine.scan',return_value=p):
            out=engine.convert(self.folder,'Scan')
        self.assertIn('OCR is not enabled',out['sections'][0]['issues'][1 if len(out['sections'][0]['issues'])>1 else 0])


class ApiTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp=tempfile.TemporaryDirectory();cls.previous=app.DATA;app.DATA=Path(cls.temp.name)
        cls.server=app.ThreadingHTTPServer(('127.0.0.1',0),app.Handler)
        cls.thread=threading.Thread(target=cls.server.serve_forever,daemon=True);cls.thread.start()

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown();cls.server.server_close();cls.thread.join();app.DATA=cls.previous;cls.temp.cleanup()

    def request(self,path,body=None,headers=None,method=None):
        conn=http.client.HTTPConnection('127.0.0.1',self.server.server_port,timeout=10)
        h={'X-Dissector-Token':app.TOKEN};h.update(headers or {})
        raw=body if isinstance(body,bytes) else json.dumps(body).encode() if body is not None else None
        conn.request(method or ('POST' if body is not None else 'GET'),path,raw,h)
        r=conn.getresponse();data=r.read();status=r.status;conn.close()
        return status,json.loads(data)

    def test_upload_save_conflict_export_and_access(self):
        status,job=self.request('/api/projects?name=sample.pdf',b'%PDF-FAKE-NO-REAL-CONTENT')
        self.assertEqual(status,201);folder=app.DATA/job['id']
        with patch('engine.scan',return_value=layout()):p=engine.convert(folder,'Example')
        p['sections'][0]['title']='Edited heading'
        status,saved=self.request(f'/api/projects/{job["id"]}/save',p)
        self.assertEqual(status,200);self.assertEqual(saved['revision'],2)
        self.assertEqual(self.request(f'/api/projects/{job["id"]}/save',p)[0],409)
        p['revision']=2;p['sections']=p['sections'][1:]
        self.assertEqual(self.request(f'/api/projects/{job["id"]}/save',p)[0],400)
        status,result=self.request(f'/api/projects/{job["id"]}/export',{'revision':2})
        self.assertEqual(status,200);self.assertTrue(Path(result['path']).is_file())
        self.assertEqual(self.request('/api/projects',headers={'Origin':'https://example.invalid'})[0],403)
        self.assertEqual(self.request('/api/projects?name=x.pdf',b'%PDF-FAKE',{'X-Dissector-Token':'wrong'})[0],403)
        self.assertEqual(self.request('/api/projects?name=x.pdf',b'not a pdf')[0],400)
        self.assertEqual(self.request('/api/projects/../../etc/passwd')[0],400)


if __name__=='__main__':unittest.main()
