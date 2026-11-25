import {mkdir,writeFile,readFile} from 'node:fs/promises';
const key=process.env.GEMINI_API_KEY||process.env.GOOGLE_API_KEY;
if(!key)throw new Error('Set GEMINI_API_KEY securely in your local environment. Never put it in the website or Git.');
const words={en:['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'],hi:['शून्य','एक','दो','तीन','चार','पांच','छह','सात','आठ','नौ','दस','ग्यारह','बारह','तेरह','चौदह','पंद्रह','सोलह','सत्रह','अठारह','उन्नीस','बीस']};
const manifest={};
await mkdir('dist/audio/aoede',{recursive:true});
for(const [locale,list] of Object.entries(words))for(const [number,text] of list.entries()){
 const path=`audio/aoede/${locale}-${number}.wav`;
 let audio;try{audio=await readFile(`dist/${path}`);}catch{}
 if(!audio){
  const result=await fetch('https://generativelanguage.googleapis.com/v1beta/interactions',{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify({model:'gemini-3.8-flash-tts',input:[{type:'user_input',content:[{type:'text',text,annotations:[{type:'speech_metadata',style:`Warm, gentle, cheerful early-years teacher. Clearly say this one ${locale==='hi'?'Hindi':'English'} number at a calm counting pace. No other words.`}]}]}],response_format:{type:'audio'},generation_config:{speech_config:[{voice:'Aoede'}]}})});
  if(!result.ok)throw new Error(`Gemini generation failed (${result.status}); no credentials or response body logged.`);
  const data=await result.json();const block=data.steps?.flatMap(s=>s.content||[]).filter(c=>c.type==='audio').at(-1);
  if(!block?.data)throw new Error('Gemini returned no audio.');audio=Buffer.from(block.data,'base64');
 }
 if(audio.toString('ascii',0,4)!=='RIFF'||audio.toString('ascii',8,12)!=='WAVE')throw new Error('Expected WAV audio. Review the Gemini response format before publishing.');
 await writeFile(`dist/${path}`,audio);manifest[`${locale}-${number}`]=path;console.log(`Prepared ${locale} ${number}`);
}
await writeFile('dist/count-recordings.js',`export const countRecordings = ${JSON.stringify(manifest,null,2)};\n`);
console.log('42 Aoede clips prepared. Listen to English and Hindi samples before committing the audio and manifest.');
