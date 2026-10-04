import { chromium } from 'playwright';
import fs from 'node:fs';
const browser=await chromium.launch({executablePath:process.env.AAA_BROWSER??'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
fs.mkdirSync('site/qa',{recursive:true});
try{const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});for(const variant of ['instrument','folio','ledger']){await page.goto('http://127.0.0.1:4173/?mode=human');await page.evaluate(v=>document.body.dataset.exploration=v,variant);await page.addStyleTag({content:fs.readFileSync('site/explorations.css','utf8')});await page.screenshot({path:`site/qa/exploration-${variant}.png`});}
for(const [name,url]of [['anthropic','https://www.anthropic.com/research'],['quanta','https://www.quantamagazine.org/'],['distill','https://distill.pub/2020/circuits/zoom-in/']]){try{await page.goto(url,{waitUntil:'domcontentloaded',timeout:15000});await page.screenshot({path:`site/qa/reference-${name}.png`,timeout:15000});console.log(`Inspected reference: ${name}`);}catch(e){console.log(`Reference ${name} not visually inspected: ${e.name}`);}}}finally{await browser.close();}
