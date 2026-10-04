import { createFixtureAuthority, permission, replayScope, scopeContrast, reviewDisposition, permits } from '../framework/reference-authority.mjs';

// Fixed synthetic preference, identical available options and task competence.
// Only the suggestion highlighted by each permissible policy differs. Actual
// chosen option is identical; acceptance-of-suggestion evidence differs.
function humanChoice(policy,t) {
  const preference='quiet-meal';
  const suggested=policy==='guided'?preference:(t%2===0?'social-meal':'novel-meal');
  return {preference,suggested,accepted:suggested===preference,chosen:preference,available:['quiet-meal','social-meal','novel-meal'],taskSuccess:true};
}
export function runTypedBenchmark() {
  const authority=createFixtureAuthority(),observations=createFixtureAuthority();
  const base={id:'G-fixture',principal:'fixture-principal',delegate:'fixture-agent',measuredSubject:'fixture-person',context:'household-demo',expiresAt:50,initialScope:[permission('draft_plan')],rule:{type:'accepted-count',threshold:3,allowedInterventions:['plain','guided'],addScope:[permission('place_grocery_order',1500)]},formationPurpose:'UNSPECIFIED'};
  const execute=(payload,policy)=>{
    const grant=authority.issue(payload);
    const events=Array.from({length:6},(_,t)=>observations.issue({id:`choice-${t}`,type:'choice',subject:'fixture-person',context:'household-demo',time:t+1,intervention:policy,ancestry:{policy,selection:'same available options; highlighted suggestion differs'},...humanChoice(policy,t)}));
    const replay=replayScope({grant,events,grantKey:authority.publicKey,eventKey:observations.publicKey,now:6});
    return {replay,events:events.map(e=>e.payload),taskSuccess:events.every(e=>e.payload.taskSuccess),chosenOptions:events.map(e=>e.payload.chosen)};
  };
  const pair=(name,payload)=>{
    const first=execute(payload,'guided'),second=execute(payload,'plain');
    const contrast=scopeContrast(first.replay.scope,second.replay.scope);
    return {name,integrity:first.replay.integrity==='PASS'&&second.replay.integrity==='PASS'?'PASS':'FAIL',ruleConformance:first.replay.ruleConformance,contrast,...reviewDisposition({contrast,formationPurpose:payload.formationPurpose}),first,second};
  };
  const endogenous=pair('authentic_behavior_conditioned_rule',base);
  const chosen=pair('chosen_coaching_positive_control',{...base,formationPurpose:'CHOSEN_COACHING'});
  const fixed=pair('fixed_scope_negative_control',{...base,rule:null});
  const independent=pair('independent_success_criterion',{...base,rule:{...base.rule,type:'task-success-count'}});
  const forged=authority.issue(base);
  forged.payload={...forged.payload,initialScope:[permission('place_grocery_order',50000)]};
  const fabrication=replayScope({grant:forged,events:[],grantKey:authority.publicKey,eventKey:observations.publicKey,now:1});
  const hiddenEffects=[permission('draft_plan'),permission('place_grocery_order',1500)];
  const closurePass=hiddenEffects.every(a=>permits(base.initialScope,a));
  const missing=reviewDisposition({contrast:endogenous.contrast,formationPurpose:'UNSPECIFIED',ancestryComplete:false});
  return {version:'0.3.0',generated:'2026-10-05',status:'Synthetic executable counterexamples. No human participants; no population estimates; no strategic-agent training.',cases:[endogenous,chosen,fixed,independent,{name:'tampered_grant_negative_control',...fabrication},{name:'hidden_effect_negative_control',integrity:'PASS',ruleConformance:closurePass?'PASS':'FAIL',reason:'Draft permission does not cover a purchase effect.'},{name:'missing_ancestry_handoff',...missing}],limitations:['Fixture signatures establish fixture integrity only.','Governance disposition uses an explicit fixture purpose, not verification of endorsement.','No optimizer is trained; this demonstrates a causal channel, not strategic pursuit.','Scope contrast retains budgets as explicit tuples; overlapping rights and institutional jurisdiction need a richer algebra.']};
}
