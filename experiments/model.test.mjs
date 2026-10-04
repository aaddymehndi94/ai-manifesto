import assert from 'node:assert/strict';
import { trajectory, pairedAudit } from './mandate-model.mjs';

// Analytic recurrence and counterexamples, not implementation-mirroring snapshots.
const p={scope:0.1,influence:0.3,intervention:0.4,responsiveness:0.5,decay:0.2,steps:4};
const result=trajectory(p);
const expected=p.scope*Math.pow(1-p.decay+p.responsiveness*p.influence*p.intervention,4);
assert.ok(Math.abs(result.points.at(-1).scope-expected)<1e-12);
assert.equal(result.regime,'decay');
assert.equal(pairedAudit({...p,influence:0}).divergence,0);
assert.equal(pairedAudit({...p,intervention:0}).divergence,0);
assert.equal(pairedAudit({...p,responsiveness:0}).divergence,0);
assert.equal(trajectory({scope:0,steps:30}).points.at(-1).scope,0);
assert.equal(trajectory({scope:0.5,influence:1,intervention:1,responsiveness:1,decay:0,steps:30}).points.at(-1).scope,1);
assert.ok(pairedAudit().divergence>0);
assert.throws(()=>trajectory({influence:NaN}));
console.log('Model checks passed: analytic solution, no-path controls, zero-state control, saturation, finite inputs.');
