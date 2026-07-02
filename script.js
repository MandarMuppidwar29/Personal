
const msg=`Babdu,

I know I hurt you.

I raised my voice, and I didn't answer your calls.

I can't change that moment, but I can take responsibility for it.

You deserve patience, respect, and kindness from me.

I'm truly sorry. ❤️`;
let i=0;
begin.onclick=()=>{
 cover.style.display='none';
 content.classList.remove('hidden');
 type();
}
function type(){
 if(i<msg.length){
   typeEl.innerHTML += msg[i]=='\n' ? '<br>' : msg[i];
   i++;
   setTimeout(type,28);
 }
}
const typeEl=document.getElementById('type');

const start=new Date('2016-02-01');
function update(){
 const now=new Date();
 const days=Math.floor((now-start)/(1000*60*60*24));
 counter.textContent=`${days} days of memories together.`;
}
update();

setInterval(()=>{
 const s=document.createElement('div');
 s.className='star';
 s.textContent=Math.random()>.5?'✨':'🌹';
 s.style.left=Math.random()*100+'vw';
 s.style.animationDuration=(5+Math.random()*6)+'s';
 document.body.appendChild(s);
 setTimeout(()=>s.remove(),12000);
},250);
