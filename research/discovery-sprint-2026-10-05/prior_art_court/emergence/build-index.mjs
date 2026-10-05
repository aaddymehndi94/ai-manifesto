// Additive comparison index. Never edits the blue-team construction ledger.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const sprint = path.resolve(here, '../..');
const gate = JSON.parse(fs.readFileSync(path.join(sprint, 'emergence/checkpoint-gate.json')));
assert.equal(gate.status, 'REQUIRED_CHECKPOINT_COMPLETE_NOT_FINAL_DISCOVERY');
const ids = ['M004', 'M005', 'M011', 'M023', 'M087', 'M101', 'M105'];
const axes = {
  variables: ['variables', 'same_variables'],
  causal_structure: ['causal_structure', 'whole_graph', 'same_full_causal_graph'],
  beneficiary: ['beneficiary', 'same_beneficiary'], outcome: ['outcome', 'same_outcome'],
  timescale: ['timescale', 'same_timescale'],
  prediction: ['prediction', 'same_distinguishing_prediction'],
  intervention: ['intervention', 'same_intervention'],
};
const logs = {
  M004:'query-log-a.json', M005:'root-M005-search-log.json', M011:'root-M011-search-log.json',
  M023:'query-log-a.json', M087:'M087-query-log.json',
  M101:'query-log-c-M101-M105.json', M105:'query-log-c-M101-M105.json',
};
const titles = {
  M004:'Category regeneration after verified erasure',
  M005:'Conservative allocation versus comparative knowledge',
  M011:'Current expertise versus developmental reproduction',
  M023:'Standing-filtered evidence for recommissioning an adapter',
  M087:'Receipt-funded entry versus independent recognition',
  M101:'Reproduction of jointly executable veto capacity',
  M105:'Immediate stopping versus recognized collective release',
};
const rows = ids.map(id => {
  const d = JSON.parse(fs.readFileSync(path.join(here, `${id}.json`)));
  const sources = d.sources ?? d.primary_works ?? d.primary_comparisons ?? d.nearest_primary_works;
  assert(sources.length >= 5, `${id}: fewer than five primary comparisons`);
  for (const file of [`${id}.md`, logs[id]]) assert(fs.existsSync(path.join(here,file)), `${id}: missing ${file}`);
  const normalized = sources.map(s => {
    const c = s.comparison ?? s.seven_equivalence_checks ?? s.equivalence;
    const comparison = Object.fromEntries(Object.entries(axes).map(([axis, keys]) => {
      const value = keys.map(key => c?.[key]).find(value => typeof value === 'string' && value.length);
      assert(value, `${id}/${s.id ?? s.source_id}: missing ${axis}`);
      return [axis,value];
    }));
    const url = s.url ?? s.primary_url;
    assert(/^https?:\/\//.test(url), `${id}: missing source URL`);
    const prior = s.prior_proposition ?? s.exact_proposition_paraphrase ?? s.exact_paraphrased_proposition ?? s.exact_prior_proposition_paraphrase;
    assert(prior, `${id}: missing prior proposition`);
    return {
      local_id:s.id ?? s.source_id, title:s.title, authors:s.authors,
      year:s.year ?? s.publication_year, url,
      inspected_version:s.inspected_version ?? s.version ?? null,
      inspection:s.inspection ?? s.inspected_coverage ?? s.inspected_passages,
      reading_limits:s.inspection_limits ?? s.reading_limits ?? null,
      prior_proposition:prior, comparison,
    };
  });
  const remainder = d.provisional_remainder_class ?? d.remainder_class ?? d.provisional_classification?.residue;
  assert(remainder, `${id}: missing provisional class`);
  return {
    id:`E4:${id}`, name:titles[id], version:'0.1.0', claim_type:'PROPOSED_COMPOSITION',
    status:'RETAINED_FOR_DEVELOPMENT_NOT_A_NOVELTY_CERTIFICATION',
    provisional_remainder_class:remainder,
    narrower_status:d.narrower_research_status ?? d.narrow_extension_status ?? d.provisional_classification?.residue ?? 'UNVERIFIED',
    strongest_version:d.strongest_version ?? d.strongest_developed_version ?? d.strongest_defensible_version,
    known:d.known ?? d.KNOWN,
    new_residue:d.new_residue ?? d.preliminary_NEW_RESIDUE ?? d.NEW_RESIDUE,
    construction_record:'../../emergence/compound_population.json',
    human_record:`${id}.md`, machine_record:`${id}.json`, actual_query_log:logs[id],
    sources:normalized,
    review_status:'AUTHOR_OR_CONSTRUCTION_AGENT_COMPARISON_NOT_BLIND_DISCIPLINARY_REVIEW',
    historical_priority:'NOT_ESTABLISHED', empirical_reality:'NOT_ESTABLISHED',
    discarded:false, canonical_claim:false, winner:false,
  };
});
const result = {
  version:'0.1.0', date:'2026-10-05', phase:'POST_BLUE_CHECKPOINT_COMPARISONS', gate_commit:'87ee7bc',
  construction_ledger:'../../emergence/novelty-ledger.json', baseline_unchanged:true,
  paused_population_preserved:true,
  disclosure:'Seven initial comparisons, not the full tournament. Counts measure recorded comparisons, not exhaustive coverage, independent discoveries or complete full-text readings. Provisional classes retire no idea. Inspection limits are preserved in linked records.',
  records:rows,
};
fs.writeFileSync(path.join(here,'novelty-ledger.json'), JSON.stringify(result,null,2)+'\n');
const md = [
  '# Whole-composition comparisons: initial batch', '',
  'These searches began only after the six-report blue-team checkpoint. All 150 compounds and the paused 120 sharpened candidates remain retained. No winner, public claim revision or historical-priority finding is made.', '',
  'Seven records distinguish known full mechanisms from unresolved narrower specifications. This is not the original sixty-court tournament or a fresh blind review panel. An unverified experimental specification can remain useful when its general feedback is inherited.', '',
  '| Construction | Provisional remainder | Primary comparisons |', '| --- | --- | --- |',
  ...rows.map(r=>`| [${r.id}: ${r.name}](${r.human_record}) | ${r.provisional_remainder_class} | ${r.sources.length} |`), '',
  'Counts include actual inspected primary sources at explicitly differing depths, including partial books, abstracts and official descriptions where marked. They establish neither literature exhaustion nor the absence of a composition.', '',
  '[Additive machine-readable ledger](novelty-ledger.json). The earlier [construction ledger](../../emergence/novelty-ledger.json) is unchanged, preserving its pre-court unassessed status.', '',
  'Next: sharpen retained mutations, develop distinguishing tests and resource-conserving controls, and seek fresh disciplinary reviews where a substantial residue remains. No automatic elimination follows from a source comparison.', '',
];
fs.writeFileSync(path.join(here,'README.md'),md.join('\n'));
console.log(JSON.stringify({records:rows.length,source_comparisons:rows.reduce((n,r)=>n+r.sources.length,0),axes_per_comparison:7,status:'passed',pruning:false}));
