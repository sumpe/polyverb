// Polyverb: English on hover.
// Any element with a data-en attribute shows that English text in a small slip above it
// while the mouse rests on it. Pages set data-en in their markup, or in script for text
// that changes. Only devices with a real mouse get this; touch screens never show it.
(function(){
  if(!window.matchMedia||!matchMedia("(hover:hover) and (pointer:fine)").matches)return;
  const tip=document.createElement("div");
  tip.className="gloss";tip.lang="en";tip.setAttribute("aria-hidden","true");
  document.body.appendChild(tip);
  let cur=null,timer=0,lastHide=0;

  function place(){
    const r=cur.getBoundingClientRect(),w=tip.offsetWidth,h=tip.offsetHeight,vw=document.documentElement.clientWidth;
    const x=Math.max(8,Math.min(r.left+r.width/2-w/2,vw-w-8));
    let y=r.top-h-6;if(y<8)y=r.bottom+6;
    tip.style.left=x+"px";tip.style.top=y+"px";
  }
  function show(){
    if(!cur||!cur.isConnected||!cur.dataset.en)return hide();
    tip.textContent=cur.dataset.en;place();tip.classList.add("on");
  }
  function hide(){
    clearTimeout(timer);
    if(tip.classList.contains("on"))lastHide=Date.now();
    cur=null;tip.classList.remove("on");
  }

  document.addEventListener("pointerover",e=>{
    if(e.pointerType==="touch")return;
    const t=e.target.closest?e.target.closest("[data-en]"):null;
    if(t===cur)return;
    hide();if(!t)return;
    cur=t;
    // A short pause before the first slip; moving straight on to the next one shows it at once.
    timer=setTimeout(show,Date.now()-lastHide<400?40:350);
  });
  document.addEventListener("pointerout",e=>{if(cur&&!cur.contains(e.relatedTarget))hide();});
  document.addEventListener("pointerdown",hide);
  document.addEventListener("keydown",hide);
  addEventListener("scroll",hide,true);
  addEventListener("blur",hide);
})();
