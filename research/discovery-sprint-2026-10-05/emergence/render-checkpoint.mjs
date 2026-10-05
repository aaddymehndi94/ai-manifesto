import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.dirname(here);
const read=name=>JSON.parse(fs.readFileSync(path.join(root,name),'utf8'));
const choice=read('emergence/checkpoint-selection.json');
const clarifications=new Map(read('emergence/editorial-loop-clarifications.json').entries.map(x=>[x.id,x]));
const paradoxClarifications=new Map(read('emergence/editorial-paradox-clarifications.json').entries.map(x=>[x.id,x]));
const population=read('emergence/compound_population.json');
const paradoxPopulation=read('emergence/paradox_population.json');
const scales=read('emergence/scale_transition_population.json').scale_transitions;
const byId=new Map(population.compounds.map(c=>[c.id,c]));
const paradoxById=new Map(paradoxPopulation.paradoxes.map(c=>[c.id,c]));
const text=x=>typeof x==='string'?x:Array.isArray(x)?x.map(text).join('; '):x&&typeof x==='object'?Object.entries(x).map(([k,v])=>`${k.replaceAll('_',' ')}: ${text(v)}`).join('; '):String(x??'Not specified');
const field=(label,value)=>`**${label}.** ${text(value)}\n\n`;
const loopText=c=>typeof c.causal_loop==='string'?c.causal_loop:(c.causal_loop.signed_edges||[]).map(e=>e.edge||`${e.from} → ${e.to} (${e.sign})${e.mechanism?`: ${e.mechanism}`:''}`).join('; ');
const title=c=>c.working_name||c.title||c.name||c.id;
const intro=`# Blue-team emergence: twenty-five compound constructions

Research checkpoint, 2026-10-05. The population contains **150 compound drafts,
51 paradox drafts and 17 scale-transition probes**. Counts show coverage, not
150 independent discoveries. Related mechanisms and unresolved overlaps remain
visible in the raw streams. No candidate from the earlier 120 was discarded.
No additional novelty court or literature search occurred in this phase.

The constructions below examine what delegation changes in the environment that
later evaluates, recognizes or sustains delegation. A grant can remain fixed
while that environment changes. This is a possible family of research objects,
not a selected theory or a claim that existing researchers have missed it.

## Five distinctions worth carrying forward

| Matched current observation | State that may differ | Later separating task |
|---|---|---|
| Equal current expert skill | Production paths for the next cohort | Rebuild independent capability after mentors retire |
| Equal provider count and complete exports | Accepted recognition paths | Continue essential relationships after an issuer disappears |
| Sincere individual grants and working veto buttons | Joint substitutes and legitimate collective standing | Refuse together while maintaining specified essentials |
| Successful deletion and fresh truthful intake | Learned categories and opportunities already produced | Obtain a genuinely new assessment under a new provider |
| Zero local stop latency | Outstanding obligations and restoration resources | End counterparty reliance within the needed horizon |

These distinctions inherit much of their machinery. The new-question test is
whether a closed interaction creates a specific prediction that the strongest
existing treatments do not already contain. That historical comparison has
deliberately not been performed here. A graph made from old edges is eligible;
an unimportant restatement remains unimportant.

## Development emphasis, not eliminations

The main agent read compact property/prediction projections for all 150 drafts
and the full developed fields for these 25. Selection is qualitative and
multidimensional; there is no total score or winning concept. Each entry retains
its genetic components, cross-edge test, counterexample route and benefit.
The entire population is in [compound_population.json](emergence/compound_population.json).

`;
let blue=intro;
for(const selected of choice.compounds){const c=byId.get(selected.id);blue+=`## ${c.id} — ${title(c)}\n\n`;
blue+=field('Why develop this',selected.reason);
blue+=field('Components',c.component_ideas.map(x=>x.id));
const clarification=clarifications.get(c.id);
blue+=field('Causal structure',clarification?.display_loop||loopText(c));
if(clarification)blue+=field('Explicit return-link assumption',clarification.added_assumption);
blue+=field('Emergent property',c.emergent_property);
blue+=field('What the composition adds to its literal components',c.why_absent_in_components);
blue+=field('Conditional surprise',c.surprising_prediction);
blue+=field('Possible measurement',c.measurable_state_variable);
blue+=field('Candidate regime and assumptions',c.threshold_equilibrium_hysteresis);
blue+=field('Minimal falsifier',c.minimal_falsifier);
blue+=field('Critical-edge removal',c.causal_loop.edge_removal_counterfactual||c.cross_edge_ablation||c.edge_ablation||c.edge_removal_counterfactual||c.causal_loop.cross_edge_ablation||'See the full construction and its neutral control.');
blue+=field('Beneficial same-mechanism case',c.beneficial_mirror);
blue+=field('Neutral control',c.neutral_control);
blue+=field('Main-agent caution',selected.editorial_caution);
if(c.id==='E4:M005')blue+='**Additional strengthening.** Precision must enter an explicit ranking rule. Under a lower-confidence-bound score, equal truthful means can receive different risk-adjusted ranks. Inferior comparative knowledge is relative to a same-budget balanced allocation; cumulative stationary evidence need not deteriorate. See [strengthened-M005.md](emergence/strengthened-M005.md).\n\n';
if(c.id==='E4:M087')blue+='**Additional strengthening.** The funding return from certificate use to entry or recognition must change a prediction beyond static adapter fragmentation. See [strengthened-M087.md](emergence/strengthened-M087.md).\n\n';
}
blue+='## Three five-item development portfolios\n\nThese are nonexclusive types of upside, not three rankings of historical novelty. No winner is selected. Confidence in novelty and empirical reality is not yet established. The fifteen entries here are distinct, but related programs may eventually merge.\n\n';
for(const [name,items]of Object.entries(choice.portfolios)){blue+=`### ${name.replaceAll('_',' ')}\n\n`;for(const item of items)blue+=`- **${item.id} — ${title(byId.get(item.id))}.** ${item.reason} Main uncertainty: ${item.main_uncertainty}\n`;blue+='\n';}
blue+=`## Checkpoint boundary\n\nAll 120 sharpened inputs and 320 raw propositions remain available. The public v0.5 paper, manifesto, concepts and website are unchanged. Seven constructive model checks and twenty-one recorded tradeoff attempts are not empirical evidence or novelty certifications. No broad impossibility triangle was established. The next phase may compare the strongest versions against actual full causal structures, outcomes, predictions and interventions. It must not convict a composition merely for having ancestors.\n`;
fs.writeFileSync(path.join(root,'blue_team_emergence.md'),blue);

let paradox=`# Twenty developed paradox candidates\n\nResearch checkpoint, 2026-10-05. There are 51 raw candidates in [paradox_population.json](emergence/paradox_population.json). These twenty are conditional tensions, not logical contradictions, forecasts or established new paradoxes. Each preserves the desirable premises, names the extra coupling and gives an escape. Local improvements can be real while a different collective or later outcome worsens. No new court has evaluated their historical novelty.\n\n`;
for(const selected of choice.paradoxes){const p=paradoxById.get(selected.id);const clarification=paradoxClarifications.get(p.id);paradox+=`## ${p.id} — ${clarification?.display_title||title(p)}\n\n`;
paradox+=field('Proposition',p.paradox||p.conditional_paradox||p.strongest_version);
paradox+=field('Why develop it',selected.reason);
paradox+=field('Derivation',p.derivation);
paradox+=field('Necessary premises',p.assumptions);
paradox+=field('Counterexample',p.counterexample);
paradox+=field('Measurement',p.measurement);
paradox+=field('Falsifier',p.falsifier);
if(clarification)paradox+=field('Derivation limit',clarification.caution);
if(p.beneficial_mirror||p.beneficial_control)paradox+=field('Beneficial control',p.beneficial_mirror||p.beneficial_control);
paradox+=field('Related compounds',p.connected_compounds||p.compound_links);
}
paradox+='## Overlap is retained\n\nVeto feasibility, recognition, review timing, negative knowledge and representation recur across several drafts. They may be variants of fewer mechanisms. That is an integration question, not evidence that the search is exhausted. Exact-string uniqueness does not establish semantic independence. The complete 51 are preserved; none is retired at this checkpoint.\n';
fs.writeFileSync(path.join(root,'paradox_candidates.md'),paradox);

const cell=x=>text(x).replaceAll('|','\\|').replaceAll('\n',' ');
let scale=`# Seventeen individual-to-system transition probes\n\nResearch checkpoint, 2026-10-05. These are candidate non-linear mechanisms, not fitted adoption curves. The requested 1 user, 100 users, 10%, 50% and 90% are **probe levels**, never asserted critical fractions. Market, state and global infrastructure are different institutional couplings, not inevitable chronological stages. Specify each population before comparing percentages.\n\nA personal tool becomes infrastructure here only if counterparties, resource production or institutional recognition adapt so that other people's viable participation depends on it. Search for a financing floor, graph cut, missing prerequisite, resource feasibility boundary or recognized rule transition. Larger numbers alone do not constitute emergence.\n\n`;
for(const t of scales){scale+=`## ${t.id} — ${title(t)}\n\n`;
scale+=field('Population and probe scope',t.unit_of_adoption||t.population_definition||t.adoption_unit||t.unit||t.probe_levels_not_critical_fractions);
scale+=field('Candidate critical condition',t.nonlinear_mechanism||t.candidate_critical_condition||t.threshold||t.critical_condition);
scale+='| Probe | Conditional change | Coupling, limit or measurement |\n|---|---|---|\n';
for(const s of t.stages)scale+=`| ${cell(s.stage)} | ${cell(s.conditional_dynamics||s.conditional_prediction||s.mechanism||s.dynamics||s.change)} | ${cell(s.nonlinearity||s.condition||s.measurement||'Probe, not an asserted threshold')} |\n`;
scale+='\n';
scale+=field('Measurement',t.measurable_state_variable||t.measurement);
scale+=field('Beneficial branch',t.beneficial_mirror||t.beneficial_branch||t.positive_control);
scale+=field('Minimal falsifier',t.minimal_falsifier||t.falsifier);
scale+=field('Related compounds',t.connected_compounds||t.compound_ids||t.compound_links);
}
scale+='## No inevitability claim\n\nPublic alternatives, retained skills, independent recognition, protected review capacity, interoperable obligations and legitimately chosen collective rules can prevent or reverse these transitions. A threshold imposed by a toy cost function is not an empirically discovered social phase transition. Estimate gains and burdens for affected nonusers as well as subscribers.\n';
fs.writeFileSync(path.join(root,'scale_transitions.md'),scale);

const attempts=['a','b','c'].flatMap(s=>{const data=read(`emergence/raw/stream-${s}.json`);return(data.impossibility_attempts||data.attempted_tradeoffs||[]).map(x=>({...x,stream:s}));});
const basePath=path.join(root,'impossibility_search.md');
const marker='<!-- EMERGENCE_ATTEMPT_APPENDIX -->';
const base=fs.readFileSync(basePath,'utf8').split(marker)[0].trimEnd();
let appendix=`\n\n${marker}\n\n## Additional stream attempts and escapes\n\nThe thirteen main-agent attempts above and these eight stream records are twenty-one investigated attempts, not twenty-one distinct results. Several share the same resource or identification obstruction. Stream C investigated no additional impossibility triangle and preserved four failed compound constructions separately.\n\n`;
for(const a of attempts){appendix+=`### ${a.id} (stream ${a.stream})\n\n`;appendix+=field('Attempt',a.attempt);if(a.conditional_obstruction)appendix+=field('Restricted obstruction',a.conditional_obstruction);appendix+=field('Escape',a.escape);appendix+=field('Status',a.status);if(a.lesson)appendix+=field('Lesson',a.lesson);}
fs.writeFileSync(basePath,base+appendix);
fs.writeFileSync(path.join(here,'impossibility-attempts.json'),JSON.stringify({date:'2026-10-05',main_attempts:13,stream_attempts:attempts.length,distinct_results_not_claimed:true,attempts},null,2)+'\n');
console.log(JSON.stringify({compound_sections:choice.compounds.length,paradox_sections:choice.paradoxes.length,scale_sections:scales.length,stream_tradeoff_attempts:attempts.length,portfolios:Object.values(choice.portfolios).map(x=>x.length)}));
