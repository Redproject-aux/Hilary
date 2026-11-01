const $=s=>document.querySelector(s);
/* ---------- EDIT YOUR CONTENT HERE ---------- */
const collections=[
 {title:"The Girl I Adore",items:[{src:"images/memories/adore-1.jpg",cap:"",date:""},{src:"images/memories/adore-2.jpg",cap:"",date:""},{src:"images/memories/adore-3.jpg",cap:"",date:""},{src:"images/memories/adore-4.jpg",cap:"",date:""},{src:"images/memories/adore-5.jpg",cap:"",date:""},{src:"images/memories/adore-6.jpg",cap:"",date:""},{src:"images/memories/adore-7.jpg",cap:"",date:""},{src:"images/memories/adore-8.jpg",cap:"",date:""}]},
 {title:"Just You and Me",items:[{src:"images/memories/us-1.jpg",cap:"",date:""},{src:"images/memories/us-2.jpg",cap:"",date:""},{src:"images/memories/us-3.jpg",cap:"",date:""},{src:"images/memories/us-4.jpg",cap:"",date:""},{src:"images/memories/us-5.jpg",cap:"",date:""},{src:"images/memories/us-6.jpg",cap:"",date:""},{src:"images/memories/us-7.jpg",cap:"",date:""},{src:"images/memories/us-8.jpg",cap:"",date:""},{src:"images/memories/us-9.jpg",cap:"",date:""}]},
 {title:"Little Things, Big Memories",items:[{src:"images/memories/moments-1.jpg",cap:"",date:""},{src:"images/memories/moments-2.jpg",cap:"",date:""},{src:"images/memories/moments-3.jpg",cap:"",date:""},{src:"images/memories/moments-4.jpg",cap:"",date:""},{src:"images/memories/moments-5.jpg",cap:"",date:""},{src:"images/memories/moments-6.jpg",cap:"",date:""},{src:"images/memories/moments-7.jpg",cap:"",date:""},{src:"images/memories/moments-8.jpg",cap:"",date:""}]},
 {title:"Before I Knew You",items:[{src:"images/memories/before-1.jpg",cap:"",date:""},{src:"images/memories/before-2.jpg",cap:"",date:""},{src:"images/memories/before-3.jpg",cap:"",date:""},{src:"images/memories/before-4.jpg",cap:"",date:""},{src:"images/memories/before-5.jpg",cap:"",date:""},{src:"images/memories/before-6.jpg",cap:"",date:""},{src:"images/memories/before-7.jpg",cap:"",date:""}]}
];
const letters=[
 {t:"When You Miss Me",b:["Yadi, if you're reading this, you're missing me, and I'm missing you right back.","Close your eyes and remember how it feels when we're together: the easy laughter, the quiet moments. That doesn't disappear when we're apart. It waits for us.","Whatever distance there is today is only temporary. My heart is already with you."]},
 {t:"When You Need Reassurance",b:["Take a breath, my love.","You are enough. Not when you're perfect, not when you've done everything right. Just as you are, soft heart and all.","I chose you, and I keep choosing you."]},
 {t:"When We Have an Argument",b:["If you're reading this, we've hurt each other, and I'm sorry for my part in it.","I never want to win an argument at the cost of losing you. We're two imperfect people learning each other, and that's allowed to be messy.","Come here. Let's talk when we're both ready. I love you more than being right."]},
 {t:"When You Feel Alone",b:["You are not alone, Yadi.","Even when I can't be beside you, I'm thinking of you, rooting for you, proud of you.","Reach out. I'm always here."]},
 {t:"When You Remember Our Story",b:["We met in 9th grade, when I wasn't looking for love. Two years of courting you, then June 23, 2024, when it became official.","We've had days that weren't perfect, like our first anniversary: a movie at the mall and a meal together. They were still ours, and still some of my favorites.","Our story isn't finished. Every chapter with you is my favorite yet."]},
 {t:"On Your 19th Birthday",b:["Happy birthday, my love.","Nineteen looks beautiful on you. I hope this year is gentle with you, that your dreams grow bolder, and that you feel how deeply you're loved.","Thank you for being you."]}
];
const reasons=[
 ["Your simplicity","You make plain things feel beautiful."],
 ["Your kindness","You're gentle with people, even when it's hard."],
 ["Your soft heart","You feel deeply, and it's one of your loveliest qualities."],
 ["Your independence","You can stand on your own, and I admire it."],
 ["Your clumsiness","You trip, you giggle, and I fall for you again."],
 ["Your passion","When you care about something, you give your whole self."],
 ["Your never-give-up mindset","You keep going, even when it's tough."],
 ["Your crybaby side","Your tears are honest, and so is your heart."],
 ["Your laugh","It's my favorite sound in the world and the one that caught my attention."],
 ["Everything about you","Every small thing. All of it."],
 ["The way you make other people's lives a little lighter with your presence."],
 ["When you scratch the back of my head."],
 ["When you lift my mood up when I'm not feeling well."],
 ["When you compliment me even if I do not see myself as attractive."],
 ["When you make sure that I'm okay."],
 ["All the time that we argue and there's a reason to leave, you still choose me."],
 ["For making me believe in myself."],
 ["For loving me, for choosing me, for taking care of me."],
 ["I love you, forever and always."]
];
const finalLetter=[
 "My dearest Yadi,",
 "Three years of being with you, and I'm still finding new things to love: your laugh, your kindness, the way you never give up.",
 "In a very unexpected and remarkable moment, I met you. Even though I don't see myself fitting the standard you have, you still manage to build me up into who I am today. I'm very glad to have you as my partner. I hope you never get tired of loving me, even when I'm at my worst.",
 "Thank you for staying through the imperfect days. They were never small to me.",
 "I hope you feel loved today and always. Happy 19th birthday, my love."
];
/* ---------- APP ---------- */
const pages=[...document.querySelectorAll(".page")],links=[...document.querySelectorAll("#links a")];
function route(){const y=scrollY+120;let cur=pages[0].id;pages.forEach(p=>{if(p.offsetTop<=y)cur=p.id});
 links.forEach(a=>a.classList.toggle("on",a.hash==="#"+cur))}
addEventListener("scroll",route,{passive:true});route();
$("#links").onclick=e=>{if(e.target.closest("a")){$("#links").classList.remove("show");$("#menuBtn").setAttribute("aria-expanded","false")}};
$("#menuBtn").onclick=e=>{const s=$("#links").classList.toggle("show");e.currentTarget.setAttribute("aria-expanded",s)};
/* ---------- COUNTDOWN LOCK: opens at 12:00 AM, Nov 3, 2026 (viewer's local time) ---------- */
const UNLOCK_AT=new Date(2026,10,3,0,0,0).getTime();
(()=>{const intro=$("#intro"),cd=$("#cd");
 /* Admin: open the site once with ?admin to show the ON/OFF button in this browser (?admin=off removes it).
    ?preview is a shortcut for admin mode with the countdown switched OFF. */
 const qs=new URLSearchParams(location.search),AK="hilary-admin",BK="hilary-cd-off",ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},del:k=>{try{localStorage.removeItem(k)}catch(e){}}};
 if(qs.get("admin")==="off"||qs.get("preview")==="off"){ls.del(AK);ls.del(BK)}
 else{if(qs.has("admin"))ls.set(AK,"1");if(qs.has("preview")){ls.set(AK,"1");ls.set(BK,"1")}}
 const admin=ls.get(AK)==="1",bypass=admin&&ls.get(BK)==="1"||(qs.has("preview")&&qs.get("preview")!=="off"&&ls.get(AK)!=="1");
 if(admin&&Date.now()<UNLOCK_AT){const t=document.createElement("button");t.id="cdAdmin";
  t.textContent=bypass?"Admin \u00b7 Countdown: OFF \u00b7 tap to turn ON":"Admin \u00b7 Countdown: ON \u00b7 tap to turn OFF";
  t.setAttribute("aria-pressed",String(!bypass));
  t.style.cssText="position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:200;background:"+(bypass?"#3a2a2c":"#6e1f33")+";color:#fff;border:0;border-radius:999px;padding:.5rem 1rem;font:500 .75rem var(--sans);opacity:.92;cursor:pointer;box-shadow:0 3px 10px #0005;white-space:nowrap;max-width:94vw";
  t.onclick=()=>{bypass?ls.del(BK):ls.set(BK,"1");location.href=location.pathname};document.body.appendChild(t)}
 if(!intro||Date.now()>=UNLOCK_AT||bypass)return;
 intro.classList.add("locked");cd.hidden=false;document.body.classList.add("is-locked");
 const p=n=>String(n).padStart(2,"0"),ids={D:$("#cdD"),H:$("#cdH"),M:$("#cdM"),S:$("#cdS")};
 const tick=()=>{let t=Math.max(0,Math.floor((UNLOCK_AT-Date.now())/1000));
  if(t<=0){clearInterval(iv);intro.classList.remove("locked");cd.hidden=true;document.body.classList.remove("is-locked");return}
  ids.D.textContent=p(Math.floor(t/86400));ids.H.textContent=p(Math.floor(t%86400/3600));ids.M.textContent=p(Math.floor(t%3600/60));ids.S.textContent=p(t%60)};
 const iv=setInterval(tick,1000);tick()})();
$("#openBtn").onclick=()=>{const i=$("#intro");i.classList.add("open");setTimeout(()=>i.classList.add("done"),1900);setTimeout(()=>i.remove(),3000)};
const modal=$("#modal"),mb=$("#modalBody");
const show=h=>{mb.innerHTML=h;modal.hidden=false};
modal.onclick=e=>{if(e.target===modal||e.target.classList.contains("close"))modal.hidden=true};
addEventListener("keydown",e=>{if(e.key==="Escape")modal.hidden=true});
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const rots=[-3,2,-1.5,3];
$("#collections").innerHTML=collections.map((c,ci)=>`<div class="col"><h2>${esc(c.title)}</h2><div class="polas">${c.items.map((it,i)=>`<button class="pola" style="--r:${rots[i%4]}deg" data-c="${ci}" data-i="${i}"><div class="ph">&#10048;<img src="${it.src}" alt="Our memory" onload="if(this.naturalHeight>this.naturalWidth*1.1)this.style.objectPosition='50% 20%'" onerror="this.remove()"></div></button>`).join("")}</div></div>`).join("");
$("#collections").onclick=e=>{const b=e.target.closest(".pola");if(!b)return;const it=collections[b.dataset.c].items[b.dataset.i];
 show(`<div class="view"><div class="ph">&#10048;<img src="${it.src}" alt="Our memory" onerror="this.remove()"></div></div>`)};
$("#envGrid").innerHTML=letters.map((l,i)=>`<button class="mini" data-i="${i}"><span>${esc(l.t)}</span></button>`).join("");
$("#envGrid").onclick=e=>{const b=e.target.closest(".mini");if(!b)return;const l=letters[b.dataset.i];
 show(`<div class="unfold"><h1>${esc(l.t)}</h1>${l.b.map(p=>`<p>${esc(p)}</p>`).join("")}<p class="sig">Always yours</p></div>`)};
const all=reasons.map(r=>r.join(". "));
$("#reasonGrid").innerHTML=all.map((t,i)=>`<button class="card" aria-label="Reason ${i+1}"><div class="in"><div class="f"><div>${i+1}<small>tap me</small></div></div><div class="b">${esc(t)}</div></div></button>`).join("");
$("#reasonGrid").onclick=e=>{const c=e.target.closest(".card");if(c)c.classList.toggle("flip")};
$("#finalLetter").innerHTML=finalLetter.map(p=>`<p>${esc(p)}</p>`).join("")+`<p class="sig">Forever yours</p>`;
$("#confettiBtn").onclick=()=>{for(let i=0;i<40;i++){const p=document.createElement("div");p.className="petal";p.textContent="\u2740";
 p.style.cssText=`left:${Math.random()*100}vw;font-size:${14+Math.random()*18}px;color:${["#b9737d","#e8c4c4","#a98445","#7a3b4c"][i%4]};animation-duration:${3+Math.random()*3}s`;document.body.appendChild(p);setTimeout(()=>p.remove(),6500)}};

const SONGS=[
 {img:"images/decorations/song-1.jpg",alt:"Best Part by Daniel Caesar feat. H.E.R. music player",cover:"images/decorations/cover.jpg",title:"Best Part (feat. H.E.R.)",artist:"Daniel Caesar",lines:["If life is a movie, then","you're the best part"],bg:"#85919d",ink:"#101a24"},
 {img:"images/decorations/song-3.jpg",alt:"An Art Gallery Could Never Be As Unique As You by mrld music player",cover:"images/decorations/cover2.jpg",title:"An Art Gallery Could Never Be As Unique As You",artist:"mrld",lines:["'Cause you're not just","a human being, you","are art"],bg:"#9f864d",ink:"#000",framed:true},
 {img:"images/decorations/song-4.jpg",alt:"IT'S YOU (feat. keshi) by MAX music player",cover:"images/decorations/cover3.jpg",title:"IT'S YOU (feat. keshi)",artist:"MAX",lines:["Like this forever","(forever)","White dress","or whatever","I keep dreamin'","there's a somewhere","That we grow","old together"],bg:"#e50402",ink:"#000"},
 {img:"images/decorations/song-5.jpg",alt:"P.S. I LOVE YOU by Paul Partohap music player",cover:"images/decorations/cover4.jpg",title:"P.S. I LOVE YOU",artist:"Paul Partohap",lines:["I love you in","every universe","You'll always be the first","I love you, you're my","only one"],bg:"#8a8a8a",ink:"#000",fs:"min(1.35rem,5.4vw)"},
 {img:"images/decorations/song-6.jpg",alt:"24/7, 365 by elijah woods music player",lyricImg:"images/decorations/lyrics-6.png",lbg:"rgb(221,97,25)",lcaret:"#fff",ly:[[.215,.268,.887],[.274,.333,.812],[.333,.384,.351],[.421,.481,.875],[.48,.54,.434],[.567,.617,.919],[.625,.675,.438],[.714,.763,.718],[.772,.831,.648]],title:"24/7, 365",artist:"elijah woods"},
 {img:"images/decorations/song-7.jpg",alt:"Dance With Me by Bruno Mars music player",lyricImg:"images/decorations/lyrics-7.png",lx:.075,lbg:"rgb(68,144,176)",lcaret:"#000",ly:[[.268,.327,.825],[.333,.392,.421],[.397,.457,.879],[.463,.512,.576],[.527,.578,.686],[.603,.65,.325],[.656,.717,.607],[.72,.771,.535]],title:"Dance With Me",artist:"Bruno Mars"},
 {img:"images/decorations/song-8.jpg",alt:"Just the Way You Are by Bruno Mars music player",lyricImg:"images/decorations/lyrics-8.png",lx:.075,lbg:"rgb(188,133,17)",lcaret:"#fff",ly:[[.389,.454,.679],[.472,.538,.772],[.554,.621,.484],[.637,.703,.719],[.72,.784,.668]],title:"Just the Way You Are",artist:"Bruno Mars"}
];
let lyTimer;
function openLyrics(s){
 if(s.lyricImg){
  const reduceI=matchMedia("(prefers-reduced-motion:reduce)").matches,Ls=s.ly||[];
  show(`<div class="view lyric"><div class="lywrap" style="position:relative;line-height:0;cursor:pointer" role="button" tabindex="0" aria-label="Lyrics card for ${esc(s.title)} by ${esc(s.artist)}. Tap to replay.">
   <img class="lyimg" src="${s.lyricImg}" alt="Lyrics card for ${esc(s.title)} by ${esc(s.artist)}" style="border-radius:22px;box-shadow:0 20px 50px #0006">
   ${Ls.map((l,i)=>{const t=i?(Ls[i-1][1]+l[0])/2:l[0]-.012,b=i<Ls.length-1?(l[1]+Ls[i+1][0])/2:l[1]+.012;return `<i class="lycov" style="position:absolute;right:0;left:0;top:${t*100}%;height:${(b-t)*100}%;background:${s.lbg}"></i>`}).join("")}
   <b class="lycar" style="position:absolute;width:3px;border-radius:2px;background:${s.lcaret};display:none"></b></div></div>`);
  const w=mb.querySelector(".lywrap"),cv=[...w.querySelectorAll(".lycov")],car=w.querySelector(".lycar");
  const X0=s.lx||.05,place=(i,x)=>{const l=Ls[i];cv[i].style.left=x*100+"%";car.style.display="block";car.style.left=`calc(${x*100}% - 1px)`;car.style.top=(l[0]+(l[1]-l[0])*.14)*100+"%";car.style.height=(l[1]-l[0])*.72*100+"%"};
  const done=()=>{clearTimeout(lyTimer);cv.forEach(c=>c.style.left="100%");car.style.display="none";w.dataset.done="1"};
  const run=()=>{clearTimeout(lyTimer);delete w.dataset.done;cv.forEach(c=>c.style.left="0%");car.style.animation="";
   if(reduceI||!Ls.length)return done();
   let li=0,st=0;const N=i=>Math.max(3,Math.round((Ls[i][2]-X0)/.03));
   const tick=()=>{if(!w.isConnected||modal.hidden)return;const n=N(li);st++;
    place(li,X0+(Ls[li][2]-X0+.02)*Math.min(st/n,1));
    if(st>=n){cv[li].style.left="100%";if(li===Ls.length-1){car.style.display="none";w.dataset.done="1";return}li++;st=0;place(li,X0);lyTimer=setTimeout(tick,340);return}
    lyTimer=setTimeout(tick,26+Math.random()*34)};
   place(0,X0);lyTimer=setTimeout(tick,500)};
  w.onclick=()=>{w.dataset.done?run():done()};
  w.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();w.onclick()}};
  run();return}
 const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
 show(`<div class="view lyric"><div class="lycard${s.framed?" framed":""}" style="--bg:${s.bg};--ink:${s.ink}" role="button" tabindex="0" aria-label="Lyrics: ${esc(s.lines.join(" "))}. Tap to replay.">
  <div class="ly-top"><img src="${s.cover}" alt=""><div><b>${esc(s.title)}</b><span>${esc(s.artist)}</span></div></div>
  <p class="ly-text" aria-hidden="true" style="min-height:${(s.lines.length*1.3).toFixed(1)}em${s.fs?";font-size:"+s.fs:""}">${s.lines.map(()=>"<span></span>").join("<br>")}<i class="caret"></i></p>
  <div class="ly-foot"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="${s.ink}"/><g fill="none" stroke="${s.bg}" stroke-width="2.1" stroke-linecap="round"><path d="M5.2 8.6c4.3-1.2 9.2-.9 13.4 1.3"/><path d="M5.8 12.2c3.7-1 7.7-.7 11.1 1.1"/><path d="M6.4 15.6c3.2-.8 6.4-.5 9.2.9"/></g></svg><span>Spotify</span><small class="ly-hint">tap to replay</small></div>
 </div></div>`);
 const card=mb.querySelector(".lycard"),sp=[...card.querySelectorAll(".ly-text span")],caret=card.querySelector(".caret"),L=s.lines;
 const finish=()=>{clearTimeout(lyTimer);sp.forEach((e,i)=>e.textContent=L[i]);sp[L.length-1].after(caret);card.classList.add("done");caret.classList.add("idle")};
 const run=()=>{clearTimeout(lyTimer);card.classList.remove("done");caret.classList.remove("idle");sp.forEach(e=>e.textContent="");sp[0].after(caret);
  if(reduce)return finish();
  let li=0,ci=0;
  const tick=()=>{if(!card.isConnected||modal.hidden)return;
   const t=L[li];ci++;sp[li].textContent=t.slice(0,ci);sp[li].after(caret);
   if(ci>=t.length){if(li===L.length-1)return finish();li++;ci=0;lyTimer=setTimeout(tick,520);return}
   const c=t[ci-1];lyTimer=setTimeout(tick,(c===","?300:c===" "?55:40)+Math.random()*45)};
  lyTimer=setTimeout(tick,350)};
 card.onclick=()=>{card.classList.contains("done")?run():finish()};
 card.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();card.onclick()}};
 run();
}
(()=>{
const deck=$("#songDeck"),dotsEl=$("#songDots");
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
const W=()=>deck.offsetWidth;
const setv=(el,o)=>{for(const k in o)el.style.setProperty("--"+k,o[k])};
const restS={x:"0px",y:"0px",r:"0deg",sc:1};
const behind=k=>({x:14*k+"px",y:9*k+"px",r:4*k+"deg",sc:1-.06*k});
const slides=SONGS.map((s,i)=>{const d=document.createElement("div");d.className="sng";d.setAttribute("role","button");
 d.setAttribute("aria-label",`${s.title} by ${s.artist}. Tap for the lyrics, swipe for the next song.`);
 d.innerHTML=`<span class="pl"><img src="${s.img}" alt="${esc(s.alt)}" draggable="false"><span class="glare" aria-hidden="true"></span></span>`;deck.appendChild(d);return d});
let order=SONGS.map((_,i)=>i),busy=false,nudged=false;
const dots=SONGS.map((s,i)=>{const b=document.createElement("button");b.className="sw-dot";b.setAttribute("aria-label","Show "+s.title);b.onclick=()=>goTo(i);dotsEl.appendChild(b);return b});
function layout(skip){order.forEach((si,k)=>{if(si===skip)return;const el=slides[si];setv(el,k?behind(k):restS);el.style.zIndex=SONGS.length-k;el.style.opacity=1;
 el.classList.toggle("top",k===0);el.setAttribute("aria-hidden",k?"true":"false");el.tabIndex=k?-1:0});
 dots.forEach((d,i)=>d.classList.toggle("on",i===order[0]))}
layout();
function fling(dir,to){if(busy)return;busy=true;deck.classList.remove("dragging");
 const old=order[0],el=slides[old];
 setv(el,{x:dir*W()*1.8+"px",y:"-26px",r:dir*24+"deg"});el.style.opacity=0;el.style.zIndex=SONGS.length+1;el.classList.remove("top");
 const nxt=to===undefined?order[1]:to;
 order=[nxt,...order.filter(i=>i!==nxt&&i!==old),old];layout(old);
 setTimeout(()=>{el.style.transition="none";setv(el,behind(order.length-1));el.style.opacity=0;void el.offsetWidth;el.style.transition="";layout();busy=false},still?20:430)}
function back(){if(busy)return;busy=true;const last=order[order.length-1],el=slides[last];
 el.style.transition="none";setv(el,{x:-W()*1.8+"px",y:"-26px",r:"-24deg"});el.style.opacity=0;void el.offsetWidth;el.style.transition="";
 order=[last,...order.slice(0,-1)];layout();setTimeout(()=>{busy=false},still?20:430)}
function goTo(i){if(busy||i===order[0])return;fling(-1,i)}
$("#swNext").onclick=()=>fling(-1);$("#swPrev").onclick=back;
const untilt=el=>{const pl=el.firstChild;pl.classList.remove("tilting");pl.style.setProperty("--rx","0deg");pl.style.setProperty("--ry","0deg")};
const tilt=(el,e)=>{if(still)return;const pl=el.firstChild,r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
 pl.classList.add("tilting");pl.style.setProperty("--ry",((px-.5)*18)+"deg");pl.style.setProperty("--rx",((.5-py)*18)+"deg");
 const g=pl.lastChild;g.style.setProperty("--gx",px*100+"%");g.style.setProperty("--gy",py*100+"%")};
const notes=["♪","♫","♥"];
const fx=(el,ch,x,y,o={})=>{const e=document.createElement("span");e.className="fx";e.textContent=ch;
 e.style.cssText=`left:${x}px;top:${y}px;font-size:${o.size||16}px;color:${o.color||"#b9737d"};--x:${o.dx||0}px;--y:${o.dy||-110}px;--r:${o.r||20}deg;--d:${o.d||2.2}s`;
 el.appendChild(e);setTimeout(()=>e.remove(),(o.d||2.2)*1000+100)};
function open(si,x,y){const el=slides[si];
 if(!still)for(let i=0;i<14;i++)fx(el,i%3?"♥":"♫",x,y,{size:14+Math.random()*14,dx:(Math.random()-.5)*190,dy:-60-Math.random()*130,r:(Math.random()-.5)*80,d:1.2+Math.random()*.6,color:["#b9737d","#d9a1a6","#7a3b4c","#a98445"][i%4]});
 setTimeout(()=>openLyrics(SONGS[si]),still?0:420)}
slides.forEach((el,si)=>{let sx=0,st=0,dx=0,id=null,moved=false;
 el.addEventListener("pointerdown",e=>{if(busy||order[0]!==si||(e.pointerType==="mouse"&&e.button))return;
  id=e.pointerId;el.setPointerCapture(id);sx=e.clientX;st=performance.now();dx=0;moved=false;nudged=true;el.classList.add("pressed");if(e.pointerType==="mouse")tilt(el,e)});
 el.addEventListener("pointermove",e=>{
  if(id===null){if(e.pointerType==="mouse"&&order[0]===si&&!busy)tilt(el,e);return}
  if(e.pointerId!==id)return;dx=e.clientX-sx;
  if(!moved&&Math.abs(dx)>8){moved=true;deck.classList.add("dragging");untilt(el)}
  if(moved){setv(el,{x:dx+"px",y:-Math.abs(dx)/18+"px",r:dx/14+"deg"});
   const p=Math.min(Math.abs(dx)/(W()*.7),1),b=slides[order[1]];if(b)setv(b,{x:14*(1-p)+"px",y:9*(1-p)+"px",r:4*(1-p)+"deg",sc:.94+.06*p})}});
 const end=e=>{if(id===null||e.pointerId!==id)return;id=null;el.classList.remove("pressed");
  const v=dx/Math.max(performance.now()-st,1);
  if(moved){if(Math.abs(dx)>W()*.3||Math.abs(v)>.6)fling(dx<0?-1:1);else{deck.classList.remove("dragging");layout()}}
  else if(e.type==="pointerup"){const r=el.getBoundingClientRect();open(si,e.clientX-r.left,e.clientY-r.top)}};
 el.addEventListener("pointerup",end);el.addEventListener("pointercancel",end);
 el.addEventListener("pointerleave",()=>{if(id===null)untilt(el)});
 el.addEventListener("keydown",e=>{if(order[0]!==si)return;
  if(e.key==="Enter"||e.key===" "){e.preventDefault();open(si,el.offsetWidth/2,el.offsetHeight/2)}
  else if(e.key==="ArrowRight")fling(-1);else if(e.key==="ArrowLeft")back()})});
let amb;
const ambient=()=>{if(document.hidden||still||busy)return;const el=slides[order[0]],w=el.offsetWidth,h=el.offsetHeight;
 fx(el,notes[Math.random()*3|0],w*(.15+Math.random()*.7),h*.85,{size:14+Math.random()*8,dx:(Math.random()-.5)*50,dy:-80-Math.random()*60,r:(Math.random()-.5)*50,d:2.6})};
if("IntersectionObserver"in window)new IntersectionObserver(([en])=>{clearInterval(amb);if(en.isIntersecting){amb=setInterval(ambient,1100);
 if(!nudged&&!still&&en.intersectionRatio>.6){nudged=true;setTimeout(()=>{if(busy||deck.classList.contains("dragging"))return;const el=slides[order[0]];
  setv(el,{x:"34px",r:"6deg"});setTimeout(()=>{if(!deck.classList.contains("dragging"))layout()},520)},700)}}},{threshold:[0,.6]}).observe(deck);
})();

/* ---------- SCROLL REVEAL ---------- */
(()=>{
 if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver"in window))return;
 const sel=".page h1,.page .sub,.sheet,.sheet > p,.sheet > .songreminds,.timeline li,.col h2,.pola,.mini,.card,.letter-body p,#confettiBtn";
 const els=[...document.querySelectorAll(sel)];
 document.documentElement.classList.add("rv");
 const groups=new Map();
 els.forEach(el=>{el.classList.add("rv");const k=el.parentElement;const n=groups.get(k)||0;groups.set(k,n+1);el.style.setProperty("--d",(n%6)*.09+"s")});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"0px 0px -10% 0px",threshold:0});
 const home=els.filter(e=>e.closest("#home")),rest=els.filter(e=>!e.closest("#home"));
 rest.forEach(e=>io.observe(e));
 /* the home page waits until the envelope intro has gone, so its animation isn't hidden behind it */
 const startHome=()=>home.forEach(e=>io.observe(e));
 const ob=$("#openBtn");
 if($("#intro")&&ob){ob.addEventListener("click",()=>setTimeout(startHome,2200),{once:true})}else startHome();
})();
