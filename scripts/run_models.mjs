import fs from 'node:fs';
import { pairedAudit } from '../experiments/mandate-model.mjs';

const runs=[{name:'growth',influence:0.45,intervention:0.7,responsiveness:0.65,decay:0.12},{name:'decay',influence:0.2,intervention:0.3,responsiveness:0.4,decay:0.12},{name:'no_influence',influence:0,intervention:0.7,responsiveness:0.65,decay:0.12}].map(p=>({name:p.name,...pairedAudit(p)}));
fs.mkdirSync('experiments/results',{recursive:true});
fs.mkdirSync('framework/figures',{recursive:true});
fs.writeFileSync('experiments/results/illustrative-model.json',JSON.stringify({date:'2026-10-04',status:'Toy model outputs; no field estimates; no human participants',runs},null,2)+'\n');
const chart=runs[0];
const path=(pts)=>pts.map((p,i)=>`${i?'L':'M'}${80+p.t*18},${380-p.scope*290}`).join(' ');
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500" viewBox="0 0 900 500" role="img" aria-labelledby="title desc"><title id="title">Illustrative delegation trajectories</title><desc id="desc">Under identical authentic rules, a policy with a behavior-influence path increases normalized scope, while the no-intervention reference decays. Toy parameters are not estimates.</desc><rect width="900" height="500" fill="#101313"/><g fill="#e6e8df" font-family="sans-serif"><text x="80" y="45" font-size="23">An authentic rule can contain a feedback loop.</text><text x="80" y="72" font-size="13" fill="#929e98">ILLUSTRATIVE / NO EMPIRICAL CALIBRATION</text><text x="80" y="432" font-size="14">Interaction step →</text><text x="80" y="460" font-size="13" fill="#929e98">L = kbc = ${chart.influenced.feedbackGain.toFixed(3)} · ρ = 0.12 · initial scope = 0.08</text></g><path d="M80 90V380H800" fill="none" stroke="#5b6761"/><path d="${path(chart.influenced.points)}" fill="none" stroke="#c9f572" stroke-width="3"/><path d="${path(chart.reference.points)}" fill="none" stroke="#80bcb8" stroke-width="3"/><g fill="#e6e8df" font-family="sans-serif" font-size="14"><text x="590" y="112">Behavior-sensitive rule</text><text x="590" y="355">No-intervention reference</text></g></svg>`;
fs.writeFileSync('framework/figures/delegation-trajectories.svg',svg);
console.log(JSON.stringify(runs.map(x=>({name:x.name,divergence:x.divergence,regime:x.influenced.regime})),null,2));
