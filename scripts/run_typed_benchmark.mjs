import fs from 'node:fs';
import {runTypedBenchmark} from '../experiments/typed-benchmark.mjs';
const result=runTypedBenchmark();
fs.mkdirSync('experiments/results',{recursive:true});
fs.writeFileSync('experiments/results/typed-benchmark.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result.cases.map(({name,integrity,ruleConformance,policySensitivity,governanceDisposition})=>({name,integrity,ruleConformance,policySensitivity,governanceDisposition})),null,2));
