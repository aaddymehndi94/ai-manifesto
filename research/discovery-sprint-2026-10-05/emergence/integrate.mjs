import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.dirname(here);
const read=name=>JSON.parse(fs.readFileSync(path.join(root,name),'utf8'));
const snapshot=read('emergence/pause-snapshot.json');
for(const f of snapshot.files)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f.path))).digest('hex'),f.sha256,`Paused input changed: ${f.path}`);
const old=new Map(read('idea_graph.json').nodes.map(x=>[x.id,x]));
const current=new Map(read('generation4_raw.json').candidates.map(x=>[x.id,x]));
const required=['component_ideas','causal_loop','emergent_property','why_absent_in_components','surprising_prediction','measurable_state_variable','threshold_equilibrium_hysteresis','minimal_falsifier'];
const inputs=['a','b','c'].map(s=>({stream:s,data:read(`emergence/raw/stream-${s}.json`)}));
const compounds=inputs.flatMap(x=>x.data.compounds.map(c=>({...c,authorship_stream:x.stream})));
const paradoxes=inputs.flatMap(x=>x.data.paradoxes.map(c=>({...c,authorship_stream:x.stream})));
const scaleTransitions=inputs.flatMap(x=>x.data.scale_transitions.map(c=>({...c,authorship_stream:x.stream})));
assert(compounds.length>=150,'Fewer than150 compound constructions');
assert(paradoxes.length>=50,'Fewer than50 paradoxes');
assert(scaleTransitions.length>=15,'Fewer than15 transitions');
for(const [name,arr] of [['compounds',compounds],['paradoxes',paradoxes],['transitions',scaleTransitions]])assert.equal(new Set(arr.map(x=>x.id)).size,arr.length,`${name}: duplicate IDs`);
for(const c of compounds){
  for(const f of required)assert(c[f]!==undefined&&JSON.stringify(c[f]).length>4,`${c.id}: missing ${f}`);
  assert(Array.isArray(c.component_ideas)&&c.component_ideas.length>=2&&c.component_ideas.length<=5,`${c.id}: component count`);
  for(const ref of c.component_ideas){
    const id=typeof ref==='string'?ref:ref.id;
    assert(old.has(id)||current.has(id),`${c.id}: unknown component ${id}`);
    if(typeof ref==='object'&&ref.proposition){
      const original=(old.get(id)||current.get(id)).proposition;
      assert.equal(ref.proposition,original,`${c.id}: component text is not exact original; use a separate interpretation field`);
    }
  }
  assert(!Object.hasOwn(c,'scores')&&!Object.hasOwn(c,'novelty_grade'),`${c.id}: prohibited grading`);
}
const exactDuplicates=[];
const seen=new Map();
for(const c of compounds){const key=c.emergent_property.toLowerCase().replace(/[^a-z0-9]+/g,' ');if(seen.has(key))exactDuplicates.push([seen.get(key),c.id]);else seen.set(key,c.id);}
const graph={nodes:compounds.map(c=>({id:c.id,kind:'proposed_compound',emergent_property:c.emergent_property})),edges:compounds.flatMap(c=>c.component_ideas.map(ref=>({from:typeof ref==='string'?ref:ref.id,to:c.id,type:'used_as_genetic_material'})))};
const metadata={version:'0.1.0',date:'2026-10-05',phase:'BLUE_TEAM_EMERGENCE',baseline:snapshot.files,claim_status:'UNTESTED_COMPOSITIONS_NOT_NOVELTY_FINDINGS',disclosure:'Three AI-agent construction streams, integrated by the main agent. Counts establish exploration coverage only. Exact-string duplicate checking is not semantic independence. No prior-art courts or new searches during this phase.',validation:'Structural fields, original component references, counts and paused-input hashes. Causal closure and substantive differences require editorial inspection.'};
for(const [name,value] of Object.entries({'compound_population.json':{...metadata,compounds},'paradox_population.json':{...metadata,paradoxes},'scale_transition_population.json':{...metadata,scale_transitions:scaleTransitions},'compound_graph.json':{...metadata,...graph},'validation.json':{...metadata,counts:{compounds:compounds.length,paradoxes:paradoxes.length,scale_transitions:scaleTransitions.length},exact_duplicate_emergent_properties:exactDuplicates,paused_inputs_changed:[],semantic_independence_certified:false}}))fs.writeFileSync(path.join(here,name),JSON.stringify(value,null,2)+'\n');
const ledger={...metadata,entries:compounds.map(c=>({id:c.id,stage:'BLUE_TEAM_CONSTRUCTION',components:c.component_ideas.map(x=>typeof x==='string'?x:x.id),emergent_property:c.emergent_property,provisional_survival_rules:c.survival_rules_met||[],novelty_residue_status:'NOT_YET_ADVERSARIALLY_COMPARED',prior_art_court:null,scores:null,publication_status:'RESEARCH_ONLY',history:[{date:'2026-10-05',event:'Constructed from preserved genetic material during court pause'}]}))};
fs.writeFileSync(path.join(here,'novelty-ledger.json'),JSON.stringify(ledger,null,2)+'\n');
console.log(JSON.stringify({compounds:compounds.length,paradoxes:paradoxes.length,scale_transitions:scaleTransitions.length,exactDuplicates:exactDuplicates.length,pausedInputsChanged:0}));
