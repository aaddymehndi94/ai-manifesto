import fs from 'node:fs';
import { groups } from '../research/candidates-g1.mjs';

const population = JSON.parse(fs.readFileSync('research/idea_population.json', 'utf8'));
if (population.generations.length > 1) throw new Error('Generation-one compilation cannot overwrite later recorded evolution.');
const positive = population.positive_dimensions;
const risks = population.risk_dimensions;
// Screening profiles are editorial ordinal judgments. They are not measurements,
// independent ratings, or posterior probabilities. Ancestry flags cap novelty.
const profiles = {
  established: [2,7,6,5,6,5,5,7,6,7,5,5,4,2,4,4,7, 7,3,9,2,8],
  empirical: [3,7,5,6,6,6,4,8,6,6,6,6,6,3,5,6,7, 4,2,7,4,5],
  technical: [4,8,7,7,7,8,5,7,9,7,8,6,7,4,6,7,8, 3,2,7,3,5],
  unusual: [5,6,4,4,5,3,7,6,4,4,3,7,7,4,3,5,6, 3,6,6,3,4]
};
const held = new Map([
  [3,'Observation opportunities are affected by anticipatory assistance; needs a measurable diagnostic gap.'],
  [27,'Consumer versus persuasion agents may shift competition toward state-shaping rather than price; requires equilibrium model.'],
  [46,'Revised: distinguish truthful behavior used under an authentic adaptive grant from corrupted permission memory.'],
  [47,'Handoff may lose intervention ancestry while preserving authentic events; requires distinction from ordinary provenance.'],
  [49,'Withdrawal trajectory differs from adoption; requires a formal hysteresis test.'],
  [60,'Coupled preference controllers need attribution; prioritize interference measurement rather than a moral maxim.'],
  [65,'Prediction confidence and authority evidence need not move together; test conditions where they diverge.'],
  [91,'Scope-promotion gate is implementable; inherited security idea unless endogenous grant conditions differ.'],
  [131,'Portability benchmark can test both state quality and mandate integrity.'],
  [134,'Aggregate exit feasibility under correlated outages may expose a system-level threshold.'],
  [136,'Unequal observation of influence effects could make accountability asymmetrical.'],
  [154,'Candidate framework scaffold; novelty must live in a specified adaptive-rule failure, not a general consent principle.']
]);
const technicalIndices = new Set([4,6,7,10,14,15,21,45,46,47,48,49,50,51,52,54,56,58,59,60,61,62,63,64,65,66,89,90,91,92,94,95,97,98,100,101,103,104,105,106,107,108,109,110,112,113,121,122,124,128,131,134,135,136,137,138,140,142,145,146,147,149,150,151,154]);
let n = 0;
const ideas = Object.entries(groups).flatMap(([mode,rows]) => rows.map(row => {
  n++;
  const profileName = technicalIndices.has(n) ? 'technical' : mode === 'strange_consequences' || mode === 'human_perspective' ? 'empirical' : mode === 'alien_observer' ? 'unusual' : 'established';
  const values = [...profiles[profileName]];
  if (held.has(n)) { values[0] = 5; values[13] = 4; values[15] = 8; values[19] = 6; }
  const id = `I${String(n).padStart(3,'0')}`;
  return {id, generation:1, mode, name:row[0], proposition:row[1], claim_type:mode==='strange_consequences'||mode==='civilizational'?'SPECULATIVE':mode==='machine_perspective'||mode==='human_perspective'?'DESIGN_PRINCIPLE':'PHILOSOPHICAL', epistemic_status:'PROPOSED_HERE', closest_prior_art_family:row[2], distinguishing_test:row[3], strongest_objection:row[4], scoring_profile:profileName, scores:Object.fromEntries([...positive,...risks].map((k,i)=>[k,values[i]])), scoring_note:'Preliminary editorial screening; literature review can only lower these provisional novelty ratings until a distinct extension is demonstrated.', status:held.has(n)?'MUTATE':'REJECTED_AS_CENTER', selection_reason:held.get(n)??'No demonstrated irreducible novelty; retain as a background observation or testable supporting hypothesis.', history:[{generation:1,event:held.has(n)?'held_for_mutation':'rejected_as_intellectual_center',date:'2026-10-04'}]};
}));
population.generations = [{number:1,date:'2026-10-04',method:'154 individually authored seeds across seven creativity modes; scores use disclosed screening profiles.',candidates:ideas}];
population.scoring_disclosure = 'All scores are one editorial screening pass using four profiles plus documented overrides. They are neither independent reviewer scores nor empirical evaluations.';
fs.writeFileSync('research/idea_population.json',JSON.stringify(population,null,2)+'\n');
const ledger = JSON.parse(fs.readFileSync('research/novelty-ledger.json','utf8'));
ledger.entries = ideas.map(x=>({candidate_id:x.id,exact_proposition:x.proposition,closest_known_precedent:x.closest_prior_art_family,original_author:null,year:null,field:x.mode,source:null,verification_level:'family_identified_source_match_pending',similarity:x.strongest_objection,crucial_difference:x.distinguishing_test,difference_type:'NOT_ESTABLISHED',status:x.status==='MUTATE'?'SEARCHING':'REJECTED',survives:x.status==='MUTATE',grade:null,review_note:x.selection_reason}));
fs.writeFileSync('research/novelty-ledger.json',JSON.stringify(ledger,null,2)+'\n');
const table = ideas.map(x=>`| ${x.id} | ${x.name} | ${x.closest_prior_art_family} | ${x.status} |`).join('\n');
fs.writeFileSync('research/novelty-ledger.md',`# Novelty ledger — generation 1\n\n154 candidates; 142 rejected as intellectual centers; 12 held for mutation. No A-grade discoveries established. Source-family matches are leads pending proposition-level source mapping; missing author/year fields are intentional and do not certify prior art.\n\nScores are disclosed editorial screening judgments, not evidence of novelty. Full propositions, tests, objections, and score vectors are in idea_population.json.\n\n| ID | Candidate | Closest family | Decision |\n|---|---|---|---|\n${table}\n`);
fs.writeFileSync('research/rejected-ideas.md',`# Rejected ideas — generation 1\n\nRejection means excluded from the intellectual center, not asserted false. These observations can remain valuable supporting material. Novelty court may reopen an entry with evidence.\n\n${ideas.filter(x=>x.status==='REJECTED_AS_CENTER').map(x=>`## ${x.id}: ${x.name}\n\n**Proposition:** ${x.proposition}\n\n**Generation:** 1. **Closest family:** ${x.closest_prior_art_family}.\n\n**Reason:** ${x.strongest_objection} ${x.selection_reason}\n\n**Potential test:** ${x.distinguishing_test}\n`).join('\n')}`);
fs.writeFileSync('research/candidates-g1.md',`# First candidate population\n\nThese are search seeds. None is a confirmed discovery.\n\n${Object.keys(groups).map(mode=>`## ${mode.replaceAll('_',' ')}\n\n${ideas.filter(x=>x.mode===mode).map(x=>`### ${x.id}: ${x.name}\n\n${x.proposition}\n\nPrior-art lead: ${x.closest_prior_art_family}. Attack: ${x.strongest_objection}\n\nDiscriminating test: ${x.distinguishing_test}\n`).join('\n')}`).join('\n')}`);
console.log(JSON.stringify({candidates:ideas.length,rejected:ideas.filter(x=>x.status==='REJECTED_AS_CENTER').length,held:held.size}));
