import { chromium } from 'playwright';
import fs from 'node:fs';
import { spawn } from 'node:child_process';
const port=4184,base=`http://127.0.0.1:${port}`;
const server=spawn(process.execPath,['scripts/serve.mjs'],{env:{...process.env,AAA_PORT:String(port)},stdio:['ignore','pipe','pipe']});
await new Promise((resolve,reject)=>{server.stdout.once('data',resolve);server.once('error',reject);server.once('exit',code=>reject(new Error(`Asset server exited ${code}`)));});
let browser;
try{browser=await chromium.launch({executablePath:process.env.AAA_BROWSER??'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});const page=await browser.newPage({viewport:{width:1200,height:630},reducedMotion:'reduce'});await page.goto(base+'/paper?mode=human');await page.emulateMedia({media:'print'});await page.evaluate(()=>document.querySelectorAll('img').forEach(img=>img.loading='eager'));await page.waitForFunction(()=>[...document.images].every(img=>img.complete&&img.naturalWidth>0));await page.pdf({path:'dist/paper.pdf',format:'A4',printBackground:false,preferCSSPageSize:true});fs.copyFileSync('dist/paper.pdf','public/paper.pdf');await page.emulateMedia({media:'screen'});await page.setContent(fs.readFileSync('dist/og.svg','utf8'));await page.addStyleTag({content:'html,body{margin:0;width:1200px;height:630px;overflow:hidden}svg{display:block}'});await page.screenshot({path:'dist/og.png'});fs.copyFileSync('dist/og.png','public/og.png');console.log('Generated printable paper.pdf and share preview og.png.');}finally{if(browser)await browser.close();server.kill();}
