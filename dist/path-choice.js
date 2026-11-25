const button=document.querySelector('#language');
let hindi=false;
button.onclick=()=>{hindi=!hindi;document.documentElement.lang=hindi?'hi':'en';button.textContent=hindi?'English':'हिंदी';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[hindi?'hi':'en']);};
