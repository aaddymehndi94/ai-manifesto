// Constructive blue-team checks, not novelty courts, empirical estimates or an agent benchmark.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const rows = [];

// A counterparty keeps a manual channel only while its local revenue covers a fixed cost.
// Each agent's permission can be revoked instantly. Channel rebuilding takes time.
const channel = {population:1000, manual_margin:1, fixed_cost:250, rebuild_time:24, exit_horizon:1};
const channelThreshold = 1-channel.fixed_cost/(channel.population*channel.manual_margin);
const channelState = adoption => {
  const open = channel.population*(1-adoption)*channel.manual_margin >= channel.fixed_cost;
  return {adoption, manual_channel:open, permission_stop_latency:0,
    exit_service_feasible:open || channel.rebuild_time<=channel.exit_horizon};
};
assert.equal(channelState(.7).exit_service_feasible,true);
assert.equal(channelState(.8).exit_service_feasible,false);
rows.push({id:'E4:T01',kind:'CONDITIONAL_MODEL_RESULT',name:'Instant stop, missing participation channel',parameters:channel,threshold:channelThreshold,rows:[.001,.1,.5,.7,.75,.8,.9,1].map(channelState),interpretation:'A channel viability threshold follows from the assumed fixed-cost rule. It is not an estimated social critical fraction. Rebuilding time, not token revocation latency, binds the exit horizon.',counterexample:'A funded public channel, immediate replacement, or rebuild_time <= exit_horizon removes this construction.'});

// Already-standard prisoner-dilemma construction. Here adoption changes the shared decision tempo.
// Its use is to distinguish individual rescission from a coordinated restoration, not claim a new game.
const payoff = (own,other) => 2*own-3*(own+other)/2;
const matrix = [0,1].flatMap(own=>[0,1].map(other=>({own,other,payoff:payoff(own,other)})));
assert(payoff(1,0)>payoff(0,0));
assert(payoff(1,1)>payoff(0,1));
assert(payoff(0,0)>payoff(1,1));
rows.push({id:'E4:T02',kind:'INHERITED_FORMAL_STRUCTURE_APPLIED',name:'Locally rational grants, jointly unwanted tempo',matrix,interpretation:'Delegation is strictly individually beneficial at either fixed background, yet the joint low-delegation state Pareto-dominates the high state. This is ordinary collective-action mathematics; any eventual residue must be the authority-producing adaptation and a different measurement/intervention.',counterexample:'If the shared tempo cost is less than private benefit, the all-delegate state is not jointly unwanted.'});

// Grant profiles and nominal provider competition fixed; recognition topology changes.
const reachable = (edges,start,target,removed=new Set()) => {
  const pending=[start],seen=new Set();
  while(pending.length){const n=pending.pop();if(removed.has(n)||seen.has(n))continue;if(n===target)return true;seen.add(n);for(const [a,b] of edges)if(a===n)pending.push(b);}
  return false;
};
const bottleneck=[['replacement','issuer'],['issuer','hospital'],['incumbent','issuer']];
const redundant=[...bottleneck,['replacement','public_attestor'],['public_attestor','hospital']];
assert.equal(reachable(bottleneck,'replacement','hospital',new Set(['issuer'])),false);
assert.equal(reachable(redundant,'replacement','hospital',new Set(['issuer'])),true);
rows.push({id:'E4:T03',kind:'CONDITIONAL_MODEL_RESULT',name:'Recognition is not provider count',same:{provider_count:2,export_completeness:1,permission_profile:'fixed'},worlds:[{name:'issuer bottleneck',recognized_after_issuer_loss:false},{name:'independent public path',recognized_after_issuer_loss:true}],interpretation:'Reachability and graph cuts are inherited machinery. The proposed outcome is continuation of particular legitimate relationships under issuer loss, not general authority or welfare.',counterexample:'If counterparties accept user-signed substitutes without issuer guarantees, the bottleneck disappears.'});

// Safe useful new behavior cannot be identified from identical success-only logs in two worlds.
const worlds=[{world:'constraint absent',history:['routine_ok'],novel_action_allowed:true},{world:'constraint binding',history:['routine_ok'],novel_action_allowed:false}];
for(const chooseNovel of [false,true]){
  const safeEverywhere=worlds.every(w=>!chooseNovel||w.novel_action_allowed);
  const usefulWhenAllowed=worlds.every(w=>!w.novel_action_allowed||chooseNovel);
  assert(!(safeEverywhere&&usefulWhenAllowed));
}
rows.push({id:'E4:T04',kind:'CONDITIONAL_INDISTINGUISHABILITY_RESULT',name:'Success-only transfer cannot identify an unobserved constraint',worlds,assumptions:['Identical complete performed-action histories are the only input','A never-performed new action is required where allowed','No constraint violations permitted in either world','No consultation or new observation'],interpretation:'No deterministic decision can both act usefully in the permissive world and avoid the action in the constrained world. Randomization cannot guarantee both. This is a generic indistinguishability argument, not a new theorem about AI.',counterexample:'Independent constraint evidence, informative abstention reasons, consultation, or allowing safe abstention defeats the triangle.'});

// Reserve drift after withdrawal: matched current authority can have different recovery times.
const capability={production_per_practice:.2,decay:.1,required:.6};
const step=(h,practice)=>Math.max(0,Math.min(1,h+capability.production_per_practice*practice-capability.decay*h));
const recover=(start,practice)=>{let h=start,t=0;while(h<capability.required&&t<100){h=step(h,practice);t++;}return {steps:t,capability:h,recovered:h>=capability.required};};
const initial=[{history:'practice preserved',h:.7},{history:'practice absent',h:.1}];
rows.push({id:'E4:T05',kind:'CONDITIONAL_MODEL_RESULT',name:'Same revoked permissions, unequal recovery horizon',parameters:capability,worlds:initial.map(x=>({...x,current_permissions:0,recovery:recover(x.h,.5)})),interpretation:'The stock equation supplies its own result. It illustrates path-dependent recovery, not evidence of human learning dynamics or a novel hysteresis theorem.',counterexample:'Zero decay, cheap instant replacement, or transferable practice on other activities can preserve fallback without duplicating the automated task.'});

// Same adoption can improve or erode reserves, depending on where savings go.
// A baseline training flow b survives; automation removes practice at beta*x.
// Reinvestment rho of savings s creates reserve training at alpha*rho*s*x.
const reserve={baseline_training:.1,decay:.1,practice_displacement:.2,savings:1,conversion:.5};
const steadyReserve=(x,rho)=>(reserve.baseline_training+reserve.conversion*rho*reserve.savings*x)/(reserve.decay+reserve.practice_displacement*x);
const criticalReinvestment=reserve.practice_displacement*reserve.baseline_training/(reserve.conversion*reserve.savings*reserve.decay);
assert.equal(steadyReserve(0,0),1);
assert(steadyReserve(1,.2)<steadyReserve(0,.2));
assert(steadyReserve(1,.8)>steadyReserve(0,.8));
assert(Math.abs(steadyReserve(1,criticalReinvestment)-1)<1e-12);
rows.push({id:'E4:T06',kind:'CONDITIONAL_MODEL_RESULT',name:'Delegation can manufacture or destroy its own alternative',parameters:reserve,critical_reinvestment:criticalReinvestment,rows:[0,.2,.4,.8,1].map(rho=>({reinvestment:rho,reserve_at_no_adoption:steadyReserve(0,rho),reserve_at_full_adoption:steadyReserve(1,rho)})),interpretation:'The derivative changes sign when alpha*rho*s*delta exceeds beta*b. These linear stock-flow assumptions manufacture a clean threshold; no real-world threshold or novelty is established. The same deployment can be self-limiting or self-necessitating depending on collective reinvestment.',counterexample:'If displaced practice was not useful or gains transfer without reserve expenditure, the model overstates the need for reinvestment.'});

// Local actions stop immediately in every arm. This queue contains lawful
// disposition work: reconciling outstanding obligations, not continued agent action.
// Compression, not merely an earlier time origin, changes the arrival pattern.
const settle=(arrivals,capacity,followOnRate,horizon=30)=>{
  let backlog=0,originalArrivals=0,releaseStep=null;
  const trace=[];
  for(let t=0;t<horizon;t++){
    const arrival=arrivals[t]||0;originalArrivals+=arrival;
    const unserved=Math.max(0,backlog+arrival-capacity);
    backlog=unserved*(1+followOnRate);
    if(backlog===0&&originalArrivals===100&&releaseStep===null)releaseStep=t;
    trace.push({step:t,arrival,backlog});
  }
  return {capacity,followOnRate,releaseStep,finalBacklog:backlog,trace};
};
const dispersed=settle(Array(10).fill(10),10,.5);
const compressed=settle([100],10,.5);
const noFollowOn=settle([100],10,0);
const burstReserve=settle([100],100,.5);
assert.equal(dispersed.releaseStep,9);
assert.equal(compressed.releaseStep,null);
assert(compressed.finalBacklog>100);
assert.equal(noFollowOn.releaseStep,9);
assert.equal(burstReserve.releaseStep,0);
rows.push({id:'E4:T07',kind:'CONDITIONAL_MODEL_RESULT',name:'Instant local stops, delayed collective release',parameters:{obligations:100,capacity:10,followOnRate:.5,horizon:30},unstable_backlog_boundary:30,arms:{dispersed,compressed,noFollowOn,burstReserve},interpretation:'After original arrivals cease, q(next)=(1+beta)*max(0,q-mu), with unstable boundary mu*(1+beta)/beta. Compression plus delay-generated work can keep a stop disposition queue growing in this stipulated fluid model. Remove the return edge or provision burst capacity and the adverse persistence disappears. This is inherited queue mathematics, not a new theorem or empirical result.',counterexample:'Uniform earlier time shifts do not compress arrivals. Bounded follow-on obligations, spare disposition capacity, or independent reconciliation can remove persistence.',safety_limit:'All local stops are honored immediately. Continued counterparty obligations are not continued AI execution. No immediate safety cost is modeled and slower safety shutdowns are not recommended.'});

fs.writeFileSync(path.join(here,'conditional-model-results.json'),JSON.stringify({version:'0.1.0',date:'2026-10-05',status:'BLUE_TEAM_CONSTRUCTIONS_ONLY',disclosure:'Seven hand-specified models; results follow from stipulated assumptions. No optimizing agent, human study, fitted parameters, novelty search or field prevalence claim.',models:rows},null,2)+'\n');
console.log(JSON.stringify({models:rows.length,assertions:'passed',authority_rewards:'not applicable; no optimizer',empirical_evidence:false}));
