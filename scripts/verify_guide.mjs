/** Validate content coverage, navigation, local assets, and representative searches. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist=path.join(root,'dist');
const ctx=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(dist,'content.js'),'utf8'),ctx);
const data=ctx.window.GUIDE;
const ids=new Set(data.records.map(r=>r.id));
assert.equal(ids.size,data.records.length,'Unique record IDs');
assert.equal(data.records.length,71);
const procedures=data.records.filter(r=>r.kind==='procedure');
assert.equal(procedures.length,45);
assert.equal(procedures.reduce((n,r)=>n+r.steps.length,0),423);
const linked=new Set(['guide-overview']);
for(const group of data.navigation){
  for(const id of [group.overview,...(group.items||[]),...(group.groups||[]).flatMap(g=>g.items)].filter(Boolean)){
    assert(ids.has(id),`Navigation target ${id}`);linked.add(id);
  }
}
assert.deepEqual([...linked].sort(),[...ids].sort(),'Every record is reachable from contents');
assert.deepEqual(Array.from(data.navigation.filter(g=>g.number),g=>g.number),[1,2,3,4,5,6,7,8]);
let images=0,questions=0;
function checkImage(im){
  assert(im.width>0&&im.height>0,`Image dimensions: ${im.src}`);
  assert(im.src.startsWith('assets/screenshots/')&&!im.src.includes('..'));
  assert(fs.existsSync(path.join(dist,im.src)),`Image asset: ${im.src}`);
  assert(im.page>=1&&im.page<=290);images++;
}
for(const record of data.records){
  assert(record.title&&record.pages.length,`Record metadata ${record.id}`);
  for(const id of [...(record.related||[]),...(record.children||[])])assert(ids.has(id),`Related target ${id}`);
  if(record.kind==='procedure'){
    assert(record.role&&record.prerequisites.length,`Prerequisites ${record.id}`);
    record.steps.forEach((step,i)=>{
      assert.equal(step.number,i+1);
      assert(step.text&&step.html&&step.images.length,`Step content ${record.id}/${step.number}`);
      assert(step.sourceParagraph>=333&&step.sourceParagraph<1928);
      assert(!/<script|onerror=|javascript:/i.test(step.html),'Safe instruction HTML');
      step.images.forEach(checkImage);
    });
  }
  for(const block of record.blocks||[])if(block.type==='image')checkImage(block.image);
  for(const q of record.questions||[]){assert(q.question&&q.answer);questions++;}
}
assert.equal(images,431);
assert.equal(questions,10);
assert(fs.existsSync(path.join(dist,data.source.pdf)));
assert(fs.existsSync(path.join(dist,'.nojekyll')));

// Run the actual search implementation with the generated guide.
ctx.records=data.records;ctx.byId=new Map(data.records.map(r=>[r.id,r]));
const app=fs.readFileSync(path.join(dist,'app.js'),'utf8');
vm.runInContext(app.slice(app.indexOf('const esc='),app.indexOf('const searchIcon=')),ctx);
vm.runInContext(app.slice(app.indexOf('const stopWords='),app.indexOf('function kindLabel')),ctx);
const cases=[
  ['How do I find a work order?','search-work-order'],
  ['Where do I enter serial number?','search-product'],
  ['How do I send D7 for an engine?','send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type'],
  ['D7 non engine','send-d7-wash-post-outbound-transaction-to-d035k'],
  ['MISTR induction','end-item-induction-management-of-items-subject-to-repair-mistr'],
  ['non MISTR induction','end-item-induction-non-mistr'],
  ['keyboard shortcuts','keyboard-shortcuts'],
  ['What does PSSD mean?','glossary'],
  ['Workbench assign employee','lesson-8'],
  ['reset password',null],
  ['D035','send-d6-wash-post-outbound-transaction-to-d035k'],
  ['D03','send-d6-wash-post-outbound-transaction-to-d035k'],
  ['work ord','search-work-order'],
  ['maintenace visit','create-maintenance-visits'],
  ['reciept','b1-miscellaneous-receipt'],
  ['recieve material','topic-2-receive-material-into-inventory'],
  ['D035KZ',null],
  ['How do I create a service order?','create-service-order-with-or-without-end-item-type-of-engine'],
  ['How can I update a visit?','update-visit'],
  ['How do I return unused material?','return-material'],
  ['How do I close a visit?','close-visit'],
  ['How do I sign off a maintenance requirement?','sign-off-a-maintenance-requirement-mr'],
  ['How do I receive an end item?','receive-end-item-into-inventory'],
  ['How do I print the master configuration report?','view-master-configurations-report'],
  ['How do I assign an employee in Workbench?','lesson-8'],
  ['I cannot find my work order','search-work-order'],
  ['where can I see inventory transactions','topic-4-view-inventory-transactions-status-summary']
];
for(const [query,expected] of cases){
  ctx.query=query;
  assert.equal(vm.runInContext('searchGuide(query)[0]?.record.id||null',ctx),expected,query);
}
const run=query=>{ctx.query=query;return vm.runInContext('searchGuide(query)',ctx);};
assert.deepEqual(Array.from(run('D035'),r=>r.record.id),Array.from(run('d035k'),r=>r.record.id),'Partial code finds the complete code');
assert(run('D035K')[0].score>run('D035')[0].score,'Exact spelling receives more weight');
assert(!run('D7 engine').some(r=>/^Send D6/.test(r.record.title)),'D7 does not match D6');
assert(!run('D6 engine').some(r=>/^Send D7/.test(r.record.title)),'D6 does not match D7');
assert(run('return unused material')[0].partial,'Incomplete query matches are labeled as related instructions');
assert.equal(data.records.find(r=>r.id==='guide-overview').title,'MRO Operations Guide');
assert(run('D035').find(r=>r.record.id==='end-item-induction-non-mistr').excerpt.includes('D035K'),'Search excerpts include matching step notes');
assert.equal(vm.runInContext("highlight('Send D035K to inventory.', 'D035')",ctx),'Send <mark>D035K</mark> to inventory.');
assert.equal(vm.runInContext("highlight('<img src=x onerror=alert(1)>', 'img')",ctx),'&lt;<mark>img</mark> src=x onerror=alert(1)&gt;');
ctx.query='work order';
for(const filter of ['procedures','reference','practice']){
  ctx.filter=filter;
  for(const hit of vm.runInContext('searchGuide(query,filter)',ctx)){
    assert(filter==='procedures'?hit.record.kind==='procedure':filter==='practice'?hit.record.category==='Practice':hit.record.kind==='reference'&&hit.record.category!=='Practice');
  }
}
console.log(`Verified ${ids.size} pages, 45 procedures, 423 steps, ${images} images, ${questions} practice questions, navigation, and ${cases.length} searches.`);
