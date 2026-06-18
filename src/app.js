/* Lab Economia della Musica — engine (vanilla JS, no build) */
(function(){
"use strict";
const D = window.DATA;
const $ = (s,r)=> (r||document).querySelector(s);
const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));
const byId = {};
const areaById = {};
const songById = {};
D.areas.forEach(a=> areaById[a.id]=a);
D.topics.forEach(t=> byId[t.id]=t);
D.songs.forEach(s=> songById[s.id]=s);
// attach songs to topics & collect decades
D.songs.forEach(s=>{ s.decade = s.year ? (Math.floor(s.year/10)*10)+"s" : "—"; });
D.topics.forEach(t=>{ if(!t.songs) t.songs=[]; });
D.songs.forEach(s=>{ if(s.topic && byId[s.topic]) byId[s.topic].songs.push(s.id); });

/* ---------- helpers ---------- */
function el(tag, attrs, kids){
  const e=document.createElement(tag);
  if(attrs) for(const k in attrs){
    if(k==="class") e.className=attrs[k];
    else if(k==="html") e.innerHTML=attrs[k];
    else if(k.startsWith("on")) e.addEventListener(k.slice(2),attrs[k]);
    else if(attrs[k]!=null) e.setAttribute(k,attrs[k]);
  }
  if(kids!=null){ (Array.isArray(kids)?kids:[kids]).forEach(c=>{
    if(c==null) return;
    e.appendChild((typeof c==="string"||typeof c==="number")?document.createTextNode(String(c)):c);
  });}
  return e;
}
function esc(s){return (s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
const view = $("#view");
function setView(node){ view.innerHTML=""; view.appendChild(node); view.scrollTop=0; window.scrollTo(0,0); }
function go(hash){ location.hash = hash; }

/* ---------- persistent YouTube player con coda (playlist) + avanzamento automatico ---------- */
const P = { box:$("#player"), frame:$("#pFrame"), ttl:$("#pTtl"), sub:$("#pSub"), open:$("#pOpen"),
            qi:$("#pQi"), current:null, queue:[], idx:-1 };
let ytPlayer=null, ytApiReady=false, ytPending=null;
window.onYouTubeIframeAPIReady=function(){ ytApiReady=true; if(ytPending){ var f=ytPending; ytPending=null; f(); } };
(function(){ var s=document.createElement("script"); s.src="https://www.youtube.com/iframe_api"; document.head.appendChild(s); })();

function ytSearch(song){ return "https://www.youtube.com/results?search_query="+encodeURIComponent(song.q); }
function ytWatch(song){ return song.yt ? "https://www.youtube.com/watch?v="+song.yt : ytSearch(song); }
function showNoEmbed(s, opened){
  destroyYT();
  if(opened) window.open(ytWatch(s),"_blank","noopener");
  P.frame.appendChild(el("div",{class:"noembed"},[
    el("div",{},"«"+s.title+"» non si può riprodurre qui"+(opened?": aperto su YouTube in una nuova scheda.":".")),
    el("div",{style:"display:flex;gap:8px"},[
      el("a",{class:"btn",href:ytWatch(s),target:"_blank",rel:"noopener"},"Apri su YouTube ↗"),
      (P.idx+1<P.queue.length?el("button",{class:"btn ghost",onclick:playNext},"Successiva ⏭"):null)
    ])
  ]));
}
const FILE_PROTO = (location.protocol === "file:");
function showFileNotice(s){
  // Da file:// YouTube blocca SEMPRE l'embed (Error 153: serve un referrer/origine http,
  // che una pagina aperta da disco non ha). Niente codice può aggirarlo: offro il link diretto.
  destroyYT();
  P.frame.appendChild(el("div",{class:"noembed"},[
    el("div",{html:"Per riprodurre i video <b>qui dentro</b> la pagina deve girare da un indirizzo <b>http</b> (online o server locale).<br>Aperta da file locale, YouTube blocca l'embed (Error 153)."}),
    el("a",{class:"btn",href:ytWatch(s),target:"_blank",rel:"noopener"},"Guarda «"+s.title+"» su YouTube ↗")
  ]));
}
function embedYT(videoId){
  if(!ytApiReady){ ytPending=function(){ embedYT(videoId); }; return; }
  if(ytPlayer && ytPlayer.loadVideoById){ ytPlayer.loadVideoById(videoId); return; }
  P.frame.innerHTML='<div id="ytmount"></div>';
  ytPlayer=new YT.Player("ytmount",{ videoId:videoId, host:"https://www.youtube.com",
    playerVars:{autoplay:1, rel:0, playsinline:1},
    events:{
      onStateChange:function(e){
        if(e.data===YT.PlayerState.ENDED) autoNext();
        if(e.data===YT.PlayerState.PLAYING){ $("#pPlay").textContent="⏸"; $("#pPlay").title="Pausa"; }
        if(e.data===YT.PlayerState.PAUSED){ $("#pPlay").textContent="▶"; $("#pPlay").title="Riprendi"; }
      },
      // Solo errori "video non disponibile / embedding disabilitato" mostrano il fallback;
      // gli errori transitori (2,5,153) non sostituiscono il player.
      onError:function(e){ if([100,101,150].indexOf(e.data)>=0){ var s=songById[P.current]; if(s) showNoEmbed(s,false); } }
    } });
}
function destroyYT(){ if(ytPlayer){ try{ytPlayer.destroy();}catch(e){} ytPlayer=null; } P.frame.innerHTML=""; }
function updQi(){ P.qi.textContent = (P.queue.length>1)? (P.idx+1)+" / "+P.queue.length : ""; }

function playSong(id, queueIds){
  const s=songById[id]; if(!s) return;
  P.current=id;
  if(queueIds && queueIds.length){ P.queue=queueIds.slice(); P.idx=P.queue.indexOf(id); if(P.idx<0){P.queue=[id];P.idx=0;} }
  else if(P.queue.indexOf(id)>=0){ P.idx=P.queue.indexOf(id); }
  else { P.queue=[id]; P.idx=0; }
  P.ttl.textContent=s.title;
  P.sub.textContent=(s.artist||"")+(s.year?" · "+s.year:"")+(s.genre?" · "+s.genre:"");
  P.open.href=ytSearch(s);
  P.box.classList.remove("hidden"); P.box.classList.add("expanded"); $("#pToggle").textContent="▾";
  updQi();
  if(FILE_PROTO){
    showFileNotice(s);
  } else if(s.yt){
    $("#pPlay").textContent="⏸"; $("#pPlay").title="Pausa";
    embedYT(s.yt);
  } else {
    showNoEmbed(s, true);
  }
  $$(".song.playing").forEach(n=>n.classList.remove("playing"));
  $$('.song[data-song="'+id+'"]').forEach(n=>n.classList.add("playing"));
}
function playNext(){ if(P.idx+1<P.queue.length) playSong(P.queue[P.idx+1]); }
function playPrev(){ if(P.idx-1>=0) playSong(P.queue[P.idx-1]); }
function autoNext(){ // a fine brano: salta i brani non incorporabili per non aprire schede a sorpresa
  let i=P.idx+1;
  while(i<P.queue.length && !songById[P.queue[i]].yt) i++;
  if(i<P.queue.length) playSong(P.queue[i]);
}

$("#pToggle").addEventListener("click",()=>{
  P.box.classList.toggle("expanded");
  $("#pToggle").textContent = P.box.classList.contains("expanded")?"▾":"▴";
});
$("#pNext").addEventListener("click",playNext);
$("#pPrev").addEventListener("click",playPrev);
if(FILE_PROTO){ $("#pPlay").style.display="none"; } // da file:// non c'è riproduzione inline
$("#pPlay").addEventListener("click",()=>{
  if(!ytPlayer || !ytPlayer.getPlayerState) return;
  const st=ytPlayer.getPlayerState();
  if(st===YT.PlayerState.PLAYING || st===YT.PlayerState.BUFFERING) ytPlayer.pauseVideo();
  else ytPlayer.playVideo();
});
$("#pClose").addEventListener("click",()=>{ destroyYT(); P.box.classList.add("hidden"); P.current=null; P.queue=[]; P.idx=-1;
  $$(".song.playing").forEach(n=>n.classList.remove("playing")); });

function songCard(id, queue){
  const s=songById[id]; if(!s) return el("div");
  return el("div",{class:"song"+(P.current===id?" playing":""),"data-song":id},[
    el("button",{class:"play",title:"Ascolta",onclick:()=>playSong(id, queue)},"▶"),
    el("div",{class:"meta"},[
      el("div",{class:"ttl"},s.title),
      el("div",{class:"sub"},(s.artist||"")+(s.year?" · "+s.year:""))
    ]),
    s.genre?el("span",{class:"gtag"},s.genre):null,
    s.topic&&byId[s.topic]?el("a",{class:"ext",href:"#/topic/"+s.topic,title:"Vai all'argomento"},"→"):null,
    el("a",{class:"ext",href:ytSearch(s),target:"_blank",rel:"noopener",title:"Apri su YouTube"},"↗")
  ]);
}

/* ---------- sidebar ---------- */
function buildSidebar(){
  const sb=$("#sidebar"); sb.innerHTML="";
  D.areas.forEach(a=>{
    const topics=D.topics.filter(t=>t.area===a.id);
    const grp=el("div",{class:"area-group","data-area":a.id});
    const head=el("div",{class:"area-head",onclick:()=>grp.classList.toggle("open")},[
      el("span",{class:"dot",style:"background:"+a.color}),
      el("span",{},a.title),
      el("span",{class:"ico"},"▸")
    ]);
    const list=el("div",{class:"area-topics"});
    topics.forEach(t=> list.appendChild(el("a",{class:"t-link","data-t":t.id,href:"#/topic/"+t.id},t.title)));
    grp.appendChild(head); grp.appendChild(list); sb.appendChild(grp);
  });
}
function markSidebar(topicId){
  $$(".t-link").forEach(n=>n.classList.toggle("active",n.getAttribute("data-t")===topicId));
  if(topicId&&byId[topicId]){
    const ag=$('.area-group[data-area="'+byId[topicId].area+'"]');
    if(ag) ag.classList.add("open");
  }
}
function markNav(name){ $$(".topnav a").forEach(a=>a.classList.toggle("active",a.getAttribute("data-nav")===name)); }

/* ---------- render: home ---------- */
function renderHome(){
  markNav("home"); markSidebar(null);
  const wrap=el("div");
  wrap.appendChild(el("h1",{class:"title"},"Laboratorio · Economia dei beni musicali"));
  wrap.appendChild(el("div",{class:"lead"},"Naviga il programma, ascolta i brani mentre approfondisci, costruisci le tue scalette per l'orale."));
  const stats=el("div",{class:"chips"},[
    el("span",{class:"chip"},D.topics.length+" argomenti"),
    el("span",{class:"chip"},D.songs.length+" brani in discografia"),
    el("span",{class:"chip"},D.areas.length+" aree tematiche"),
    el("span",{class:"chip"},(D.maps?D.maps.length:0)+D.areas.length+" mappe concettuali")
  ]);
  wrap.appendChild(stats);

  wrap.appendChild(el("h2",{},"Aree del programma"));
  const grid=el("div",{class:"grid"});
  D.areas.forEach(a=>{
    const n=D.topics.filter(t=>t.area===a.id).length;
    grid.appendChild(el("a",{class:"card",href:"#/area/"+a.id,style:"border-top:3px solid "+a.color},[
      el("h3",{},a.title),
      el("p",{},a.short||""),
      el("div",{class:"cnt"},n+" argomenti")
    ]));
  });
  wrap.appendChild(grid);

  wrap.appendChild(el("h2",{},"Scorciatoie"));
  const g2=el("div",{class:"grid"});
  g2.appendChild(el("a",{class:"card",href:"#/music"},[el("h3",{},"Discografia"),el("p",{},"Tutti i brani citati, filtrabili per genere, decennio e area, ordinabili cronologicamente.")]));
  g2.appendChild(el("a",{class:"card",href:"#/maps"},[el("h3",{},"Mappe concettuali"),el("p",{},"Genealogie dei generi, catena tecnologica, dirompenza del digitale. Clicca i nodi per approfondire.")]));
  g2.appendChild(el("a",{class:"card",href:"#/scalette"},[el("h3",{},"Scalette & flussi"),el("p",{},"Costruisci percorsi per l'interrogazione: passi, collegamenti, brani. Salvati nel browser, stampabili.")]));
  wrap.appendChild(g2);
  setView(wrap);
}

/* ---------- render: area ---------- */
function renderArea(id){
  const a=areaById[id]; if(!a) return renderHome();
  markNav(null); markSidebar(null);
  const topics=D.topics.filter(t=>t.area===id);
  const wrap=el("div");
  wrap.appendChild(el("div",{class:"crumb"},[el("a",{href:"#/home"},"Home")," › ",a.title]));
  wrap.appendChild(el("h1",{class:"title"},a.title));
  if(a.desc) wrap.appendChild(el("div",{class:"lead"},a.desc));
  const grid=el("div",{class:"grid"});
  topics.forEach(t=>{
    grid.appendChild(el("a",{class:"card",href:"#/topic/"+t.id,style:"border-left:3px solid "+a.color},[
      el("h3",{},t.title),
      el("p",{},t.lead||""),
      el("div",{class:"cnt"},(t.songs?t.songs.length:0)+" brani")
    ]));
  });
  wrap.appendChild(grid);
  // area concept map
  wrap.appendChild(el("h2",{},"Mappa dell'area"));
  wrap.appendChild(radialMap(a));
  setView(wrap);
}

/* ---------- render: topic ---------- */
function renderBlocks(blocks){
  const frag=document.createDocumentFragment();
  (blocks||[]).forEach(b=>{
    if(b.t==="h") frag.appendChild(el("h3",{},b.x));
    else if(b.t==="p") frag.appendChild(el("p",{html:inlineRefs(b.x)}));
    else if(b.t==="ul"){ const u=el("ul"); b.x.forEach(li=>u.appendChild(el("li",{html:inlineRefs(li)}))); frag.appendChild(u); }
    else if(b.t==="quote"){ const q=el("blockquote",{html:inlineRefs(b.x)}); if(b.cite)q.appendChild(el("cite",{},"— "+b.cite)); frag.appendChild(q); }
    else if(b.t==="note") frag.appendChild(el("div",{class:"note",html:"<b>Nota.</b> "+inlineRefs(b.x)}));
    else if(b.t==="song") frag.appendChild(songCard(b.x));
  });
  return frag;
}
// allow [[song:id|label]] and [[topic:id|label]] inline
function inlineRefs(s){
  s=esc(s);
  s=s.replace(/\[\[song:([a-z0-9_-]+)\|([^\]]+)\]\]/gi,(m,id,lbl)=>'<a href="javascript:void(0)" onclick="LAB.play(\''+id+'\')">▶ '+lbl+'</a>');
  s=s.replace(/\[\[topic:([a-z0-9_-]+)\|([^\]]+)\]\]/gi,(m,id,lbl)=>'<a href="#/topic/'+id+'">'+lbl+'</a>');
  s=s.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');
  return s;
}
function renderTopic(id){
  const t=byId[id]; if(!t) return renderHome();
  markNav(null); markSidebar(id);
  const a=areaById[t.area]||{};
  const wrap=el("div");
  wrap.appendChild(el("div",{class:"crumb"},[el("span",{class:"dot",style:"background:"+(a.color||"#888")}),
    el("a",{href:"#/area/"+t.area},a.title||"")," › ",t.title]));
  wrap.appendChild(el("h1",{class:"title"},t.title));
  if(t.lead) wrap.appendChild(el("div",{class:"lead"},t.lead));
  wrap.appendChild(renderBlocks(t.body));

  if(t.songs&&t.songs.length){
    const sh=el("div",{class:"sec-h"},[el("h2",{},"Brani da ascoltare mentre studi"),el("span",{class:"kbd"},t.songs.length)]);
    wrap.appendChild(sh);
    const sw=el("div",{class:"songs-wrap"});
    t.songs.forEach(sid=> sw.appendChild(songCard(sid, t.songs)));
    wrap.appendChild(sw);
  }
  if(t.keywords&&t.keywords.length){
    wrap.appendChild(el("h2",{},"Parole chiave"));
    const ch=el("div",{class:"chips"}); t.keywords.forEach(k=>ch.appendChild(el("span",{class:"chip k"},k))); wrap.appendChild(ch);
  }
  if(t.related&&t.related.length){
    wrap.appendChild(el("h2",{},"Collegamenti"));
    const r=el("div",{class:"rel"});
    t.related.forEach(rid=>{ if(byId[rid]) r.appendChild(el("a",{href:"#/topic/"+rid},"→ "+byId[rid].title)); });
    wrap.appendChild(r);
  }
  // prev/next within area
  const sib=D.topics.filter(x=>x.area===t.area); const i=sib.indexOf(t);
  const navp=el("div",{class:"rel",style:"margin-top:26px;border-top:1px solid var(--line);padding-top:14px"});
  if(i>0) navp.appendChild(el("a",{href:"#/topic/"+sib[i-1].id},"‹ "+sib[i-1].title));
  if(i<sib.length-1) navp.appendChild(el("a",{href:"#/topic/"+sib[i+1].id,style:"float:right"},sib[i+1].title+" ›"));
  wrap.appendChild(navp);
  setView(wrap);
}

/* ---------- render: music (discoteca) ---------- */
const MusicState={genre:"",decade:"",area:"",sort:"year",dir:1,q:"",group:false};
function renderMusic(){
  markNav("music"); markSidebar(null);
  const wrap=el("div");
  wrap.appendChild(el("h1",{class:"title"},"Discografia"));
  wrap.appendChild(el("div",{class:"lead"},"Tutti i brani citati nel corso. Filtra per genere/decennio/area, ordina cronologicamente, e ascolta: il player resta attivo mentre approfondisci gli argomenti."));

  const genres=Array.from(new Set(D.songs.map(s=>s.genre).filter(Boolean))).sort();
  const decades=Array.from(new Set(D.songs.map(s=>s.decade))).sort();
  const tb=el("div",{class:"toolbar"});
  const gSel=el("select",{onchange:e=>{MusicState.genre=e.target.value;draw();}});
  gSel.appendChild(el("option",{value:""},"Tutti i generi"));
  genres.forEach(g=>gSel.appendChild(el("option",{value:g},g)));
  const dSel=el("select",{onchange:e=>{MusicState.decade=e.target.value;draw();}});
  dSel.appendChild(el("option",{value:""},"Tutti i decenni"));
  decades.forEach(d=>dSel.appendChild(el("option",{value:d},d)));
  const aSel=el("select",{onchange:e=>{MusicState.area=e.target.value;draw();}});
  aSel.appendChild(el("option",{value:""},"Tutte le aree"));
  D.areas.forEach(a=>aSel.appendChild(el("option",{value:a.id},a.title)));
  const sSel=el("select",{onchange:e=>{MusicState.sort=e.target.value;draw();}});
  [["year","Anno"],["artist","Artista"],["title","Titolo"],["genre","Genere"]].forEach(o=>sSel.appendChild(el("option",{value:o[0]},"Ordina: "+o[1])));
  const dirBtn=el("button",{class:"pbtn",onclick:()=>{MusicState.dir*=-1;dirBtn.textContent=MusicState.dir>0?"↑":"↓";draw();}},"↑");
  dirBtn.style.cssText="background:var(--bg3);border:1px solid var(--line);color:var(--txt);border-radius:8px;padding:7px 11px";
  const fInp=el("input",{placeholder:"filtra…",oninput:e=>{MusicState.q=e.target.value.toLowerCase();draw();}});
  const seg=el("div",{class:"seg"},[
    el("button",{class:MusicState.group?"":"on",onclick:()=>{MusicState.group=false;renderMusic();}},"Lista"),
    el("button",{class:MusicState.group?"on":"",onclick:()=>{MusicState.group=true;renderMusic();}},"Per artista")
  ]);
  gSel.value=MusicState.genre;dSel.value=MusicState.decade;aSel.value=MusicState.area;sSel.value=MusicState.sort;
  tb.append(gSel,dSel,aSel,sSel,dirBtn,fInp,seg);
  const cnt=el("span",{class:"count"}); tb.appendChild(cnt);
  wrap.appendChild(tb);
  const list=el("div"); wrap.appendChild(list);
  setView(wrap);

  function filtered(){
    let r=D.songs.filter(s=>{
      if(MusicState.genre&&s.genre!==MusicState.genre) return false;
      if(MusicState.decade&&s.decade!==MusicState.decade) return false;
      if(MusicState.area){ const tp=byId[s.topic]; if(!tp||tp.area!==MusicState.area) return false; }
      if(MusicState.q){ const h=(s.title+" "+s.artist+" "+(s.genre||"")+" "+(s.country||"")).toLowerCase(); if(h.indexOf(MusicState.q)<0) return false; }
      return true;
    });
    const k=MusicState.sort, d=MusicState.dir;
    r.sort((a,b)=>{
      let va=a[k], vb=b[k];
      if(k==="year"){ va=va||9999; vb=vb||9999; return (va-vb)*d; }
      return String(va||"").localeCompare(String(vb||""))*d;
    });
    return r;
  }
  function draw(){
    const r=filtered(); list.innerHTML=""; cnt.textContent=r.length+" brani";
    if(!r.length){ list.appendChild(el("div",{class:"empty"},"Nessun brano con questi filtri.")); return; }
    if(MusicState.group){
      const groups={};
      r.forEach(s=>{ (groups[s.artist]=groups[s.artist]||[]).push(s); });
      Object.keys(groups).sort().forEach(art=>{
        const gids=groups[art].map(x=>x.id);
        list.appendChild(el("div",{class:"artist-h"},art+" · "+groups[art].length));
        groups[art].forEach(s=> list.appendChild(songCard(s.id, gids)));
      });
    } else {
      const ids=r.map(x=>x.id);
      r.forEach(s=> list.appendChild(songCard(s.id, ids)));
    }
  }
  draw();
}

/* ---------- concept maps ---------- */
function radialMap(area){
  const topics=D.topics.filter(t=>t.area===area.id);
  const n=topics.length;
  const nodeW=152;
  // ring radius: big enough that (a) spokes clear the central hub and (b) adjacent spokes don't touch
  const R = n<=1 ? 0 : Math.max(200, (nodeW+36)/(2*Math.sin(Math.PI/n)));
  const padX=nodeW/2+50, padY=64;
  const W=Math.round(2*R+2*padX), H=Math.round(2*R+2*padY);
  const cx=W/2, cy=H/2;
  const svg=svgEl("svg",{class:"map",viewBox:"0 0 "+W+" "+H,width:W,height:H});
  const pt=(i)=>{ const a=(i/n)*Math.PI*2 - Math.PI/2; return {x:cx+R*Math.cos(a), y:cy+R*Math.sin(a)}; };
  topics.forEach((t,i)=>{ const p=pt(i); svg.appendChild(svgEl("line",{class:"edge",x1:cx,y1:cy,x2:p.x,y2:p.y})); });
  svg.appendChild(nodeG(cx,cy,area.title,area.color,null,area.id,true));
  topics.forEach((t,i)=>{ const p=pt(i); svg.appendChild(nodeG(p.x,p.y,t.title,shade(area.color,.5),t.id,null,false)); });
  return el("div",{class:"mapwrap"},svg);
}
function renderMaps(){
  markNav("maps"); markSidebar(null);
  const wrap=el("div");
  wrap.appendChild(el("h1",{class:"title"},"Mappe concettuali"));
  wrap.appendChild(el("div",{class:"lead"},"Clicca un nodo per saltare all'argomento. Le mappe tematiche mostrano i collegamenti trasversali utili all'orale; in fondo trovi una mappa per ciascuna area."));
  (D.maps||[]).forEach(m=>{
    wrap.appendChild(el("h2",{},m.title));
    if(m.desc) wrap.appendChild(el("p",{class:"sub",html:inlineRefs(m.desc)}));
    wrap.appendChild(flowMap(m));
  });
  wrap.appendChild(el("h2",{},"Mappe per area"));
  D.areas.forEach(a=>{
    wrap.appendChild(el("h3",{},a.title));
    wrap.appendChild(radialMap(a));
  });
  setView(wrap);
}
function flowMap(m){
  const cols=Math.max(...m.nodes.map(n=>n.col))+1;
  const rows=Math.max(...m.nodes.map(n=>n.row))+1;
  const cw=210, rh=78, padX=30, padY=40;
  const W=padX*2+cols*cw, H=padY*2+rows*rh;
  const pos={};
  m.nodes.forEach(n=>{ pos[n.id]={x:padX+n.col*cw+cw/2-cw/2+90, y:padY+n.row*rh+18}; });
  const svg=svgEl("svg",{class:"map",viewBox:"0 0 "+W+" "+H,width:W,height:H});
  (m.edges||[]).forEach(e=>{
    const a=pos[e.a], b=pos[e.b]; if(!a||!b) return;
    svg.appendChild(svgEl("line",{class:"edge",x1:a.x+76,y1:a.y,x2:b.x-76,y2:b.y,"marker-end":""}));
    if(e.label){ svg.appendChild(svgEl("text",{class:"edge-lbl",x:(a.x+b.x)/2,y:(a.y+b.y)/2-4,"text-anchor":"middle"},e.label)); }
  });
  m.nodes.forEach(n=>{
    const p=pos[n.id];
    const col=n.color|| (n.area&&areaById[n.area]?areaById[n.area].color:"#7d9bbd");
    svg.appendChild(nodeG(p.x,p.y,n.label,col,n.topic,n.area,n.hub));
  });
  return el("div",{class:"mapwrap"},svg);
}
function svgEl(tag,attrs,text){
  const e=document.createElementNS("http://www.w3.org/2000/svg",tag);
  for(const k in attrs) if(attrs[k]!=null&&attrs[k]!=="") e.setAttribute(k,attrs[k]);
  if(text!=null) e.textContent=text;
  return e;
}
function nodeG(x,y,label,color,topic,area,hub){
  const w=hub?150:148, h=hub?38:34;
  const g=svgEl("g",{class:"node"});
  if(topic) g.addEventListener("click",()=>go("#/topic/"+topic));
  else if(area) g.addEventListener("click",()=>go("#/area/"+area));
  const shape= hub? svgEl("rect",{x:x-w/2,y:y-h/2,width:w,height:h,rx:18,fill:color})
                   : svgEl("rect",{x:x-w/2,y:y-h/2,width:w,height:h,rx:9,fill:color});
  g.appendChild(shape);
  // wrap text into up to 2 lines
  const words=label.split(" "); let l1=label,l2="";
  if(label.length>18){ let mid=Math.ceil(words.length/2); l1=words.slice(0,mid).join(" "); l2=words.slice(mid).join(" "); }
  if(l2){
    g.appendChild(svgEl("text",{x:x,y:y-2,"text-anchor":"middle"},clip(l1,20)));
    g.appendChild(svgEl("text",{x:x,y:y+12,"text-anchor":"middle"},clip(l2,20)));
  } else {
    g.appendChild(svgEl("text",{x:x,y:y+4,"text-anchor":"middle"},clip(l1,22)));
  }
  return g;
}
function clip(s,n){ return s.length>n? s.slice(0,n-1)+"…":s; }
function shade(hex,f){ // lighten toward white by factor f
  try{const c=hex.replace("#","");const r=parseInt(c.substr(0,2),16),g=parseInt(c.substr(2,2),16),b=parseInt(c.substr(4,2),16);
  const m=v=>Math.round(v+(255-v)*f);return "rgb("+m(r)+","+m(g)+","+m(b)+")";}catch(e){return hex;}
}

/* ---------- search ---------- */
function renderSearch(q){
  markNav(null); markSidebar(null);
  q=(q||"").trim();
  const wrap=el("div");
  wrap.appendChild(el("h1",{class:"title"},"Ricerca"));
  if(q.length<2){ wrap.appendChild(el("div",{class:"empty"},"Scrivi almeno 2 caratteri.")); return setView(wrap); }
  const ql=q.toLowerCase();
  const reHL=new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");
  // topics
  const tHits=[];
  D.topics.forEach(t=>{
    const txt=(t.title+" "+(t.lead||"")+" "+(t.keywords||[]).join(" ")+" "+blocksText(t.body)).toLowerCase();
    const i=txt.indexOf(ql); if(i>=0) tHits.push({t,score:(t.title.toLowerCase().indexOf(ql)>=0?0:1),idx:i,txt});
  });
  tHits.sort((a,b)=>a.score-b.score);
  const sHits=D.songs.filter(s=>(s.title+" "+s.artist+" "+(s.genre||"")).toLowerCase().indexOf(ql)>=0);

  wrap.appendChild(el("div",{class:"lead"},'Risultati per "'+esc(q)+'": '+tHits.length+" argomenti, "+sHits.length+" brani."));
  if(tHits.length){
    wrap.appendChild(el("h2",{},"Argomenti"));
    tHits.slice(0,40).forEach(h=>{
      const snip=makeSnippet(blocksText(h.t.body)+" "+(h.t.lead||""),ql);
      const card=el("a",{class:"card",href:"#/topic/"+h.t.id,style:"display:block;margin:8px 0"},[
        el("h3",{html:h.t.title.replace(reHL,'<span class="hl">$1</span>')}),
        el("p",{html:snip.replace(reHL,'<span class="hl">$1</span>')})
      ]);
      wrap.appendChild(card);
    });
  }
  if(sHits.length){
    wrap.appendChild(el("h2",{},"Brani"));
    const sw=el("div",{class:"songs-wrap"});
    const sids=sHits.slice(0,60).map(x=>x.id);
    sids.forEach(sid=>sw.appendChild(songCard(sid, sids)));
    wrap.appendChild(sw);
  }
  if(!tHits.length&&!sHits.length) wrap.appendChild(el("div",{class:"empty"},"Nessun risultato."));
  setView(wrap);
}
function blocksText(blocks){ return (blocks||[]).map(b=> Array.isArray(b.x)?b.x.join(" "):(typeof b.x==="string"?b.x:"")).join(" "); }
function makeSnippet(text,ql){
  const i=text.toLowerCase().indexOf(ql); if(i<0) return esc(text.slice(0,160));
  const a=Math.max(0,i-70), b=Math.min(text.length,i+90);
  return (a>0?"…":"")+esc(text.slice(a,b))+(b<text.length?"…":"");
}

/* ---------- SCALETTE (outline / flow builder) ---------- */
const SC_KEY="lab_scalette_v1";
function scLoad(){ try{return JSON.parse(localStorage.getItem(SC_KEY))||null;}catch(e){return null;} }
function scSave(d){ localStorage.setItem(SC_KEY,JSON.stringify(d)); }
function scData(){
  let d=scLoad();
  if(!d){ d={list:(D.starterScalette||[]).map(s=>JSON.parse(JSON.stringify(s)))}; scSave(d); }
  return d;
}
function scUID(){ return "s"+Date.now().toString(36)+Math.random().toString(36).slice(2,5); }
function scExport(){
  const d=scData();
  const blob=new Blob([JSON.stringify(d,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="scalette-economia-musica.json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),2000);
}
function scImport(){
  const inp=document.createElement("input"); inp.type="file"; inp.accept="application/json,.json";
  inp.onchange=()=>{
    const f=inp.files[0]; if(!f) return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        const obj=JSON.parse(r.result);
        const incoming = Array.isArray(obj)?obj : (obj.list||[]);
        if(!incoming.length){ alert("Nessuna scaletta trovata nel file."); return; }
        const d=scData();
        incoming.forEach(s=>{ s.id=scUID(); d.list.unshift(s); });
        scSave(d); renderScalette();
        alert("Importate "+incoming.length+" scalette.");
      }catch(e){ alert("File non valido: "+e.message); }
    };
    r.readAsText(f);
  };
  inp.click();
}
function renderScalette(){
  markNav("scalette"); markSidebar(null);
  const d=scData();
  const wrap=el("div");
  wrap.appendChild(el("h1",{class:"title"},"Scalette & flussi per l'interrogazione"));
  wrap.appendChild(el("div",{class:"lead"},"Costruisci percorsi d'esame: passi ordinati, collegamenti tra i passi, note e brani da citare. Tutto si salva nel browser. Usa «Stampa» per portarne una copia cartacea."));
  const bar=el("div",{class:"adders"},[
    el("button",{class:"btn",onclick:()=>{ d.list.unshift({id:scUID(),title:"Nuova scaletta",steps:[]}); scSave(d); renderScalette(); }},"+ Nuova scaletta"),
    el("button",{class:"btn ghost",onclick:scExport,title:"Scarica tutte le scalette come file JSON"},"Esporta"),
    el("button",{class:"btn ghost",onclick:scImport,title:"Carica scalette da un file JSON"},"Importa")
  ]);
  wrap.appendChild(bar);
  if(!d.list.length){ wrap.appendChild(el("div",{class:"empty"},"Nessuna scaletta. Creane una.")); return setView(wrap); }
  const list=el("div",{class:"sc-list"});
  d.list.forEach(s=>{
    list.appendChild(el("div",{class:"sc-item"},[
      el("h3",{},s.title),
      el("span",{class:"chip"},(s.steps?s.steps.length:0)+" passi"),
      el("button",{class:"btn sm ghost",onclick:()=>go("#/scaletta/"+s.id)},"Apri ›"),
      el("button",{class:"btn sm ghost",onclick:()=>{ if(confirm("Eliminare \""+s.title+"\"?")){ d.list=d.list.filter(x=>x.id!==s.id); scSave(d); renderScalette(); } }},"Elimina")
    ]));
  });
  wrap.appendChild(list);
  setView(wrap);
}
function renderScaletta(id){
  markNav("scalette"); markSidebar(null);
  const d=scData(); const s=d.list.find(x=>x.id===id);
  if(!s) return renderScalette();
  s.steps=s.steps||[];
  const save=()=>scSave(d);
  const wrap=el("div");
  wrap.appendChild(el("div",{class:"crumb"},[el("a",{href:"#/scalette"},"Scalette")," › ",s.title]));
  const tIn=el("input",{class:"st-title",value:s.title,style:"font-size:25px;width:100%;background:transparent;border:none;color:var(--txt);outline:none;margin:4px 0 10px",
    oninput:e=>{s.title=e.target.value;save();}});
  wrap.appendChild(tIn);

  const stepsBox=el("div"); wrap.appendChild(stepsBox);

  function drawSteps(){
    stepsBox.innerHTML="";
    s.steps.forEach((st,i)=>{
      if(i>0) stepsBox.appendChild(el("div",{class:"linkflow"},"↓ "+(st.flow||"collegamento…")));
      const stepEl=el("div",{class:"step"});
      const titleIn=el("input",{class:"st-title",value:st.title||"",placeholder:"Titolo del passo…",oninput:e=>{st.title=e.target.value;save();}});
      const row=el("div",{class:"row"},[
        el("span",{class:"num"},String(i+1)),
        titleIn,
        el("div",{class:"tools"},[
          el("button",{class:"iconbtn",title:"Su",onclick:()=>{ if(i>0){[s.steps[i-1],s.steps[i]]=[s.steps[i],s.steps[i-1]];save();drawSteps();} }},"↑"),
          el("button",{class:"iconbtn",title:"Giù",onclick:()=>{ if(i<s.steps.length-1){[s.steps[i+1],s.steps[i]]=[s.steps[i],s.steps[i+1]];save();drawSteps();} }},"↓"),
          el("button",{class:"iconbtn",title:"Elimina",onclick:()=>{ s.steps.splice(i,1); save(); drawSteps(); }},"✕")
        ])
      ]);
      stepEl.appendChild(row);
      // flow/connection to NEXT step
      const flowIn=el("input",{class:"st-title",placeholder:"↳ collegamento al passo successivo…",value:st.flow||"",
        style:"font-size:12.5px;color:var(--acc2);margin-top:6px;width:100%;background:transparent;border:none;outline:none",
        oninput:e=>{st.flow=e.target.value;save();drawSteps&&0;}});
      const notes=el("textarea",{placeholder:"Note, concetti, dati, citazioni da dire…",oninput:e=>{st.notes=e.target.value;save();}});
      notes.value=st.notes||"";
      stepEl.appendChild(notes);
      stepEl.appendChild(flowIn);
      if(st.topic&&byId[st.topic]) stepEl.appendChild(el("div",{style:"margin-top:6px"},el("a",{href:"#/topic/"+st.topic},"→ "+byId[st.topic].title)));
      if(st.songs&&st.songs.length){ const sw=el("div",{class:"songs-wrap"}); st.songs.forEach(sid=>sw.appendChild(songCard(sid, st.songs))); stepEl.appendChild(sw); }
      stepsBox.appendChild(stepEl);
    });
  }
  drawSteps();

  // adders
  const topicSel=el("select");
  topicSel.appendChild(el("option",{value:""},"— aggiungi passo da un argomento —"));
  D.areas.forEach(a=>{
    const og=el("optgroup",{label:a.title});
    D.topics.filter(t=>t.area===a.id).forEach(t=>og.appendChild(el("option",{value:t.id},t.title)));
    topicSel.appendChild(og);
  });
  const songSel=el("select");
  songSel.appendChild(el("option",{value:""},"— aggiungi un brano all'ultimo passo —"));
  D.songs.slice().sort((a,b)=>(a.year||0)-(b.year||0)).forEach(so=>songSel.appendChild(el("option",{value:so.id},(so.artist?so.artist+" — ":"")+so.title+(so.year?" ("+so.year+")":""))));

  const adders=el("div",{class:"adders"},[
    el("button",{class:"btn",onclick:()=>{ s.steps.push({title:"Nuovo passo",notes:"",flow:""}); save(); drawSteps(); }},"+ Passo vuoto"),
    topicSel,
    el("button",{class:"btn ghost",onclick:()=>{ const id=topicSel.value; if(!id)return; const t=byId[id];
      s.steps.push({title:t.title,topic:id,notes:t.lead||"",songs:(t.songs||[]).slice(0,3),flow:""}); save(); drawSteps(); topicSel.value=""; }},"Aggiungi argomento"),
    songSel,
    el("button",{class:"btn ghost",onclick:()=>{ const id=songSel.value; if(!id)return; if(!s.steps.length){s.steps.push({title:"Brani",notes:"",songs:[]});}
      const last=s.steps[s.steps.length-1]; last.songs=last.songs||[]; if(last.songs.indexOf(id)<0)last.songs.push(id); save(); drawSteps(); songSel.value=""; }},"Aggiungi brano"),
    el("button",{class:"btn ghost",onclick:()=>window.print()},"Stampa")
  ]);
  wrap.appendChild(adders);
  setView(wrap);
}

/* ---------- router ---------- */
function router(){
  const h=location.hash||"#/home";
  const m=h.replace(/^#\//,"").split("/");
  const sb=$("#sidebar"); sb.classList.remove("show");
  if(m[0]==="topic") return renderTopic(decodeURIComponent(m[1]||""));
  if(m[0]==="area") return renderArea(decodeURIComponent(m[1]||""));
  if(m[0]==="music") return renderMusic();
  if(m[0]==="maps") return renderMaps();
  if(m[0]==="scalette") return renderScalette();
  if(m[0]==="scaletta") return renderScaletta(decodeURIComponent(m[1]||""));
  if(m[0]==="search") return renderSearch(decodeURIComponent(m.slice(1).join("/")||""));
  return renderHome();
}
window.addEventListener("hashchange",router);

/* global search box */
let stymer=null;
$("#globalSearch").addEventListener("input",e=>{
  const v=e.target.value;
  clearTimeout(stymer);
  stymer=setTimeout(()=>{ if(v.trim().length>=2) go("#/search/"+encodeURIComponent(v.trim())); },220);
});
$("#globalSearch").addEventListener("keydown",e=>{ if(e.key==="Enter"&&e.target.value.trim()) go("#/search/"+encodeURIComponent(e.target.value.trim())); });
$("#menuToggle").addEventListener("click",()=>$("#sidebar").classList.toggle("show"));

// expose minimal API for inline onclick
window.LAB={ play:playSong, go:go };

/* boot */
$(".brand small").textContent = D.meta.university;
buildSidebar();
router();
})();
