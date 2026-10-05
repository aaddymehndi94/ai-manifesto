# Raw stream C — operator generation record

2026-10-05. Baseline: `35802ada98a8ba1205667f630a30c6f5739725c4` (`aaa-v0.5-baseline`). This file records raw generation, not scores, grades, empirical validation, or certified novelty. No other raw stream was read before this stream was complete.

## Population

| Operator | IDs | Count |
| --- | --- | ---: |
| 15 — adversarial interpretation | D4:I211–D4:I225 | 15 |
| 16 — beneficial mirror | D4:I226–D4:I240 | 15 |
| 17 — sign reversal | D4:I241–D4:I255 | 15 |
| 18 — hidden third party | D4:I256–D4:I270 | 15 |
| 19 — missing market | D4:I271–D4:I285 | 15 |
| 20 — alien abstraction | D4:I286–D4:I300 | 15 |
| Total | D4:I211–D4:I300 | 90 |

The module exports `candidates`. IDs are explicitly padded to three digits. Every record has the requested fields plus `countervailing_intervention`. Every operator-20 record also has `alien_mapping`, specifying a state variable and an intervention or controlled comparison. The beneficial mirror is a possible benefit from the same underlying structure, not the safeguard: safeguards are preserved separately. Commercial optimization, influence, dependence, and uncertain machine standing are not treated as automatic evidence of malice, harm, or patienthood.

The central targets are institutional knowledge production, recognition and workable exit, third-party effects, public and care spaces, the costs and semantics of infrastructure, uncertain lifecycle duties, and review dynamics. Provider acquisition of new permissions is not the dominant mechanism: D4:I211 and D4:I289 directly examine review bundles or permission-grant composition. A conservative broader set also includes D4:I214, D4:I217, D4:I224, D4:I225, D4:I243, D4:I255, D4:I268, D4:I273, D4:I275, D4:I285, D4:I290, and D4:I299, even though most concern interoperability, contestability, or allocation rather than provider permission acquisition. This inclusive count is 14/90, below 30/90.

## Local overlap concerns retained for later work

No exact repeated working names or propositions were found. This is a syntactic check, not evidence against semantic overlap. No cross-stream comparison was performed during raw generation.

- D4:I215, D4:I247, D4:I277, and D4:I286 share the recognition/exit neighborhood. Their proposed changed variables differ: live-subscription credential validity; fragmentation under provider entry; successor underwriting; removal of a recognition-network anchor. They need comparison, not automatic merging.
- D4:I213, D4:I254, D4:I279, and D4:I288 concern expertise formation. They respectively change drill provenance, common syllabus dependence, procurement selection, and the missing intermediate difficulty distribution. Ordinary instructional design or principal-agent accounts may cover substantial components.
- D4:I217, D4:I248, D4:I266, D4:I275, and D4:I296 concern review burden. Filing eligibility, coupled decision/appeal throughput, volunteer displacement, overlapping advance claims, and arrival synchronization must not be treated as five discoveries solely because their vocabulary differs.
- D4:I230 and D4:I252 concern retained disagreement, but distinguish active circulation of household reasons from recovery of conflicting institutional justifications. D4:I226 introduces a handover learning channel rather than merely retaining either kind of reason.
- D4:I258, D4:I276, and D4:I293 concern space. They distinguish unobserved present use, a motion/storage price boundary, and dormant options with slow physical restoration.
- D4:I231, D4:I271, and D4:I284 share the expertise commons, but concern credit-mediated case production, unfunded standby production, and withholding a privately advantageous public contribution.
- D4:I269 is deliberately retained raw despite its recognizable collateral/fire-sale ancestry. D4:I296 and D4:I300 likewise inherit queueing and coupled-control components; a familiar mechanism becoming formalizable does not itself create residue. D4:I299 needs comparison against ordinary deliberative exploration and settlement scheduling.

D4:I239 was replaced during the local pass: a credential-decoupling proposal overlapped too strongly with D4:I215. Its replacement concerns visible maintenance recruiting voluntary repair knowledge and relationships. No record was assigned a score or sharpened in this raw stage.

## Validation commands and results

The exact module-validation command was:

```sh
node --input-type=module -e 'import { candidates } from "./research/discovery-sprint-2026-10-05/raw/stream-c.mjs"; const required=["id","operator","working_name","proposition","old_parents","level_of_analysis","timescale","variables","beneficial_mirror","countervailing_intervention","why_not_old_paraphrase"]; const missing=candidates.flatMap(c=>required.filter(k=>!(k in c)).map(k=>({id:c.id,key:k}))); const counts=Object.fromEntries([...new Set(candidates.map(c=>c.operator.number))].map(n=>[n,candidates.filter(c=>c.operator.number===n).length])); const badIds=candidates.filter((c,i)=>c.id!==`D4:I${String(211+i).padStart(3,"0")}`); const duplicateNames=candidates.map(c=>c.working_name).filter((n,i,a)=>a.indexOf(n)!==i); const duplicatePropositions=candidates.map(c=>c.proposition).filter((n,i,a)=>a.indexOf(n)!==i); console.log(JSON.stringify({count:candidates.length,range:[candidates[0].id,candidates.at(-1).id],counts,missing,badIds,duplicateNames,duplicatePropositions,alienMappings:candidates.filter(c=>c.operator.number===20&&c.alien_mapping).length,parents:[...new Set(candidates.flatMap(c=>c.old_parents))].sort()},null,2)); if(candidates.length!==90||missing.length||badIds.length||duplicateNames.length||duplicatePropositions.length) process.exitCode=1;'
```

Result: exit 0; count 90; range D4:I211–D4:I300; all six operator counts 15; missing fields, bad IDs, exact repeated names, and exact repeated propositions all empty; alien mappings 15.

The frozen-parent validation command was:

```sh
node --input-type=module -e 'import {execFileSync} from "node:child_process";import {candidates} from "./research/discovery-sprint-2026-10-05/raw/stream-c.mjs";const p=JSON.parse(execFileSync("git",["show","35802ada98a8ba1205667f630a30c6f5739725c4:research/idea_population.json"],{encoding:"utf8"}));const old=new Map(p.generations.flatMap(g=>g.candidates).map(c=>[c.id,c]));const used=[...new Set(candidates.flatMap(c=>c.old_parents))].sort();const missing=used.filter(id=>!old.has(id));console.log(JSON.stringify({baseline:"35802ada98a8ba1205667f630a30c6f5739725c4",uniqueOldParentCount:used.length,missing,parents:used.map(id=>({id,name:old.get(id)?.name}))},null,2));if(missing.length)process.exitCode=1;'
```

Result: exit 0; 83 unique old parent IDs; no missing IDs. This verifies provenance identifiers, not novelty or the strength of each proposed ancestry relation. The old parent titles were inspected against each mechanism. These checks do not run or validate any proposition in the world.

Only `raw/stream-c.mjs` and this note were written for raw generation; no public file, baseline code, or commit was changed.
