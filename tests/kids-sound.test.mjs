import test from 'node:test';
import assert from 'node:assert/strict';
test('count speech uses selected language, cancels old counts and respects mute',async()=>{
 const spoken=[];let cancelled=0;
 globalThis.localStorage={getItem:()=>null,setItem:()=>{}};
 globalThis.speechSynthesis={cancel:()=>cancelled++,getVoices:()=>[],speak:u=>spoken.push(u)};
 globalThis.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};
 const {speakCount,toggleSound}=await import('../dist/kids-sound.js');
 speakCount(1,'en');speakCount(2,'hi');
 assert.equal(spoken[0].text,'1');assert.equal(spoken[1].text,'दो');assert.equal(spoken[1].lang,'hi-IN');assert.equal(cancelled,2);
 toggleSound();assert.equal(speakCount(3),false);assert.equal(spoken.length,2);
});
