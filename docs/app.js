/* Offline-capable reading and search. All content remains on the serving origin. */
'use strict';
history.scrollRestoration='manual';
const {records,navigation,source,stats}=window.GUIDE;
const byId=new Map(records.map(r=>[r.id,r]));
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const searchIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>';
let active=byId.get('guide-overview'),screenshotsVisible=true,observer,debounce,imageSet=[],searchFilter='all';

function linkTo(id,label,cls=''){const r=byId.get(id);return `<a class="${cls}" href="#guide/${id}" data-record="${id}">${esc(label||r.title)}</a>`;}
function navMarkup(){
  return `<a class="nav-home" href="#guide/guide-overview" data-record="guide-overview">Guide contents</a>`+navigation.map(group=>`<details class="nav-section" data-group="${group.id}"><summary><span class="nav-number">${group.number?String(group.number).padStart(2,'0'):''}</span><span>${esc(group.title)}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></summary><div class="nav-section-body">${group.overview?linkTo(group.overview,'Lesson overview','nav-overview'):''}${(group.items||[]).map(id=>linkTo(id)).join('')}${(group.groups||[]).map(g=>g.title?`<details class="nav-topic"><summary>${esc(g.title)}</summary><div>${g.items.map(id=>linkTo(id,byId.get(id).part?`Part ${byId.get(id).part} · ${byId.get(id).title}`:null)).join('')}</div></details>`:g.items.map(id=>linkTo(id)).join('')).join('')}</div></details>`).join('');
}
$('#procedure-nav').innerHTML=navMarkup();
function updateNav(id){
  document.querySelectorAll('[data-record]').forEach(a=>{if(a.dataset.record===id){a.setAttribute('aria-current','page');let p=a.parentElement;while(p&&p.id!=='procedure-nav'){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement;}}else a.removeAttribute('aria-current');});
}
function setInput(value){$('#guide-search').value=value;$('#clear-search').hidden=!value;$('#search-shortcut').hidden=!!value;}
function screenshotMarkup(im,caption,context){
  const index=imageSet.push({im,caption,context})-1;
  return `<figure><button class="screenshot-button" data-image="${index}" type="button" aria-label="Enlarge screenshot: ${esc(caption)}"><img src="${im.src}" alt="${esc(im.alt)}" width="${im.width}" height="${im.height}" loading="lazy" decoding="async"></button><figcaption><span>${esc(caption)} · Source p. ${im.page}</span><span class="figure-action">↗ Enlarge</span></figcaption></figure>`;
}
function blockMarkup(blocks=[]){
  let out='',list=false;
  for(const b of blocks){
    if(b.type!=='list'&&list){out+='</ul>';list=false;}
    if(b.type==='list'){if(!list){out+='<ul class="reading-list">';list=true;}out+=`<li>${b.html||esc(b.text)}</li>`;}
    else if(b.type==='image')out+=screenshotMarkup(b.image,'Oracle reference',b.image.alt);
    else if(b.type==='table')out+=`<div class="table-wrap"><table><thead><tr>${b.rows[0].map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.slice(1).map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    else if(b.type==='ordered-list')out+=`<ol class="reading-list toolbar-list">${b.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ol>`;
    else out+=`<p class="${b.type==='notice'?'reference-notice':b.type==='note'?'step-note':''}">${b.html||esc(b.text)}</p>`;
  }
  return out+(list?'</ul>':'');
}
function sourceMarkup(r){
  return `<details class="source-details"><summary>Source and document reference</summary><p>${esc(source.title)} · v${source.version}<br>${esc(source.date)}<br>${esc(r.lesson?'Lesson '+r.lesson+' → ':'')}${esc(r.sourceTitle||r.title)}</p><p>Procedure wording and reference content are drawn from the source. Navigation headings and summaries have been adapted for this guide.</p><a class="text-link" href="${source.pdf}#page=${r.pages?.[0]||1}" target="_blank" rel="noopener noreferrer">Open the original PDF${r.pages?.length?' · page '+r.pages[0]:''} ↗</a></details>`;
}
function rowMarkup(r){return `<a class="content-row" href="#guide/${r.id}"><div><span class="row-title">${esc(r.title)}</span>${r.kind==='procedure'?`<span class="row-meta">${r.steps.length} steps${r.part?' · Part '+r.part:''}</span>`:r.kind==='practice'?'<span class="row-meta">Knowledge check</span>':''}</div><span class="row-arrow" aria-hidden="true">↗</span></a>`;}
function relatedMarkup(r){
  const ids=r.related||[];
  return `<section class="continue"><h2>Continue through the guide</h2>${ids.map(id=>rowMarkup(byId.get(id))).join('')}${r.lesson?`<a class="back-lesson" href="#guide/lesson-${r.lesson}">All of Lesson ${r.lesson} →</a>`:''}<button type="button" class="follow-search">${searchIcon}Find another instruction</button></section>`;
}
function headerMarkup(r){return `<div class="breadcrumb"><a href="#guide/guide-overview">Operations guide</a><span class="slash">/</span>${r.lesson&&r.kind==='procedure'?`<a href="#guide/lesson-${r.lesson}">Lesson ${r.lesson}</a><span class="slash">/</span>`:''}<span>${esc(r.category)}</span></div><h1 class="article-title">${esc(r.title)}</h1>${r.summary?`<p class="article-summary">${esc(r.summary)}</p>`:''}`;}
function renderHome(){
  return `${headerMarkup(active)}<div class="article-meta"><span>${stats.lessons} lessons</span><span class="meta-dot"></span><span>${stats.procedures} procedures</span><span class="meta-dot"></span><span>Guide v${source.version}</span></div><div class="start-links"><a href="#guide/application-interface">New to Oracle? Start with the interface <span>↗</span></a><a href="#guide/keyboard-shortcuts">Keyboard shortcuts <span>↗</span></a></div><section class="lesson-directory" aria-labelledby="lessons-heading"><div class="section-header"><h2 id="lessons-heading">The guide, in order</h2><span>01—08</span></div>${navigation.filter(g=>g.number).map(g=>{const r=byId.get(g.id),n=r.children.length;return `<a class="lesson-row" href="#guide/${g.id}"><span class="lesson-row-number">${String(g.number).padStart(2,'0')}</span><div><h3>${esc(g.title)}</h3><p>${n?`${n} procedure${n===1?'':'s'}`:'Overview & companion guide references'}</p></div><span class="row-arrow">↗</span></a>`}).join('')}</section><section class="home-extras"><div><h2>Practice</h2><p>Revisit the lesson questions and work through the course exercise.</p><a class="text-link" href="#guide/practice-1">Open knowledge checks →</a></div><div><h2>Reference</h2><p>Look up terminology and the companion job aids listed in the guide.</p><a class="text-link" href="#guide/glossary">Open the glossary →</a></div></section><p class="draft-note">First draft · Based on the 07 August 2026 Instructor Guide. The separate Production Execution Workbench guides are not included.</p>`;
}
function renderProcedure(r){
  const imageCount=r.steps.reduce((n,s)=>n+s.images.length,0);
  return `${headerMarkup(r)}<div class="article-meta"><span>${r.steps.length} steps</span><span class="meta-dot"></span><span>${imageCount} screenshots</span>${r.part?`<span class="meta-dot"></span><span>Misidentified Item Turn-In · Part ${r.part}</span>`:''}</div><dl class="prerequisites"><div><dt>Required role</dt><dd>${esc(r.role)}${r.mvp?`<span class="mvp">MVP ${esc(r.mvp)}</span>`:''}</dd></div><div><dt>Before you begin</dt><dd>${r.prerequisites.length>1?`<ul>${r.prerequisites.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>`:esc(r.prerequisites[0])}</dd></div></dl><div class="steps-heading"><h2>Instructions</h2><button class="text-button" id="toggle-screenshots" type="button" aria-pressed="${screenshotsVisible}"><span>${screenshotsVisible?'Hide':'Show'} screenshots</span></button></div>${r.steps.map(s=>`<section class="step" id="step-${s.number}" aria-labelledby="step-title-${s.number}"><div class="step-heading"><span class="step-num" aria-hidden="true">${String(s.sourceNumber).padStart(2,'0')}</span><h3 id="step-title-${s.number}">${s.title===`Step ${s.sourceNumber}`?'Instruction':esc(s.title)}<span class="sr-only"> — Step ${s.sourceNumber}</span></h3></div><p>${s.html}</p>${blockMarkup(s.details)}${s.images.map((im,i)=>screenshotMarkup(im,`Step ${s.sourceNumber}${s.images.length>1?' · Image '+(i+1):''}`,s.text)).join('')}</section>`).join('')}<p class="procedure-end">End of procedure</p>${sourceMarkup(r)}${relatedMarkup(r)}`;
}
function renderLesson(r){
  const group=navigation.find(g=>g.id===r.id);
  return `${headerMarkup(r)}<div class="reference-content">${blockMarkup(r.blocks)}</div>${r.children.length?`<section class="lesson-procedures"><h2>In this lesson</h2>${group.groups.map(g=>`${g.title?`<h3 class="topic-heading">${esc(g.title)}</h3>`:''}${g.items.map(id=>rowMarkup(byId.get(id))).join('')}`).join('')}</section>`:''}${r.recap?`<details class="resource-list"><summary>Lesson recap</summary><p class="resource-hint">${esc(r.recap)}</p></details>`:''}${r.resources?.length?`<details class="resource-list"><summary>Companion job aid references <span>${r.resources.length}</span></summary><p class="resource-hint">Listed in the source guide; separate files were not supplied.</p><ul>${r.resources.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details>`:''}${r.lesson<8?`<a class="practice-invite" href="#guide/practice-${r.lesson}"><div><span class="eyebrow">Practice</span><h3>Check your understanding</h3></div><span class="row-arrow">↗</span></a>`:''}${sourceMarkup(r)}`;
}
function renderPractice(r){
  return `${headerMarkup(r)}<div class="article-meta"><span>${r.questions.length} questions</span><span class="meta-dot"></span><span>Answers from the source guide</span></div><div class="practice-questions">${r.questions.map((q,i)=>`<section class="practice-question"><span class="step-num">${String(i+1).padStart(2,'0')}</span><h2>${esc(q.question)}</h2>${q.options.length?`<ul class="question-options">${q.options.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>`:''}<details class="answer"><summary>Show source answer</summary><p>${esc(q.answer)}</p></details></section>`).join('')}</div><a class="back-lesson" href="#guide/lesson-${r.lesson}">Review Lesson ${r.lesson} →</a>${sourceMarkup(r)}<div class="practice-next">${r.lesson<7?rowMarkup(byId.get('practice-'+(r.lesson+1))):rowMarkup(byId.get('course-exercise'))}</div>`;
}
function renderOutline(r){
  const stepLinks=r.steps?.map(s=>`<a href="#guide/${r.id}/step-${s.number}" data-step-link="${s.number}" title="${esc(s.title)}"><span class="outline-number">${String(s.sourceNumber).padStart(2,'0')}</span><span class="outline-label">${esc(s.title)}</span></a>`).join('');
  $('#page-outline').innerHTML=`${stepLinks?`<p>On this page</p><nav class="step-outline" aria-label="Procedure steps">${stepLinks}</nav>`:`<p>${r.kind==='home'?'Quick reference':'In this guide'}</p><a href="#guide/keyboard-shortcuts">Keyboard shortcuts</a><a href="#guide/glossary">Acronym glossary</a>`}<div class="outline-actions"><button class="text-button" id="print-procedure" type="button">Print this page</button><a class="pdf-reference" href="${source.pdf}#page=${r.pages?.[0]||1}" target="_blank" rel="noopener noreferrer">View source PDF ↗</a></div>`;
  $('#print-procedure').addEventListener('click',()=>window.print());
  if(r.steps){observer=new IntersectionObserver(entries=>{const e=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];if(e)document.querySelectorAll('[data-step-link]').forEach(a=>a.classList.toggle('active',a.dataset.stepLink===e.target.id.slice(5)));},{rootMargin:'-100px 0px -50% 0px',threshold:0});document.querySelectorAll('.step').forEach(s=>observer.observe(s));}
}
function renderRecord(r,step,focus=false){
  active=r;observer?.disconnect();imageSet=[];setInput('');updateNav(r.id);document.title=r.kind==='home'?'MRO Operations Guide':`${r.title} · MRO Operations Guide`;
  $('#announcer').textContent='';
  $('#main').className=screenshotsVisible?'':'screenshots-hidden';
  let content=r.kind==='home'?renderHome():r.kind==='procedure'?renderProcedure(r):r.kind==='lesson'?renderLesson(r):r.kind==='practice'?renderPractice(r):`${headerMarkup(r)}<div class="reference-content">${blockMarkup(r.blocks)}</div>${sourceMarkup(r)}`;
  $('#main').innerHTML='<article>'+content+'</article>';renderOutline(r);
  document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>openImage(Number(b.dataset.image))));
  $('#toggle-screenshots')?.addEventListener('click',()=>{screenshotsVisible=!screenshotsVisible;$('#main').classList.toggle('screenshots-hidden',!screenshotsVisible);$('#toggle-screenshots').setAttribute('aria-pressed',String(screenshotsVisible));$('#toggle-screenshots span').textContent=`${screenshotsVisible?'Hide':'Show'} screenshots`;});
  $('.follow-search')?.addEventListener('click',focusSearch);
  if(step)requestAnimationFrame(()=>document.getElementById('step-'+step)?.scrollIntoView({behavior:'instant'}));else window.scrollTo(0,0);
  if(focus)$('#main').focus({preventScroll:true});
}

// Search uses the entire retained guide, with procedure titles weighted highest.
const stopWords=new Set('a an the how do does i my me we you your can could would should please to for from of in on by with and or is are it this that have has need want what where when using use get as at mean means stand stands definition defined show tell about help explain which instruction instructions step steps'.split(' '));
const synonyms=[['find','search','locate','lookup'],['update','edit','change','modify'],['return','back','turn'],['material','part'],['complete','finish'],['close','closure'],['receive','receipt'],['create','add'],['induct','induction'],['view','see','display']];
const acronymRows=byId.get('glossary').blocks.find(b=>b.type==='table').rows.slice(1);
const acronymMap=new Map(acronymRows.map(r=>[r[0].trim().toLowerCase(),r[1]]));
const normalize=s=>String(s).toLowerCase().replace(/\b([a-z])[\s-]+(\d+[a-z]*)\b/g,'$1$2').replace(/[^a-z0-9]+/g,' ').replace(/\b(?:non|not) engine\b/g,'nonengine').trim();
function stem(s){if(s.length>4&&s.endsWith('ies'))return s.slice(0,-3)+'y';return s.length>4&&s.endsWith('s')?s.slice(0,-1):s;}
function termsFor(s){return [...new Set(normalize(s).replace(/\blook up\b/g,'find').split(' ').filter(t=>t&&!stopWords.has(t)).map(stem))];}
function variants(t){return synonyms.find(g=>g.includes(t))||[t];}
function tokens(s){const t=normalize(s).split(' ').filter(Boolean).map(stem);const expanded=t.flatMap(w=>acronymMap.has(w)?normalize(acronymMap.get(w)).split(' ').map(stem):[]);return new Set([...t,...expanded]);}
function blockText(r){return (r.blocks||[]).map(b=>b.text||(b.rows?b.rows.flat().join(' '):b.items?.join(' ')||'')).join(' ');}
const searchIndex=records.filter(r=>r.kind!=='home').map(r=>{
  const stepText=(r.steps||[]).map(s=>s.text+' '+s.details.map(d=>d.text).join(' '));
  const body=[blockText(r),...(r.prerequisites||[]),...stepText,...(r.questions||[]).map(q=>q.question+' '+q.options.join(' ')+' '+q.answer),...(r.resources||[]),r.recap||''].join(' ');
  return {r,title:tokens(r.title),summary:tokens(r.summary||''),bodyText:body,body:tokens(body),all:tokens(r.title+' '+(r.summary||'')+' '+body),steps:stepText.map((s,i)=>({step:r.steps[i],text:s,tokens:tokens(s)}))};
});
const vocabulary=new Set(searchIndex.flatMap(e=>[...e.all]));
const queryCache=new Map();

// Bounded edit distance includes adjacent transpositions (e.g. reciept/receipt).
// Transaction codes are never typo-corrected into a different code.
function editDistance(a,b,limit){
  if(Math.abs(a.length-b.length)>limit)return limit+1;
  let previous=Array.from({length:b.length+1},(_,i)=>i),beforePrevious;
  for(let i=1;i<=a.length;i++){
    const row=[i];let lowest=i;
    for(let j=1;j<=b.length;j++){
      row[j]=Math.min(row[j-1]+1,previous[j]+1,previous[j-1]+(a[i-1]===b[j-1]?0:1));
      if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])row[j]=Math.min(row[j],beforePrevious[j-2]+1);
      lowest=Math.min(lowest,row[j]);
    }
    if(lowest>limit)return limit+1;
    beforePrevious=previous;previous=row;
  }
  return previous[b.length];
}
function prepareQuery(query){
  const terms=termsFor(query),key=terms.join(' ');
  if(queryCache.has(key))return queryCache.get(key);
  const matchers=terms.map(term=>{
    const candidates=new Map([[term,1]]);
    for(const variant of variants(term)){
      candidates.set(variant,variant===term?1:.94);
      for(const form of [variant+'ed',variant+'ing',...(variant.endsWith('e')?[variant+'d',variant.slice(0,-1)+'ing']:[])]){
        if(vocabulary.has(form))candidates.set(form,.9);
      }
    }
    // Prefix matches work for both ordinary words and identifiers like D035K.
    if(term.length>=3)for(const word of vocabulary){
      if(word!==term&&word.startsWith(term)&&!candidates.has(word))candidates.set(word,.78);
    }
    const hasKnownSpelling=[...candidates.keys()].some(word=>vocabulary.has(word));
    if(!hasKnownSpelling&&/^[a-z]{4,}$/.test(term)){
      const limit=term.length>=7?2:1;
      for(const word of vocabulary){
        if(!/^[a-z]{4,}$/.test(word)||Math.abs(term.length-word.length)>limit)continue;
        const distance=editDistance(term,word,limit);
        if(distance<=limit)candidates.set(word,distance===1?.64:.48);
      }
    }
    return {term,candidates,expansion:acronymMap.has(term)?termsFor(acronymMap.get(term)):[]};
  });
  const prepared={terms,matchers};
  if(queryCache.size>=30)queryCache.delete(queryCache.keys().next().value);
  queryCache.set(key,prepared);return prepared;
}
function termScore(set,matcher){
  let score=0;
  for(const [word,weight] of matcher.candidates)if(set.has(word))score=Math.max(score,weight);
  if(!score&&matcher.expansion.length&&matcher.expansion.every(word=>set.has(word)))score=.94;
  return score;
}
function searchGuide(query,filter='all'){
  const {terms,matchers}=prepareQuery(query);if(!terms.length)return [];
  const matches=searchIndex.filter(e=>filter==='all'||(filter==='procedures'?e.r.kind==='procedure':filter==='practice'?e.r.kind==='practice'||e.r.category==='Practice':e.r.kind==='reference'&&e.r.category!=='Practice')).map(e=>{
    const codes=terms.filter(t=>/^d[67]$/.test(t));
    if(e.r.kind==='procedure'&&codes.length&&/\bD[67]\b/i.test(e.r.title)&&codes.some(c=>!e.title.has(c)))return null;
    if(e.r.kind==='procedure'&&terms.includes('engine')&&e.all.has('nonengine'))return null;
    let matched=0,score=0,titleMatches=0,titleScore=0;
    for(const matcher of matchers){
      const all=termScore(e.all,matcher),title=termScore(e.title,matcher),summary=termScore(e.summary,matcher);
      if(all)matched++;if(title)titleMatches++;
      titleScore+=title;score+=all+10*title+3*summary;
    }
    const coverage=matched/terms.length,partial=coverage<(terms.length<=3?1:.75);
    if(partial&&!(matched>=2&&titleMatches>=2))return null;
    let best,bestText='',stepScore=0,stepMatches=0;
    e.steps.forEach(s=>{
      const values=matchers.map(m=>termScore(s.tokens,m)),value=values.reduce((a,b)=>a+b,0);
      if(value>stepScore){best=s.step;bestText=s.text;stepScore=value;stepMatches=values.filter(Boolean).length;}
    });
    score+=12*titleScore/Math.max(1,termsFor(e.r.title).length);
    if(e.r.kind==='procedure')score+=2;if(e.r.kind==='lesson')score-=3;
    if(e.r.id==='glossary'&&terms.length===1&&acronymMap.has(terms[0]))score+=50;
    const specific=!!best&&titleMatches/terms.length<.6&&stepMatches>=Math.min(2,terms.length);
    const excerpt=specific?bestText:matchers.some(m=>termScore(e.summary,m))?e.r.summary:e.bodyText||e.r.summary;
    return {record:e.r,score:score*coverage,step:best,specific,excerpt,partial,missing:matchers.filter(m=>!termScore(e.all,m)).map(m=>m.term)};
  }).filter(Boolean).sort((a,b)=>b.score-a.score);
  return matches.some(m=>!m.partial)?matches.filter(m=>!m.partial):matches;
}
function highlight(s,q){
  const {matchers}=prepareQuery(q);let out='',last=0;
  for(const match of s.matchAll(/[a-z0-9]+/gi)){
    const word=stem(match[0].toLowerCase()),matched=matchers.some(m=>m.candidates.has(word));
    out+=esc(s.slice(last,match.index))+(matched?'<mark>'+esc(match[0])+'</mark>':esc(match[0]));
    last=match.index+match[0].length;
  }
  return out+esc(s.slice(last));
}
function snippet(s,q){
  if(s.length<230)return s;
  const {matchers}=prepareQuery(q);
  const match=[...s.matchAll(/[a-z0-9]+/gi)].find(m=>matchers.some(t=>t.candidates.has(stem(m[0].toLowerCase()))));
  const start=Math.max(0,(match?.index||0)-65),cut=start?s.indexOf(' ',start)+1:0;
  const end=cut+230,space=s.lastIndexOf(' ',end),stop=space>cut+180?space:end;
  return (cut?'…':'')+s.slice(cut,stop)+(stop<s.length?'…':'');
}

function kindLabel(r){return r.kind==='procedure'?`${r.steps.length} steps`:r.kind==='lesson'?'Lesson overview':r.kind==='practice'?'Knowledge check':'Reference';}
function resultMeta(r){return [...new Set([r.lesson?'Lesson '+r.lesson:null,r.category,kindLabel(r)].filter(Boolean))].join(' · ');}
function renderSearch(query){
  observer?.disconnect();updateNav(null);$('#main').className='';$('#page-outline').innerHTML='';document.title='Search · MRO Operations Guide';
  const found=searchGuide(query,searchFilter),allCount=searchGuide(query).length;
  $('#main').innerHTML=`<div class="breadcrumb"><a href="#guide/guide-overview">Operations guide</a><span class="slash">/</span><span>Search</span></div><h1 class="results-title">Instructions for your task</h1><p class="results-description">${found.length} result${found.length===1?'':'s'} for “${esc(query)}”</p><div class="search-filters" role="group" aria-label="Filter search results">${[['all','All material'],['procedures','Procedures'],['reference','Reference'],['practice','Practice']].map(([id,label])=>`<button type="button" data-filter="${id}" aria-pressed="${id===searchFilter}">${label}</button>`).join('')}</div>${found.length?`<div class="results-list">${found.map(v=>{const r=v.record,body=v.excerpt||r.summary||blockText(r);return `<a class="result" href="#guide/${r.id}${v.specific?'/step-'+v.step.number:''}"><div class="result-category">${esc(resultMeta(r))}</div><h2><span class="result-title">${highlight(r.title,query)}</span><span class="result-arrow" aria-hidden="true">↗</span></h2><p>${highlight(snippet(body,query),query)}</p>${v.partial?`<p class="partial-match">Related instructions · not matched: ${esc(v.missing.join(', '))}</p>`:''}${v.specific?`<div class="result-step">Go to step ${v.step.sourceNumber} · Source page ${v.step.page}</div>`:''}</a>`}).join('')}</div>`:`<div class="empty-state"><h2>${allCount?'No results in this category.':'No matching instructions in this guide.'}</h2><p>${allCount?'Try All material to see other matching content.':'Try a task, Oracle screen name, or an acronym. Instructions in separately referenced documents are not included.'}</p><div class="query-suggestions"><button data-query="Find a work order">Find a work order</button><button data-query="D7 engine">D7 engine</button><button data-query="Keyboard shortcuts">Keyboard shortcuts</button></div><a class="text-link" href="#guide/guide-overview">Browse all lessons →</a></div>`}`;
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{searchFilter=b.dataset.filter;history.replaceState(null,'',searchHash(query));renderSearch(query);}));
  document.querySelectorAll('[data-query]').forEach(b=>b.addEventListener('click',()=>{searchFilter='all';runSearch(b.dataset.query);}));
  $('#announcer').textContent=`${found.length} search results.`;
}
function searchHash(query){return `#search/${encodeURIComponent(query)}${searchFilter==='all'?'':'?type='+searchFilter}`;}
function runSearch(query){const q=query.trim();setInput(query);if(q){history.replaceState(null,'',searchHash(q));renderSearch(q);window.scrollTo(0,0);}else{history.replaceState(null,'',`#guide/${active.id}`);renderRecord(active);$('#guide-search').focus();}}
function focusSearch(){window.scrollTo({top:0,behavior:'instant'});$('#guide-search').focus();$('#guide-search').select();}
function route(focus=false){
  clearTimeout(debounce);closeNav();let parts;
  const [path,parameters='']=location.hash.slice(1).split('?');
  try{parts=path.split('/').map(decodeURIComponent);}catch{showMissingPage(focus);return;}
  if(parts[0]==='search'&&parts.slice(1).join('/').trim()){
    const filter=new URLSearchParams(parameters).get('type');searchFilter=['procedures','reference','practice'].includes(filter)?filter:'all';
    const q=parts.slice(1).join('/');setInput(q);renderSearch(q);window.scrollTo(0,0);return;
  }
  if(parts[0]==='main'){$('#main').focus();return;}
  const id=parts[1]||'guide-overview',r=byId.get(id);
  const step=/^step-\d+$/.test(parts[2]||'')?Number(parts[2].slice(5)):null;
  if(!r||(parts[0]&&!['guide','procedure'].includes(parts[0]))||parts.length>3||(parts[2]&&(!step||!r.steps?.some(s=>s.number===step)))){showMissingPage(focus);return;}
  renderRecord(r,step,focus);
}
function showMissingPage(focus){
  observer?.disconnect();updateNav(null);setInput('');document.title='Page not found · MRO Operations Guide';
  $('#page-outline').innerHTML='';$('#main').className='';
  $('#main').innerHTML='<h1 class="results-title">Page not found</h1><p class="results-description">This page or step is not part of the current guide. Use the contents or search to find the instruction you need.</p><a class="text-link" href="#guide/guide-overview">Open guide contents →</a>';
  window.scrollTo(0,0);if(focus)$('#main').focus({preventScroll:true});
}
function openImage(index){
  const {im,caption,context}=imageSet[index];$('#image-title').textContent=caption;$('#image-instruction').textContent=context;
  function imageMarkup(actual){return `<img src="${im.src}" alt="${esc(im.alt)}" width="${im.width}" height="${im.height}" style="${actual?'width:'+im.width+'px;max-width:none;':'max-width:100%;width:auto;'}height:auto;display:block;margin:auto">`;}
  $('#image-viewport').innerHTML=imageMarkup(false);$('#image-viewport').classList.remove('actual');$('#zoom-image').textContent='Actual size';$('#zoom-image').setAttribute('aria-pressed','false');
  $('#zoom-image').onclick=()=>{const a=$('#image-viewport').classList.toggle('actual');$('#image-viewport').innerHTML=imageMarkup(a);$('#zoom-image').textContent=a?'Fit to window':'Actual size';$('#zoom-image').setAttribute('aria-pressed',String(a));};$('#image-dialog').showModal();
}
function closeNav(){$('#sidebar').classList.remove('open');$('#nav-backdrop').hidden=true;$('.mobile-toggle').setAttribute('aria-expanded','false');}
$('.mobile-toggle').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('open');$('#nav-backdrop').hidden=!open;$('.mobile-toggle').setAttribute('aria-expanded',String(open));});
$('#nav-backdrop').addEventListener('click',closeNav);
$('.skip-link').addEventListener('click',e=>{e.preventDefault();$('#main').focus();$('#main').scrollIntoView({block:'start'});});
$('#about-button').addEventListener('click',()=>{closeNav();$('#about-dialog').showModal();});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.close).close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
$('#guide-search').addEventListener('input',()=>{clearTimeout(debounce);$('#clear-search').hidden=!$('#guide-search').value;$('#search-shortcut').hidden=!!$('#guide-search').value;debounce=setTimeout(()=>runSearch($('#guide-search').value),180);});
$('#search-form').addEventListener('submit',e=>{e.preventDefault();clearTimeout(debounce);runSearch($('#guide-search').value);$('#main').focus({preventScroll:true});});
$('#clear-search').addEventListener('click',()=>{clearTimeout(debounce);runSearch('');});
document.addEventListener('keydown',e=>{const editing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);if(e.key==='/'&&!editing&&!document.querySelector('dialog[open]')){e.preventDefault();focusSearch();}if(e.key==='Escape'){closeNav();if(editing&&document.activeElement===$('#guide-search')){clearTimeout(debounce);runSearch('');}}});
window.addEventListener('hashchange',()=>route(true));
route();
