export const splitPlace=(n,unpack=false)=>({tens:Math.floor(n/10)-(unpack&&n>=10?1:0),ones:n%10+(unpack&&n>=10?10:0)});
export function shareState(total,people,given=total){const shares=Array(people).fill(0),distributed=Math.min(given,Math.floor(total/people)*people);for(let i=0;i<distributed;i++)shares[i%people]++;return {shares,left:total-distributed,each:Math.floor(total/people),remainder:total%people};}
export function makeTen(a,b){const moved=Math.min(Math.max(10-a,0),b);return {moved,remainder:b-moved,total:a+b,reachesTen:a+moved===10};}
export function nearHundred(a,b){return {left:100-a,right:100-b,overlap:(100-a)*(100-b),hundreds:a-(100-b),result:a*b};}
export const clockAngles=(hour,minute)=>({hour:(hour%12)*30+minute/2,minute:minute*6});
export function readKids(storage){try{const d=JSON.parse(storage.getItem('aptitudelab-kids-v1'));return {locale:d?.locale==='hi'?'hi':'en',results:d?.results&&typeof d.results==='object'&&!Array.isArray(d.results)?Object.fromEntries(Object.entries(d.results).filter(([,r])=>r&&Number.isInteger(r.correct)&&r.correct>=0&&r.correct<=5&&Number.isInteger(r.tried)&&r.tried>=r.correct&&r.tried<=5)): {}};}catch{return {locale:'en',results:{}};}}
