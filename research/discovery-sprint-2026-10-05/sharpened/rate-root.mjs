import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const dims=JSON.parse(fs.readFileSync(path.join(here,'../rating-dimensions.json'),'utf8'));
// Each vector is an individually authored judgment after the sharpened contrast
// and five-work challenge. They are not generated from editorial class membership.
const rows=[
 ['D4:I301','2 8 7 8 5 8 4 8 8 7 8 6 7 2 7 6 8 3 2 3 5 5 5 4 8 1 5 8 7 2 6 3','4 2 8 3 6 5 8 2 3 2 3 2 1 3 6','Outcome-matched exception labor makes a useful workflow contrast. Multitask incentives and control incentives already explain its direction; commercial relevance does not make a new theorem.'],
 ['D4:I302','3 9 8 6 7 6 6 9 7 7 6 7 8 3 6 8 9 4 3 5 5 5 7 6 6 2 7 6 9 3 7 4','5 3 7 3 5 4 7 5 5 4 3 3 1 3 3','Switching versus non-adoption viability is socially consequential and worth separately measuring. Existing adoption, power and institutional theories likely contain the causal explanation; field identification remains difficult.'],
 ['D4:I305','2 6 6 8 4 7 3 7 7 7 8 5 5 2 7 5 7 2 2 3 4 4 4 4 8 1 4 8 5 1 5 2','3 1 8 2 7 7 8 2 2 2 2 1 1 2 7','Information-matched consumed slots is precise and experimentally separable. Exploration-induced choice-set change is explicit prior art, so this is an application rather than a foundational discovery.'],
 ['D4:I306','2 7 8 8 5 8 3 7 8 8 8 5 6 2 8 6 8 2 2 4 3 3 6 5 8 1 4 8 7 1 4 2','4 1 9 3 8 6 9 2 2 2 2 1 1 3 7','Unsubmitted demand is a practical evaluation target. Selection-aware theory already predicts benchmark bias; relevance classification, rather than an unexplained new mechanism, is the difficult empirical issue.'],
 ['D4:I307','1 7 8 9 5 8 3 7 8 8 8 5 5 1 8 5 8 2 1 2 3 3 6 3 9 1 4 9 7 1 4 2','4 1 9 2 8 7 9 1 2 1 2 1 1 2 8','Router/evaluator independence is a clean factorial test. Information design already separates experiment selection from truthful realization. The terminology is especially vulnerable to rebranding.'],
 ['D4:I312','2 8 7 7 6 7 3 8 7 7 8 6 6 2 7 6 8 2 2 4 4 4 6 5 7 1 5 7 7 2 6 2','4 1 8 3 7 7 8 3 3 3 2 2 1 3 6','Audition blockage can matter despite complete exports. Exclusive-input foreclosure and trial-cost economics are close complete explanations; empirical agent integration patterns, not a new competition principle, remain open.'],
 ['D4:I317','3 6 7 7 5 7 3 6 7 6 8 6 6 3 6 6 7 3 2 4 5 5 5 4 7 1 5 7 6 2 5 3','4 2 7 3 5 6 8 3 4 3 2 2 1 3 7','Calibration/discrimination divergence is a specific contrast. Partial-feedback learning and persuasion already make it unsurprising to specialists; proving real legibility-driven trial allocation is the empirical challenge.'],
 ['D4:I318','3 9 8 7 7 6 6 9 7 7 7 7 8 3 7 8 9 4 3 4 5 5 7 5 7 2 7 7 9 3 7 4','5 2 7 3 5 4 7 4 5 3 3 2 1 3 4','Non-user participation is important and distinct from account consent. Speed externalities and endogenous rules explain the broad result; an adaptive-deadline interaction would need actual institution data.'],
];
const entries=rows.map(([id,pos,risk,reason])=>{const p=pos.split(' ').map(Number),r=risk.split(' ').map(Number);if(p.length!==dims.positive.length||r.length!==dims.risks.length)throw new Error(`${id}: ${p.length}/${r.length}`);return {candidate_id:id,stage:'POST_SHARPENING_POST_LIMITED_COURT',ratings:Object.fromEntries([...dims.positive.map((d,i)=>[d,p[i]]),...dims.risks.map((d,i)=>[d,r[i]])]),reason,selection_effect:'None: these scores were not used to select the original eight.',limitations:'Ordinal judgments, not calibrated empirical estimates or priority probabilities.'};});
fs.writeFileSync(path.join(here,'root-ratings.json'),JSON.stringify({version:'0.1.0',aggregate_score:null,entries},null,2)+'\n');
console.log(`Rated ${entries.length} sharpened candidates on ${dims.positive.length+dims.risks.length} dimensions`);
