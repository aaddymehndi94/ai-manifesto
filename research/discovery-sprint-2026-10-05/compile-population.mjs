import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const streams=['a','b','c','d'].filter(s=>fs.existsSync(path.join(here,`raw/stream-${s}.mjs`)));
const candidates=[];
for(const stream of streams){
  const module=await import(pathToFileURL(path.join(here,`raw/stream-${stream}.mjs`)));
  candidates.push(...module.candidates.map(c=>({...c,independent_stream:stream,status:'RAW_UNSHARPENED',scores:null,novelty_classification:null})));
}
const ids=new Set(),propositions=new Map(),counts={};
for(const c of candidates){
  if(ids.has(c.id))throw new Error(`Duplicate identifier: ${c.id}`);
  ids.add(c.id);
  const number=typeof c.operator==='number'?c.operator:Number(c.operator.number??c.operator.id);
  if(!Number.isInteger(number)||number<1||number>20)throw new Error(`Invalid operator: ${c.id}`);
  counts[number]=(counts[number]??0)+1;
  for(const key of ['working_name','proposition','level_of_analysis','timescale','variables','beneficial_mirror','why_not_old_paraphrase'])if(!c[key]?.length)throw new Error(`Missing ${key}: ${c.id}`);
  if(!Array.isArray(c.old_parents))throw new Error(`Invalid old_parents: ${c.id}`);
  const normalized=c.proposition.toLowerCase().replace(/\W/g,'');
  if(propositions.has(normalized))throw new Error(`Exact normalized proposition duplicate: ${c.id}/${propositions.get(normalized)}`);
  propositions.set(normalized,c.id);
}
if(candidates.length<300)throw new Error(`Only ${candidates.length} raw candidates`);
if(Object.keys(counts).length!==20)throw new Error('Incomplete operator coverage');
const artifact={version:'0.1.0',namespace:'D4',date:'2026-10-05',baseline:'aaa-v0.5-baseline',status:'RAW_POPULATION_NOT_NOVELTY_VALIDATED',disclosure:'Three independent AI-agent streams authored the initial 300. A separately labeled root stream, where present, addresses coverage gaps after integration; it is not blind to the first three. Diversity is not evidence of novelty. No seed was scored before sharpening. Exact-string uniqueness does not establish semantic distinctness.',operator_counts:counts,candidates};
fs.writeFileSync(path.join(here,'generation4_raw.json'),JSON.stringify(artifact,null,2)+'\n');
const ledger={version:'0.1.0',namespace:'D4',canonical_public_status:'UNCHANGED_V0_5',entries:candidates.map(c=>({candidate_id:c.id,exact_proposition:c.proposition,stage:'RAW_UNSHARPENED',known:[],new_residue:null,closest_prior_works:[],novelty_dimensions:null,novelty_classification:'UNCLEAR',confidence_in_novelty:null,confidence_in_empirical_reality:null,verification:'NO_NEW_PRIOR_ART_COURT_YET',public_claim:false}))};
fs.writeFileSync(path.join(here,'novelty-ledger.json'),JSON.stringify(ledger,null,2)+'\n');
console.log(JSON.stringify({count:candidates.length,operator_counts:counts,semantic_distinctness:'requires manual review',scores:'none'}));
