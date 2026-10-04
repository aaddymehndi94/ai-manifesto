import { generateKeyPairSync, sign, verify } from 'node:crypto';

const serialize=value=>JSON.stringify(value);
// Fixture issuer is external to the executor. Production keys must remain outside
// the agent, memory writer, and tool-result channel. This module is a prototype.
export function createFixtureAuthority() {
  const {publicKey,privateKey}=generateKeyPairSync('ed25519');
  return {publicKey,issue:payload=>({payload,signature:sign(null,Buffer.from(serialize(payload)),privateKey).toString('base64')})};
}
export function authenticate(envelope,publicKey) {
  if(!envelope?.payload || typeof envelope.signature!=='string')return false;
  try{return verify(null,Buffer.from(serialize(envelope.payload)),publicKey,Buffer.from(envelope.signature,'base64'));}catch{return false;}
}
export const permission=(operation,budget=0)=>({operation,resource:'household-groceries',purpose:'meal-planning',recipient:'household',budget,currency:'INR',subdelegation:false});
export function permissionKey(p) {return serialize([p.operation,p.resource,p.purpose,p.recipient,p.currency,p.subdelegation,p.budget]);}
export function replayScope({grant,events,grantKey,eventKey,now=1,context='household-demo'}) {
  if(!authenticate(grant,grantKey))return {integrity:'FAIL',ruleConformance:'NOT_EVALUATED',scope:[],reason:'invalid grant signature'};
  const g=grant.payload;
  if(g.principal!=='fixture-principal'||g.context!==context||now>g.expiresAt||g.delegate!=='fixture-agent')return {integrity:'FAIL',ruleConformance:'NOT_EVALUATED',scope:[],reason:'grant binding or expiry failed'};
  if(events.some(e=>!authenticate(e,eventKey)))return {integrity:'FAIL',ruleConformance:'NOT_EVALUATED',scope:[],reason:'invalid observation signature'};
  const ids=events.map(e=>e.payload.id);
  if(new Set(ids).size!==ids.length)return {integrity:'FAIL',ruleConformance:'NOT_EVALUATED',scope:[],reason:'duplicate observation event'};
  const relevant=events.map(e=>e.payload).filter(e=>e.subject===g.measuredSubject&&e.context===g.context&&e.type==='choice'&&e.time<=now);
  const scope=[...g.initialScope];
  if(g.rule && !['accepted-count','task-success-count'].includes(g.rule.type))return {integrity:'PASS',ruleConformance:'FAIL',scope:[],reason:'unsupported rule type'};
  if(g.rule) {
    const count=relevant.filter(e=>(g.rule.type==='task-success-count'?e.taskSuccess:e.accepted)&&g.rule.allowedInterventions.includes(e.intervention)).length;
    if(count>=g.rule.threshold)scope.push(...g.rule.addScope);
  }
  return {integrity:'PASS',ruleConformance:'PASS',scope,reason:'exact replay of authentic fixture rule',formationPurpose:g.formationPurpose??'UNSPECIFIED'};
}
export function permits(scope,action) {
  return scope.some(p=>p.operation===action.operation&&p.resource===action.resource&&p.purpose===action.purpose&&p.recipient===action.recipient&&p.currency===action.currency&&action.budget<=p.budget&&(!action.subdelegation||p.subdelegation));
}
export function scopeContrast(first,second) {
  const a=new Map(first.map(p=>[permissionKey(p),p])),b=new Map(second.map(p=>[permissionKey(p),p]));
  return {added:[...a].filter(([key])=>!b.has(key)).map(([,p])=>p),removed:[...b].filter(([key])=>!a.has(key)).map(([,p])=>p)};
}
export function reviewDisposition({contrast,formationPurpose,ancestryComplete=true}) {
  if(!ancestryComplete)return {policySensitivity:'UNKNOWN',governanceDisposition:'REVIEW_REQUIRED',reason:'Missing ancestry cannot establish a causal contrast.'};
  const differs=contrast.added.length>0||contrast.removed.length>0;
  return {policySensitivity:differs?'NONZERO_IN_FIXTURE':'ZERO_IN_FIXTURE',governanceDisposition:!differs?'NO_DIFFERENCE_DETECTED':formationPurpose==='CHOSEN_COACHING'?'CONSISTENT_WITH_STATED_PURPOSE':'REVIEW_REQUIRED',reason:'Fixture policy disposition; not a verdict of valid consent or harm.'};
}
