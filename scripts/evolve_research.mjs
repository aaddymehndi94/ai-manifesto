import fs from 'node:fs';

const p=JSON.parse(fs.readFileSync('research/idea_population.json','utf8'));
if(p.generations.length!==1) throw new Error('This recorded evolution requires the original single-generation state; do not rerun over later work.');
const positive=p.positive_dimensions, risks=p.risk_dimensions;
const seeds=[
 ['I155','Authentic-rule audit','Under an authentic adaptive grant, permissible interventions can alter evidence governing the delegate’s future typed action scope.',['I046','I065','I091','I154'],['S05','S06','S08','S10','S24'],'B_PROPOSED','MUTATE','Test authentic ledger replay and paired intervention contrasts; novelty is a benchmark subcase, not a new causal method.'],
 ['I156','Feedback-gain diagnostic','In a specified local model the behavioral influence-to-scope loop grows when kbc exceeds scope decay.',['I046','I065'],['S05','S20'],'D','REJECTED_AS_CENTER','The stability algebra is elementary control theory; retain only as illustrative figure.'],
 ['I157','Influence policy inside conditional grants','Adaptive grants can state which interventions may contribute evidence to scope updates.',['I091','I154'],['S10','S11','S18'],'C','MUTATE','Information-flow release policy is inherited; implementation can support the benchmark.'],
 ['I158','Cross-agent mandate sensitivity','A handoff can preserve authentic observations while concealing intervention sensitivity of a subsequent adaptive rule.',['I047','I154'],['S08','S09','S10'],'B_PROPOSED','MUTATE','Needs cases where ancestry matters despite no false permission or omitted effect.'],
 ['I159','Choice-set compliance trigger','Restricting which decisions humans encounter can satisfy an authentic behavior-based escalation criterion.',['I003','I046'],['S05','S06','S23'],'C','REJECTED_AS_CENTER','Known selection/influence mechanisms; use as adversarial case.'],
 ['I160','Bounds on mandate divergence','When latent human state is unidentified, report causal bounds or unknown rather than a point estimate of individual scope divergence.',['I046','I136'],['S05','S22'],'C','REJECTED_AS_CENTER','Ordinary identification discipline; important limitation, not discovery.'],
 ['I161','Chosen-formation positive control','An endorsed coaching policy may legitimately yield positive scope divergence.',['I065','I091'],['S06','S12','S18'],'D','REJECTED_AS_CENTER','Influence is not manipulation; inherited autonomy distinction.'],
 ['I162','Timing-conditioned escalation','Review fatigue and intervention timing can alter behavior-based scope updates without changing output correctness.',['I003','I046'],['S01','S02','S06'],'C','REJECTED_AS_CENTER','Known attention effects; experimental condition only.'],
 ['I163','Dissent sampling loss','Anticipatory execution can suppress occasions on which negative preference evidence would be observed.',['I003','I065'],['S05','S22'],'C','REJECTED_AS_CENTER','Selective labels and active learning are antecedents.'],
 ['I164','Typed jurisdiction contrast','Report added and removed action classes under paired policies rather than interpreting scalar scope as legitimacy.',['I046','I131','I154'],['S10','S11'],'B_PROPOSED','MUTATE','Operational benchmark outcome; no claim that set differences are mathematically novel.'],
 ['I165','Provider-controlled renewal evidence','Institutional service renewals may use success measures affected by the provider’s own choice architecture.',['I136','I154'],['S05','S21','S24'],'C','REJECTED_AS_CENTER','Metrics and principal-agent incentives already cover broad claim.'],
 ['I166','Correlated exit cliff','Equal immediate utility can mask collective inability to recover from common provider outage.',['I134'],['S01','S21'],'C','REJECTED_AS_CENTER','Network resilience precedent; separate research agenda.']
];
const scoreVectors={
 I155:[6,8,6,8,7,8,6,8,9,6,8,7,8,5,6,9,8,2,2,6,3,3],
 I156:[1,6,7,8,7,6,2,5,6,7,9,6,4,1,8,4,8,5,2,10,1,9],
 I157:[3,8,7,8,6,9,5,7,9,7,9,5,6,3,6,7,8,4,2,8,3,6],
 I158:[5,7,6,6,6,8,5,7,9,6,7,5,7,4,5,8,8,3,3,7,3,5],
 I159:[3,7,6,7,7,7,5,8,8,7,8,6,6,3,6,7,8,4,2,8,2,6],
 I160:[1,8,8,9,7,8,5,8,8,8,9,3,5,1,8,6,9,3,1,10,1,8],
 I161:[1,8,7,8,7,7,8,9,8,8,6,6,6,1,8,6,9,4,1,10,1,8],
 I162:[3,7,6,7,6,7,4,8,8,6,7,6,6,3,5,7,7,3,2,8,3,5],
 I163:[3,7,6,7,7,7,5,8,8,7,8,6,6,3,6,7,8,3,2,8,2,5],
 I164:[5,7,7,9,6,9,4,7,9,7,9,5,7,4,7,8,9,2,1,7,2,4],
 I165:[2,8,8,7,8,7,6,8,8,7,8,6,7,2,6,7,9,4,2,9,2,6],
 I166:[3,8,8,7,8,8,5,9,8,7,8,7,8,3,6,8,9,4,2,8,2,5]
};
const candidates=seeds.map(([id,name,proposition,parents,citations,grade,status,reason])=>({id,generation:2,mode:'mutation_and_prosecution',name,proposition,parents,citations,claim_type:id==='I156'?'FORMAL':'DESIGN_PRINCIPLE',epistemic_status:'PROPOSED_HERE',scores:Object.fromEntries([...positive,...risks].map((k,i)=>[k,scoreVectors[id][i]])),status,novelty_grade:grade,selection_reason:reason,history:[{generation:2,event:status,date:'2026-10-05'}]}));
p.generations.push({number:2,date:'2026-10-05',method:'12 explicit mutations; independent prosecution and defense; eight excluded from center.',candidates});
const finals=[
 {id:'I167',name:'Causal mandate audit',parents:['I155','I164'],proposition:'Audit the sensitivity of typed future authority to the delegate’s permissible interventions under an authentic adaptive delegation rule.',citations:['S05','S06','S08','S09','S10','S24'],scores:scoreVectors.I155},
 {id:'I168',name:'Conditional-grant influence contract',parents:['I157','I164'],proposition:'A conditional mandate can govern the intervention classes eligible to contribute to its own scope-update criterion.',citations:['S10','S11','S18'],scores:scoreVectors.I157},
 {id:'I169',name:'Authority-sensitive handoff benchmark',parents:['I158','I164'],proposition:'Test cross-agent handoffs for preserved jurisdictional sensitivity even when observations, grants, and effect records are truthful.',citations:['S08','S09','S10'],scores:scoreVectors.I158}
].map(x=>({...x,generation:3,mode:'specialization_and_formalization',claim_type:'DESIGN_PRINCIPLE',epistemic_status:'PROPOSED_HERE',scores:Object.fromEntries([...positive,...risks].map((k,i)=>[k,x.scores[i]])),status:'SURVIVES_PROVISIONALLY',novelty_grade:'B_PROPOSED',selection_reason:'Narrow research extension; no demonstrated A-grade discovery; empirical validation and broader full-text novelty audit outstanding.',history:[{generation:3,event:'introduced_as_research_draft',date:'2026-10-05'}]}));
p.generations.push({number:3,date:'2026-10-05',method:'Compress into one audit target with two supporting implementation extensions. Provisional research draft, not discovery certification.',candidates:finals});
for(const x of p.generations[0].candidates.filter(x=>x.status==='MUTATE')) {x.history.push({generation:2,event:'superseded_by_explicit_mutations',date:'2026-10-05'});x.status='RETIRED_SUPERSEDED';}
for(const x of candidates.filter(x=>x.status==='MUTATE')){x.history.push({generation:3,event:'superseded_by_specialization',date:'2026-10-05'});x.status='RETIRED_SUPERSEDED';}
p.updated='2026-10-05';
fs.writeFileSync('research/idea_population.json',JSON.stringify(p,null,2)+'\n');
const ledger=JSON.parse(fs.readFileSync('research/novelty-ledger.json','utf8'));
const sources=JSON.parse(fs.readFileSync('research/sources.json','utf8')).sources;
const sourceMap=new Map(sources.map(x=>[x.id,x]));
for(const c of [...candidates,...finals]) {
 const source=sourceMap.get(c.citations[0]);
 ledger.entries.push({candidate_id:c.id,exact_proposition:c.proposition,closest_known_precedent:source.title,original_author:source.authors,year:source.year,field:source.field,source:source.url,similarity:'Uses existing causal, autonomy, control, and authorization methods.',crucial_difference:c.proposition,difference_type:c.novelty_grade==='B_PROPOSED'?'PROPOSED_SUBSTANTIVE_EXTENSION':'SEMANTIC_OR_SUPPORTING_SYNTHESIS',status:c.status==='SURVIVES_PROVISIONALLY'?'SURVIVES_PROVISIONALLY':c.status==='RETIRED_SUPERSEDED'?'RETIRED':'REJECTED',survives:c.status==='SURVIVES_PROVISIONALLY',grade:c.novelty_grade==='B_PROPOSED'?null:c.novelty_grade,proposed_grade:c.novelty_grade,citations:c.citations,review_note:c.selection_reason,review_files:['debates/round-1-human.md','debates/round-1-technical.md']});
}
ledger.updated='2026-10-05';
fs.writeFileSync('research/novelty-ledger.json',JSON.stringify(ledger,null,2)+'\n');
const all=p.generations.flatMap(g=>g.candidates);
fs.appendFileSync('research/novelty-ledger.md',`\n## Subsequent evolution\n\n12 mutations and 3 specializations; 169 canonical candidates overall. No A-grade concept certified. B_PROPOSED is a hypothesis about an extension, not an assigned final novelty grade.\n\n| ID | Proposition | Prior art | Decision |\n|---|---|---|---|\n${[...candidates,...finals].map(x=>`| ${x.id} | ${x.proposition} | ${x.citations.join(', ')} | ${x.status} (${x.novelty_grade}) |`).join('\n')}\n`);
fs.appendFileSync('research/rejected-ideas.md',`\n# Generation two\n\n${candidates.filter(x=>x.status==='REJECTED_AS_CENTER').map(x=>`## ${x.id}: ${x.name}\n\n${x.proposition}\n\nAncestry: ${x.citations.join(', ')}. Rejection: ${x.selection_reason}\n`).join('\n')}`);
fs.writeFileSync('research/sources.md',`# Audited central source register\n\nEvidence cutoff 2026-10-04; records compiled 2026-10-05. Verification does not equal replication. Detailed field maps include additional sources and scope limits.\n\n${sources.map(s=>`## ${s.id}: ${s.title}\n\n${s.authors.join('; ')} (${s.year}). ${s.type}. ${s.field}.\n\nProposition: ${s.proposition}\n\nSource: [canonical publication](${s.url}). Verification: ${s.verification}\n`).join('\n')}`);
const graph={version:'0.2.0',nodes:[...all.map(x=>({id:x.id,type:'candidate',label:x.name,status:x.status,proposition:x.proposition})),...sources.map(x=>({id:x.id,type:'source',label:x.title,url:x.url}))],edges:all.flatMap(x=>[...(x.parents??[]).map(id=>({from:x.id,to:id,type:'derives'})),...(x.citations??[]).map(id=>({from:x.id,to:id,type:'depends-on'}))])};
fs.writeFileSync('research/prior-art/graph.json',JSON.stringify(graph,null,2)+'\n');
console.log(JSON.stringify({generations:p.generations.length,candidates:all.length,survivors:finals.length,rejected_as_center:all.filter(x=>x.status==='REJECTED_AS_CENTER').length}));
