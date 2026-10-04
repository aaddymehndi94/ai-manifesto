/** Illustrative structural model. No parameters are estimated from humans. */
export function trajectory({scope=0.08, influence=0.45, intervention=0.7, responsiveness=0.65, decay=0.12, steps=40, grants={}}={}) {
  for (const [key,value] of Object.entries({scope,influence,intervention,responsiveness,decay})) {
    if (!Number.isFinite(value) || value<0 || value>1) throw new RangeError(`${key} must be in [0,1]`);
  }
  if (!Number.isInteger(steps) || steps<1 || steps>1000) throw new RangeError('steps must be an integer in [1,1000]');
  const feedbackGain=responsiveness*influence*intervention;
  const multiplier=1-decay+feedbackGain;
  const points=[{t:0,scope}];
  for(let t=0;t<steps;t++) {
    const action=intervention*scope;
    const centeredEvidence=influence*action;
    scope=Math.min(1,Math.max(0,(1-decay)*scope+responsiveness*centeredEvidence+(grants[t]??0)));
    points.push({t:t+1,scope,intervention:action,centeredEvidence});
  }
  return {label:'ILLUSTRATIVE, UNCALIBRATED',parameters:{influence,intervention,responsiveness,decay,steps},feedbackGain,multiplier,regime:feedbackGain>decay?'growth':feedbackGain===decay?'neutral':'decay',points};
}

export function pairedAudit(parameters={}) {
  const influenced=trajectory(parameters);
  const reference=trajectory({...parameters,intervention:0});
  return {label:'Simulator intervention contrast; not a welfare or manipulation score',influenced,reference,divergence:influenced.points.at(-1).scope-reference.points.at(-1).scope};
}
