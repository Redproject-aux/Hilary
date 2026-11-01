const $=s=>document.querySelector(s);
/* ---------- EDIT YOUR CONTENT HERE ---------- */
const mk=(p,n)=>Array.from({length:n},(_,i)=>({src:`images/memories/${p}-${i+1}.jpg`,cap:"Add a caption",date:"Add a date"}));
const collections=[
 {title:"The Girl I Adore",items:mk("adore",4)},
 {title:"Just You and Me",items:mk("us",4)},
 {title:"Little Things, Big Memories",items:mk("moments",4)},
 {title:"Before I Knew You",items:mk("before",4)}
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
 ["Everything about you","Every small thing. All of it."]
 ["The way you make other people lives a little lighter with your pressence."]
 ["When you scratch the back of my head."]
 ["When you lift my mood up when i'm not feeling well."]
 ["when you compliments me even if i do not see myself attractive."]
 ["When you make sure that i'm okay."]
 ["All the time that we argue and there's a reason to leave, you still choose me."]
 ["For making me believe on myself."]
 ["For loving me, For choosing me, For taking care of me."]
 ["I love you, forever and always."]
];
const extra=["Write your own reason here.","Write your own reason here.","Write your own reason here.","Write your own reason here.","Write your own reason here.","Write your own reason here.","Write your own reason here.","Write your own reason here.","Write your own reason here."];
const finalLetter=["My dearest Yadi,","Three years of being with you, and I'm still finding new things to love: your laugh, your kindness, the way you never give up.","In the very unexpected and much remarckable moment, i met you. even though i don't see myself fitting in the standard you have, you still manage to build me up to who am i today. i'm very glad to you as your partner. i hope you never get tired of loving me even if sometimes i am in my worst.","Thank you for staying through the imperfect days. They were never small to me.","I hope you feel loved today and always. Happy 19th birthday, my love."];
/* ---------- APP ---------- */
const pages=[...document.querySelectorAll(".page")],links=[...document.querySelectorAll("#links a")];
function route(){const h=(location.hash||"#home").slice(1);const id=pages.some(p=>p.id===h)?h:"home";
 pages.forEach(p=>p.classList.toggle("active",p.id===id));links.forEach(a=>a.classList.toggle("on",a.hash==="#"+id));
 $("#links").classList.remove("show");$("#menuBtn").setAttribute("aria-expanded","false");scrollTo(0,0)}
addEventListener("hashchange",route);route();
$("#menuBtn").onclick=e=>{const s=$("#links").classList.toggle("show");e.currentTarget.setAttribute("aria-expanded",s)};
$("#openBtn").onclick=()=>{const i=$("#intro");i.classList.add("open");setTimeout(()=>i.classList.add("done"),1900);setTimeout(()=>i.remove(),3000)};
const song=$("#song"),pb=$("#playBtn");
pb.onclick=()=>{if(song.paused){song.play().then(()=>{pb.innerHTML="&#10074;&#10074; Pause";pb.setAttribute("aria-pressed","true")}).catch(()=>alert("Add your own music/best-part.mp3 to play the song."))}else{song.pause();pb.innerHTML="&#9654; Play";pb.setAttribute("aria-pressed","false")}};
const modal=$("#modal"),mb=$("#modalBody");
const show=h=>{mb.innerHTML=h;modal.hidden=false};
modal.onclick=e=>{if(e.target===modal||e.target.classList.contains("close"))modal.hidden=true};
addEventListener("keydown",e=>{if(e.key==="Escape")modal.hidden=true});
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const rots=[-3,2,-1.5,3];
$("#collections").innerHTML=collections.map((c,ci)=>`<div class="col"><h2>${esc(c.title)}</h2><div class="polas">${c.items.map((it,i)=>`<button class="pola" style="--r:${rots[i%4]}deg" data-c="${ci}" data-i="${i}"><div class="ph">&#10048;<img src="${it.src}" alt="${esc(it.cap)}" onerror="this.remove()"></div><span class="cap">${esc(it.cap)}</span><span class="dt">${esc(it.date)}</span></button>`).join("")}</div></div>`).join("");
$("#collections").onclick=e=>{const b=e.target.closest(".pola");if(!b)return;const it=collections[b.dataset.c].items[b.dataset.i];
 show(`<div class="view"><div class="ph">&#10048;<img src="${it.src}" alt="${esc(it.cap)}" onerror="this.remove()"></div><p class="script">${esc(it.cap)}</p><small>${esc(it.date)}</small></div>`)};
$("#envGrid").innerHTML=letters.map((l,i)=>`<button class="mini" data-i="${i}"><span>${esc(l.t)}</span></button>`).join("");
$("#envGrid").onclick=e=>{const b=e.target.closest(".mini");if(!b)return;const l=letters[b.dataset.i];
 show(`<div class="unfold"><h1>${esc(l.t)}</h1>${l.b.map(p=>`<p>${esc(p)}</p>`).join("")}<p class="sig">Always yours</p></div>`)};
const all=reasons.map(r=>r[0]+". "+r[1]).concat(extra);
$("#reasonGrid").innerHTML=all.map((t,i)=>`<button class="card" aria-label="Reason ${i+1}"><div class="in"><div class="f"><div>${i+1}<small>tap me</small></div></div><div class="b">${esc(t)}</div></div></button>`).join("");
$("#reasonGrid").onclick=e=>{const c=e.target.closest(".card");if(c)c.classList.toggle("flip")};
$("#finalLetter").innerHTML=finalLetter.map(p=>`<p>${esc(p)}</p>`).join("")+`<p class="sig">Forever yours</p>`;
$("#confettiBtn").onclick=()=>{for(let i=0;i<40;i++){const p=document.createElement("div");p.className="petal";p.textContent="\u2740";
 p.style.cssText=`left:${Math.random()*100}vw;font-size:${14+Math.random()*18}px;color:${["#c98a91","#f4d6d6","#b8955a","#6e1f33"][i%4]};animation-duration:${3+Math.random()*3}s`;document.body.appendChild(p);setTimeout(()=>p.remove(),6500)}};
