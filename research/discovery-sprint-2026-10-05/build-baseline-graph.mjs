import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = execFileSync('git', ['rev-parse', '--show-toplevel'], {encoding:'utf8'}).trim();
const here = path.join(root, 'research/discovery-sprint-2026-10-05');
const frozenText = file => execFileSync('git',['show',`aaa-v0.5-baseline:${file}`],{encoding:'utf8',maxBuffer:10*1024*1024});
const read = file => JSON.parse(frozenText(file));
const population = read('research/idea_population.json');
const ledger = read('research/novelty-ledger.json');
const all = population.generations.flatMap(g => g.candidates);
const entries = new Map(ledger.entries.map(e => [e.candidate_id, e]));
// Retrieval annotations only. Matching vocabulary is neither a causal claim nor a
// discovery. A candidate dossier must replace these tags with an explicit model.
const variables = {
  formal_authority: /authoriz|permission|mandate|delegation|grant|scope|revocation/i,
  effective_authority: /bargain|power|leverage|authority|control|standing|gatekeep/i,
  evidence: /observ|evidence|provenance|record|confidence|inference|prediction|audit/i,
  preference: /prefer|want|goal|desire|value|endorse|satisf/i,
  competence: /skill|competenc|expert|practice|learn|performance|judgment|teach/i,
  dependence: /depend|reliance|indispens|necessary|continuity/i,
  exit: /exit|withdraw|portab|switch|recover|substitut|cancel|terminat/i,
  legitimacy: /legitim|consent|rights|principal|veto|ratif|duti|obligation/i,
  market_power: /market|vendor|provider|seller|buyer|ownership|concentrat|competi/i,
  infrastructure: /infrastructure|protocol|common.mode|outage|network|interop/i,
  norms: /norm|ritual|culture|expect|religio|tradition|status|social/i,
  representation: /model|profil|interpret|meaning|categor|inference|representation/i,
  memory: /memor|history|histor|record|forget|context|provenance/i,
  identity: /identity|personhood|continuity|child|death|deceased|posthum|copy|duplic/i,
  counterparty_behavior: /counterpart|neighbor|others|seller|buyer|institution|community|collective/i,
};
const levels = {
  person: /person|user|human|individual|child|patient|companion|preference/i,
  household: /household|family|resident|domestic|home|caregiver/i,
  firm: /firm|employ|worker|vendor|provider|organization|institutional memory/i,
  market: /market|buyer|seller|bargain|competition|price|negotiat/i,
  profession: /expert|apprentice|junior|skill|clinician|certif|professional/i,
  institution: /institution|school|community|public|collective|law|religio/i,
  state: /state|civic|government|politic|democra|jurisdiction|voting/i,
  civilization: /societ|civiliz|population|intergenerational|international|cultural/i,
};
const nodes = all.map(c => {
  const e = entries.get(c.id);
  const text = [c.name,c.proposition,c.closest_prior_art_family,c.distinguishing_test,c.strongest_objection].join(' ');
  const tags = Object.entries(variables).filter(([,re])=>re.test(text)).map(([k])=>k);
  const layer = Object.entries(levels).filter(([,re])=>re.test(text)).map(([k])=>k);
  const children = all.filter(x=>(x.parents??[]).includes(c.id)).map(x=>x.id);
  return {
    id:c.id, generation:c.generation, creativity_mode:c.mode, name:c.name,
    proposition:c.proposition, baseline_status:c.status,
    reason_for_rejection_or_retirement:c.selection_reason,
    strongest_recorded_objection:c.strongest_objection??e?.review_note??null,
    closest_literature_family:c.closest_prior_art_family??e?.closest_known_precedent??null,
    proposed_distinguishing_test:c.distinguishing_test??null,
    historical_scores:c.scores, historical_score_profile:c.scoring_profile??null,
    novelty_score:c.scores.novelty, generative_power_score:c.scores.generative_power,
    research_program_potential_score:c.scores.research_program_potential,
    score_status:'Inherited editorial ratings, not independently re-evaluated measurements.',
    parents:c.parents??[], children, variables:tags,
    level_of_analysis:layer.length?layer:['unresolved'],
    timescale:/child|aging|posthum|intergenerational|apprentice|expert supply/i.test(text)?'years_to_generations':/memory|withdraw|switch|depend|habit|continuity/i.test(text)?'repeated_interaction_to_years':'event_to_repeated_interaction',
    annotation_method:'Vocabulary-assisted retrieval inference; timescale and levels need dossier validation.',
    prior_art_verification:e?.verification_level??'See baseline source-specific record; not independently rechecked here.',
    prior_art_record:e??null,
    superseded_without_recorded_child:c.status==='RETIRED_SUPERSEDED'&&children.length===0,
    interaction_candidates:[],
  };
});
// All 120 local field-map records were outside the canonical tournament. Preserve
// them separately, without inventing rejected status, score, or parent mappings.
for(const file of ['research/notes/ai-robotics-prior-art.md','research/notes/human-sciences-prior-art.md','research/notes/systems-governance-prior-art.md']){
  const lines=frozenText(file).split('\n');
  for(let i=0;i<lines.length;i++){
    if(!/^\| (AR-\d+|HS-C\d+|SG-\d+) \|/.test(lines[i]))continue;
    const columns=lines[i].split('|').slice(1,-1).map(x=>x.trim());
    const [id,proposition,family,testOrDecision,decision]=columns;
    const text=columns.join(' ');
    const tags=Object.entries(variables).filter(([,re])=>re.test(text)).map(([k])=>k);
    const layer=Object.entries(levels).filter(([,re])=>re.test(text)).map(([k])=>k);
    const name=proposition.match(/\*\*(.*?)\*\*/)?.[1]??id;
    nodes.push({id,record_kind:'LOCAL_FIELD_MAP_SEED',generation:0,name,proposition,
      baseline_status:decision??testOrDecision??'LOCAL_SEED_NO_CANONICAL_DECISION',
      reason_for_rejection_or_retirement:null,closest_literature_family:family,
      proposed_distinguishing_test:columns.length>=5?testOrDecision:null,
      historical_scores:null,novelty_score:null,generative_power_score:null,research_program_potential_score:null,
      score_status:'Not scored in canonical population; no score invented.',parents:[],children:[],
      variables:tags,level_of_analysis:layer.length?layer:['unresolved'],timescale:'unresolved_in_local_record',
      annotation_method:'Exact local table cells plus vocabulary-assisted retrieval tags; not a new novelty judgment.',
      prior_art_verification:'Local field-map ancestry; no new complete-proposition comparison.',
      source:{path:file,line:i+1},original_table_cells:columns,
      interaction_candidates:[],superseded_without_recorded_child:false,
    });
  }
}
// These edges suggest places to inspect; they do not assert that the composition
// exists, is important, or is novel. Keep that epistemic distinction machine-readable.
const interactionEdges = [];
for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
  const a=nodes[i],b=nodes[j];
  const overlap=a.variables.filter(v=>b.variables.includes(v));
  const scaleDifference=a.level_of_analysis.some(v=>!b.level_of_analysis.includes(v));
  if(overlap.length>=3&&scaleDifference){
    interactionEdges.push({from:a.id,to:b.id,type:'retrieval_interaction_candidate',shared_variables:overlap,established:false});
    a.interaction_candidates.push(b.id); b.interaction_candidates.push(a.id);
  }
}
const graph = {
  version:'0.1.0', namespace:'D4', baseline:'aaa-v0.5-baseline',
  meaning:'Mutation-library index. Historical rejection is preserved, not endorsed as a composition-level refutation.',
  annotation_limits:'Keyword-assisted tagging and co-occurrence edges are retrieval aids. No causal edge or new novelty judgment is inferred from them.',
  record_counts:{canonical_candidates:all.length,local_field_map_seeds:nodes.length-all.length,distinct_hypotheses:'Not established; historical records overlap.'},
  nodes,
  edges:[...all.flatMap(c=>(c.parents??[]).map(id=>({from:id,to:c.id,type:'recorded_parent'}))),...interactionEdges],
};
fs.writeFileSync(path.join(here,'idea_graph.json'), JSON.stringify(graph,null,2)+'\n');
const files = execFileSync('git',['ls-tree','-r','--name-only','aaa-v0.5-baseline'],{encoding:'utf8'}).trim().split('\n');
const hashes = files.filter(f=>/^(research|paper|manifesto|framework|world|experiments|debates|reviews|site|public|scripts)\//.test(f)).map(file=>({file,sha256:crypto.createHash('sha256').update(execFileSync('git',['show',`aaa-v0.5-baseline:${file}`],{maxBuffer:10*1024*1024})).digest('hex')}));
fs.writeFileSync(path.join(here,'baseline-hashes.json'),JSON.stringify({baseline:'aaa-v0.5-baseline',files:hashes},null,2)+'\n');
console.log(JSON.stringify({nodes:nodes.length,recorded_parent_edges:graph.edges.filter(e=>e.type==='recorded_parent').length,retrieval_edges:interactionEdges.length,retired_without_children:nodes.filter(n=>n.superseded_without_recorded_child).map(n=>n.id),hashed_files:hashes.length}));
