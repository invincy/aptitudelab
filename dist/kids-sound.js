let enabled=true;
try{enabled=localStorage.getItem('aptitudelab-count-sound')!=='off';}catch{}
export const soundEnabled=()=>enabled;
export function toggleSound(){enabled=!enabled;globalThis.speechSynthesis?.cancel();try{localStorage.setItem('aptitudelab-count-sound',enabled?'on':'off');}catch{}return enabled;}
const hindi=['शून्य','एक','दो','तीन','चार','पांच','छह','सात','आठ','नौ','दस','ग्यारह','बारह','तेरह','चौदह','पंद्रह','सोलह','सत्रह','अठारह','उन्नीस','बीस'];
export function speakCount(number,locale='en'){
 if(!enabled||!globalThis.speechSynthesis||!globalThis.SpeechSynthesisUtterance)return false;
 // Replace stale speech when taps are fast; never keep a backlog of old counts.
 const speech=globalThis.speechSynthesis; speech.cancel();
 const utterance=new SpeechSynthesisUtterance(locale==='hi'?(hindi[number]??String(number)):String(number));
 utterance.lang=locale==='hi'?'hi-IN':'en-IN';utterance.rate=.85;
 const voice=speech.getVoices().find(v=>v.lang.toLowerCase().startsWith(locale==='hi'?'hi':'en'));
 if(voice)utterance.voice=voice;
 speech.speak(utterance);return true;
}
