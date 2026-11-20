/* ===== 📚 빨간펜 솔루토이 우리 집 책장 · 하루 한 권 · 독후활동 ===== */
.bookview.rb-hasbooks{display:flex;flex-direction:column;gap:.75vh;height:100%;min-height:0;}
.rb-tree-body{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:.9vh;
  flex:1 1 auto;min-height:0;height:100%;}
body.mob .rb-tree-body{display:flex;flex-direction:column;gap:.7rem;height:auto;}
@media (max-width:900px){.rb-tree-body{display:flex;flex-direction:column;gap:.7rem;height:auto;}}
.rb-hide{display:none !important;}
.rb-tabs{display:flex;gap:.5vh;padding:.4vh .2vh;flex:0 0 auto;flex-wrap:wrap;}
.rb-tab{display:flex;align-items:center;gap:.5vh;padding:.85vh 1.4vh;border-radius:999px;background:#f1f6fb;
  box-shadow:inset 0 0 0 .18vh #dbe7f2;color:#4b6b82;font-size:1.45vh;font-weight:900;white-space:nowrap;}
.rb-tab.on{background:linear-gradient(135deg,#e8f6ff,#d3ecff);color:#0f6a96;box-shadow:inset 0 0 0 .26vh #6fc0ea,0 .3vh .8vh rgba(60,130,180,.18);}
.rb-tab .rb-tab-n{margin-left:.2vh;font-size:1.2vh;color:#8aa4b6;font-weight:900;}

/* 오늘의 질문 카드 (책 탭) */
.rb-ask{display:flex;align-items:center;gap:1.4vh;padding:1.2vh 1.6vh;border-radius:1.8vh;flex:0 0 auto;
  background:linear-gradient(120deg,#fff9ea,#fff4fb);box-shadow:inset 0 0 0 .2vh #f2dfb6;}
.rb-ask-c{width:7.6vh;flex:0 0 auto;border-radius:.9vh;overflow:hidden;background:#fff;box-shadow:0 .4vh 1vh rgba(120,90,40,.16);}
.rb-ask-c img{width:100%;display:block;aspect-ratio:3/4;object-fit:cover;}
.rb-ask-t{flex:1 1 auto;min-width:0;}
.rb-ask-q{font-size:1.32vh;font-weight:900;color:#a8762a;letter-spacing:.02em;}
.rb-ask-b{display:block;font-size:2.1vh;font-weight:900;color:#2a3646;line-height:1.25;margin:.2vh 0 .3vh;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rb-ask-s{font-size:1.25vh;color:#8b8f98;font-weight:800;}
.rb-ask-a{display:flex;flex-direction:column;gap:.5vh;flex:0 0 auto;}
.rb-btn{display:inline-flex;align-items:center;justify-content:center;gap:.4vh;border-radius:999px;
  padding:.85vh 1.5vh;font-size:1.4vh;font-weight:900;white-space:nowrap;
  box-shadow:inset 0 0 0 .2vh #d7e3ee;background:#fff;color:#476379;}
.rb-btn.yes{background:linear-gradient(135deg,#39b978,#2aa267);color:#fff;box-shadow:0 .35vh .9vh rgba(40,150,100,.28);}
.rb-btn.ghost{background:#f6f9fc;color:#7b8fa1;}
.rb-btn.act{background:linear-gradient(135deg,#f7b733,#f0932b);color:#fff;box-shadow:0 .35vh .9vh rgba(220,150,30,.3);}
.rb-btn:active{transform:scale(.97);}

/* 시리즈 칩 · 진행률 */
.rb-chips{display:flex;gap:.5vh;flex-wrap:wrap;flex:0 0 auto;padding:.2vh 0;}
.rb-chip{display:flex;align-items:center;gap:.45vh;padding:.7vh 1.2vh;border-radius:999px;background:#fff;
  box-shadow:inset 0 0 0 .16vh #e2ebf3;color:#4b6b82;font-size:1.32vh;font-weight:900;}
.rb-chip b{font-size:1.15vh;color:#9aabb9;font-weight:900;}
.rb-chip.on{background:#eaf7ef;color:#1f7a4d;box-shadow:inset 0 0 0 .24vh #7fce9f;}

.rb-prog{display:flex;align-items:center;gap:1vh;flex:0 0 auto;}
.rb-prog b{font-size:1.5vh;color:#2a3646;font-weight:900;}
.rb-bar{flex:1 1 auto;min-width:6vh;height:1.1vh;border-radius:999px;background:#dfe8f1;overflow:hidden;box-shadow:inset 0 0 0 .12vh #cfdce8;}
.rb-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#5ec2ee,#39b978);}
.rb-prog span{font-size:1.35vh;font-weight:900;color:#3f7f9e;}

/* 책 그리드 */
.rb-shelf{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;
  display:grid;grid-template-columns:repeat(auto-fill,minmax(11.4vh,1fr));gap:1vh;padding:.3vh .4vh 1.4vh;align-content:start;}
.rb-book{position:relative;display:flex;flex-direction:column;border-radius:1.2vh;background:#fff;padding:.55vh;
  box-shadow:0 .35vh .9vh rgba(90,120,150,.14);}
.rb-book img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:.8vh;background:#eef3f8;display:block;}
.rb-book .rb-bn{position:absolute;top:.9vh;left:.9vh;background:rgba(20,40,60,.62);color:#fff;font-size:1.05vh;
  font-weight:900;padding:.15vh .5vh;border-radius:.5vh;}
.rb-book .rb-bt{font-size:1.18vh;font-weight:900;color:#33475c;line-height:1.22;margin:.45vh .15vh .1vh;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.8vh;}
.rb-book .rb-ba{display:flex;gap:.3vh;margin-top:.2vh;}
.rb-book .rb-chk{flex:1 1 auto;border-radius:.7vh;padding:.5vh 0;font-size:1.1vh;font-weight:900;
  background:#f2f6fa;color:#8fa3b4;box-shadow:inset 0 0 0 .14vh #e2ebf3;}
.rb-book .rb-chk.on{background:#eafaf1;color:#1f7a4d;box-shadow:inset 0 0 0 .18vh #8fd6ac;}
.rb-book .rb-pen{flex:0 0 auto;border-radius:.7vh;padding:.5vh .6vh;font-size:1.1vh;background:#fff7e8;color:#b57b16;
  box-shadow:inset 0 0 0 .14vh #f2e0bb;}
.rb-book.read{background:#f7fdf9;}
.rb-book.read img{opacity:.92;}
.rb-more{grid-column:1/-1;width:100%;border-radius:1.2vh;padding:1.1vh 0;font-size:1.35vh;font-weight:900;
  background:#f2f8fd;color:#3f7f9e;box-shadow:inset 0 0 0 .16vh #d7e8f5;}
.rb-note{font-size:1.2vh;font-weight:800;color:#8b8f98;margin:.2vh 0 .4vh;}
.rb-book.read::after{content:"✓";position:absolute;top:.55vh;right:.6vh;width:2.1vh;height:2.1vh;border-radius:50%;
  background:#39b978;color:#fff;font-size:1.25vh;font-weight:900;display:flex;align-items:center;justify-content:center;
  box-shadow:0 .25vh .6vh rgba(40,150,100,.35);}

/* 홈 카드 */
.rb-home{grid-column:1/-1;flex:0 0 auto;display:flex;align-items:center;gap:1.5vh;padding:1.3vh 1.7vh;border-radius:2vh;
  background:linear-gradient(120deg,#eef8ff,#f7f1ff 60%,#fff6ec);box-shadow:inset 0 0 0 .2vh #dbe8f6,0 .4vh 1.2vh rgba(80,120,170,.12);}
.rb-home .rb-hc{width:8.4vh;flex:0 0 auto;border-radius:1vh;overflow:hidden;background:#fff;box-shadow:0 .5vh 1.2vh rgba(70,100,140,.2);}
.rb-home .rb-hc img{width:100%;display:block;aspect-ratio:3/4;object-fit:cover;}
.rb-home .rb-hi{flex:1 1 auto;min-width:0;}
.rb-home .rb-hk{font-size:1.25vh;font-weight:900;color:#5b7fa3;letter-spacing:.02em;}
.rb-home .rb-hs{display:block;font-size:1.22vh;font-weight:900;color:#9aa6b4;}
.rb-home .rb-ht{display:block;font-size:2.3vh;font-weight:900;color:#22303f;line-height:1.2;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:.15vh 0 .2vh;}
.rb-home .rb-hq{display:block;font-size:1.3vh;font-weight:800;color:#7f8b99;}
.rb-home .rb-ha{display:flex;flex-direction:column;gap:.55vh;flex:0 0 auto;}

/* 독후활동 */
.rb-act{flex:1 1 auto;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:1vh;padding-bottom:1.6vh;}
.rb-act-h{display:flex;align-items:center;gap:1.2vh;flex:0 0 auto;}
.rb-act-h img{width:6.4vh;border-radius:.8vh;box-shadow:0 .4vh 1vh rgba(70,100,140,.18);}
.rb-act-h b{display:block;font-size:1.9vh;color:#22303f;line-height:1.25;}
.rb-act-h span{font-size:1.3vh;font-weight:900;color:#8b9aa8;}
.rb-step{border-radius:1.4vh;background:#fff;padding:1.1vh 1.4vh;box-shadow:inset 0 0 0 .18vh #e6eef5;}
.rb-step-h{display:flex;align-items:center;gap:.6vh;margin-bottom:.7vh;flex-wrap:wrap;}
.rb-step-h b{font-size:1.5vh;color:#2a3646;}
.rb-step-h span{font-size:1.2vh;font-weight:900;color:#9aa9b7;}
.rb-q{font-size:1.5vh;font-weight:900;color:#33475c;margin:.2vh 0 .6vh;}
.rb-opts{display:flex;flex-wrap:wrap;gap:.55vh;}
.rb-opt{padding:.7vh 1.3vh;border-radius:999px;background:#f4f8fc;box-shadow:inset 0 0 0 .16vh #dfe9f2;
  font-size:1.35vh;font-weight:900;color:#49677f;}
.rb-opt.ok{background:#e9faf0;color:#1f7a4d;box-shadow:inset 0 0 0 .22vh #7fd0a0;}
.rb-opt.no{background:#fdeeec;color:#b3413a;box-shadow:inset 0 0 0 .22vh #efb6b1;}
.rb-rec{display:flex;flex-wrap:wrap;gap:.6vh;align-items:center;}
.rb-rec .rec,.rb-rec .recplay{border-radius:999px;padding:.75vh 1.3vh;font-size:1.32vh;font-weight:900;
  background:#f2f7fc;color:#3d6c8c;box-shadow:inset 0 0 0 .16vh #d9e6f1;}
.rb-rec .recplay[disabled]{opacity:.45;}
.rb-canvas-box{position:relative;border-radius:1.2vh;overflow:hidden;background:#fff;
  box-shadow:inset 0 0 0 .2vh #e2ebf3;}
.rb-canvas-box canvas{display:block;width:100%;height:26vh;touch-action:none;cursor:crosshair;background:#fff;}
.rb-pal{display:flex;flex-wrap:wrap;gap:.5vh;align-items:center;margin-top:.7vh;}
.rb-sw{width:2.6vh;height:2.6vh;border-radius:50%;box-shadow:inset 0 0 0 .16vh rgba(0,0,0,.12);}
.rb-sw.on{box-shadow:0 0 0 .3vh #22303f,inset 0 0 0 .1vh #fff;transform:scale(1.06);}
.rb-tool{padding:.6vh 1.1vh;border-radius:999px;background:#f4f8fc;box-shadow:inset 0 0 0 .16vh #dfe9f2;
  font-size:1.25vh;font-weight:900;color:#49677f;}
.rb-tool.on{background:#e8f4ff;color:#176a96;box-shadow:inset 0 0 0 .22vh #79c3e8;}
.rb-art-thumb{display:flex;align-items:center;gap:.8vh;margin-top:.6vh;}
.rb-art-thumb img{width:12vh;border-radius:.8vh;box-shadow:0 .3vh .8vh rgba(70,100,140,.2);}
.rb-art-thumb span{font-size:1.2vh;font-weight:900;color:#8b9aa8;}
.rb-done{display:flex;align-items:center;gap:.8vh;font-size:1.3vh;font-weight:900;color:#1f7a4d;}
.rb-empty{padding:2vh;text-align:center;color:#93a3b1;font-size:1.4vh;font-weight:900;}

/* 휴대폰 */
body.mob .rb-shelf{grid-template-columns:repeat(auto-fill,minmax(26vw,1fr));gap:1.5vw;}
body.mob .rb-book .rb-bt{font-size:2.1vw;min-height:5vw;}
body.mob .rb-book .rb-chk,body.mob .rb-book .rb-pen{font-size:1.9vw;padding:.8vw 0;}
body.mob .rb-tab{font-size:2.6vw;padding:1.4vw 2.6vw;}
body.mob .rb-ask-b{font-size:4.2vw;}
body.mob .rb-home .rb-ht{font-size:4.4vw;}
body.mob .rb-home .rb-hq,body.mob .rb-home .rb-hs,body.mob .rb-home .rb-hk{font-size:2.5vw;}
body.mob .rb-btn{font-size:2.7vw;padding:1.5vw 3vw;}
body.mob .rb-q{font-size:3vw;}
body.mob .rb-opt{font-size:2.6vw;}
body.mob .rb-canvas-box canvas{height:34vw;}

/* 리딩앤 바로가기 */
.rb-ext{display:inline-flex;align-items:center;gap:.4vh;text-decoration:none;
  background:linear-gradient(135deg,#fff2e8,#ffe6f0);color:#b5482f !important;
  box-shadow:inset 0 0 0 .2vh #f6c6ae;border-radius:999px;font-weight:900;}
.rb-ext:active{transform:scale(.97);}

/* ===== 홈: 이번 주 출석 띠 없애고 숙제 칸을 길게 (2026-11-20 요청) ===== */
.wk-attlbl,.wk-attrow{display:none !important;}
#viewHome .weekboard{gap:.45vh;padding:.8vh 1vh;}
#viewHome .wk-head{gap:.6vh;}
#viewHome .wk-grid{gap:.5vh;}
#viewHome .wk-day{padding:.55vh .5vh;gap:.22vh;}
#viewHome .wk-dh{gap:.25vh;}
#viewHome .wk-dh b{font-size:.98rem;}
#viewHome .wk-dh span{font-size:.74rem;}
#viewHome .wk-edit{width:1.6rem;height:1.6rem;font-size:.8rem;}
#viewHome .wk-subs{gap:.16rem;}
#viewHome .wk-sub{padding:.1rem .34rem;font-size:.74rem;gap:.12rem;}
#viewHome .wk-sub i{font-size:.8rem;}
#viewHome .wk-hwlist{gap:.06rem;min-height:1rem;}
#viewHome .wk-hwitem{gap:.12rem;align-items:center;}
#viewHome .wk-hwchk{width:1.1rem;height:1.1rem;font-size:.76rem;}
#viewHome .wk-hwtx{font-size:.82rem;line-height:1.12;letter-spacing:-.015em;}
#viewHome .wk-hwdel{width:.95rem;height:.95rem;font-size:.58rem;}
#viewHome .wk-hwadd{gap:.18rem;margin-top:.15rem;}
#viewHome .wk-hwin{height:1.85rem;font-size:16px;border-radius:.42rem;}
#viewHome .wk-hwbtn{width:1.85rem;height:1.85rem;font-size:1rem;border-radius:.42rem;}
body.mob #viewHome .wk-hwchk{width:1.45rem;height:1.45rem;font-size:1rem;}
body.mob #viewHome .wk-hwtx{font-size:1rem;}
/* 오늘 읽을 책 카드는 출석 현황판 바로 아래(주간 표 위)에 */
#viewHome{grid-template-rows:auto auto minmax(0,1fr);}
#viewHome .rb-home{grid-row:2;align-self:start;}
#viewHome .weekboard{grid-row:3 !important;}
body.mob #viewHome .rb-home,body.mob #viewHome .weekboard{grid-row:auto !important;}
/* 독후활동: 넓은 화면에서 그림판이 지나치게 커지지 않게 */
.rb-act{width:100%;max-width:1180px;margin:0 auto;}
.rb-canvas-box{max-width:760px;}
.rb-canvas-box canvas{height:clamp(140px,24vh,230px);}
body.mob .rb-canvas-box canvas{height:clamp(150px,34vw,260px);}

/* ==/RB-BLOCK-CSS== */
</style>
</head>
<body class="mob">

<svg id="icSprite" class="ic-sprite" aria-hidden="true" focusable="false" width="0" height="0">
  <defs>
    <linearGradient id="gScreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8ed6f8"/><stop offset="1" stop-color="#3d97d6"/></linearGradient>
    <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe38a"/><stop offset="1" stop-color="#f6b32a"/></linearGradient>
    <linearGradient id="gMint" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8ecb2"/><stop offset="1" stop-color="#54bb6c"/></linearGradient>
    <linearGradient id="gPink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc6d6"/><stop offset="1" stop-color="#f58daa"/></linearGradient>
    <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c4e9ff"/><stop offset="1" stop-color="#7cc7ee"/></linearGradient>
    <linearGradient id="gFire" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb05c"/><stop offset="1" stop-color="#f2603a"/></linearGradient>
    <linearGradient id="gMoon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffeeb4"/><stop offset="1" stop-color="#f6c857"/></linearGradient>
    <linearGradient id="gStone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2e6cf"/><stop offset="1" stop-color="#dcc6a2"/></linearGradient>
  </defs>

  <symbol id="ic-home" viewBox="0 0 24 24">
    <path d="M5 11.4h14v7.5a1.7 1.7 0 0 1-1.7 1.7H6.7A1.7 1.7 0 0 1 5 18.9z" fill="#fdf7ec"/>
    <path d="M2.3 11.8 12 4.1l9.7 7.7-1.6 2L12 7.1 3.9 13.8z" fill="#f4715c"/>
    <path d="M2.3 11.8 12 4.1l9.7 7.7-.75 1L12 5.8 3.05 12.8z" fill="#ff9b86"/>
    <rect x="10" y="14" width="4" height="6.6" rx="1.2" fill="#f0b56b"/>
    <circle cx="13" cy="17.4" r=".5" fill="#c58338"/>
  </symbol>

  <symbol id="ic-study" viewBox="0 0 24 24">
    <rect x="2.9" y="4" width="18.2" height="12.4" rx="2.3" fill="#dfe9f2"/>
    <rect x="4.5" y="5.6" width="15" height="9.2" rx="1.3" fill="url(#gScreen)"/>
    <circle cx="9.4" cy="8.9" r="2.1" fill="#ffffff" opacity=".5"/>
    <rect x="1.6" y="16.4" width="20.8" height="3.1" rx="1.55" fill="#c6d8e6"/>
    <rect x="9.6" y="17.1" width="4.8" height="1.5" rx=".75" fill="#eef5fa"/>
  </symbol>

  <symbol id="ic-book" viewBox="0 0 24 24">
    <rect x="3.4" y="2.8" width="17.2" height="18.4" rx="2.6" fill="#4f9fe0"/>
    <path d="M6 2.8h2.7v18.4H6A2.6 2.6 0 0 1 3.4 18.6V5.4A2.6 2.6 0 0 1 6 2.8z" fill="#3b86c4"/>
    <rect x="15.4" y="4.6" width="3.8" height="15" rx="1.9" fill="#fdf7ea"/>
    <path d="M9.8 2.8h3.4v6.4l-1.7-1.4-1.7 1.4z" fill="#ffd166"/>
  </symbol>

  <symbol id="ic-piggy" viewBox="0 0 24 24">
    <circle cx="4.9" cy="10.3" r="2.3" fill="#f795b2"/>
    <circle cx="14.9" cy="9.1" r="2.1" fill="#f795b2"/>
    <ellipse cx="10.6" cy="15" rx="7.3" ry="5.6" fill="url(#gPink)"/>
    <ellipse cx="6" cy="15.7" rx="2.2" ry="1.8" fill="#f4829f"/>
    <circle cx="5.3" cy="15.5" r=".42" fill="#c85f7d"/>
    <circle cx="6.7" cy="15.5" r=".42" fill="#c85f7d"/>
    <circle cx="9.6" cy="13.2" r=".7" fill="#a94f6b"/>
    <rect x="12.2" y="10.9" width="4.2" height="1" rx=".5" fill="#c96387" transform="rotate(-12 14.3 11.4)"/>
    <rect x="7.3" y="19.4" width="2.2" height="2.7" rx="1.1" fill="#f0879f"/>
    <rect x="12.4" y="19.4" width="2.2" height="2.7" rx="1.1" fill="#f0879f"/>
    <circle cx="17.8" cy="6.1" r="3.3" fill="url(#gGold)"/>
    <path d="M16.5 5.3h2.6M16.7 6.6h2.2" stroke="#dfa226" stroke-width=".7" stroke-linecap="round"/>
  </symbol>

  <symbol id="ic-attend" viewBox="0 0 24 24">
    <rect x="3.2" y="4.4" width="17.6" height="16.4" rx="2.7" fill="#fffdf9"/>
    <path d="M3.2 7.1a2.7 2.7 0 0 1 2.7-2.7h12.2a2.7 2.7 0 0 1 2.7 2.7v3H3.2z" fill="#f4715c"/>
    <rect x="7.3" y="2.4" width="1.8" height="3.9" rx=".9" fill="#a9bccb"/>
    <rect x="14.9" y="2.4" width="1.8" height="3.9" rx=".9" fill="#a9bccb"/>
    <path d="M8.1 14.4l2.5 2.6 5.1-5.2" fill="none" stroke="#35bd82" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <symbol id="ic-cal" viewBox="0 0 24 24">
    <rect x="3.2" y="4.4" width="17.6" height="16.4" rx="2.7" fill="#fffdf9"/>
    <path d="M3.2 7.1a2.7 2.7 0 0 1 2.7-2.7h12.2a2.7 2.7 0 0 1 2.7 2.7v3H3.2z" fill="#39c08a"/>
    <rect x="7.3" y="2.4" width="1.8" height="3.9" rx=".9" fill="#a9bccb"/>
    <rect x="14.9" y="2.4" width="1.8" height="3.9" rx=".9" fill="#a9bccb"/>
    <g fill="#cfdde8"><circle cx="7.6" cy="13.3" r="1.15"/><circle cx="12" cy="13.3" r="1.15"/><circle cx="16.4" cy="13.3" r="1.15"/><circle cx="7.6" cy="17.4" r="1.15"/><circle cx="12" cy="17.4" r="1.15"/></g>
    <circle cx="16.4" cy="17.4" r="1.15" fill="#39c08a"/>
  </symbol>

  <symbol id="ic-room" viewBox="0 0 24 24">
    <path d="M12 2.3c4.2 0 7.4 5.1 7.4 10.2 0 4.7-3.2 8.2-7.4 8.2s-7.4-3.5-7.4-8.2C4.6 7.4 7.8 2.3 12 2.3z" fill="url(#gMint)"/>
    <ellipse cx="8.9" cy="7.2" rx="1.6" ry="2.3" fill="#ffffff" opacity=".45" transform="rotate(-22 8.9 7.2)"/>
    <ellipse cx="9.5" cy="9.9" rx=".95" ry="1.15" fill="#1f4c6b"/>
    <ellipse cx="14.5" cy="9.9" rx=".95" ry="1.15" fill="#1f4c6b"/>
    <ellipse cx="12" cy="12.9" rx="2.4" ry="1.05" fill="#6cc97a" stroke="#1f4c6b" stroke-width=".85"/>
    <ellipse cx="12" cy="15.1" rx="2.4" ry="1.05" fill="#6cc97a" stroke="#1f4c6b" stroke-width=".85"/>
  </symbol>

  <symbol id="ic-gear" viewBox="0 0 24 24">
    <g fill="#9db3c6">
      <rect x="10.85" y="1.5" width="2.3" height="3.5" rx="1.1"/>
      <rect x="10.85" y="19" width="2.3" height="3.5" rx="1.1"/>
      <rect x="1.5" y="10.85" width="3.5" height="2.3" rx="1.1"/>
      <rect x="19" y="10.85" width="3.5" height="2.3" rx="1.1"/>
      <rect x="10.85" y="1.5" width="2.3" height="3.5" rx="1.1" transform="rotate(45 12 12)"/>
      <rect x="10.85" y="19" width="2.3" height="3.5" rx="1.1" transform="rotate(45 12 12)"/>
      <rect x="1.5" y="10.85" width="3.5" height="2.3" rx="1.1" transform="rotate(45 12 12)"/>
      <rect x="19" y="10.85" width="3.5" height="2.3" rx="1.1" transform="rotate(45 12 12)"/>
    </g>
    <circle cx="12" cy="12" r="6.7" fill="#9db3c6"/>
    <circle cx="12" cy="12" r="2.9" fill="#f8fbfd"/>
  </symbol>

  <symbol id="ic-refresh" viewBox="0 0 24 24">
    <path d="M20 12A8 8 0 1 1 16.2 5.3" fill="none" stroke="#33a6c8" stroke-width="2.3" stroke-linecap="round"/>
    <path d="M16.2 1.9v3.6h3.6" fill="none" stroke="#33a6c8" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="1.5" fill="#8fd5e6"/>
  </symbol>

  <symbol id="ic-star" viewBox="0 0 24 24">
    <path d="M12 2.8l2.75 5.6 6.1.85-4.45 4.3 1.07 6.15L12 16.75 6.53 19.7l1.07-6.15L3.15 9.25l6.1-.85z" fill="url(#gGold)"/>
  </symbol>

  <symbol id="ic-fire" viewBox="0 0 24 24">
    <path d="M12 2.3c3.9 3.6 6.6 6.6 6.6 10.6 0 3.9-2.9 7-6.6 7s-6.6-3.1-6.6-7c0-2.1 1-3.9 2.4-5.6.4 1.7 1.4 2.8 2.7 3.2.2-3.3.8-5.6 1.5-8.2z" fill="url(#gFire)"/>
    <path d="M12 12.5c1.7 1.7 2.7 2.9 2.7 4.5 0 1.6-1.2 2.7-2.7 2.7s-2.7-1.1-2.7-2.7c0-1.6 1-2.8 2.7-4.5z" fill="#ffe08a"/>
  </symbol>

  <symbol id="ic-check" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9.3" fill="#35bd82"/>
    <path d="M7.4 12.3l3.1 3.1 6.1-6.3" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <symbol id="ic-check-off" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8.6" fill="none" stroke="#cfdbe5" stroke-width="1.9"/>
  </symbol>

  <symbol id="ic-paw" viewBox="0 0 24 24">
    <ellipse cx="12" cy="15.6" rx="4.7" ry="3.9" fill="#d99a5c"/>
    <ellipse cx="6.9" cy="9.9" rx="1.5" ry="1.9" fill="#d99a5c"/>
    <ellipse cx="10.3" cy="7.7" rx="1.5" ry="2" fill="#d99a5c"/>
    <ellipse cx="13.8" cy="7.7" rx="1.5" ry="2" fill="#d99a5c"/>
    <ellipse cx="17.1" cy="9.9" rx="1.5" ry="1.9" fill="#d99a5c"/>
  </symbol>

  <symbol id="ic-onigiri" viewBox="0 0 24 24">
    <path d="M12 3.3 4.1 17.5a1.7 1.7 0 0 0 1.5 2.6h12.8a1.7 1.7 0 0 0 1.5-2.6z" fill="#fffaf0"/>
    <path d="M12 3.3 4.1 17.5a1.7 1.7 0 0 0 1.5 2.6h12.8a1.7 1.7 0 0 0 1.5-2.6z" fill="none" stroke="#e9dcc6" stroke-width=".95"/>
    <rect x="9.3" y="14.1" width="5.4" height="5.9" rx="1" fill="#3f5a4a"/>
  </symbol>

  <symbol id="ic-ball" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8.7" fill="#fff8f2"/>
    <path d="M3.9 9.4c5.3-1.4 11-1 16.1 1.1M4 14.6c5.1 1.4 10.8 1 15.9-1.2" fill="none" stroke="#f4715c" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="8.7" fill="none" stroke="#e8dccf" stroke-width=".9"/>
  </symbol>

  <symbol id="ic-run" viewBox="0 0 24 24">
    <circle cx="14.6" cy="5.1" r="2.1" fill="#4a93d6"/>
    <path d="M13.6 8.4 11.5 12.2l2 2-1.1 4.7M11.5 12.2 8 13.9M13.4 14.2l2.7 4.3M11.5 12.2 8.7 8.7" fill="none" stroke="#4a93d6" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <symbol id="ic-moon" viewBox="0 0 24 24">
    <path d="M15.7 3.2a8.7 8.7 0 1 0 5 14.1A9.7 9.7 0 0 1 15.7 3.2z" fill="url(#gMoon)"/>
  </symbol>

  <symbol id="ic-bed" viewBox="0 0 24 24">
    <rect x="2.6" y="9.2" width="2.5" height="8.4" rx="1.2" fill="#c08f61"/>
    <rect x="5" y="12.4" width="16.4" height="5.2" rx="1.7" fill="#d6e8f4"/>
    <rect x="5.9" y="10.2" width="5" height="3.2" rx="1.5" fill="#fffdf8"/>
    <path d="M11.4 12.4h9.4a1.2 1.2 0 0 1 1.2 1.2v4h-10.6z" fill="#8fbbe0"/>
    <rect x="4.4" y="17.2" width="2.1" height="3.2" rx="1" fill="#c08f61"/>
    <rect x="18.2" y="17.2" width="2.1" height="3.2" rx="1" fill="#c08f61"/>
  </symbol>

  <symbol id="ic-talk" viewBox="0 0 24 24">
    <path d="M4 4.4h16a2.5 2.5 0 0 1 2.5 2.5v7.4a2.5 2.5 0 0 1-2.5 2.5h-7.1L8.2 20.4v-3.6H4A2.5 2.5 0 0 1 1.5 14.3V6.9A2.5 2.5 0 0 1 4 4.4z" fill="url(#gSky)"/>
    <g fill="#fff"><circle cx="7.8" cy="10.6" r="1.1"/><circle cx="12" cy="10.6" r="1.1"/><circle cx="16.2" cy="10.6" r="1.1"/></g>
  </symbol>

  <symbol id="ic-heart" viewBox="0 0 24 24">
    <path d="M12 20.5S3.3 15 3.3 9.2A4.7 4.7 0 0 1 12 6.7a4.7 4.7 0 0 1 8.7 2.5c0 5.8-8.7 11.3-8.7 11.3z" fill="url(#gPink)"/>
  </symbol>

  <symbol id="ic-gift" viewBox="0 0 24 24">
    <rect x="3.4" y="9.6" width="17.2" height="10.8" rx="1.9" fill="url(#gGold)"/>
    <rect x="2.3" y="6.6" width="19.4" height="3.5" rx="1.5" fill="#ffd76b"/>
    <rect x="10.7" y="6.6" width="2.6" height="13.8" fill="#f4715c"/>
    <path d="M12 6.4C10 3.1 6.3 3.3 6.9 5.6c.4 1.7 3.5 1 5.1.8zM12 6.4c2-3.3 5.7-3.1 5.1-.8-.4 1.7-3.5 1-5.1.8z" fill="#f4715c"/>
  </symbol>

  <symbol id="ic-pencil" viewBox="0 0 24 24">
    <path d="M15.6 3.4l5 5-11.4 11.4-5.9 1 1-5.9z" fill="url(#gGold)"/>
    <path d="M15.6 3.4l5 5 2.1-2.1a1.6 1.6 0 0 0 0-2.3l-2.7-2.7a1.6 1.6 0 0 0-2.3 0z" fill="#f4715c"/>
    <path d="M4.3 19.8l1-5.9 4.9 4.9z" fill="#fdf7ec"/>
  </symbol>

  <symbol id="ic-note" viewBox="0 0 24 24">
    <rect x="4.4" y="2.6" width="15.2" height="18.8" rx="2.2" fill="#fffdf8"/>
    <rect x="4.4" y="2.6" width="15.2" height="18.8" rx="2.2" fill="none" stroke="#e6dccb" stroke-width="1"/>
    <g stroke="#cfdbe5" stroke-width="1.5" stroke-linecap="round"><path d="M8 8.2h8M8 12h8M8 15.8h5"/></g>
  </symbol>

  <symbol id="ic-en" viewBox="0 0 24 24">
    <rect x="2.5" y="3.3" width="19" height="17.4" rx="3.4" fill="#eaf3ff"/>
    <rect x="2.5" y="3.3" width="19" height="17.4" rx="3.4" fill="none" stroke="#cfe2fb" stroke-width="1"/>
    <text x="12" y="16.8" text-anchor="middle" font-size="11.5" font-weight="800" font-family="-apple-system,'SF Pro Rounded','Helvetica Neue','Noto Sans KR',sans-serif" fill="#3f7fd0">A</text>
  </symbol>

  <symbol id="ic-ko" viewBox="0 0 24 24">
    <rect x="2.5" y="3.3" width="19" height="17.4" rx="3.4" fill="#fff1f4"/>
    <rect x="2.5" y="3.3" width="19" height="17.4" rx="3.4" fill="none" stroke="#fbd8e0" stroke-width="1"/>
    <text x="12" y="16.6" text-anchor="middle" font-size="11" font-weight="800" font-family="-apple-system,'SF Pro Rounded','Apple SD Gothic Neo','Noto Sans KR',sans-serif" fill="#d9627f">가</text>
  </symbol>

  <symbol id="ic-math" viewBox="0 0 24 24">
    <rect x="2.5" y="3.3" width="19" height="17.4" rx="3.4" fill="#eefaf3"/>
    <rect x="2.5" y="3.3" width="19" height="17.4" rx="3.4" fill="none" stroke="#d9f2e4" stroke-width="1"/>
    <text x="12" y="16.3" text-anchor="middle" font-size="9.6" font-weight="800" font-family="-apple-system,'SF Pro Rounded','Helvetica Neue',sans-serif" fill="#21946a">123</text>
  </symbol>

  <symbol id="ic-globe" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" fill="#8fd3f0"/>
    <path d="M4.6 8.2c2.1 1.1 3.9.6 5.3 1.9 1.4 1.3.3 2.7 1.6 3.7 1.3 1 2.9.2 3.5 1.6.5 1.3-.6 2.4-1.8 2.9" fill="none" stroke="#3f9e6b" stroke-width="1.9" stroke-linecap="round"/>
    <path d="M14.2 3.3c-1.1 1.5.5 2.4 1.6 3.5 1.1 1.1 2.6 1 3.3 2.4" fill="none" stroke="#3f9e6b" stroke-width="1.9" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="9" fill="none" stroke="#b8dff2" stroke-width=".9"/>
  </symbol>

  <symbol id="ic-flask" viewBox="0 0 24 24">
    <path d="M9.3 3.1h5.4v4.2l4.2 8.7a2.6 2.6 0 0 1-2.3 3.8H7.4a2.6 2.6 0 0 1-2.3-3.8l4.2-8.7z" fill="#f2faff"/>
    <path d="M7.7 13.2h8.6l2 4.1a1.7 1.7 0 0 1-1.5 2.5H7.2a1.7 1.7 0 0 1-1.5-2.5z" fill="#8fd3f0"/>
    <path d="M9.3 3.1h5.4v4.2l4.2 8.7a2.6 2.6 0 0 1-2.3 3.8H7.4a2.6 2.6 0 0 1-2.3-3.8l4.2-8.7z" fill="none" stroke="#b9d4e8" stroke-width=".95"/>
    <circle cx="11" cy="16.6" r="1" fill="#fff" opacity=".8"/>
  </symbol>

  <symbol id="ic-hist" viewBox="0 0 24 24">
    <path d="M12 2.6l9.4 4.5H2.6z" fill="#e2cba6"/>
    <rect x="3.4" y="8" width="17.2" height="1.7" rx=".85" fill="#d7bd95"/>
    <g fill="url(#gStone)">
      <rect x="5" y="10.2" width="2.6" height="7.6" rx=".6"/>
      <rect x="10.7" y="10.2" width="2.6" height="7.6" rx=".6"/>
      <rect x="16.4" y="10.2" width="2.6" height="7.6" rx=".6"/>
    </g>
    <rect x="3" y="18.2" width="18" height="2.4" rx="1" fill="#d7bd95"/>
  </symbol>
</svg>


<div class="app">

  <!-- ================= 상단 바 ================= -->
  <header class="topbar">
    <div class="brand">
      <span class="blogo">🗣️</span>
      <span class="btxt"><b>해율이 스터디 보드</b><span>영어 · 국어 · 수학 · 사회 · 과학</span></span>
    </div>

    <div class="pill dashstars" id="dashStars" title="대시보드에서 모은 별">
      <span>⭐</span><b id="dashStarNum">0</b><span class="lbl">개</span>
    </div>
    <button class="pill learnpill" id="learnPill" type="button" title="오늘 배운 문장 보기">
      <span>📚</span><b id="learnNum">0</b><span class="lbl">오늘 배운 문장</span>
    </button>

    <span class="hdr-acts"><button class="settingsbtn" id="btnSettings" type="button" aria-label="설정" title="설정"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-gear"></use></svg></button>
    <button class="settingsbtn refreshbtn" id="btnRefresh" type="button" aria-label="새로고침" title="최신 화면 새로고침"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-refresh"></use></svg></button></span>
  </header>

  <nav class="tabbar" aria-label="스터디 보드 탭">
    <div class="tabs-main" id="tabsMain" role="tablist">
      <button class="tab on" data-tab="home" type="button" role="tab" aria-pressed="true"><span class="te"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-home"></use></svg></span>홈</button>
      <button class="tab" data-tab="study" type="button" role="tab" aria-pressed="false"><span class="te"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-study"></use></svg></span>온라인 공부</button>
      <button class="tab" data-tab="book" type="button" role="tab" aria-pressed="false"><span class="te"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-book"></use></svg></span>책</button>
      <button class="tab" data-tab="piggy" type="button" role="tab" aria-pressed="false"><span class="te"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-piggy"></use></svg></span>용돈</button>
      <button class="tab" data-tab="attend" type="button" role="tab" aria-pressed="false"><span class="te"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-attend"></use></svg></span>출석</button>
      <button class="tab" data-tab="room" type="button" role="tab" aria-pressed="false"><span class="te"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-room"></use></svg></span>구치파치 방</button>
    </div>
    <div class="subs" id="subs" aria-label="온라인 공부 과목" hidden></div>
    <div class="subs subs2" id="subs2" aria-label="과목 학습 메뉴" hidden></div>
  </nav>

  <div class="views">
    <!-- ================= 💻 온라인 공부 (과목 고르기) ================= -->
    <section class="view studyhub" id="viewStudyHub" data-view="study-hub" hidden>
      <div class="hub2">
        <div class="hub2-top">
          <b>오늘 뭐 공부할까?</b><span>카드를 누르면 바로 시작해요</span>
          <div class="hub2-prog" id="hubProg">오늘 완료 0 / 5과목</div>
        </div>
        <div class="hub2-grid" id="hubGrid"></div>
        <p class="hub2-note">공부 다 하면 200원!!!! 열심히 모아 봐요!</p>
      </div>
    </section>

    <!-- ================= 🃏 단어카드 · 게임 ================= -->
    <section class="view wordgame" id="viewEnWords" data-view="en-words" hidden>
      <div class="wcg-wrap">
        <div class="wcg-head">
          <div class="wcg-title"><b>🃏 단어카드</b><span id="wcgSub">그림 → 단어 → 문장 순서로 배워요</span></div>
          <div class="wcg-modes" id="wcgModes" role="tablist" aria-label="단어카드 모드">
            <button type="button" data-mode="study" class="on" role="tab" aria-pressed="true">📚 단어 학습</button>
            <button type="button" data-mode="game" role="tab" aria-pressed="false">🎮 단어 게임</button>
          </div>
          <div class="wcg-prog" id="wcgProg">49개 단어</div>
        </div>
        <div class="wcg-body" id="wcgBody"></div>
      </div>
    </section>
  </main>

    <!-- ================= 🏠 홈 (이번 달 출석 현황판 + 이번 주 숙제) ================= -->
    <section class="view homeview" id="viewHome" data-view="home" hidden>
      <aside class="home-att" id="homeAtt" data-jump="attend|main" role="button" tabindex="0"
             aria-label="이번 달 출석 현황판 — 출석판 열기">
        <div class="ha-head">
          <span class="ha-ic" aria-hidden="true"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-cal"></use></svg></span>
          <b>이번 달 출석</b>
          <span class="ha-month" id="haMonth">11월</span>
          <span class="ha-more">출석판 전체 보기 →</span>
        </div>
        <div class="ha-body">
          <div class="ha-stat">
            <div class="ha-ring" id="haRing" style="--p:0"><span class="ha-in"><b id="haPct">0%</b><span>출석률</span></span></div>
            <div class="ha-sum">
              <div class="ha-count" id="haCount"><b>0일</b> / 0일</div>
              <div class="ha-streak" id="haStreak"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-fire"></use></svg> <b>0</b>일 연속</div>
              <div class="ha-note">공부하면 자동으로 출석 도장!</div>
            </div>
          </div>
          <div class="ha-cal">
            <div class="ha-week" aria-hidden="true"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div>
            <div class="ha-grid" id="haGrid" aria-label="이번 달 출석 달력"></div>
          </div>
          <div class="ha-tama">
            <span class="ha-bub" id="haBub">해율아 공부 다 했니?</span>
            <img src="tama-img/kuchipatchi.png" alt="구치파치" draggable="false">
          </div>
        </div>
      </aside>

      <div class="home-party" id="homeParty" hidden>
        <div class="party-sparks" aria-hidden="true"><span>✨</span><span>🌟</span><span>🎉</span><span>⭐</span><span>✨</span></div>
        <div class="party-flag" id="homeFlag">
          <svg class="flag-svg" viewBox="-72 -48 144 96" role="img" aria-label="태극기">
            <rect x="-71.6" y="-47.6" width="143.2" height="95.2" rx="2" fill="#ffffff" stroke="#dbe9f4" stroke-width="0.8"/>
            <g class="tg-taegeuk" transform="rotate(33.69006752598)">
              <path class="tg-red" fill="#cd2e3a" d="M12 0a18 18 0 11-36 0 24 24 0 1148 0"/>
              <path class="tg-blue" fill="#0047a0" d="M-24 0a24 24 0 1048 0A12 12 0 100 0a12 12 0 11-24 0"/>
            </g>
            <g class="tg-bars" fill="none" stroke="#111" stroke-width="4">
              <g class="tg tg-geon" transform="rotate(33.69006752598) translate(-44 0)"><path d="M-6-12v24M0-12v24M6-12v24"/></g>
              <g class="tg tg-gon" transform="rotate(33.69006752598) translate(44 0)"><path d="M-6-12V-1M-6 1V12M0-12V-1M0 1V12M6-12V-1M6 1V12"/></g>
              <g class="tg tg-gam" transform="rotate(-33.69006752598) translate(44 0)"><path d="M-6-12V-1M-6 1V12M0-12v24M6-12V-1M6 1V12"/></g>
              <g class="tg tg-ri" transform="rotate(-33.69006752598) translate(-44 0)"><path d="M-6-12v24M0-12V-1M0 1V12M6-12v24"/></g>
            </g>
          </svg>
        </div>
        <div class="party-copy">
          <b class="party-line">정해율 공부다함!!! 대단하다!!</b>
          <span class="party-sub">오늘 5과목(영어·국어·수학·사회·과학) 모두 완료! 🎉</span>
        </div>
        <div class="party-chips" id="partyChips"></div>
        <button class="party-feed" type="button" data-jump="room|main"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-onigiri"></use></svg> 구치파치 간식 주러 가기</button>
      </div>


      <!-- 월~일 주간 시간표 · 숙제판 · 이번 주 출석 -->
      <section class="weekboard" id="weekBoard" aria-label="이번 주 시간표와 숙제"></section>
    </section>

    <!-- ================= 🔤 파닉스 · 문장 읽기 ================= -->
    <section class="view phonics" id="viewEnPhonics" data-view="en-phonics" hidden>
      <aside class="ph-list panel">
        <div class="panel-h"><b>🔤 파닉스 레슨</b><span class="ph-no2" id="phCount">0 / 14</span></div>
        <div class="ph-lessons" id="phLessons"></div>
      </aside>
      <div class="ph-stage">
        <div class="ph-top">
          <div class="ph-title"><span class="num" id="phNo">L1</span><b id="phTitle">단모음 a</b><span class="snd" id="phSound">/æ/</span></div>
          <div class="ph-tools">
            <button class="phbtn" id="phSaySound" type="button">🔊 소리 듣기</button>
            <button class="phbtn" id="phBlendAll" type="button">🔊 합쳐서 듣기</button>
            <button class="phbtn star" id="phDone" type="button">✅ 이 레슨 완료</button>
          </div>
        </div>
        <div class="ph-steps">
          <div class="ph-block">
            <div class="ph-bh"><b>1</b> 소리 익히기</div>
            <div class="ph-sounds" id="phSounds"></div>
            <p class="ph-tip" id="phTip"></p>
            <p class="ph-sentnote">글자를 콕 누르면 소리를 들려줘요.</p>
          </div>
          <div class="ph-block">
            <div class="ph-bh"><b>2</b> 글자를 합쳐 단어 만들기</div>
            <div class="ph-blend">
              <div class="ph-tiles" id="phTiles"></div>
              <div class="ph-blendside">
                <div class="ph-wname" id="phWordName">cat</div>
                <div class="ph-wko" id="phWordKo">🐱 고양이</div>
              </div>
            </div>
            <div class="ph-rec" id="phWordRec"></div>
            <div class="ph-words" id="phWords"></div>
          </div>
          <div class="ph-block grow">
            <div class="ph-bh"><b>3</b> 오늘 배운 단어로 문장 읽기</div>
            <div class="ph-sents" id="phSents"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 📝 이번 주 단어 테스트 ================= -->
    <section class="view testview" id="viewEnTest" data-view="en-test" hidden>
      <div class="tst-card">
        <div class="tst-head"><b>📝 이번 주 단어 테스트</b><span class="wk">10문제</span><span class="sb" id="tstStars">⭐ 0</span></div>
        <div class="tst-body" id="tstBody"></div>
      </div>
      <aside class="tst-side">
        <div class="panel"><div class="panel-h"><b>⭐ 점수별 별</b></div><div class="tst-rule" id="tstRule"></div></div>
        <div class="panel" style="flex:1 1 auto"><div class="panel-h"><b>📊 지난 기록</b></div><div class="tst-hist" id="tstHist"></div></div>
      </aside>
    </section>

    <!-- ================= 👀 사이트워드 ================= -->
    <section class="view sightview" id="viewEnSight" data-view="en-sight" hidden>
      <div class="sw-stage">
        <div class="sw-head">
          <div class="sw-title"><b>👀 사이트워드</b><span id="swDate"></span></div>
          <div class="sw-steps" id="swSteps" role="tablist" aria-label="사이트워드 단계">
            <button type="button" data-step="1" class="on" role="tab" aria-pressed="true">1 · 단어</button>
            <button type="button" data-step="2" role="tab" aria-pressed="false">2 · 그림 문장</button>
            <button type="button" data-step="3" role="tab" aria-pressed="false">3 · 맞추기</button>
          </div>
          <div class="sw-rate" id="swRate" role="group" aria-label="읽어주기 속도">
            <button type="button" data-rate="0.62" aria-pressed="false">🐢 아주 천천히</button>
            <button type="button" data-rate="0.78" aria-pressed="false">🙂 천천히</button>
            <button type="button" data-rate="0.95" aria-pressed="false">🐇 보통</button>
          </div>
          <div class="sw-prog" id="swProg">오늘 문장 0/3</div>
        </div>
        <div class="sw-pick">
          <button class="sw-nav" id="swPrev" type="button" aria-label="이전 단어">◀</button>
          <div class="sw-list" id="swList" aria-label="사이트워드 40개"></div>
          <button class="sw-nav" id="swNext" type="button" aria-label="다음 단어">▶</button>
        </div>
        <div class="sw-body" id="swBody"></div>
      </div>
    </section>

    <!-- ================= 📖 그림 동화책 (AR 0.1부터) ================= -->
    <section class="view storyview" id="viewEnBook" data-view="en-book" hidden>
      <div class="pbk-stage">
        <div class="pbk-head">
          <div class="pbk-title"><b>📖 그림 동화책</b><span>AR 0.1부터 한 권씩 · 다 읽으면 별 +1</span></div>
          <div class="pbk-prog" id="bkProg">0 / 6권</div>
        </div>
        <div class="pbk-shelf" id="bkShelf" aria-label="그림 동화책 책장"></div>
        <div class="pbk-read" id="bkRead" hidden></div>
        <p class="pbk-note" id="bkNote">마음에 드는 책을 눌러요. ◀ ▶ 로 한 장씩 넘기며 읽어요.</p>
      </div>
    </section>

    <!-- ================= 📞 전화 영어 (실시간 통화 화면) ================= -->
    <section class="view callview" id="viewEnCall" data-view="en-call" hidden>
      <!-- 📅 오늘의 전화 영어 주제 — 날짜마다 바뀝니다 -->
      <div class="call-topic" id="callTopic" role="note" aria-label="오늘의 전화 영어 주제" data-topic="animal">
        <span class="ctp-em" id="ctpEm" aria-hidden="true">🐶</span>
        <div class="ctp-main">
          <div class="ctp-k"><span class="ctp-lb">📅 오늘의 전화 영어 주제</span><span class="ctp-date" id="ctpDate">2026-11-19</span></div>
          <div class="ctp-line"><b class="ctp-t" id="ctpTitle">좋아하는 동물</b><span class="ctp-en" id="ctpEn">What animal do you like?</span></div>
        </div>
        <div class="ctp-tip" id="ctpTip">'I like dogs!'처럼 좋아하는 동물을 말해 봐요</div>
      </div>

      <!-- 왼쪽: 진짜 전화처럼 생긴 통화 화면 -->
      <div class="call-phone" id="callPhone" data-call="idle">
        <div class="cp-top">
          <span class="cp-tag">📞 전화 영어</span>
          <span class="cp-sig" id="callNet">통화 대기</span>
        </div>
        <div class="cp-body">
          <div class="cp-avatar" id="callAvatar" aria-hidden="true"><span class="cp-ava-em">👩‍🏫</span></div>
          <div class="cp-name"><b id="callWho">Emma 선생님</b><span id="callStatus">전화를 걸어 볼까요?</span></div>
          <div class="cp-timer" id="callTimer">00:00</div>
          <div class="cp-wave" id="callWave" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>
        <div class="cp-sum" id="callSummary" hidden></div>
        <div class="cp-acts">
          <button class="cp-btn cp-start" id="callStart" type="button">📞 통화 시작</button>
          <button class="cp-btn cp-end" id="callEnd" type="button" hidden>📵 통화 종료</button>
        </div>
        <div class="cp-note" id="callNote">선생님이 먼저 영어로 인사해요 · 🎧 이어폰을 끼면 더 잘 들려요</div>
      </div>

      <!-- 오른쪽: 자막 · 빠른 말풍선 · 말하기 -->
      <div class="call-talk">
        <div class="ct-head">
          <b>🎧 통화 내용</b>
          <div class="ct-tools">
            <button class="mini on" id="callKo" type="button" aria-pressed="true">💬 한글 힌트</button>
            <button class="mini" id="callSlow" type="button" aria-pressed="false">🐢 천천히</button>
            <button class="mini" id="callAgain" type="button">🔊 다시 듣기</button>
          </div>
        </div>
        <div class="ct-log" id="callLog" aria-live="polite"></div>
        <div class="ct-quick" id="callQuick"></div>
        <div class="ct-input">
          <button class="ct-mic" id="callMic" type="button">🎙️ 말하기</button>
          <input id="callInput" type="text" maxlength="90" autocomplete="off" autocapitalize="sentences"
                 placeholder="영어로 답해 봐요! (한글도 괜찮아요)" aria-label="전화 영어 답하기">
          <button class="ct-send" id="callSend" type="button">보내기</button>
        </div>
        <div class="ct-foot">
          <button class="pickle-call" id="pickleCall" type="button">📲 피클과 직접 전화 영어 하기</button>
          <span class="pickle-note">피클 앱을 열어 진짜 AI 선생님과<br>전화로 이어서 말해요</span>
        </div>
      </div>

      <div class="pickle-hint" id="pickleHint" role="status" hidden>
        <span class="phx" aria-hidden="true">📲</span>
        <div class="pht">전화 영어는 피클 앱에서 이어져요<br>Safari에서 바로 앱이 안 열리면 피클 채팅창에서 <b>'전화 영어'</b>라고 말하거나 전화 버튼을 눌러 주세요!</div>
        <button class="phc" id="pickleHintClose" type="button" aria-label="안내 닫기">닫기</button>
      </div>
    </section>

    <!-- ================= 🇰🇷 국어 ================= -->
    <section class="view koview" id="viewKo" data-view="ko" hidden>
      <div class="ko-col" data-secblock="quote">
        <div class="ko-head"><b>💬 오늘의 명언</b><span class="k" id="koDayNo">1일차</span></div>
        <div class="ko-qcard">
          <div class="ko-qemoji" id="koEmoji">🌱</div>
          <p class="ko-quote" id="koQuote"></p>
          <p class="ko-src" id="koSrc"></p>
        </div>
        <p class="ko-mean" id="koMean" style="margin:.55vh .9vh 0"></p>
        <div class="ko-wordbox" id="koWordBox"></div>
        <div class="ko-tools">
          <button class="t pk" type="button" id="koPrev" aria-label="이전 문장">◀</button>
          <button class="t" type="button" id="koSpeak">🔊 읽어주기</button>
          <button class="t pk" type="button" id="koNext" aria-label="다음 문장">▶</button>
        </div>
      </div>
      <div class="ko-col" data-secblock="kquiz">
        <div class="ko-head"><b>❓ 낱말 퀴즈</b><span class="k" id="koQuizScore">0 / 5</span></div>
        <div class="ko-qbody" id="koQuiz"></div>
      </div>
      <div class="ko-col" data-secblock="classic">
        <div class="ko-head"><b>📜 고전 4줄 읽기</b><span class="k" id="koClassicNo">1 / 10</span></div>
        <div class="ko-cbody" id="koClassic"></div>
      </div>
    </section>

    <!-- ================= 🔢 수학 ================= -->
    <section class="view mathview" id="viewMath" data-view="math" hidden>
      <div class="panel math-concept" data-secblock="concept">
        <div class="panel-h"><b>🎨 수 개념 놀이</b><span class="ph-no2">터치하며 익혀요</span></div>
        <div class="mc-tabs">
          <button class="mini on" type="button" data-mc="count">세어 보기</button>
          <button class="mini" type="button" data-mc="ten">10 만들기</button>
          <button class="mini" type="button" data-mc="split">가르기·모으기</button>
        </div>
        <div class="mc-body">
          <div class="tenframe" id="tenFrame"></div>
          <div class="mc-split" id="mcSplit" hidden></div>
          <div class="mc-count"><b id="mcCount">0</b><span>개</span></div>
          <div class="mc-task" id="mcTask"></div>
          <div class="mc-answer" id="mcAnswer"></div>
        </div>
      </div>
      <div class="panel math-calc" data-secblock="calc">
        <div class="panel-h"><b>➕ 수 연산</b><span class="ph-no2" id="calcProg">0 / 8</span></div>
        <div class="calc-modes">
          <button class="mini on" type="button" data-cm="easy">🍬 아주 쉬운 게임</button>
          <button class="mini" type="button" data-cm="grade">➕ 초1 연산</button>
        </div>
        <div class="calc-body" id="calcBody"></div>
      </div>
      <div class="math-think">
        <div class="panel think-panel" id="thinkPanel" data-secblock="think"></div>
        <div class="panel shape-panel" id="shapePanel" data-secblock="shape"></div>
        <div class="panel clock-panel" id="clockPanel" data-secblock="clock"></div>
        <div class="panel gugu-panel" id="guguPanel" data-secblock="gugu"></div>
      </div>
    </section>

    <!-- ================= 🇰🇷 국어 · 낱말 놀이 ================= -->
    <section class="view kowview" id="viewKoWord" data-view="ko-word" hidden>
      <div class="panel word-game">
        <div class="panel-h"><b>🎴 낱말 놀이</b><span class="ph-no2" id="wgProg">0 / 8</span></div>
        <div class="wg-body" id="wgBody"></div>
      </div>
      <aside class="panel word-list">
        <div class="panel-h"><b>📚 오늘의 낱말</b><span class="ph-no2">뜻도 함께 봐요</span></div>
        <div class="wg-list" id="wgList"></div>
      </aside>
    </section>

    <!-- ================= 💰 용돈 · 저금통 ================= -->
    <section class="view piggyview" id="viewPiggy" data-view="piggy" hidden>
      <div class="pg-main">
        <div class="pg-top">
          <span class="pg-h">🐷 내 저금통</span>
          <b class="pg-amount" id="pgAmount">0원</b>
        </div>
        <div class="pg-art" id="pgArt">
          <svg class="pg-pig" viewBox="0 0 320 240" role="img" aria-label="돼지 저금통">
            <ellipse cx="160" cy="214" rx="100" ry="12" fill="#d9dee3" opacity=".55"/>
            <g class="pg-body">
              <ellipse cx="150" cy="140" rx="104" ry="74" fill="#efd7dd" stroke="#c9a3af" stroke-width="3"/>
              <ellipse cx="150" cy="150" rx="88" ry="58" fill="#f8eaee"/>
              <rect x="126" y="62" width="56" height="14" rx="7" fill="#b58a95"/>
              <rect x="130" y="66" width="48" height="5" rx="2.5" fill="#8e4a5f"/>
              <ellipse cx="236" cy="128" rx="42" ry="34" fill="#efd7dd" stroke="#c9a3af" stroke-width="3"/>
              <circle cx="222" cy="120" r="5" fill="#6d5560"/>
              <circle cx="250" cy="120" r="5" fill="#6d5560"/>
              <ellipse cx="236" cy="142" rx="15" ry="11" fill="#e6c3cd"/>
              <circle cx="231" cy="142" r="3" fill="#b58a95"/><circle cx="241" cy="142" r="3" fill="#b58a95"/>
              <path d="M214 106 l4 -26 l24 16 z" fill="#efd7dd" stroke="#c9a3af" stroke-width="2.5" stroke-linejoin="round"/>
              <path d="M248 100 l12 -24 l18 24 z" fill="#efd7dd" stroke="#c9a3af" stroke-width="2.5" stroke-linejoin="round"/>
              <circle cx="70" cy="126" r="7" fill="#d8b2bd"/>
              <ellipse cx="122" cy="206" rx="17" ry="11" fill="#d8b2bd"/>
              <ellipse cx="182" cy="206" rx="17" ry="11" fill="#d8b2bd"/>
            </g>
            <g class="pg-coinstack" id="pgCoins"></g>
          </svg>
          <div class="pg-fly" id="pgFly" aria-hidden="true"></div>
        </div>
        <div class="pg-acts">
          <button class="pg-btn mom" id="pgMom" type="button">🔒 엄마 용돈 주기</button>
          <button class="pg-btn bank" id="pgBank" type="button">🏦 은행으로 가기</button>
        </div>
      </div>
      <aside class="pg-side">
        <div class="pg-card">
          <div class="pg-ch"><b>🐷 저금통</b><span id="pgCount">0번 넣었어요</span></div>
          <p class="pg-note">숙제를 다 하면 엄마가 용돈을 넣어 줘요!</p>
        </div>
        <div class="pg-card">
          <div class="pg-ch"><b>🏦 은행에 모은 돈</b><span id="pgBankN">0건</span></div>
          <b class="pg-banksum" id="pgBankSum">0원</b>
          <button class="pg-go" id="pgGoBank" type="button">통장 보기 →</button>
        </div>
        <div class="pg-card pg-logcard">
          <div class="pg-ch"><b>📋 최근 내역</b></div>
          <ul class="pg-log" id="pgLog"></ul>
        </div>
      </aside>
    </section>

    <!-- ================= 🏦 은행 ================= -->
    <section class="view bankview" id="viewBank" data-view="bank" hidden>
      <div class="bk2-main">
        <div class="bk2-head">
          <b>🏦 내 은행 통장</b>
          <button class="bk2-back" id="bankBack" type="button">← 저금통으로</button>
        </div>
        <div class="bk2-sums">
          <div class="bk2-sum pig"><span>🐷 저금통</span><b id="bankPiggy">0원</b></div>
          <div class="bk2-sum bank"><span>🏦 은행</span><b id="bankTotal">0원</b></div>
        </div>
        <div class="bk2-dep">
          <div class="bk2-dep-h"><b>은행에 저금하기</b><span>한 달(30일) 뒤에 찾을 수 있어요</span></div>
          <div class="bk2-amt" id="bankAmts">
            <button type="button" data-amt="100">100원</button>
            <button type="button" data-amt="500">500원</button>
            <button type="button" data-amt="1000">1,000원</button>
            <button type="button" data-amt="all">전체</button>
          </div>
          <div class="bk2-go">
            <span class="bk2-pick">저금할 금액 <b id="bankPick">0원</b></span>
            <button class="bk2-depbtn" id="bankDeposit" type="button">🏦 은행에 저금하기</button>
          </div>
        </div>
        <div class="bk2-listh"><b>📖 통장 내역</b><span id="bankHint">30일이 지나면 내 저금통으로 뺄 수 있어요</span></div>
        <ul class="bk2-list" id="bankList"></ul>
      </div>
    </section>

    <!-- ================= 📅 출석체크 ================= -->
    <section class="view attview" id="viewAttend" data-view="attend" hidden>
      <div class="att-main">
        <div class="att-head"><b><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-cal"></use></svg> 출석 도장판</b>
          <div class="att-nav"><button type="button" id="attPrev" aria-label="이전 달">◀</button><span id="attMonth">2026년 11월</span><button type="button" id="attNext" aria-label="다음 달">▶</button></div>
        </div>
        <div class="att-week"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div>
        <div class="att-grid" id="attGrid"></div>
        <div class="att-actions"><button class="att-stamp" type="button" id="attStamp">🐾 오늘 출석 도장 찍기</button><span class="att-msg" id="attMsg"></span></div>
      </div>
      <aside class="att-side">
        <div class="att-streak"><span class="fl">🔥</span><b id="attStreak">0</b><span>일 연속 출석</span></div>
        <div class="att-stats" id="attStats"></div>
        <div class="att-today" id="attToday"></div>
        <div class="att-badges" id="attBadges"></div>
      </aside>
    </section>

    <!-- ================= 🥚 구치파치 방 ================= -->
    <section class="view roomview" id="viewRoom" data-view="room" hidden>
      <div class="room-main">
        <div class="yard" id="yard">
          <div class="yard-sky"><span class="sun">☀️</span><span class="cl c1">☁️</span><span class="cl c2">☁️</span><span class="cl c3">☁️</span></div>
          <div class="yard-fence"></div>
          <div class="yard-deco"><span class="tree">🌳</span><span class="b1">🌿</span><span class="b2">🌿</span><span class="f1">🌼</span><span class="f2">🌸</span><span class="f3">🌼</span><span class="f4">🌷</span></div>
          <div class="yard-ground"></div>
          <div class="yard-props" id="yardProps"></div>
          <div class="dog tama-gotchi" id="dog" data-state="resting" tabindex="0" role="button" aria-label="구치파치 쓰다듬기">
            <div class="pos">
              <span class="zzz">💤</span>
              <span class="heart">💕</span>
              <span class="bowl">🥣</span>
              <span class="toyball">🎾</span>
              <img class="tama-img" src="tama-img/kuchipatchi.png" alt="구치파치" draggable="false">
            </div>
          </div>
          <div class="dog-bubble" id="dogBubble"></div>
          <div class="yard-ctrl">
            <button type="button" data-dog="running"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-run"></use></svg> 뛰기</button>
            <button type="button" data-dog="resting"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-moon"></use></svg> 쉬기</button>
            <button type="button" data-dog="sleeping"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-bed"></use></svg> 눕기</button>
            <button type="button" data-dog="play"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-ball"></use></svg> 놀아주기</button>
            <button type="button" data-dog="eat"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-onigiri"></use></svg> 간식 주기</button>
          </div>
          <div class="yard-hint">구치파치를 콕 누르면 쓰다듬어요</div>
        </div>
      </div>
      <aside class="room-shop">
        <div class="shop-head"><b><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-heart"></use></svg> 구치파치의 기분</b><span class="shop-stars">⭐ <b id="shopStars">0</b></span></div>
        <div class="gauges">
          <div class="gauge"><span class="gl"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-onigiri"></use></svg> 배고픔</span><div class="gbar"><i id="gaugeHunger"></i></div><b id="gaugeHungerTxt">0%</b></div>
          <div class="gauge"><span class="gl"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-star"></use></svg> 신남</span><div class="gbar joy"><i id="gaugeJoy"></i></div><b id="gaugeJoyTxt">0%</b></div>
          <p class="care-tip" id="petCareTip"></p>
          <p class="dog-state" id="dogStateTxt"></p>
        </div>
        <div class="shop-head"><b><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-onigiri"></use></svg> 간식 · <svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-ball"></use></svg> 장난감</b><span>별로 사요</span></div>
        <div class="shop-grid" id="shopGrid"></div>
        <div class="shop-head"><b><svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ic-gift"></use></svg> 내 선물</b><span id="shopOwn">0개</span></div>
        <div class="shop-bag" id="shopBag"></div>
      </aside>
    </section>

    <!-- ================= 漢 한자 (따라 쓰기 · 낱말 빈칸) ================= -->
    <section class="view hanjaview" id="viewHanja" data-view="hanja" hidden>
      <div class="hj-wrap" data-secblock="trace">
        <div class="hj-head">
          <div class="hj-title"><b>漢 한자 따라 쓰기</b><span id="hjMeta">어문회 8급 · 뜻 물 · 음 수 · 4획</span></div>
          <div class="hj-tools">
            <span class="hj-today" id="hjTodayLbl">⭐ 오늘의 한자</span>
            <span class="hj-num" id="hjNum">1 / 27</span>
          </div>
        </div>
        <div class="hj-groups" id="hjGroups" role="group" aria-label="한자 단계"></div>
        <div class="hj-chips" id="hjChips" aria-label="한자 고르기"></div>
        <div class="hj-body">
          <aside class="hj-card">
            <div class="hj-glyphbox">
              <canvas id="hjDemo" class="hj-demo" aria-label="오늘의 한자 획순"></canvas>
            </div>
            <div class="hj-read"><b id="hjChar">水</b><span id="hjMeaning">물 수</span><em id="hjStrokeN">4획</em></div>
            <div class="hj-orderrow"><span class="hj-ok">획순</span><div class="hj-order" id="hjOrder"></div></div>
            <button class="hj-stroke-btn" id="hjStrokeBtn" type="button">▶ 획순 보기</button>
            <p class="hj-credit">획순 데이터: Make Me a Hanzi · hanzi-writer-data</p>
          </aside>
          <div class="hj-write">
            <div class="hj-cells" id="hjCells" aria-label="따라 쓰기 칸"></div>
            <div class="hj-actions">
              <button class="hj-btn" id="hjClear" type="button">🧽 지우기</button>
              <button class="hj-btn" id="hjWidth" type="button">🖌 펜 굵기 <b id="hjWidthV">보통</b></button>
              <button class="hj-btn" id="hjSpeak" type="button">🔊 훈음 듣기</button>
              <button class="hj-done-btn" id="hjDone" type="button">다 썼어요 ✔</button>
            </div>
            <p class="hj-tip" id="hjTip">회색 글자를 손가락으로 천천히 따라 써 보세요.</p>
          </div>
        </div>
      </div>

      <div class="hj-wrap hj-wordwrap" data-secblock="word">
        <div class="hj-head">
          <div class="hj-title"><b>📝 낱말 속 한자 쓰기</b><span>빈칸에 오늘의 한자를 써 넣어요</span></div>
          <div class="hj-tools"><span class="hj-wchar" id="hjWordChar">水 물 수</span></div>
        </div>
        <div class="hj-groups" id="hjGroups2" role="group" aria-label="한자 단계"></div>
        <div class="hj-chips" id="hjWordChips" aria-label="한자 고르기(낱말)"></div>
        <div class="hj-wordbody" id="hjWordBody"></div>
        <p class="hj-tip">빈칸을 손가락으로 눌러 한자를 쓰고 <b>완성!</b> 을 눌러요 · 👁 가이드로 흐린 글자를 켜고 끌 수 있어요</p>
      </div>
    </section>

    <!-- ================= 🏛️ 역사 (연도표 · 고려 · 조선) ================= -->
    <section class="view histview" id="viewHistory" data-view="history" hidden>
      <div class="hist-block" data-secblock="timeline">
        <div class="hist-head">
          <div class="hist-title"><b>📜 한국사 전체 연도표</b><span>구석기부터 지금까지</span></div>
        </div>
        <div class="hist-body">
          <div class="hist-rail" id="eraList" aria-label="시대 고르기"></div>
          <aside class="hist-detail" id="eraDetail"></aside>
        </div>
      </div>
      <div class="hist-block" data-secblock="goryeo joseon">
        <div class="hist-head">
          <div class="hist-title"><b id="histTitle">🏯 고려 왕조 계보</b><span id="histSub"></span></div>
        </div>
        <div class="hist-body">
          <div class="hist-kings" id="histList" aria-label="왕 고르기"></div>
          <aside class="hist-detail" id="histDetail"></aside>
        </div>
      </div>
    </section>

    <section class="view bookview" id="viewBook" data-view="book" hidden>
      <div class="bk-panel">
        <div class="bk-h"><b>📚 나의 책나무</b><span class="bk-today" id="bkToday">오늘 0권</span></div>
        <div class="bk-stage" id="bkStage">
          <svg class="bk-art" viewBox="0 0 240 260" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
            <ellipse cx="120" cy="250" rx="88" ry="9" fill="#cfe9c8" opacity=".85"/>
            <path d="M118 250 C116 212 114 182 112 158 C110 134 108 112 104 96" stroke="#b07b4e" stroke-width="11" fill="none" stroke-linecap="round"/>
            <path d="M124 250 C126 214 130 186 138 164 C146 140 154 118 164 102" stroke="#c08a5a" stroke-width="9" fill="none" stroke-linecap="round"/>
            <path d="M112 178 C100 170 90 160 84 148" stroke="#b07b4e" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M136 168 C148 160 158 148 164 136" stroke="#c08a5a" stroke-width="5" fill="none" stroke-linecap="round"/>
            <g id="bkLeaves"></g>
            <g id="bkStars"></g>
          </svg>
          <div class="bk-stack" id="bkStack" aria-label="쌓은 책"></div>
          <div class="bk-pop" id="bkPop" hidden>
            <div class="bk-pop-t" id="bkPopTitle"></div>
            <div class="bk-pop-m" id="bkPopMeta"></div>
            <div class="bk-pop-a">
              <button class="bk-pop-del" id="bkPopDel" type="button">🗑 책 빼기</button>
              <button class="bk-pop-x" id="bkPopClose" type="button" aria-label="닫기">✕</button>
            </div>
          </div>
        </div>
        <div class="bk-stats">
          <div class="bk-stat w"><b id="bkWeek">0</b><span>이번 주</span></div>
          <div class="bk-stat m"><b id="bkMonth">0</b><span>이번 달</span></div>
          <div class="bk-stat a"><b id="bkAll">0</b><span>전체</span></div>
        </div>
      </div>
      <div class="bk-panel bk-shelf-panel">
        <div class="bk-h"><b>📖 책장</b><span class="bk-hint">책을 손으로 끌어 나무에 쌓아요 (콕 눌러도 OK)</span></div>
        <div class="bk-shelf" id="bkShelf" aria-label="책장"></div>
        <div class="bk-add">
          <input id="bkTitle" type="text" maxlength="30" autocomplete="off" placeholder="책 제목 (비워도 돼요)">
          <button class="bk-btn" id="bkAdd" type="button">📚 책 꺼내 쌓기</button>
        </div>
        <p class="bk-note">하루 3권까지 ⭐ 1개씩 받아요 · 쌓은 책을 누르면 되돌릴 수 있어요
          <button class="bk-undo" id="bkUndo" type="button" hidden>↩ 방금 뺀 책</button></p>
      </div>
    </section>
  </div>

</div>

<!-- ================= 🔒 엄마 용돈 주기 (두 자리 덧셈 비번) ================= -->
<div class="modal" id="momModal" hidden>
  <div class="sheet momsheet" role="dialog" aria-modal="true" aria-labelledby="momTitle">
    <div class="sheet-head">
      <h3 id="momTitle">🔒 엄마 용돈 주기</h3>
      <button class="close" type="button" data-close="momModal" aria-label="닫기">✕</button>
    </div>
    <div class="sheet-body">
      <div class="mom-lock" id="momLock">
        <p class="mom-q">여기는 <b>엄마만</b> 열 수 있어요.<br><b>두 자리 덧셈</b>을 풀면 열려요.</p>
        <div class="mom-sum">
          <b id="momA">46</b><span>+</span><b id="momB">28</b><span>=</span>
          <input id="momAns" type="text" inputmode="numeric" autocomplete="off" maxlength="4" placeholder="?" aria-label="덧셈 정답">
        </div>
        <p class="mom-msg" id="momMsg"></p>
        <div class="mom-btns">
          <button class="mom-open" id="momOpen" type="button">열기 🔓</button>
          <button class="mom-newq" id="momNewQ" type="button">🔄 다른 문제</button>
        </div>
      </div>
      <div class="mom-panel" id="momPanel" hidden>
        <p class="mom-hello">엄마예요 👩‍💼 숙제를 다 했으면 용돈을 넣어 주세요!</p>
        <div class="mom-now">지금 저금통 <b id="momNow">0원</b></div>
        <div class="mom-give">
          <button type="button" data-give="100">+100원</button>
          <button type="button" data-give="500">+500원</button>
          <button type="button" data-give="1000">+1,000원</button>
        </div>
        <div class="mom-take">
          <button type="button" data-take="100">−100원</button>
          <button type="button" data-take="500">−500원</button>
        </div>
        <div class="mom-recent"><b>최근 용돈</b><ul id="momLog"></ul></div>
        <button class="mom-lockbtn" id="momLockBtn" type="button">🔒 다시 잠그기</button>
      </div>
    </div>
  </div>
</div>

<!-- ================= 설정 모달 ================= -->
<div class="modal" id="settingsModal" hidden>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="setTitle">
    <div class="sheet-head">
      <h3 id="setTitle">⚙️ 설정</h3>
      <button class="close" type="button" data-close="settingsModal" aria-label="닫기">✕</button>
    </div>
    <div class="sheet-body">
      <label class="frow"><span>AI 선생님</span>
        <select id="aiProvider">
          <option value="none">내장 선생님만 쓰기 (추천)</option>
          <option value="openai">OpenAI 연결</option>
          <option value="gemini">Google Gemini 연결</option>
        </select>
      </label>
      <label class="frow"><span>API 키</span>
        <input id="aiKey" type="password" autocomplete="off" spellcheck="false" placeholder="AI를 쓸 때만 넣어 주세요">
      </label>
      <label class="frow"><span>모델</span>
        <input id="aiModel" type="text" list="modelList" autocomplete="off" spellcheck="false" placeholder="기본 모델을 써도 좋아요">
        <datalist id="modelList">
          <option value="gpt-4o-mini"></option>
          <option value="gpt-4.1-mini"></option>
          <option value="gemini-3.8-flash"></option>
          <option value="gemini-3.6-flash"></option>
        </datalist>
      </label>
      <p class="hintline" id="engineInfo">지금은 내장 선생님이 대화해요.</p>
      <label class="frow"><span>대시보드 주소</span>
        <input id="dashUrl" type="text" autocomplete="off" spellcheck="false" placeholder="./index.html">
      </label>
      <p class="hintline">API 키는 <b>이 기기 브라우저에만</b> 저장되고 밖으로 보내지 않아요. 비워 두면 인터넷 없이도 내장 선생님이 100% 대화해요.</p>
      <div class="ntfy-box" id="ntfyBox">
        <div class="ntfy-h"><b>🔔 엄마 폰 공부 알림</b><span>ntfy</span></div>
        <label class="frow"><span>토픽 코드</span>
          <input id="ntfyTopic" type="text" autocomplete="off" spellcheck="false" placeholder="🎲 랜덤 토픽을 만들어 주세요">
        </label>
        <div class="ntfy-acts">
          <button class="btn ghost" id="btnNtfyNew" type="button">🎲 랜덤 토픽</button>
          <button class="btn ghost" id="btnNtfyCopy" type="button">📋 토픽 복사</button>
          <button class="btn ok" id="btnNtfyTest" type="button">📲 알림 테스트 보내기</button>
        </div>
        <label class="frow"><span>알림 켜기</span>
          <input id="ntfyOn" type="checkbox" role="switch" aria-label="공부 알림 켜기">
        </label>
        <ol class="ntfy-guide">
          <li>엄마 폰에 무료 <b>ntfy</b> 앱을 설치해요.</li>
          <li>앱에서 <b>+</b>를 눌러 위 토픽 코드를 구독해요.</li>
          <li>과목을 끝낼 때마다 알림이 도착해요.</li>
        </ol>
        <p class="hintline">토픽 코드는 <b>이 기기에만</b> 저장돼요. 코드를 아는 사람만 알림을 받을 수 있어요.</p>
      </div>
      <div class="fam-box" id="famBox">
        <div class="fam-h"><b>👨‍👩‍👧 가족 숙제·용돈 동기화</b><span>무료 클라우드</span></div>
        <div id="famOff">
          <p class="fam-note">엄마 폰과 해율이 아이패드가 <b>같은 가족 코드</b>를 쓰면 숙제·시간표·용돈이 함께 바뀌어요.</p>
          <div class="fam-acts">
            <button class="btn ok" id="famCreate" type="button">✨ 가족 코드 만들기</button>
          </div>
          <div class="fam-acts">
            <input id="famCodeIn" type="text" maxlength="12" autocomplete="off" spellcheck="false" placeholder="가족 코드 입력">
            <button class="btn ghost" id="famJoin" type="button">🔗 연결하기</button>
          </div>
        </div>
        <div id="famOn" hidden>
          <div class="fam-code"><em>가족 코드</em><b id="famCodeVal">—</b><button class="btn ghost" id="famCopy" type="button">📋 복사</button></div>
          <div class="fam-acts">
            <button class="btn ok" id="famSyncNow" type="button">🔄 지금 동기화</button>
            <button class="btn ghost" id="famLeave" type="button">연결 해제</button>
          </div>
        </div>
        <p class="fam-state" id="famState">아직 연결하지 않았어요 · 이 기기 안에만 저장돼요</p>
        <p class="fam-note">엄마 폰에서도 같은 스터디 보드를 열어 코드를 넣으면 숙제를 적고 용돈을 줄 수 있어요. 코드를 아는 사람만 함께 쓸 수 있어요.</p>
      </div>
    </div>
    <div class="sheet-foot">
      <button class="btn ghost" id="btnResetTalk" type="button">↺ 대화 처음부터</button>
      <button class="btn primary" id="btnSaveSettings" type="button">저장</button>
      <button class="btn ghost" type="button" data-close="settingsModal">닫기</button>
    </div>
  </div>
</div>

<!-- ================= 이번 주 단어 편집 모달 ================= -->
<div class="modal" id="wordsModal" hidden>
  <div class="sheet wide" role="dialog" aria-modal="true" aria-labelledby="wordsTitle">
    <div class="sheet-head">
      <h3 id="wordsTitle">📚 이번 주 영어 단어 바꾸기</h3>
      <button class="close" type="button" data-close="wordsModal" aria-label="닫기">✕</button>
    </div>
    <div class="sheet-body">
      <p class="hintline">10개 단어를 직접 적거나 <b>🎲 추천 세트</b>로 바꿀 수 있어요. 저장하면 보드에 바로 보여요.</p>
      <div class="word-edit-grid" id="wordEditGrid"></div>
    </div>
    <div class="sheet-foot">
      <button class="btn grape" id="btnPreset" type="button">🎲 추천 세트</button>
      <button class="btn primary" id="btnSaveWords" type="button">저장</button>
      <button class="btn ghost" type="button" data-close="wordsModal">취소</button>
    </div>
  </div>
</div>

<!-- ================= 오늘 배운 문장 모달 ================= -->
<div class="modal" id="learnModal" hidden>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="learnTitle">
    <div class="sheet-head">
      <h3 id="learnTitle">📚 오늘 배운 문장</h3>
      <button class="close" type="button" data-close="learnModal" aria-label="닫기">✕</button>
    </div>
    <div class="sheet-body"><div class="learn-list" id="learnList"></div></div>
    <div class="sheet-foot">
      <span class="hintline" id="learnTotal" style="margin-right:auto">오늘 0개 · 지금까지 0개</span>
      <button class="btn ghost" type="button" data-close="learnModal">닫기</button>
    </div>
  </div>
</div>

<div class="toast" id="toast" hidden></div>
<script>
(function(){
"use strict";

/* =========================================================
   0. 저장 키 & 작은 도우미
   ========================================================= */
var STORE_KEY = "haeyuli.eng.v1";
var GEMINI_DEFAULT = "gemini-3.8-flash";   // gemini-2.0-flash(2026-06-01 종료)·2.5-flash(2026-12-01 종료 예정) 대신 쓰는 현재 GA 모델
var GEMINI_FALLBACKS = ["gemini-3.8-flash", "gemini-3.6-flash", "gemini-3.5-flash-lite", "gemini-2.5-flash"];
var DASH_STARS = "yuli.stars.v2";
var DASH_LEDGER = "yuli.starledger.v2";
var $ = function(id){ return document.getElementById(id); };
var pad2 = function(n){ return n < 10 ? "0" + n : "" + n; };
function dateKey(d){ d = d || new Date(); return d.getFullYear() + "-" + pad2(d.getMonth()+1) + "-" + pad2(d.getDate()); }
function readJSON(k, fb){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch(e){ return fb; } }
function writeJSON(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch(e){ return false; } }
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
function boldTip(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }

/* =========================================================
   1. 이번 주 영어 단어 (기본 + 추천 세트)
   ========================================================= */
var WORD_PRESETS = [
  [["robot","로봇"],["transform","변신하다"],["toy","장난감"],["blocks","블록"],["giant","거대한"],
   ["fast","빠른"],["friend","친구"],["play","놀다"],["awesome","멋진"],["happy","행복한"]],
  [["dinosaur","공룡"],["space","우주"],["rocket","로켓"],["jump","점프하다"],["strong","힘센"],
   ["puppy","강아지"],["cute","귀여운"],["adventure","모험"],["sing","노래하다"],["smile","웃다"]],
  [["Lego","레고"],["car","자동차"],["build","만들다"],["race","경주하다"],["red","빨간"],
   ["blue","파란"],["yellow","노란"],["big","큰"],["small","작은"],["fly","날다"]]
];
function wordsFromPreset(i){ return WORD_PRESETS[i % WORD_PRESETS.length].map(function(p){ return { en:p[0], ko:p[1] }; }); }

/* =========================================================
   2. 관심사 사전 (대화에서 자동 누적)
   ========================================================= */
var INTERESTS = [
  { id:"robot",     name:"로봇",   emoji:"🤖", topic:"robot",     ko:["로봇","로보트","기계"], en:["robot","robots","bot"] },
  { id:"transform", name:"변신",   emoji:"🔄", topic:"transform", ko:["변신","바뀌","바꿔","트랜스포머"], en:["transform","transformer","change"] },
  { id:"lego",      name:"레고",   emoji:"🧱", topic:"lego",      ko:["레고","블록","조립"], en:["lego","blocks","build"] },
  { id:"dinosaur",  name:"공룡",   emoji:"🦖", topic:"dinosaur",  ko:["공룡","티라노","렉스"], en:["dinosaur","dino","t-rex","rex"] },
  { id:"car",       name:"자동차", emoji:"🚗", topic:"car",       ko:["자동차","경찰차","트럭","버스","기차"], en:["car","truck","bus","race"] },
  { id:"puppy",     name:"강아지", emoji:"🐶", topic:"puppy",     ko:["강아지","멍멍","초코","댕댕"], en:["puppy","dog","choco"] },
  { id:"space",     name:"우주",   emoji:"🚀", topic:"space",     ko:["우주","로켓","달","별"], en:["space","rocket","moon","star"] }
];

/* =========================================================
   3. 대화 시나리오 (레벨별 질문 · 추천 답 · 단어)
   ========================================================= */
function S(l1, l2, l3, ko, h1, h2, h3, words, keys, reaction){
  return { lv:[l1,l2,l3], ko:ko, hints:[h1,h2,h3], words:words, keys:keys, reaction:reaction || "" };
}
var SCEN = {
  toy: { name:"장난감", emoji:"🧸", en:"Toys", steps:[
    S("Toy?","What's your favorite toy?","Hi Haeyul! What's your favorite toy? And why do you like it?",
      "가장 좋아하는 장난감은 뭐야?",
      ["Lego!","Robot!","Ball!"],
      ["My favorite toy is Lego.","I like my robot.","I like balls."],
      ["I like Lego because I can build a spaceship.","My robot can transform into a car.","I like balls because we can play together."],
      [["toy","장난감","🧸"],["favorite","가장 좋아하는","⭐"],["like","좋아하다","💛"]],
      ["lego","robot","ball","car","doll","puzzle","toy","block","bear"],"Cool!"),
    S("Big?","Is it big or small?","Is your toy big or small? Show me with your hands!",
      "그 장난감은 커? 작아?",
      ["Big!","Small!","Very big!"],
      ["It is big.","It is small.","It is very big."],
      ["It is small, but it is very strong.","It is as big as my head!"],
      [["big","큰","🐘"],["small","작은","🐜"],["very","아주","✨"]],
      ["big","small","tiny","huge","strong"],"Nice!"),
    S("Color?","What color is it?","What color is your toy? Do you like that color?",
      "무슨 색이야?",
      ["Red!","Blue!","Yellow!"],
      ["It is red.","It is blue and yellow.","My toy is green."],
      ["My toy is red and gold, like a superhero.","I like blue because it is cool."],
      [["red","빨간","🔴"],["blue","파란","🔵"],["yellow","노란","🟡"]],
      ["red","blue","yellow","green","black","white","pink","purple","orange","gold","color"],"Pretty!"),
    S("Alone?","Do you play with your toy alone?","Do you play with your toy alone, or with your friends?",
      "장난감은 혼자 가지고 놀아, 친구랑 같이 놀아?",
      ["Alone!","With friends!","With mom!"],
      ["I play alone.","I play with my friends.","I play with my mom."],
      ["I play with my friends after school.","Sometimes alone, sometimes with my brother."],
      [["alone","혼자","🙂"],["together","함께","🤝"],["friends","친구들","👦"]],
      ["alone","friend","together","mom","dad","brother","sister"],"Fun!"),
    S("Show me!","Can you show me your toy?","Can you show me your toy and tell me how it works?",
      "장난감을 보여줄 수 있어? 어떻게 움직이는지도 알려줘!",
      ["Yes!","Here!","Look!"],
      ["Yes, here it is.","This is my toy.","Look at this!"],
      ["Yes, this is my robot. It can move its arms.","Here it is. Press this button and it walks."],
      [["show","보여주다","👀"],["look","보다","👀"],["this","이것","👉"]],
      ["yes","here","look","this","show","button","move"],"Thanks!"),
    S("Say it!","Let's say: I love my toy!","Great talk! Let's say together: I love my toy and I play with it every day.",
      "같이 말해보자: 나는 내 장난감을 사랑해!",
      ["I love my toy!","My toy is fun!"],
      ["I love my toy.","My toy is fun."],
      ["I love my toy and I play with it every day.","My toy is my best friend."],
      [["love","사랑하다","❤️"],["every day","매일","📅"],["best","최고의","🏆"]],
      ["love","fun","best","every","toy"],"Wonderful!")
  ]},
  robot: { name:"로봇", emoji:"🤖", en:"Robots", steps:[
    S("Robot?","Do you like robots?","Do you like robots? What do you like about them?",
      "로봇 좋아해?",
      ["Yes!","Robots!","Cool!"],
      ["Yes, I do.","I like robots.","No, I don't."],
      ["Yes, I love robots because they can transform.","I like robots because they are strong and cool."],
      [["robot","로봇","🤖"],["cool","멋진","😎"],["strong","힘이 센","💪"]],
      ["yes","robot","cool","like","love","no","strong"],"Cool!"),
    S("What can it do?","What can a robot do?","If you have a robot, what can it do for you?",
      "로봇은 무엇을 할 수 있어?",
      ["Fly!","Walk!","Talk!"],
      ["It can walk.","It can fly.","It can talk."],
      ["It can clean my room and play with me.","My robot can fly and shoot lasers."],
      [["fly","날다","🕊️"],["walk","걷다","🚶"],["talk","말하다","💬"]],
      ["fly","walk","talk","run","clean","jump","dance","sing","help"],"Wow!"),
    S("Transform?","Do you like robots that transform?","Do you like robots that transform into cars? Why?",
      "변신하는 로봇 좋아해?",
      ["Yes!","Transform!","Wow!"],
      ["Yes, I do.","I like transforming robots.","They are cool."],
      ["Yes! I like robots that transform into cars because they are fast.","I love it when a car becomes a robot."],
      [["transform","변신하다","🔄"],["car","자동차","🚗"],["change","바꾸다","🔁"]],
      ["yes","transform","car","change","cool","fast","no"],"Awesome!"),
    S("Color?","What color is your robot?","What color is your robot, and what is its name?",
      "네 로봇은 무슨 색이야? 이름은 뭐야?",
      ["Red!","Blue!","Gold!"],
      ["It is red.","My robot is blue.","Its name is Max."],
      ["My robot is silver and red. Its name is Thunder.","It is blue like the sky, and I call it Blue."],
      [["silver","은색","⚪"],["name","이름","🏷️"],["gold","금색","🥇"]],
      ["red","blue","gold","silver","black","white","name","called","green"],"Nice name!"),
    S("Make a robot?","If you make a robot, what will it do?","If you could make a robot, what would it do? Tell me three things.",
      "로봇을 만든다면 무엇을 하게 할래?",
      ["Play!","Fly!","Help mom!"],
      ["It will play with me.","It will fly.","It will help my mom."],
      ["It would clean my room, do my homework, and play games with me.","My robot would fly me to school and protect my family."],
      [["make","만들다","🛠️"],["help","돕다","🤲"],["play","놀다","🎮"]],
      ["play","fly","help","clean","make","protect","homework","game"],"Great idea!"),
    S("Say it!","Let's say: My robot can fly!","Great! Let's say together: My robot can fly and transform!",
      "같이 말해보자: 내 로봇은 날 수 있어!",
      ["My robot can fly!","Robot fly!"],
      ["My robot can fly.","My robot can transform."],
      ["My robot can fly and transform into a car.","My robot can fly and it is very strong."],
      [["can","~할 수 있다","✅"],["fly","날다","🕊️"],["my","나의","🙋"]],
      ["can","fly","robot","transform"],"Super!")
  ]},
  puppy: { name:"강아지·초코", emoji:"🐶", en:"Puppy", steps:[
    S("Puppy?","Do you have a puppy?","Tell me about your puppy, Choco!",
      "너는 강아지가 있어? 초코 이야기 해줄래?",
      ["Yes!","Choco!","Puppy!"],
      ["Yes, I have a puppy.","My puppy is Choco.","I love Choco."],
      ["Yes, I have a puppy named Choco. Choco is very cute.","Choco is my best friend and we play every day."],
      [["puppy","강아지","🐶"],["have","가지다","🙌"],["cute","귀여운","🥰"]],
      ["yes","choco","puppy","dog","cute","love","no"],"Aww!"),
    S("Color?","What color is Choco?","What color is Choco? Describe Choco to me.",
      "초코는 무슨 색이야?",
      ["Brown!","White!","Black!"],
      ["Choco is brown.","Choco is white and brown.","Choco is black."],
      ["Choco is light brown with white feet.","Choco has soft brown fur and big black eyes."],
      [["brown","갈색","🟤"],["fur","털","🐾"],["soft","부드러운","☁️"]],
      ["brown","white","black","gold","color","soft","fur","eyes"],"Cute!"),
    S("Big or small?","Is Choco big or small?","Is Choco big or small? How does Choco feel?",
      "초코는 커? 작아? 만져 보면 어떤 느낌이야?",
      ["Small!","Big!","Soft!"],
      ["Choco is small.","Choco is big.","Choco is soft."],
      ["Choco is small and soft, like a teddy bear.","Choco is big and warm when I hug him."],
      [["small","작은","🐜"],["soft","부드러운","☁️"],["warm","따뜻한","🔥"]],
      ["small","big","soft","warm","cute","fluffy"],"So soft!"),
    S("Choco eat?","What does Choco like to eat?","What does Choco like to eat? What do you feed Choco?",
      "초코는 무엇을 먹는 걸 좋아해?",
      ["Meat!","Snack!","Water!"],
      ["Choco likes meat.","Choco likes snacks.","Choco drinks water."],
      ["Choco loves meat and dog snacks. He drinks a lot of water.","I feed Choco rice and chicken every morning."],
      [["eat","먹다","🍖"],["snack","간식","🦴"],["water","물","💧"]],
      ["meat","snack","water","rice","chicken","eat","food","feed"],"Yummy!"),
    S("Play with Choco?","What do you do with Choco?","What do you like to do with Choco? Tell me a fun story.",
      "초코랑 무엇을 같이 해?",
      ["Play!","Walk!","Run!"],
      ["I play with Choco.","We walk together.","We run in the park."],
      ["We run in the park and play with a ball. Choco is very fast.","I throw a ball and Choco brings it back every time."],
      [["walk","산책하다","🚶"],["ball","공","⚽"],["park","공원","🌳"]],
      ["play","walk","run","ball","park","throw","catch"],"So fun!"),
    S("Say it!","Let's say: I love my puppy.","Let's say together: I love Choco. Choco is my best friend.",
      "같이 말해보자: 나는 내 강아지를 사랑해!",
      ["I love Choco!","Choco is cute!"],
      ["I love my puppy.","Choco is my friend."],
      ["I love Choco. Choco is my best friend.","Choco is cute and I play with him every day."],
      [["love","사랑하다","❤️"],["best friend","가장 친한 친구","👫"],["every day","매일","📅"]],
      ["love","best","friend","every","cute"],"Sweet!")
  ]},
  dino: { name:"공룡·모험", emoji:"🦖", en:"Dino", steps:[
    S("Dinosaur?","Do you like dinosaurs?","Do you like dinosaurs? Which one is your favorite?",
      "공룡 좋아해? 어떤 공룡이 제일 좋아?",
      ["Yes!","T-Rex!","Dino!"],
      ["Yes, I do.","I like T-Rex.","I like dinosaurs."],
      ["Yes! My favorite is T-Rex because it is strong.","I love long-neck dinosaurs and Triceratops."],
      [["dinosaur","공룡","🦖"],["T-Rex","티라노사우루스","🦖"],["favorite","가장 좋아하는","⭐"]],
      ["yes","dinosaur","dino","rex","triceratops","long","no","like"],"Roar!"),
    S("T-Rex?","Do you like T-Rex?","Do you like T-Rex? Is T-Rex scary or cool?",
      "티라노사우루스 좋아해? 무서워, 멋져?",
      ["Cool!","Scary!","Strong!"],
      ["T-Rex is cool.","T-Rex is scary.","T-Rex is strong."],
      ["T-Rex is scary but very cool. It has big teeth.","I think T-Rex is cool because it is the king of dinosaurs."],
      [["scary","무서운","😱"],["cool","멋진","😎"],["teeth","이빨","🦷"]],
      ["cool","scary","strong","teeth","king","big"],"Grr!"),
    S("Scary?","Is a dinosaur scary?","If you meet a dinosaur, what will you do?",
      "공룡을 만난다면 어떻게 할 거야?",
      ["Run!","Hide!","Hello!"],
      ["I will run.","I will hide.","I will say hello."],
      ["I would run fast and hide in a cave.","I would take a photo and say hello!"],
      [["run","달리다","🏃"],["hide","숨다","🫣"],["cave","동굴","🕳️"]],
      ["run","hide","hello","photo","cave","fast"],"Run!"),
    S("Adventure?","Where do you want to go on an adventure?","Where do you want to go on an adventure? Jungle, space, or the sea?",
      "어디로 모험을 떠나고 싶어?",
      ["Jungle!","Space!","Sea!"],
      ["I want to go to the jungle.","I want to go to space.","Let's go to the sea."],
      ["I want to go to the jungle and find a dinosaur.","I would go to space to see a star dinosaur."],
      [["adventure","모험","🗺️"],["jungle","정글","🌴"],["space","우주","🚀"]],
      ["jungle","space","sea","adventure","go","find","forest"],"Let's go!"),
    S("Friend?","Do you want a dinosaur friend?","Would you like a dinosaur as a friend? What would you play together?",
      "공룡 친구가 있으면 좋겠어? 같이 뭐 하고 놀래?",
      ["Yes!","Play!","Hide and seek!"],
      ["Yes, I do.","We will play.","We will run."],
      ["I would like a small dinosaur friend. We would play hide and seek.","A dinosaur friend could carry me on its back!"],
      [["friend","친구","🤝"],["together","함께","👫"],["carry","태우다","🐎"]],
      ["yes","friend","play","run","hide","carry","together"],"Best friends!"),
    S("Say it!","Let's say: Let's go on an adventure!","Let's say together: Let's go on a dinosaur adventure!",
      "같이 말해보자: 모험을 떠나자!",
      ["Let's go!","Adventure!"],
      ["Let's go on an adventure.","Let's go together."],
      ["Let's go on a dinosaur adventure together!","Let's go and find a big T-Rex!"],
      [["let's","~하자","🙌"],["go","가다","🚶"],["together","함께","👫"]],
      ["go","adventure","let","together","find"],"Adventure time!")
  ]}
};

/* 관심사 모드 전용 대화 */
var ISCEN = {
  robot: { name:"로봇", emoji:"🤖", steps:[
    S("Robot!","You love robots! What is your favorite robot?","You love robots! What is your favorite robot, and what can it do?",
      "해율이는 로봇을 정말 좋아하는구나! 제일 좋아하는 로봇은 뭐야?",
      ["Transformer!","Robot car!","Big robot!"],
      ["I like transformer robots.","My favorite is a robot car.","I like big robots."],
      ["I like transformer robots because they change into cars.","My favorite robot is a giant one that can fly."],
      [["robot","로봇","🤖"],["favorite","가장 좋아하는","⭐"],["giant","거대한","🗿"]],
      ["robot","transformer","car","big","giant","fly"],"Cool!")
  , S("What can it do?","What can your robot do?","What can your robot do? Tell me three things!",
      "그 로봇은 무엇을 할 수 있어?",
      ["Fly!","Walk!","Transform!"],
      ["It can fly.","It can walk.","It can transform."],
      ["It can fly, walk, and shoot water.","It can transform into a car and drive fast."],
      [["fly","날다","🕊️"],["walk","걷다","🚶"],["transform","변신하다","🔄"]],
      ["fly","walk","transform","run","talk","shoot","drive"],"Amazing!")
  , S("Transforming robot?","Do you want a robot that transforms?","Do you want a robot that transforms? What would it transform into?",
      "변신하는 로봇을 갖고 싶어? 무엇으로 변신하면 좋겠어?",
      ["Yes!","Wow!","Transform!"],
      ["Yes, I do.","I want a transforming robot.","That is cool."],
      ["Yes! I want a robot that transforms into a dinosaur.","I want one that turns into a car and a plane."],
      [["want","원하다","🙏"],["transform","변신하다","🔄"],["plane","비행기","✈️"]],
      ["yes","want","transform","dinosaur","car","plane","cool"],"Wow!")
  , S("Say it!","Let's say: My robot can transform!","Let's say together: My robot can transform into a car!",
      "같이 말해보자: 내 로봇은 변신할 수 있어!",
      ["My robot can transform!","Transform!"],
      ["My robot can transform.","My robot can fly."],
      ["My robot can transform into a car!","My robot can transform and fly!"],
      [["can","~할 수 있다","✅"],["transform","변신하다","🔄"],["into","~로","➡️"]],
      ["can","transform","robot","fly","car"],"Super!")
  ]},
  transform: { name:"변신", emoji:"🔄", steps:[
    S("Transform!","You like transforming! What changes into what?","You like transforming! What changes into what?","변신을 좋아하는구나! 무엇이 무엇으로 변해?",
      ["Car to robot!","Robot to car!","Dino!"],
      ["A car changes into a robot.","A robot changes into a car.","A dinosaur transforms."],
      ["A car transforms into a giant robot.","My toy dinosaur changes into a car!"],
      [["change","바뀌다","🔁"],["into","~로","➡️"],["giant","거대한","🗿"]],
      ["car","robot","dinosaur","change","transform","into","giant"],"Wow!")
  , S("Which is cooler?","Which is cooler: a car that becomes a robot, or a robot that becomes a car?","Which is cooler: a car that becomes a robot, or a robot that becomes a car? Why?",
      "자동차가 로봇이 되는 게 멋져, 로봇이 자동차가 되는 게 멋져?",
      ["Car to robot!","Robot to car!","Both!"],
      ["A car that becomes a robot is cooler.","A robot that becomes a car is cooler.","Both are cool."],
      ["A car that becomes a robot is cooler because it is a surprise!","I like both! A robot that becomes a car can drive fast."],
      [["cool","멋진","😎"],["become","~이 되다","✨"],["both","둘 다","2️⃣"]],
      ["car","robot","cool","both","drive","fast","surprise"],"Cool!")
  , S("What would you become?","If you could transform, what would you change into?","If you could transform, what would you change into? And what would you do?",
      "해율이가 변신할 수 있다면 무엇이 될래?",
      ["A robot!","A dinosaur!","A car!"],
      ["I would change into a robot.","I would be a dinosaur.","I would be a car."],
      ["I would transform into a giant robot and protect my family.","I would be a dinosaur and run very fast."],
      [["protect","지키다","🛡️"],["family","가족","👨‍👩‍👧"],["become","~이 되다","✨"]],
      ["robot","dinosaur","car","protect","family","fast","would"],"Amazing!")
  , S("Say it!","Let's say: It transforms into a car!","Let's say together: My robot transforms into a fast car!",
      "같이 말해보자: 그것은 자동차로 변신해!",
      ["Into a car!","Transform!"],
      ["It transforms into a car.","It changes into a robot."],
      ["It transforms into a fast car!","My robot transforms into a giant dinosaur!"],
      [["transform","변신하다","🔄"],["fast","빠른","⚡"],["into","~로","➡️"]],
      ["transform","car","into","fast","robot"],"Super!")
  ]},
  lego: { name:"레고", emoji:"🧱", steps:[
    S("Lego!","You love Lego! What do you like to build?","You love Lego! What do you like to build, and who builds with you?","레고를 좋아하는구나! 무엇을 만들고 싶어?",
      ["A car!","A robot!","A house!"],
      ["I like to build cars.","I build robots.","I build houses."],
      ["I like to build spaceships and robots.","I build a big castle with my sister."],
      [["build","만들다","🔨"],["Lego","레고","🧱"],["castle","성","🏰"]],
      ["car","robot","house","spaceship","castle","build","lego"],"Cool!")
  , S("How many pieces?","How many pieces do you need?","How many pieces do you need for your Lego?","블록이 몇 개 필요해?",
      ["Ten!","Many!","A lot!"],
      ["I need ten pieces.","I need many pieces.","I need a lot of blocks."],
      ["I need about one hundred pieces.","I need a lot of blocks and four wheels."],
      [["pieces","조각","🧩"],["many","많은","🔢"],["hundred","백","💯"]],
      ["ten","many","lot","hundred","pieces","blocks","need"],"Wow!")
  , S("Color?","What color is your Lego?","What color is your Lego? Why do you like that color?","네 레고는 무슨 색이야?",
      ["Red!","Blue!","Yellow!"],
      ["My Lego is red.","It is blue.","I have many colors."],
      ["My Lego is red and blue, like a police car.","I have every color, but I like yellow best."],
      [["color","색","🎨"],["police car","경찰차","🚓"],["every","모든","🌈"]],
      ["red","blue","yellow","green","color","police","car","many"],"Pretty!")
  , S("Say it!","Let's say: I can build a spaceship!","Let's say together: I can build a big spaceship with Lego!",
      "같이 말해보자: 나는 우주선을 만들 수 있어!",
      ["I can build!","Spaceship!"],
      ["I can build a spaceship.","I can build a robot."],
      ["I can build a big spaceship with Lego!","I can build a robot that walks!"],
      [["build","만들다","🔨"],["spaceship","우주선","🚀"],["big","큰","🐘"]],
      ["build","spaceship","robot","can","big"],"Amazing!")
  ]},
  dinosaur: { name:"공룡", emoji:"🦖", steps:[
    S("Dino!","You like dinosaurs! Which dinosaur is your favorite?","You like dinosaurs! Which dinosaur is your favorite, and why?","공룡을 좋아하는구나! 어떤 공룡이 제일 좋아?",
      ["T-Rex!","Triceratops!","Long neck!"],
      ["I like T-Rex.","I like Triceratops.","I like long-neck dinosaurs."],
      ["I like T-Rex because it is the king.","My favorite is Triceratops because it has three horns."],
      [["dinosaur","공룡","🦖"],["horn","뿔","🤘"],["king","왕","👑"]],
      ["rex","triceratops","dinosaur","horn","king","long","like"],"Roar!")
  , S("Big or small?","Is it big or small? Is it fast?","Is your dinosaur big or small? Is it fast or slow?","그 공룡은 커? 작아? 빠르니?",
      ["Big!","Fast!","Huge!"],
      ["It is big.","It is fast.","It is very big."],
      ["It is huge and very fast.","It is big but slow, like a turtle."],
      [["big","큰","🐘"],["fast","빠른","⚡"],["slow","느린","🐢"]],
      ["big","small","fast","slow","huge","tall"],"Wow!")
  , S("Sound?","What sound does it make?","What sound does your dinosaur make? Can you roar?","그 공룡은 어떤 소리를 내?",
      ["Roar!","Grr!","Rawr!"],
      ["It says roar.","It goes grr.","It is very loud."],
      ["It says ROAR! It is very loud.","My dinosaur makes a big grr sound."],
      [["roar","으르렁","📣"],["loud","시끄러운","🔊"],["sound","소리","🎵"]],
      ["roar","grr","loud","sound","big","scary"],"ROAR!")
  , S("Say it!","Let's say: The T-Rex is very strong!","Let's say together: The T-Rex is big, fast, and very strong!",
      "같이 말해보자: 티라노는 아주 힘이 세!",
      ["T-Rex strong!","Very strong!"],
      ["The T-Rex is strong.","It is very strong."],
      ["The T-Rex is big, fast, and very strong!","The T-Rex is the king of dinosaurs!"],
      [["strong","힘이 센","💪"],["king","왕","👑"],["fast","빠른","⚡"]],
      ["strong","rex","king","fast","big"],"Roar!")
  ]},
  car: { name:"자동차", emoji:"🚗", steps:[
    S("Car!","You like cars! What is your favorite car?","You like cars! What is your favorite car, and why?","자동차를 좋아하는구나! 제일 좋아하는 자동차는 뭐야?",
      ["Police car!","Race car!","Bus!"],
      ["I like police cars.","I like race cars.","I like buses."],
      ["I like police cars because they are fast and cool.","My favorite is a red race car."],
      [["car","자동차","🚗"],["police car","경찰차","🚓"],["race car","경주차","🏎️"]],
      ["car","police","race","bus","truck","fast","cool"],"Vroom!")
  , S("Fast or slow?","Is it fast or slow? What color?","Is your car fast or slow? What color is it?","그 차는 빨라, 느려? 무슨 색이야?",
      ["Fast!","Red!","Blue!"],
      ["It is fast.","It is red.","It is blue."],
      ["It is very fast and red like fire.","It is slow but very big and blue."],
      [["fast","빠른","⚡"],["slow","느린","🐢"],["red","빨간","🔴"]],
      ["fast","slow","red","blue","yellow","color","big"],"Zoom!")
  , S("Where to?","Where do you want to drive?","Where do you want to drive your car? And who comes with you?","어디로 운전하고 싶어?",
      ["To the beach!","To grandma!","To school!"],
      ["I want to drive to the beach.","I want to go to grandma's house.","I drive to school."],
      ["I want to drive to the beach with my family.","I would drive to the mountains and camp there."],
      [["beach","바다","🏖️"],["grandma","할머니","👵"],["mountain","산","⛰️"]],
      ["beach","grandma","school","mountain","family","drive","go"],"Let's go!")
  , S("Say it!","Let's say: My car is very fast!","Let's say together: My red car is very fast and cool!",
      "같이 말해보자: 내 차는 아주 빨라!",
      ["My car fast!","Very fast!"],
      ["My car is fast.","My car is red."],
      ["My car is very fast and cool!","My red car is faster than a rocket!"],
      [["fast","빠른","⚡"],["red","빨간","🔴"],["cool","멋진","😎"]],
      ["fast","car","red","cool","rocket"],"Vroom!")
  ]},
  puppy: { name:"강아지", emoji:"🐶", steps:[
    S("Choco!","You love puppies! Tell me about Choco.","You love puppies! Tell me everything about Choco!","강아지를 정말 좋아하는구나! 초코 이야기 해줄래?",
      ["Cute!","Brown!","Small!"],
      ["Choco is cute.","Choco is brown.","Choco is small."],
      ["Choco is small, brown, and very cute.","Choco is my best friend and he is very fast."],
      [["puppy","강아지","🐶"],["cute","귀여운","🥰"],["brown","갈색","🟤"]],
      ["choco","puppy","cute","brown","small","fast","friend"],"Aww!")
  , S("Choco eat?","What does Choco like to eat?","What does Choco like to eat? What is Choco's favorite snack?","초코는 무엇을 먹는 걸 좋아해?",
      ["Meat!","Snacks!","Water!"],
      ["Choco likes meat.","Choco likes snacks.","Choco drinks water."],
      ["Choco loves meat and dog snacks.","Choco's favorite snack is a bone."],
      [["meat","고기","🍖"],["snack","간식","🦴"],["bone","뼈다귀","🦴"]],
      ["meat","snack","water","bone","eat","food"],"Yummy!")
  , S("Play with Choco?","What do you play with Choco?","What do you play with Choco? Tell me a fun story.","초코랑 무엇을 하고 놀아?",
      ["Ball!","Run!","Walk!"],
      ["We play with a ball.","We run together.","We walk in the park."],
      ["We play with a ball in the park. Choco is very fast.","I throw a stick and Choco brings it back."],
      [["ball","공","⚽"],["park","공원","🌳"],["run","달리다","🏃"]],
      ["ball","park","run","walk","play","throw"],"Fun!")
  , S("Say it!","Let's say: Choco is my best friend!","Let's say together: Choco is cute and Choco is my best friend!",
      "같이 말해보자: 초코는 내 가장 친한 친구야!",
      ["Choco friend!","Best friend!"],
      ["Choco is my friend.","Choco is my best friend."],
      ["Choco is cute and Choco is my best friend!","I love Choco and Choco loves me!"],
      [["best friend","가장 친한 친구","👫"],["love","사랑하다","❤️"],["cute","귀여운","🥰"]],
      ["friend","best","choco","love","cute"],"Sweet!")
  ]},
  space: { name:"우주", emoji:"🚀", steps:[
    S("Space!","You like space! What do you want to see in space?","You like space! What do you want to see in space?","우주를 좋아하는구나! 우주에서 무엇을 보고 싶어?",
      ["Stars!","The moon!","Rockets!"],
      ["I want to see stars.","I want to see the moon.","I like rockets."],
      ["I want to see a big star and the moon.","I want to see Earth from space."],
      [["space","우주","🚀"],["moon","달","🌙"],["star","별","⭐"]],
      ["space","moon","star","earth","rocket","see"],"Wow!")
  , S("The moon?","Do you want to go to the moon?","Do you want to go to the moon? What would you do there?","달에 가 보고 싶어?",
      ["Yes!","Jump!","Fly!"],
      ["Yes, I do.","I want to jump on the moon.","I want to fly."],
      ["Yes! I would jump very high on the moon.","I want to go to the moon and see the Earth."],
      [["moon","달","🌙"],["jump","점프하다","🦘"],["high","높이","⬆️"]],
      ["yes","moon","jump","high","fly","earth"],"So high!")
  , S("What would you take?","What would you take with you?","What would you take with you to space?","우주에 무엇을 가지고 갈래?",
      ["My toy!","Water!","My puppy!"],
      ["I would take my toy.","I would take water.","I would take my puppy."],
      ["I would take my robot and my favorite snack.","I would take Choco and a big bottle of water."],
      [["take","가지고 가다","🎒"],["water","물","💧"],["snack","간식","🍪"]],
      ["take","toy","water","snack","puppy","robot"],"Good plan!")
  , S("Say it!","Let's say: Let's go to space!","Let's say together: Let's go to space in a big rocket!",
      "같이 말해보자: 우주로 가자!",
      ["Let's go!","Space!"],
      ["Let's go to space.","Let's go in a rocket."],
      ["Let's go to space in a big rocket!","Let's go to space and see the stars!"],
      [["go","가다","🚶"],["space","우주","🚀"],["rocket","로켓","🚀"]],
      ["go","space","rocket","star","let"],"3, 2, 1… blast off!")
  ]}
};

/* =========================================================
   4. 한국어 → 영어 코칭 사전 (내장 스마트 엔진)
   ========================================================= */
function w(en, ko, emoji){ return { en:en, ko:ko, emoji:emoji || "💬" }; }
function art(en){ if (/^(the |my |Lego|space|Earth|Choco)/i.test(en)) return en; return (/^[aeiou]/i.test(en) ? "an " : "a ") + en; }
function plural(en){ if (/(s|x|ch|sh)$/i.test(en)) return en + "es"; if (/y$/i.test(en)) return en.slice(0,-1) + "ies"; return en + "s"; }
function cap(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
function hasBatchim(s){ s = String(s); var c = s.charCodeAt(s.length - 1); if (isNaN(c)) return false; var t = c - 0xAC00; if (t < 0 || t > 11171) return false; return t % 28 !== 0; }
function josa(word, pair){ var p = pair.split("/"); return word + (hasBatchim(word) ? p[0] : p[1]); }
function copula(word){ return word + (hasBatchim(word) ? "이야" : "야"); }
function stemV(ko){ return String(ko).replace(/다$/, ""); }
function verbS(v){ var e = v.en; if (/(s|x|ch|sh|o)$/.test(e)) return e + "es"; if (/y$/.test(e)) return e.slice(0, -1) + "ies"; return e + "s"; }
function theN(en){ return /^(the |my |Lego|space)/i.test(en) ? en : "the " + en; }
function shortS(t){ t = String(t).replace(/\s+/g," ").trim(); return t.length > 16 ? t.slice(0,16) + "…" : t; }

var NOUNS = [
  { re:/로봇|로보트/, en:"robot", ko:"로봇", emoji:"🤖" },
  { re:/레고|블록/, en:"Lego", ko:"레고", emoji:"🧱" },
  { re:/공룡|티라노|렉스/, en:"dinosaur", ko:"공룡", emoji:"🦖" },
  { re:/자동차|경찰차|트럭|버스|기차|레이싱/, en:"car", ko:"자동차", emoji:"🚗" },
  { re:/강아지|멍멍이|초코|댕댕이/, en:"puppy", ko:"강아지", emoji:"🐶" },
  { re:/장난감/, en:"toy", ko:"장난감", emoji:"🧸" },
  { re:/공을|공이|공으로|축구공|공$/, en:"ball", ko:"공", emoji:"⚽" },
  { re:/책/, en:"book", ko:"책", emoji:"📚" },
  { re:/우주/, en:"space", ko:"우주", emoji:"🚀" },
  { re:/로켓/, en:"rocket", ko:"로켓", emoji:"🚀" },
  { re:/달/, en:"the moon", ko:"달", emoji:"🌙" },
  { re:/별/, en:"star", ko:"별", emoji:"⭐" },
  { re:/학교/, en:"school", ko:"학교", emoji:"🏫" },
  { re:/친구/, en:"friend", ko:"친구", emoji:"👫" },
  { re:/엄마/, en:"mom", ko:"엄마", emoji:"👩" },
  { re:/아빠/, en:"dad", ko:"아빠", emoji:"👨" },
  { re:/색깔|색/, en:"color", ko:"색", emoji:"🎨" },
  { re:/노래/, en:"song", ko:"노래", emoji:"🎵" },
  { re:/게임/, en:"game", ko:"게임", emoji:"🎮" },
  { re:/그림/, en:"picture", ko:"그림", emoji:"🖼️" },
  { re:/물/, en:"water", ko:"물", emoji:"💧" }
];
var VERBS = [
  { re:/날아|날다|날 ?수|날래/, en:"fly", ko:"날다", emoji:"🕊️", ing:"flying" },
  { re:/걷|걸어/, en:"walk", ko:"걷다", emoji:"🚶", ing:"walking" },
  { re:/뛰|달려|달리/, en:"run", ko:"달리다", emoji:"🏃", ing:"running" },
  { re:/점프/, en:"jump", ko:"점프하다", emoji:"🦘", ing:"jumping" },
  { re:/변신|바뀌|바꿔/, en:"transform", ko:"변신하다", emoji:"🔄", ing:"transforming" },
  { re:/춤/, en:"dance", ko:"춤추다", emoji:"💃", ing:"dancing" },
  { re:/노래.*(하|불)|불러/, en:"sing", ko:"노래하다", emoji:"🎤", ing:"singing" },
  { re:/말하|이야기하|얘기하/, en:"talk", ko:"말하다", emoji:"💬", ing:"talking" },
  { re:/놀/, en:"play", ko:"놀다", emoji:"🎮", ing:"playing" },
  { re:/먹/, en:"eat", ko:"먹다", emoji:"🍚", ing:"eating" },
  { re:/마시/, en:"drink", ko:"마시다", emoji:"🥤", ing:"drinking" },
  { re:/잘 ?자|자자|잠을|잠이/, en:"sleep", ko:"자다", emoji:"😴", ing:"sleeping" },
  { re:/씻/, en:"wash", ko:"씻다", emoji:"🧼", ing:"washing" },
  { re:/만들|조립/, en:"make", ko:"만들다", emoji:"🔨", ing:"making" },
  { re:/그리/, en:"draw", ko:"그리다", emoji:"✏️", ing:"drawing" },
  { re:/읽/, en:"read", ko:"읽다", emoji:"📖", ing:"reading" },
  { re:/도와|돕/, en:"help", ko:"돕다", emoji:"🤲", ing:"helping" },
  { re:/웃/, en:"laugh", ko:"웃다", emoji:"😄", ing:"laughing" },
  { re:/숨/, en:"hide", ko:"숨다", emoji:"🫣", ing:"hiding" },
  { re:/싸우|공격/, en:"fight", ko:"싸우다", emoji:"⚔️", ing:"fighting" }
];
var ADJS = [
  { re:/커|크다|큰/, en:"big", ko:"크다", emoji:"🐘" },
  { re:/작|조그/, en:"small", ko:"작다", emoji:"🐜" },
  { re:/빠르|빨라/, en:"fast", ko:"빠르다", emoji:"⚡" },
  { re:/느리|느려/, en:"slow", ko:"느리다", emoji:"🐢" },
  { re:/무서|무섭/, en:"scary", ko:"무섭다", emoji:"😱" },
  { re:/귀엽/, en:"cute", ko:"귀엽다", emoji:"🥰" },
  { re:/재미있|재밌|신나/, en:"fun", ko:"재미있다", emoji:"🎉" },
  { re:/멋있|멋져|멋진/, en:"cool", ko:"멋있다", emoji:"😎" },
  { re:/예쁘|이쁘/, en:"pretty", ko:"예쁘다", emoji:"🌸" },
  { re:/강하|힘이 ?세/, en:"strong", ko:"힘이 세다", emoji:"💪" },
  { re:/나쁘|나빠/, en:"bad", ko:"나쁘다", emoji:"👎" }
];
var COLORS = [
  { re:/빨강|빨간|빨갛/, en:"red", ko:"빨간색", emoji:"🔴" },
  { re:/파랑|파란|파랗/, en:"blue", ko:"파란색", emoji:"🔵" },
  { re:/노랑|노란|노랗/, en:"yellow", ko:"노란색", emoji:"🟡" },
  { re:/초록|녹색/, en:"green", ko:"초록색", emoji:"🟢" },
  { re:/검정|까만|검은/, en:"black", ko:"검은색", emoji:"⚫" },
  { re:/하양|하얀|흰/, en:"white", ko:"흰색", emoji:"⚪" },
  { re:/분홍|핑크/, en:"pink", ko:"분홍색", emoji:"🩷" },
  { re:/보라/, en:"purple", ko:"보라색", emoji:"🟣" },
  { re:/주황/, en:"orange", ko:"주황색", emoji:"🟠" },
  { re:/은색/, en:"silver", ko:"은색", emoji:"🥈" },
  { re:/금색/, en:"gold", ko:"금색", emoji:"🥇" },
  { re:/갈색|밤색|브라운/, en:"brown", ko:"갈색", emoji:"🟤" }
];
function findNoun(t){ for (var i=0;i<NOUNS.length;i++) if (NOUNS[i].re.test(t)) return NOUNS[i]; return null; }
function findVerb(t){ for (var i=0;i<VERBS.length;i++) if (VERBS[i].re.test(t)) return VERBS[i]; return null; }
function findAdj(t){ for (var i=0;i<ADJS.length;i++) if (ADJS[i].re.test(t)) return ADJS[i]; return null; }
function findColor(t){ for (var i=0;i<COLORS.length;i++) if (COLORS[i].re.test(t)) return COLORS[i]; return null; }

function res(t, en, ko, words, extra){
  return { tip: "'" + shortS(t) + "'는 **" + en + "** 라고 해!" + (extra ? " " + extra : ""),
           en:en, ko:ko, words:words || [] };
}

var RULES = [
  { re:/몰라|모르겠|못 ?하겠|어려워|못 ?알아/, f:function(t){
      return res(t, "I don't know.", "몰라요", [w("know","알다","💡"), w("don't","안 ~하다","🚫")], "괜찮아, 선생님이랑 같이 해보자! 🆘 버튼을 눌러도 돼."); } },

  { re:/싫어해|싫어|싫다|싫은/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? "I don't like " + plural(n.en) + "." : "I don't like it.", n ? josa(n.ko, "은/는") + " 싫어요" : "그건 싫어요",
        [w("don't like","싫어하다","🚫"), n ? w(n.en,n.ko,n.emoji) : w("it","그것","👉")], "싫을 때는 don't를 써요."); } },

  { re:/좋아해|좋아하|좋아|좋은/, f:function(t){
      var n = findNoun(t), v = findVerb(t);
      var en = n ? "I like " + plural(n.en) + "." : (v ? "I like to " + v.en + "." : "I like it.");
      var ko = n ? josa(n.ko, "을/를") + " 좋아해요" : (v ? v.ko + "는 걸 좋아해요" : "그걸 좋아해요");
      return res(t, en, ko, [w("like","좋아하다","💛"), n ? w(n.en,n.ko,n.emoji) : (v ? w(v.en,v.ko,v.emoji) : w("it","그것","👉"))], "좋아하는 것에는 like를 써요."); } },

  { re:/보고 ?싶|그리워|보고싶/, f:function(t){
      var n = findNoun(t);
      if (n && /엄마/.test(t)) return res(t, "I miss my mom.", "엄마가 보고 싶어", [w("miss","보고 싶다","🥺"), w("mom","엄마","👩")], "보고 싶을 때는 I miss ~ 라고 해.");
      if (n && /아빠/.test(t)) return res(t, "I miss my dad.", "아빠가 보고 싶어", [w("miss","보고 싶다","🥺"), w("dad","아빠","👨")], "보고 싶을 때는 I miss ~ 라고 해.");
      return res(t, "I miss you.", "보고 싶어", [w("miss","보고 싶다","🥺"), w("you","너","🙋")], "보고 싶을 때는 I miss you."); } },

  { re:/싶|할래|원해|갖고 ?싶|사고 ?싶/, f:function(t){
      var v = findVerb(t), n = findNoun(t);
      var en = n ? "I want " + art(n.en) + "." : (v ? "I want to " + v.en + "." : "I want to play.");
      var ko = n ? josa(n.ko, "을/를") + " 갖고 싶어요" : (v ? stemV(v.ko) + "고 싶어요" : "놀고 싶어요");
      return res(t, en, ko, [w("want","원하다","🙏"), n ? w(n.en,n.ko,n.emoji) : (v ? w(v.en,v.ko,v.emoji) : w("play","놀다","🎮"))], "하고 싶을 때는 want to를 써요."); } },

  { re:/수 ?없|못 ?해|못 ?하/, f:function(t){
      var v = findVerb(t) || { en:"play", ko:"놀다", emoji:"🎮" };
      return res(t, "I can't " + v.en + ".", v.ko + "지 못해요", [w("can't","~할 수 없다","❌"), w(v.en,v.ko,v.emoji)], "못 할 때는 can't를 써요."); } },

  { re:/수 ?있|될 ?수 ?있/, f:function(t){
      var v = findVerb(t) || { en:"play", ko:"놀다", emoji:"🎮" }, n = findNoun(t);
      var ask = /\?|까|니|나요/.test(t);
      var en = (ask && n) ? "Can it " + v.en + "?" : (n ? cap(n.en) + " can " + v.en + "." : "I can " + v.en + ".");
      return res(t, en, (n ? josa(n.ko, "이/가") + " " : "나는 ") + stemV(v.ko) + " 수 있어요", [w("can","~할 수 있다","✅"), w(v.en,v.ko,v.emoji), n ? w(n.en,n.ko,n.emoji) : w("I","나","🙋")], "할 수 있는지 물을 때는 Can it ~? 이라고 해요."); } },

  { re:/뭐야|뭐지|뭐니|무엇|무슨|뭐가/, f:function(t){
      var n = findNoun(t);
      if (/이거|이것|이게/.test(t)) return res(t, n ? "This is " + art(n.en) + "." : "What is this?", n ? "이건 " + copula(n.ko) : "이게 뭐야?", [w("this","이것","👉")], "가까운 것을 물을 때는 What is this?");
      if (/저거|저것|저게/.test(t)) return res(t, n ? "That is " + art(n.en) + "." : "What is that?", n ? "저건 " + copula(n.ko) : "저게 뭐야?", [w("that","저것","👈")], "멀리 있는 것을 물을 때는 What is that?");
      return res(t, n ? "What is " + art(n.en) + "?" : "What is it?", n ? josa(n.ko, "이/가") + " 뭐야?" : "그게 뭐야?",
        [w("what","무엇","❓"), w("is","~이다","🟰"), n ? w(n.en,n.ko,n.emoji) : w("it","그것","👉")], "무엇인지 물을 때는 What is ~? 를 써요."); } },

  { re:/어디|어딨어|어디에/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? "Where is my " + n.en + "?" : "Where is it?", n ? "내 " + josa(n.ko, "은/는") + " 어디 있어?" : "어디 있어?",
        [w("where","어디","📍"), w("is","~이다","🟰"), n ? w(n.en,n.ko,n.emoji) : w("it","그것","👉")], "장소를 물을 때는 Where is ~? 를 써요."); } },

  { re:/왜|어째서/, f:function(t){
      var a = findAdj(t);
      return res(t, a ? "Why is it " + a.en + "?" : "Why?", a ? "왜 " + a.ko + "?" : "왜?",
        [w("why","왜","❓"), w("because","왜냐하면","💡")], "이유를 물을 때는 Why? 를 써요."); } },

  { re:/몇 ?개|몇개|얼마나|몇 ?살|몇 ?마리/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? "How many " + plural(n.en) + "?" : "How many?", n ? josa(n.ko, "이/가") + " 몇 개야?" : "몇 개야?",
        [w("how many","몇 개","🔢"), n ? w(n.en,n.ko,n.emoji) : w("it","그것","👉")], "개수를 물을 때는 How many? 를 써요."); } },

  { re:/누구/, f:function(t){
      return res(t, "Who is it?", "누구야?", [w("who","누구","🙋"), w("it","그것","👉")], "사람을 물을 때는 Who? 를 써요."); } },

  { re:/언제/, f:function(t){
      return res(t, "When?", "언제?", [w("when","언제","⏰")], "때를 물을 때는 When? 을 써요."); } },

  { re:/어떻게|어떡해/, f:function(t){
      return res(t, "How?", "어떻게?", [w("how","어떻게","🤔")], "방법을 물을 때는 How? 를 써요."); } },

  { re:/무슨 ?색|색깔|색이|색은/, f:function(t){
      var c = findColor(t);
      return res(t, c ? "It is " + c.en + "." : "What color is it?", c ? c.ko + "이에요" : "무슨 색이야?",
        [w("color","색","🎨"), c ? w(c.en,c.ko,c.emoji) : w("what","무엇","❓")], "색을 말할 때는 It is red. 처럼 써요."); } },

  { re:/이름/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? "Its name is " + cap(n.en) + "." : "My name is Haeyul.", n ? "이름은 " + copula(n.ko) : "내 이름은 해율이야",
        [w("name","이름","🏷️")], "이름을 말할 때는 My name is ~ 를 써요."); } },

  { re:/안녕|하이|헬로/, f:function(t){
      return res(t, "Hello!", "안녕!", [w("hello","안녕","👋"), w("hi","안녕","👋")], "친구에게 인사해 보자!"); } },

  { re:/고마워|고맙|땡큐/, f:function(t){
      return res(t, "Thank you!", "고마워!", [w("thank you","고마워","🙏"), w("thanks","고마워","🙌")], "고마울 때는 Thank you! 라고 해."); } },

  { re:/미안|죄송/, f:function(t){
      return res(t, "I'm sorry.", "미안해요", [w("sorry","미안한","🙇")], "미안할 때는 I'm sorry. 라고 해."); } },

  { re:/잘 ?자|굿나잇/, f:function(t){
      return res(t, "Good night!", "잘 자!", [w("good night","잘 자","🌙"), w("sleep","자다","😴")], "잘 때는 Good night! 라고 해."); } },

  { re:/배고파|배고프/, f:function(t){
      return res(t, "I'm hungry.", "배고파요", [w("hungry","배고픈","🍚")], "배고플 때는 I'm hungry. 라고 해."); } },

  { re:/목말라|목마르/, f:function(t){
      return res(t, "I'm thirsty.", "목말라요", [w("thirsty","목마른","💧")], "목마를 때는 I'm thirsty. 라고 해."); } },

  { re:/졸려|졸리/, f:function(t){
      return res(t, "I'm sleepy.", "졸려요", [w("sleepy","졸린","😴")], "졸릴 때는 I'm sleepy. 라고 해."); } },

  { re:/화나|화가 ?나|짜증/, f:function(t){
      return res(t, "I'm angry.", "화나요", [w("angry","화난","😠")], "화날 때는 I'm angry. 라고 해."); } },

  { re:/행복|기뻐|기분 ?좋/, f:function(t){
      return res(t, "I'm happy.", "행복해요", [w("happy","행복한","😊")], "기분이 좋을 때는 I'm happy. 라고 해."); } },

  { re:/슬퍼|속상/, f:function(t){
      return res(t, "I'm sad.", "슬퍼요", [w("sad","슬픈","😢")], "슬플 때는 I'm sad. 라고 해."); } },

  { re:/무서워|무섭/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? theN(cap(n.en)) + " is scary." : "I'm scared.", n ? josa(n.ko, "은/는") + " 무서워" : "무서워요",
        [w("scary","무서운","😱"), n ? w(n.en,n.ko,n.emoji) : w("scared","무서운","😨")], "무서울 때는 scary를 써요."); } },

  { re:/좋은 ?생각|굿 ?아이디어/, f:function(t){
      return res(t, "Good idea!", "좋은 생각이야!", [w("good","좋은","👍"), w("idea","생각","💡")], "좋은 생각이 떠오르면 Good idea!"); } },

  { re:/도와줘|도와 ?줘|헬프/, f:function(t){
      return res(t, "Help me, please.", "도와줘요", [w("help","돕다","🤲"), w("please","부탁해","🙏")], "도움을 청할 때는 Help me, please."); } },

  { re:/같이|함께/, f:function(t){
      var v = findVerb(t);
      return res(t, v ? "Let's " + v.en + " together!" : "Let's play together!", v ? "같이 " + stemV(v.ko) + "자!" : "같이 놀자!",
        [w("together","함께","👫"), w("let's","~하자","🙌")], "같이 하자고 할 때는 Let's ~ together!"); } },

  { re:/더 ?줘|하나 ?더|더/, f:function(t){
      return res(t, "More, please.", "더 주세요", [w("more","더","➕"), w("please","부탁해","🙏")], "더 달라고 할 때는 More, please."); } },

  { re:/다시/, f:function(t){
      return res(t, "Again, please.", "다시 해 주세요", [w("again","다시","🔁"), w("please","부탁해","🙏")], "한 번 더 할 때는 Again, please."); } },

  { re:/조심/, f:function(t){
      return res(t, "Be careful!", "조심해!", [w("careful","조심스러운","⚠️")], "조심하라고 할 때는 Be careful!"); } },

  { re:/멈춰|그만|스톱/, f:function(t){
      return res(t, "Stop!", "멈춰!", [w("stop","멈추다","✋")], "멈추라고 할 때는 Stop!"); } },

  { re:/빨리/, f:function(t){
      return res(t, "Hurry up!", "서둘러!", [w("hurry","서두르다","🏃"), w("fast","빠르게","⚡")], "서두를 때는 Hurry up!"); } },

  { re:/사랑해/, f:function(t){
      return res(t, "I love you.", "사랑해요", [w("love","사랑하다","❤️"), w("you","너","🙋")], "사랑할 때는 I love you."); } },

  { re:/나도/, f:function(t){
      return res(t, "Me too!", "나도!", [w("me too","나도","🙋")], "같다고 할 때는 Me too!"); } },

  { re:/진짜|정말/, f:function(t){
      return res(t, "Really?", "정말?", [w("really","정말","😲")], "놀랄 때는 Really?"); } },

  { re:/이거|이것/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? "This is " + art(n.en) + "." : "What is this?", n ? "이건 " + copula(n.ko) : "이게 뭐야?",
        [w("this","이것","👉"), n ? w(n.en,n.ko,n.emoji) : w("what","무엇","❓")], "가까운 것을 말할 때는 This is ~"); } },

  { re:/저거|저것/, f:function(t){
      var n = findNoun(t);
      return res(t, n ? "That is " + art(n.en) + "." : "Look at that!", n ? "저건 " + copula(n.ko) : "저걸 봐!",
        [w("that","저것","👈"), n ? w(n.en,n.ko,n.emoji) : w("look","보다","👀")], "멀리 있는 것은 That is ~"); } },

  { re:/내 ?거|내꺼|내 ?것/, f:function(t){
      return res(t, "It's mine.", "내 거야", [w("mine","내 것","🙋")], "내 것이라고 할 때는 It's mine."); } },

  { re:/해 ?줄래|줄래|해 ?줄 ?수|줄 ?수 ?있/, f:function(t){
      var v = findVerb(t) || { en:"help", ko:"돕다", emoji:"🤲" };
      return res(t, "Can you " + v.en + "?", v.ko + " 줄 수 있어?", [w("can you","~해 줄래","🙏"), w(v.en,v.ko,v.emoji)], "부탁할 때는 Can you ~? 를 써요."); } },

  { re:/하고 ?있어|하는 ?중/, f:function(t){
      var v = findVerb(t) || { en:"play", ko:"놀다", emoji:"🎮", ing:"playing" };
      return res(t, "I'm " + (v.ing || v.en + "ing") + ".", v.ko + "는 중이야", [w("now","지금","⏰"), w(v.en,v.ko,v.emoji)], "지금 하는 일은 I'm ~ing 로 말해요."); } },

  { re:/먹었|먹었어|먹었다/, f:function(t){
      return res(t, "I ate.", "먹었어", [w("ate","먹었다","🍚")], "이미 한 일은 과거형 ate를 써요."); } },

  { re:/어때|어떠/, f:function(t){
      return res(t, "How about this?", "이거 어때?", [w("how about","~는 어때","🤔"), w("this","이것","👉")], "물어볼 때는 How about ~?"); } },

  { re:/재미있|재밌|신나/, f:function(t){
      return res(t, "It's fun!", "재미있어!", [w("fun","재미있는","🎉")], "재미있을 때는 It's fun!"); } },

  { re:/멋있|멋져|멋진/, f:function(t){
      return res(t, "It's cool!", "멋져!", [w("cool","멋진","😎")], "멋질 때는 It's cool!"); } },

  { re:/귀엽/, f:function(t){
      return res(t, "It's cute!", "귀여워!", [w("cute","귀여운","🥰")], "귀여울 때는 It's cute!"); } },

  { re:/크다|커|큰/, f:function(t){
      return res(t, "It's big.", "커요", [w("big","큰","🐘")], "크기를 말할 때는 It's big."); } },

  { re:/작다|작아|작은/, f:function(t){
      return res(t, "It's small.", "작아요", [w("small","작은","🐜")], "작을 때는 It's small."); } },

  { re:/빠르|빨라/, f:function(t){
      return res(t, "It's fast.", "빨라요", [w("fast","빠른","⚡")], "빠를 때는 It's fast."); } },

  { re:/느리|느려/, f:function(t){
      return res(t, "It's slow.", "느려요", [w("slow","느린","🐢")], "느릴 때는 It's slow."); } },

  { re:/강하|힘이 ?세|세다/, f:function(t){
      return res(t, "It's strong.", "힘이 세요", [w("strong","힘이 센","💪")], "힘이 셀 때는 It's strong."); } },

  { re:/예쁘|이쁘/, f:function(t){
      return res(t, "It's pretty.", "예뻐요", [w("pretty","예쁜","🌸")], "예쁠 때는 It's pretty."); } },

  { re:/하나|둘|셋|넷|다섯/, f:function(t){
      return res(t, "One, two, three!", "하나, 둘, 셋!", [w("one","하나","1️⃣"), w("two","둘","2️⃣"), w("three","셋","3️⃣")], "숫자를 영어로 세어 보자!"); } },

  { re:/노래/, f:function(t){
      return res(t, "Let's sing a song!", "노래 부르자!", [w("sing","노래하다","🎤"), w("song","노래","🎵")], "같이 노래할 때는 Let's sing!"); } },

  { re:/이야기|얘기/, f:function(t){
      return res(t, "Tell me a story, please.", "이야기 해 줘", [w("story","이야기","📖"), w("tell","말하다","🗣️")], "이야기를 부탁할 때는 Tell me a story."); } },

  { re:/놀자/, f:function(t){
      return res(t, "Let's play!", "놀자!", [w("play","놀다","🎮"), w("let's","~하자","🙌")], "같이 놀자고 할 때는 Let's play!"); } },

  { re:/친구/, f:function(t){
      return res(t, "Let's be friends!", "친구하자!", [w("friend","친구","👫")], "친구가 되고 싶을 때는 Let's be friends!"); } },

  { re:/엄마/, f:function(t){
      return res(t, "I love my mom.", "엄마를 사랑해", [w("mom","엄마","👩"), w("love","사랑하다","❤️")], "엄마를 말할 때는 my mom."); } },

  { re:/아빠/, f:function(t){
      return res(t, "I love my dad.", "아빠를 사랑해", [w("dad","아빠","👨"), w("love","사랑하다","❤️")], "아빠를 말할 때는 my dad."); } },

  { re:/선생님/, f:function(t){
      return res(t, "Hello, teacher!", "선생님, 안녕하세요!", [w("teacher","선생님","👩‍🏫")], "선생님께는 Hello, teacher!"); } },

  { re:/잘했어|잘 ?했/, f:function(t){
      return res(t, "Good job!", "잘했어!", [w("good job","잘했어","👏")], "칭찬할 때는 Good job!"); } },

  { re:/주세요|주시겠어요|줄래요/, f:function(t){
      return res(t, "Can I have it, please?", "이거 주세요", [w("can I","~해도 돼요","🙋"), w("please","부탁해","🙏")], "무언가 달라고 할 때는 Can I have it, please?"); } }
];

/* 마지막 단계: 명사·동사·형용사 하나만 말했을 때 */
function coachFallback(t, hintText){
  var n = findNoun(t), v = findVerb(t), a = findAdj(t), c = findColor(t);
  if (n && v) return res(t, cap(n.en) + " " + verbS(v) + ".", josa(n.ko, "이/가") + " " + v.ko, [w(v.en,v.ko,v.emoji), w(n.en,n.ko,n.emoji)], "문장으로 만들 때는 주어 + 동사 순서로 말해요.");
  if (n && a) return res(t, theN(cap(n.en)) + " is " + a.en + ".", josa(n.ko, "은/는") + " " + a.ko, [w(a.en,a.ko,a.emoji), w(n.en,n.ko,n.emoji)], "It is ~ 로도 말할 수 있어요.");
  if (n && t.replace(n.re, "").replace(/[은는이가을를도좀요!~.,? ]/g,"").length <= 2)
    return res(t, "It's " + art(n.en) + ".", copula(n.ko), [w(n.en,n.ko,n.emoji)], "명사만 말했을 때는 It's a ~ 로 문장을 만들어요.");
  if (v && t.replace(v.re, "").replace(/[은는이가을를도좀요!~.,? ]/g,"").length <= 2)
    return res(t, cap(v.en) + "!", v.ko + "!", [w(v.en,v.ko,v.emoji)], "동작만 말할 때는 그대로 말해도 좋아요!");
  if (c) return res(t, "It's " + c.en + ".", c.ko + "이에요", [w(c.en,c.ko,c.emoji)], "색은 It's ~ 로 말해요.");
  if (a) return res(t, "It's " + a.en + ".", a.ko, [w(a.en,a.ko,a.emoji)], "It's ~ 로 말해 보자.");
  if (n) return res(t, "I like " + plural(n.en) + ".", josa(n.ko, "을/를") + " 좋아해요", [w("I like","나는 좋아해","💛"), w(n.en,n.ko,n.emoji)], "좋아하는 것부터 말해 보자.");
  return { tip: "선생님이 잘 못 알아들었어. 이렇게 말해볼까? 😊", en: hintText || "Can you say it again?", ko: "다시 한 번 말해 줄래?", words: [w("again","다시","🔁"), w("please","부탁해","🙏")] };
}

function coach(text){
  var t = String(text || "").replace(/\s+/g, " ").trim();
  for (var i=0;i<RULES.length;i++){ if (RULES[i].re.test(t)) { try { return RULES[i].f(t); } catch(e){ break; } } }
  return coachFallback(t);
}
var PATTERN_COUNT = RULES.length + NOUNS.length + VERBS.length + ADJS.length + COLORS.length;

/* =========================================================
   5. 상태 & 저장
   ========================================================= */
function defaultState(){
  return {
    v:1, level:2, autoRead:true, koView:true,
    topic:"toy", mode:"topic",
    words: wordsFromPreset(0), wordSet:0,
    interests:{}, learned:[],
    ai:{ provider:"none", key:"", model:"" },
    settings:{ dashUrl:"./index.html" }
  };
}
function loadState(){
  var d = defaultState();
  var s = readJSON(STORE_KEY, null);
  if (!s || typeof s !== "object") return d;
  d.level = [1,2,3].indexOf(s.level) >= 0 ? s.level : 2;
  d.autoRead = s.autoRead !== false;
  d.koView = s.koView !== false;
  d.topic = (s.topic && SCEN[s.topic]) ? s.topic : "toy";
  d.mode = s.mode === "interest" ? "interest" : "topic";
  d.wordSet = (typeof s.wordSet === "number") ? s.wordSet : 0;
  if (Array.isArray(s.words) && s.words.length === 10 && s.words.every(function(x){ return x && x.en; })) {
    d.words = s.words.map(function(x){ return { en:String(x.en).slice(0,24), ko:String(x.ko||"").slice(0,24) }; });
  }
  if (s.interests && typeof s.interests === "object") d.interests = s.interests;
  if (Array.isArray(s.learned)) d.learned = s.learned.slice(-400);
  if (s.ai && typeof s.ai === "object") d.ai = { provider:s.ai.provider || "none", key:s.ai.key || "", model:s.ai.model || "" };
  if (s.settings && typeof s.settings === "object") d.settings.dashUrl = s.settings.dashUrl || "./index.html";
  return d;
}
var state = loadState();
/* 저장된 구모델 gemini-2.0-flash는 종료됐으므로 새 기본 모델로 올린다 */
if (/^gemini-2\.0-flash/i.test(String((state.ai && state.ai.model) || ""))) state.ai.model = GEMINI_DEFAULT;
var TODAY = dateKey();
var cur = { type:"topic", id:state.topic, step:0, steps:(SCEN[state.topic] || SCEN.toy).steps };
var LOG = [];
var lastCoach = null;
var hintOpen = false;
var dashStars = { total:0 };
var dashLedger = {};

function save(){
  writeJSON(STORE_KEY, {
    v:1, level:state.level, autoRead:state.autoRead, koView:state.koView,
    topic:state.topic, mode:state.mode, words:state.words, wordSet:state.wordSet,
    interests:state.interests, learned:state.learned, ai:state.ai, settings:state.settings,
    session:{ type:cur.type, id:cur.id, step:cur.step, log:LOG.slice(-40), lastCoach:lastCoach }
  });
}

/* =========================================================
   6. 엘리먼트
   ========================================================= */
var el = {};
["bubble","bubbleEn","bubbleKo","aiBadge","log","logEmpty","hints","answerInput","coach","coachEmpty","coachKo",
 "scEn","scKo","scSpeak","scSlow","scSave","coachWords","helpNote","dashStarNum","learnNum","learnPill",
 "finishBtn","finishLabel","finishPts","topics","icTop","icDesc","icChips","btnInterest","wwGrid",
 "dashLink","toast","wwProg","wwCount","autoRead","levelBar","settingsModal","wordsModal","learnModal","learnList","learnTotal",
 "aiProvider","aiKey","aiModel","engineInfo","dashUrl","btnSettings","btnEditWords","wordEditGrid",
 "btnPreset","btnSaveWords","btnSaveSettings","btnResetTalk","btnMicEn","btnMicKo","btnHint","btnSend",
 "btnSpeak","btnSlow","btnKo","scSpeak","scSlow","scSave"].forEach(function(id){ el[id] = $(id); });

/* =========================================================
   7. 대시보드 별 연동 (yuli.stars.v2 / yuli.starledger.v2)
   ========================================================= */
function dailyKey(){ return TODAY + "|eng|daily"; }
function wordKey(en){ return TODAY + "|eng|word:" + String(en).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }

function readDash(){
  var st = readJSON(DASH_STARS, null) || { total:0 };
  var led = readJSON(DASH_LEDGER, null) || {};
  if (typeof st.total !== "number" || !isFinite(st.total)) st.total = 0;
  st.total = Math.max(0, Math.round(st.total));
  if (!led || typeof led !== "object" || Array.isArray(led)) led = {};
  return { st:st, led:led };
}
function writeDash(st, led){
  try {
    localStorage.setItem(DASH_STARS, JSON.stringify(st));
    localStorage.setItem(DASH_LEDGER, JSON.stringify(led));
    return true;
  } catch(e){ return false; }
}
function awardEng(id, n){
  var d = readDash();
  if (d.led[id]) return false;
  d.led[id] = n;
  d.st.total = Math.max(0, d.st.total + n);
  writeDash(d.st, d.led);
  return true;
}
function revokeEng(id){
  var d = readDash();
  if (!d.led[id]) return false;
  var n = d.led[id];
  delete d.led[id];
  d.st.total = Math.max(0, d.st.total - n);
  writeDash(d.st, d.led);
  return true;
}
function refreshDash(){
  var d = readDash();
  dashStars = d.st; dashLedger = d.led;
  el.dashStarNum.textContent = d.st.total;
  var done = !!d.led[dailyKey()];
  el.finishBtn.classList.toggle("done", done);
  el.finishLabel.textContent = done ? "✅ 오늘 영어 완료!" : "🎉 오늘 영어 완료";
  el.finishPts.textContent = done ? "(+2⭐)" : "+2⭐";
  renderWords();
  updateDashLink();
}
function popDashStars(){
  el.dashStarNum.parentNode.classList.remove("pop");
  void el.dashStarNum.parentNode.offsetWidth;
  el.dashStarNum.parentNode.classList.add("pop");
}
function updateDashLink(){
  var raw = state.settings.dashUrl || "./index.html";
  var u;
  try { u = new URL(raw, location.href); } catch(e){ u = new URL("./index.html", location.href); }
  var n = dashLedger[dailyKey()];
  if (n) { u.searchParams.set("eng_done", TODAY); u.searchParams.set("stars", String(n)); }
  else { u.searchParams.delete("eng_done"); u.searchParams.delete("stars"); }
  el.dashLink.setAttribute("href", u.href);
}
function toggleDaily(){
  if (dashLedger[dailyKey()]) {
    revokeEng(dailyKey());
    toast("오늘 영어 완료를 취소했어요. 다시 누르면 또 받을 수 있어요!");
  } else {
    if (awardEng(dailyKey(), 2)) { toast("🎉 오늘 영어 완료! 별 2개를 받았어!"); popDashStars(); confetti(); noteAtt("talk"); }
  }
  refreshDash();
  save();
}
function toggleWord(i){
  var wd = state.words[i];
  if (!wd) return;
  var key = wordKey(wd.en);
  if (dashLedger[key]) {
    revokeEng(key);
    toast("'" + wd.en + "' 체크를 풀었어요");
  } else if (awardEng(key, 1)) {
    toast("'" + wd.en + "' 외웠어요! ⭐ +1");
    popDashStars();
    noteAtt("words");
  }
  refreshDash();
}
function confetti(){
  var emojis = ["⭐","🎉","✨","🌟","🎊"];
  for (var i=0;i<12;i++){
    (function(i){
      var s = document.createElement("span");
      s.className = "confetti";
      s.textContent = emojis[i % emojis.length];
      s.style.left = (44 + Math.random()*12) + "vw";
      s.style.top = "38vh";
      s.style.setProperty("--dx", (Math.random()*36-18) + "vw");
      s.style.setProperty("--dy", (-12 - Math.random()*22) + "vh");
      s.style.setProperty("--rot", (Math.random()*360-180) + "deg");
      document.body.appendChild(s);
      setTimeout(function(){ if (s.parentNode) s.parentNode.removeChild(s); }, 1000);
    })(i);
  }
}

/* =========================================================
   8. 이번 주 단어 (그림 플래시카드)
   ========================================================= */
var CARD_PALETTES = [
  ["#f2faff","#ddf1fe","#b3ddf4","#1a739f"],
  ["#f1fdf7","#d9f7e8","#a4e3c4","#12784f"],
  ["#fffdf3","#fff4d3","#f2d992","#96660b"],
  ["#fff6f1","#ffe7dc","#f5c1ad","#a94a30"],
  ["#f9f4ff","#ece2ff","#cbb6f7","#5f3fae"],
  ["#fff4f9","#ffe4ee","#f6bed5","#a83564"],
  ["#f1fdfd","#d7f6f7","#a3e3e7","#157580"],
  ["#fffef4","#fff8d8","#ecdfa0","#86700a"],
  ["#f3f8ff","#e2edfe","#b7d0f6","#2a5fa6"],
  ["#f7fdf4","#e6f8db","#b3e3a2","#3b7a24"]
];

/* 미등록 단어용 기본 그림 */
var ART_FALLBACK =
  '<rect x="18" y="24" width="64" height="56" rx="11" fill="#ffffff" stroke="#cfe3f0" stroke-width="3"/>'
+ '<rect x="18" y="24" width="64" height="12" rx="6" fill="#eaf6ff"/>'
+ '<text x="50" y="64" text-anchor="middle" font-family="sans-serif" font-size="25" font-weight="900" fill="#5cb4e6">ABC</text>'
+ '<circle cx="30" cy="30" r="2.6" fill="#ff9db0"/><circle cx="38" cy="30" r="2.6" fill="#ffd166"/><circle cx="46" cy="30" r="2.6" fill="#8fe0bd"/>';

/* 단어 → 그림 (인라인 SVG, viewBox 0 0 100 100) */
var WORD_ART = {
robot:'<ellipse cx="50" cy="88" rx="24" ry="4.5" fill="#bcd8ea" opacity=".45"/>'
+'<path d="M50 20v-7" stroke="#7fb9e6" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="10" r="6.5" fill="#ffcf5c"/>'
+'<rect x="19" y="34" width="8" height="16" rx="4" fill="#83c1e9"/><rect x="73" y="34" width="8" height="16" rx="4" fill="#83c1e9"/>'
+'<rect x="26" y="22" width="48" height="40" rx="14" fill="#a8d8f7"/>'
+'<circle cx="40" cy="40" r="6.5" fill="#2c4d66"/><circle cx="60" cy="40" r="6.5" fill="#2c4d66"/>'
+'<circle cx="42" cy="37.5" r="2.1" fill="#fff"/><circle cx="62" cy="37.5" r="2.1" fill="#fff"/>'
+'<path d="M42 50q8 7 16 0" stroke="#2c4d66" stroke-width="3.4" fill="none" stroke-linecap="round"/>'
+'<rect x="33" y="64" width="34" height="22" rx="9" fill="#7fd3b0"/><circle cx="50" cy="75" r="5" fill="#ffd166"/>',

transform:'<path d="M20 50A30 30 0 0 1 80 50" fill="none" stroke="#37bd8b" stroke-width="7" stroke-linecap="round"/>'
+'<path d="M74 42h12L80 56z" fill="#37bd8b"/>'
+'<path d="M80 50A30 30 0 0 1 20 50" fill="none" stroke="#ffa73d" stroke-width="7" stroke-linecap="round"/>'
+'<path d="M26 58H14L20 44z" fill="#ffa73d"/>'
+'<rect x="34" y="38" width="32" height="24" rx="6" fill="#8ec9f0"/><rect x="34" y="30" width="32" height="12" rx="6" fill="#bce2f8"/>'
+'<circle cx="43" cy="50" r="2.6" fill="#22506e"/><circle cx="57" cy="50" r="2.6" fill="#22506e"/>',

toy:'<circle cx="29" cy="30" r="11" fill="#c98a5a"/><circle cx="71" cy="30" r="11" fill="#c98a5a"/>'
+'<circle cx="29" cy="30" r="5.5" fill="#f2d2b0"/><circle cx="71" cy="30" r="5.5" fill="#f2d2b0"/>'
+'<circle cx="50" cy="56" r="27" fill="#d99a68"/>'
+'<ellipse cx="50" cy="66" rx="14" ry="11" fill="#f7e0c4"/>'
+'<ellipse cx="50" cy="60" rx="4.6" ry="3.4" fill="#6b4023"/>'
+'<path d="M50 63v3M50 66q-4 4-8 1M50 66q4 4 8 1" stroke="#6b4023" stroke-width="2.2" fill="none" stroke-linecap="round"/>'
+'<circle cx="40" cy="51" r="3.6" fill="#3b2a1e"/><circle cx="60" cy="51" r="3.6" fill="#3b2a1e"/>'
+'<circle cx="37" cy="63" r="5" fill="#f4a08f" opacity=".5"/><circle cx="63" cy="63" r="5" fill="#f4a08f" opacity=".5"/>',

blocks:'<ellipse cx="50" cy="86" rx="30" ry="4" fill="#bcd8ea" opacity=".35"/>'
+'<rect x="16" y="58" width="26" height="22" rx="4" fill="#ff8f7a"/>'
+'<rect x="20" y="52" width="8" height="8" rx="2.5" fill="#ff8f7a"/><rect x="30" y="52" width="8" height="8" rx="2.5" fill="#ff8f7a"/>'
+'<rect x="44" y="58" width="26" height="22" rx="4" fill="#6cc5f2"/>'
+'<rect x="48" y="52" width="8" height="8" rx="2.5" fill="#6cc5f2"/><rect x="58" y="52" width="8" height="8" rx="2.5" fill="#6cc5f2"/>'
+'<rect x="30" y="30" width="26" height="22" rx="4" fill="#ffd166"/>'
+'<rect x="34" y="24" width="8" height="8" rx="2.5" fill="#ffd166"/><rect x="44" y="24" width="8" height="8" rx="2.5" fill="#ffd166"/>',

giant:'<ellipse cx="52" cy="90" rx="26" ry="4" fill="#bcd8ea" opacity=".4"/>'
+'<rect x="17" y="76" width="4.6" height="12" rx="2" fill="#8a5a3a"/>'
+'<circle cx="19.3" cy="70" r="7.5" fill="#6ecf8e"/>'
+'<rect x="43" y="72" width="8" height="15" rx="4" fill="#5fae8c"/><rect x="56" y="72" width="8" height="15" rx="4" fill="#5fae8c"/>'
+'<path d="M40 58L30 70M65 58l10 12" stroke="#8fd0b0" stroke-width="5.4" stroke-linecap="round"/>'
+'<rect x="38" y="54" width="28" height="24" rx="11" fill="#8fd0b0"/>'
+'<circle cx="52" cy="36" r="20" fill="#9be0b8"/>'
+'<circle cx="32" cy="36" r="5.4" fill="#7ccfa2"/><circle cx="72" cy="36" r="5.4" fill="#7ccfa2"/>'
+'<circle cx="45" cy="33" r="2.8" fill="#1f5a3e"/><circle cx="59" cy="33" r="2.8" fill="#1f5a3e"/>'
+'<path d="M45 43q7 7 14 0" stroke="#1f5a3e" stroke-width="3" fill="none" stroke-linecap="round"/>'
+'<circle cx="38" cy="41" r="3.4" fill="#ffb3a8" opacity=".5"/><circle cx="66" cy="41" r="3.4" fill="#ffb3a8" opacity=".5"/>',

fast:'<path d="M58 10L34 50h14l-6 34 26-44H54z" fill="#ffc247" stroke="#eda32a" stroke-width="1.6" stroke-linejoin="round"/>'
+'<path d="M22 30h12M15 45h11M23 60h9" stroke="#8ecdf0" stroke-width="5.5" stroke-linecap="round"/>',

friend:'<path d="M19 82q2-14 15-14t15 14z" fill="#8ecdf0"/>'
+'<path d="M51 82q2-14 15-14t15 14z" fill="#f7b2c8"/>'
+'<circle cx="34" cy="50" r="15" fill="#ffd9bd"/><circle cx="66" cy="50" r="15" fill="#ffd9bd"/>'
+'<path d="M19 50a15 15 0 0 1 30 0z" fill="#5b4232"/><path d="M51 50a15 15 0 0 1 30 0z" fill="#8a5a3a"/>'
+'<circle cx="30" cy="54" r="2.6" fill="#3b2a1e"/><circle cx="39" cy="54" r="2.6" fill="#3b2a1e"/>'
+'<circle cx="61" cy="54" r="2.6" fill="#3b2a1e"/><circle cx="70" cy="54" r="2.6" fill="#3b2a1e"/>'
+'<path d="M30 61q4 4 8 0M62 61q4 4 8 0" stroke="#3b2a1e" stroke-width="2.2" fill="none" stroke-linecap="round"/>'
+'<path d="M50 14c-3-5-11-4-11 2 0 4 6 7 11 11 5-4 11-7 11-11 0-6-8-7-11-2z" fill="#ff8f9e"/>',

play:'<circle cx="50" cy="52" r="28" fill="#ffd166"/>'
+'<path d="M23 44q27 17 54 0" stroke="#ffffff" stroke-width="8" fill="none" opacity=".85" stroke-linecap="round"/>'
+'<path d="M25 66q25 15 50 0" stroke="#ffffff" stroke-width="8" fill="none" opacity=".85" stroke-linecap="round"/>'
+'<circle cx="50" cy="52" r="28" fill="none" stroke="#eab733" stroke-width="2.4"/>'
+'<circle cx="16" cy="24" r="3.6" fill="#ff8f7a"/><circle cx="84" cy="32" r="3" fill="#8ecdf0"/><circle cx="78" cy="16" r="2.4" fill="#9b7bf0"/>',

awesome:'<path d="M36 18h28v16a14 14 0 0 1-28 0z" fill="#ffd166"/>'
+'<path d="M36 22h-8a8 8 0 0 0 8 10M64 22h8a8 8 0 0 1-8 10" fill="none" stroke="#e8b03a" stroke-width="3.6" stroke-linecap="round"/>'
+'<rect x="46" y="46" width="8" height="14" rx="3" fill="#e8b03a"/>'
+'<rect x="33" y="60" width="34" height="11" rx="5" fill="#ffd166"/>'
+'<rect x="28" y="71" width="44" height="9" rx="4.5" fill="#e8b03a"/>'
+'<path d="M50 22l2.6 6 6 2.6-6 2.6-2.6 6-2.6-6-6-2.6 6-2.6z" fill="#fff6d8"/>'
+'<circle cx="20" cy="40" r="3.4" fill="#ff9db0"/><circle cx="82" cy="34" r="2.8" fill="#8ecdf0"/><circle cx="78" cy="14" r="2.2" fill="#9b7bf0"/>',

happy:'<g stroke="#ffc247" stroke-width="5" stroke-linecap="round"><path d="M50 8v10M50 82v10M8 50h10M82 50h10M20 20l7 7M73 73l7 7M80 20l-7 7M27 73l-7 7"/></g>'
+'<circle cx="50" cy="50" r="26" fill="#ffd166"/>'
+'<circle cx="41" cy="46" r="3.4" fill="#8a5c00"/><circle cx="59" cy="46" r="3.4" fill="#8a5c00"/>'
+'<path d="M40 57q10 10 20 0" stroke="#8a5c00" stroke-width="3.4" fill="none" stroke-linecap="round"/>'
+'<circle cx="33" cy="57" r="4" fill="#ffab8f" opacity=".7"/><circle cx="67" cy="57" r="4" fill="#ffab8f" opacity=".7"/>',

dinosaur:'<ellipse cx="50" cy="88" rx="27" ry="4" fill="#bcd8ea" opacity=".4"/>'
+'<path d="M26 66q-12 3-17 12 12 2 19-4z" fill="#5cba86"/>'
+'<rect x="34" y="72" width="10" height="15" rx="5" fill="#5cba86"/><rect x="50" y="72" width="10" height="15" rx="5" fill="#5cba86"/>'
+'<ellipse cx="46" cy="62" rx="24" ry="17" fill="#6ed49a"/>'
+'<rect x="58" y="28" width="13" height="30" rx="6.5" fill="#6ed49a"/>'
+'<ellipse cx="65" cy="24" rx="13" ry="10" fill="#6ed49a"/>'
+'<path d="M38 46l5-9 5 9zM50 44l5-9 5 9z" fill="#37b47a"/>'
+'<circle cx="69" cy="21" r="2.6" fill="#1f4a34"/>'
+'<path d="M70 28q4 3 8 0" stroke="#1f4a34" stroke-width="2" fill="none" stroke-linecap="round"/>'
+'<circle cx="31" cy="60" r="3" fill="#3f9c72" opacity=".6"/>',

space:'<circle cx="50" cy="50" r="32" fill="#2b3f7a"/>'
+'<circle cx="34" cy="36" r="3.6" fill="#ffffff" opacity=".9"/><circle cx="62" cy="30" r="2.6" fill="#ffe08a"/>'
+'<circle cx="29" cy="58" r="2.4" fill="#ffffff" opacity=".8"/><circle cx="66" cy="48" r="2" fill="#ffffff" opacity=".8"/>'
+'<path d="M46 26l3.2 8.2 8.2 3.2-8.2 3.2L46 49l-3.2-8.4-8.2-3.2 8.2-3.2z" fill="#ffe08a"/>'
+'<circle cx="62" cy="68" r="9" fill="#ffb3c7"/>'
+'<ellipse cx="62" cy="68" rx="15" ry="5" fill="none" stroke="#ffd8e2" stroke-width="2.4" transform="rotate(-20 62 68)"/>',

rocket:'<path d="M36 40l-10 18 10-3z" fill="#ff8f7a"/><path d="M64 40l10 18-10-3z" fill="#ff8f7a"/>'
+'<path d="M50 8c10 11 14 26 14 40H36c0-14 4-29 14-40z" fill="#ffffff" stroke="#cfe3f0" stroke-width="1.6"/>'
+'<path d="M50 8c5 6 9 14 11 21H39c2-7 6-15 11-21z" fill="#ff8f7a"/>'
+'<circle cx="50" cy="40" r="6.6" fill="#8ecdf0"/><circle cx="50" cy="40" r="3.6" fill="#e6f6ff"/>'
+'<path d="M44 48h12c0 8-3 15-6 19-3-4-6-11-6-19z" fill="#ffc247"/>'
+'<circle cx="24" cy="70" r="2.6" fill="#8ecdf0"/><circle cx="78" cy="66" r="2" fill="#ff9db0"/>',

jump:'<ellipse cx="46" cy="88" rx="22" ry="4" fill="#bcd8ea" opacity=".4"/>'
+'<path d="M50 10v9M33 15v8M67 15v8" stroke="#ffc247" stroke-width="5" stroke-linecap="round"/>'
+'<path d="M30 80q-8 1-11 7" stroke="#5cba86" stroke-width="6" stroke-linecap="round" fill="none"/>'
+'<path d="M62 80q8 1 11 7" stroke="#5cba86" stroke-width="6" stroke-linecap="round" fill="none"/>'
+'<ellipse cx="46" cy="64" rx="21" ry="15" fill="#7fd6a0"/>'
+'<circle cx="35" cy="46" r="8.5" fill="#ffffff"/><circle cx="55" cy="46" r="8.5" fill="#ffffff"/>'
+'<circle cx="36" cy="47" r="4.2" fill="#1f5a3e"/><circle cx="54" cy="47" r="4.2" fill="#1f5a3e"/>'
+'<path d="M38 58q8 8 16 0" stroke="#1f5a3e" stroke-width="3" fill="none" stroke-linecap="round"/>',

strong:'<rect x="28" y="46" width="44" height="9" rx="4.5" fill="#93a5b6"/>'
+'<rect x="22" y="34" width="14" height="32" rx="6" fill="#5b7285"/>'
+'<rect x="64" y="34" width="14" height="32" rx="6" fill="#5b7285"/>'
+'<rect x="10" y="41" width="11" height="18" rx="5" fill="#44586a"/>'
+'<rect x="79" y="41" width="11" height="18" rx="5" fill="#44586a"/>'
+'<path d="M50 14l2.6 6.4 6.4 2.6-6.4 2.6L50 32l-2.6-6.4L41 23l6.4-2.6z" fill="#ffc247"/>'
+'<circle cx="20" cy="22" r="2.6" fill="#8ecdf0"/><circle cx="82" cy="24" r="2.2" fill="#ff9db0"/>',

puppy:'<path d="M26 34q-13 5-11 23 2 13 13 10z" fill="#c9855a"/>'
+'<path d="M74 34q13 5 11 23-2 13-13 10z" fill="#c9855a"/>'
+'<circle cx="50" cy="52" r="26" fill="#f3d3b3"/>'
+'<ellipse cx="50" cy="62" rx="15" ry="11" fill="#fff8ef"/>'
+'<ellipse cx="50" cy="55" rx="4.8" ry="3.6" fill="#4a332a"/>'
+'<path d="M50 59v3M50 62q-4 4-8 1M50 62q4 4 8 1" stroke="#4a332a" stroke-width="2.2" fill="none" stroke-linecap="round"/>'
+'<circle cx="39" cy="46" r="3.8" fill="#3b2a1e"/><circle cx="61" cy="46" r="3.8" fill="#3b2a1e"/>'
+'<path d="M46 70q4 6 8 0" stroke="#ff8f9e" stroke-width="3.4" fill="none" stroke-linecap="round"/>',

cute:'<path d="M50 84C26 68 18 55 18 42c0-11 9-18 18-18 7 0 12 4 14 9 2-5 7-9 14-9 9 0 18 7 18 18 0 13-8 26-32 42z" fill="#ff9db0"/>'
+'<circle cx="40" cy="44" r="3.4" fill="#7a2a44"/><circle cx="60" cy="44" r="3.4" fill="#7a2a44"/>'
+'<path d="M42 54q8 8 16 0" stroke="#7a2a44" stroke-width="3.2" fill="none" stroke-linecap="round"/>'
+'<circle cx="30" cy="54" r="4" fill="#ff6f8f" opacity=".45"/><circle cx="70" cy="54" r="4" fill="#ff6f8f" opacity=".45"/>'
+'<path d="M80 16l2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4 6-2.4z" fill="#ffd166"/>'
+'<circle cx="18" cy="62" r="2.6" fill="#ffd166"/>',

adventure:'<rect x="15" y="20" width="70" height="60" rx="9" fill="#fff4dd" stroke="#e8cf9f" stroke-width="2.6"/>'
+'<path d="M27 72q14-8 10-18t14-14" stroke="#37bd8b" stroke-width="3.4" fill="none" stroke-dasharray="5 5" stroke-linecap="round"/>'
+'<path d="M64 26l11 11M75 26L64 37" stroke="#ff6f6f" stroke-width="4.4" stroke-linecap="round"/>'
+'<circle cx="26" cy="34" r="6" fill="#8ecdf0"/><path d="M26 30v4l3 2" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
+'<circle cx="74" cy="72" r="3" fill="#ffd166"/>'
+'<path d="M20 46l4-7 4 7z" fill="#9bd4a0"/>',

sing:'<g fill="#9b7bf0"><rect x="40" y="26" width="5.4" height="42" rx="2.7"/><rect x="61" y="26" width="5.4" height="42" rx="2.7"/>'
+'<rect x="40" y="26" width="26.4" height="7" rx="3.2"/><ellipse cx="33" cy="68" rx="9.4" ry="7.2" transform="rotate(-16 33 68)"/>'
+'<ellipse cx="54" cy="68" rx="9.4" ry="7.2" transform="rotate(-16 54 68)"/></g>'
+'<circle cx="80" cy="20" r="3.4" fill="#ffd166"/><circle cx="16" cy="38" r="2.6" fill="#ff9db0"/>',

smile:'<circle cx="50" cy="50" r="30" fill="#ffd166"/>'
+'<circle cx="40" cy="43" r="4" fill="#6b5420"/><circle cx="60" cy="43" r="4" fill="#6b5420"/>'
+'<path d="M36 58q14 14 28 0" stroke="#6b5420" stroke-width="4" fill="none" stroke-linecap="round"/>'
+'<circle cx="30" cy="54" r="4.5" fill="#ffab8f" opacity=".6"/><circle cx="70" cy="54" r="4.5" fill="#ffab8f" opacity=".6"/>',

lego:'<rect x="14" y="46" width="72" height="32" rx="7" fill="#e8453c"/>'
+'<rect x="14" y="46" width="72" height="12" rx="6" fill="#f4675c"/>'
+'<rect x="19" y="36" width="12" height="12" rx="3" fill="#e8453c"/><rect x="38" y="36" width="12" height="12" rx="3" fill="#e8453c"/>'
+'<rect x="57" y="36" width="12" height="12" rx="3" fill="#e8453c"/><rect x="76" y="36" width="10" height="12" rx="3" fill="#e8453c"/>'
+'<path d="M22 54h56" stroke="#ffd0c9" stroke-width="3" stroke-linecap="round" opacity=".7"/>',

car:'<rect x="10" y="50" width="80" height="22" rx="9" fill="#ff6f61"/>'
+'<path d="M30 50l9-16h22l9 16z" fill="#ff9b8f"/>'
+'<path d="M37 47l6-10h8v10zM55 47v-10h7l6 10z" fill="#d7eefb"/>'
+'<circle cx="30" cy="72" r="9.5" fill="#3d4a55"/><circle cx="30" cy="72" r="4" fill="#cfdae2"/>'
+'<circle cx="70" cy="72" r="9.5" fill="#3d4a55"/><circle cx="70" cy="72" r="4" fill="#cfdae2"/>'
+'<circle cx="82" cy="58" r="3.4" fill="#fff2b8"/>',

build:'<rect x="26" y="20" width="36" height="17" rx="5" fill="#93a5b6" transform="rotate(18 44 28)"/>'
+'<rect x="46" y="34" width="10" height="46" rx="5" fill="#c98a5a" transform="rotate(18 51 57)"/>'
+'<rect x="20" y="70" width="22" height="14" rx="3" fill="#ffd166"/><rect x="24" y="64" width="8" height="7" rx="2" fill="#ffd166"/>'
+'<path d="M76 52l2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4 6-2.4z" fill="#8ecdf0"/>',

race:'<rect x="24" y="16" width="5" height="70" rx="2.5" fill="#8b9aa8"/>'
+'<path d="M29 20h46v32H29z" fill="#ffffff" stroke="#dbe6ef" stroke-width="2"/>'
+'<g fill="#33414d"><rect x="29" y="20" width="15.3" height="10.7"/><rect x="59.7" y="20" width="15.3" height="10.7"/>'
+'<rect x="44.3" y="30.7" width="15.3" height="10.7"/><rect x="29" y="41.4" width="15.3" height="10.7"/>'
+'<rect x="59.7" y="41.4" width="15.3" height="10.7"/></g>'
+'<ellipse cx="50" cy="89" rx="24" ry="4" fill="#bcd8ea" opacity=".45"/>',

red:'<rect x="38" y="16" width="24" height="52" rx="5" fill="#ef5350"/>'
+'<path d="M38 68h24L50 88z" fill="#d13b38"/>'
+'<rect x="38" y="16" width="24" height="7" rx="3.5" fill="#ff8a86"/>'
+'<rect x="38" y="34" width="24" height="18" fill="#ffffff" opacity=".85"/>'
+'<path d="M42 43h16" stroke="#ef5350" stroke-width="3" stroke-linecap="round"/>'
+'<circle cx="20" cy="34" r="3" fill="#ff9db0"/><circle cx="80" cy="56" r="2.6" fill="#ffd166"/>',

blue:'<rect x="38" y="16" width="24" height="52" rx="5" fill="#42a5f5"/>'
+'<path d="M38 68h24L50 88z" fill="#1e7fd1"/>'
+'<rect x="38" y="16" width="24" height="7" rx="3.5" fill="#8acbfb"/>'
+'<rect x="38" y="34" width="24" height="18" fill="#ffffff" opacity=".85"/>'
+'<path d="M42 43h16" stroke="#42a5f5" stroke-width="3" stroke-linecap="round"/>'
+'<circle cx="20" cy="34" r="3" fill="#8ecdf0"/><circle cx="80" cy="56" r="2.6" fill="#ffd166"/>',

yellow:'<rect x="38" y="16" width="24" height="52" rx="5" fill="#ffd166"/>'
+'<path d="M38 68h24L50 88z" fill="#e8b03a"/>'
+'<rect x="38" y="16" width="24" height="7" rx="3.5" fill="#ffe9ad"/>'
+'<rect x="38" y="34" width="24" height="18" fill="#ffffff" opacity=".85"/>'
+'<path d="M42 43h16" stroke="#e0a72c" stroke-width="3" stroke-linecap="round"/>'
+'<circle cx="20" cy="34" r="3" fill="#ffd166"/><circle cx="80" cy="56" r="2.6" fill="#8ecdf0"/>',

big:'<ellipse cx="50" cy="88" rx="30" ry="4" fill="#bcd8ea" opacity=".4"/>'
+'<rect x="30" y="68" width="12" height="20" rx="6" fill="#8faecb"/><rect x="52" y="68" width="12" height="20" rx="6" fill="#8faecb"/>'
+'<ellipse cx="46" cy="56" rx="26" ry="21" fill="#a9c4dc"/>'
+'<path d="M21 42q-8 3-5 11" stroke="#a9c4dc" stroke-width="4.4" stroke-linecap="round" fill="none"/>'
+'<path d="M58 38q-12-5-3 13 6 8 11 2z" fill="#90afcb"/>'
+'<circle cx="70" cy="42" r="17" fill="#b8d2e8"/>'
+'<path d="M79 52q12 6 4 24" stroke="#b8d2e8" stroke-width="11" stroke-linecap="round" fill="none"/>'
+'<circle cx="72" cy="38" r="2.8" fill="#41586e"/>'
+'<circle cx="83" cy="75" r="2" fill="#41586e" opacity=".45"/>',

small:'<ellipse cx="50" cy="88" rx="20" ry="3.5" fill="#bcd8ea" opacity=".4"/>'
+'<circle cx="33" cy="38" r="12" fill="#c9d3dd"/><circle cx="33" cy="38" r="6.6" fill="#f6c6d4"/>'
+'<circle cx="59" cy="36" r="12" fill="#c9d3dd"/><circle cx="59" cy="36" r="6.6" fill="#f6c6d4"/>'
+'<ellipse cx="46" cy="62" rx="20" ry="16" fill="#dbe4ec"/>'
+'<ellipse cx="46" cy="58" rx="17" ry="13" fill="#edf3f8"/>'
+'<circle cx="40" cy="55" r="2.6" fill="#3b4a58"/><circle cx="52" cy="55" r="2.6" fill="#3b4a58"/>'
+'<circle cx="46" cy="62" r="3" fill="#ff8f9e"/>'
+'<path d="M46 66q3 3 6 0" stroke="#8a97a4" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
+'<path d="M66 70q11 2 12 11" stroke="#c9d3dd" stroke-width="3.4" fill="none" stroke-linecap="round"/>',

fly:'<path d="M48 52q-16-20-32-13 3 15 21 19z" fill="#8ecdf0"/>'
+'<path d="M52 52q16-20 32-13-3 15-21 19z" fill="#a8dcf7"/>'
+'<ellipse cx="50" cy="60" rx="9" ry="15" fill="#5cb4e6"/>'
+'<circle cx="50" cy="40" r="8.5" fill="#5cb4e6"/>'
+'<path d="M53 38l11 3.4-11 3.4z" fill="#ffc247"/>'
+'<circle cx="47" cy="38" r="2.2" fill="#123a54"/>'
+'<path d="M42 74l-7 7M58 74l7 7" stroke="#5cb4e6" stroke-width="3.4" stroke-linecap="round"/>'
+'<circle cx="18" cy="72" r="2.4" fill="#cfe6f4"/><circle cx="84" cy="66" r="2" fill="#cfe6f4"/>',

star:'<path d="M50 12l11.5 24.5 26.5 3-19.5 18.5 5 26.5L50 71.5 26.5 84.5l5-26.5L12 39.5l26.5-3z" fill="#ffc247"/>'
+'<path d="M50 22l8 17 18 2-13 13 3.4 18L50 62 33 72l3.4-18-13-13 18-2z" fill="#ffe08a"/>'
+'<circle cx="78" cy="18" r="3.4" fill="#ffd166"/><circle cx="20" cy="22" r="2.6" fill="#8ecdf0"/>',

hero:'<path d="M50 12l30 10v26c0 20-14 32-30 40-16-8-30-20-30-40V22z" fill="#5aa9e6"/>'
+'<path d="M50 20l24 8v20c0 16-11 26-24 33-13-7-24-17-24-33V28z" fill="#8ecdf0"/>'
+'<path d="M50 32l5.5 11 12 1.6-8.8 8.4 2.2 12-10.9-6-10.9 6 2.2-12-8.8-8.4 12-1.6z" fill="#ffd166"/>',

magic:'<path d="M28 78L60 42" stroke="#b07a4a" stroke-width="7.5" stroke-linecap="round"/>'
+'<path d="M64 22l4.4 11 11 4.4-11 4.4-4.4 11-4.4-11-11-4.4 11-4.4z" fill="#ffd166"/>'
+'<circle cx="30" cy="32" r="3.4" fill="#ff9db0"/><circle cx="78" cy="62" r="3.8" fill="#8ecdf0"/><circle cx="22" cy="54" r="2.6" fill="#9b7bf0"/>',

train:'<rect x="20" y="60" width="60" height="8" rx="4" fill="#8fa3b3"/>'
+'<rect x="26" y="30" width="48" height="34" rx="8" fill="#5cb4e6"/>'
+'<rect x="32" y="36" width="24" height="16" rx="4" fill="#e6f6ff"/>'
+'<rect x="44" y="14" width="12" height="18" rx="4" fill="#3d90c9"/><rect x="41" y="10" width="18" height="6" rx="3" fill="#3d90c9"/>'
+'<circle cx="70" cy="44" r="5.4" fill="#ffd166"/>'
+'<circle cx="36" cy="72" r="9" fill="#465a6b"/><circle cx="36" cy="72" r="3.6" fill="#cfdae2"/>'
+'<circle cx="64" cy="72" r="9" fill="#465a6b"/><circle cx="64" cy="72" r="3.6" fill="#cfdae2"/>',

puzzle:'<path d="M26 26h18c0-7 4-11 9-11s9 4 9 11h8a6 6 0 0 1 6 6v16c-7 0-11 4-11 9s4 9 11 9v10a6 6 0 0 1-6 6H58c0-7-4-11-9-11s-9 4-9 11H26a6 6 0 0 1-6-6V70c7 0 11-4 11-9s-4-9-11-9V32a6 6 0 0 1 6-6z" fill="#9b7bf0"/>'
+'<path d="M26 26h18c0-7 4-11 9-11s9 4 9 11h8a6 6 0 0 1 6 6v16c-7 0-11 4-11 9s4 9 11 9" fill="none" stroke="#b79cf7" stroke-width="2.4"/>',

moon:'<path d="M60 12a36 36 0 1 0 0 72 30 30 0 0 1 0-72z" fill="#ffd166"/>'
+'<path d="M50 20a28 28 0 0 0 0 56 24 24 0 0 1 0-56z" fill="#ffe9a8"/>'
+'<path d="M76 22l2.6 6.4 6.4 2.6-6.4 2.6L76 40l-2.6-6.4L67 31l6.4-2.6z" fill="#8ecdf0"/>'
+'<circle cx="18" cy="26" r="2.6" fill="#ffc247"/><circle cx="84" cy="62" r="2.2" fill="#ff9db0"/>',

sun:'<g stroke="#ffc247" stroke-width="5" stroke-linecap="round"><path d="M50 8v12M50 80v12M8 50h12M80 50h12M20 20l8 8M72 72l8 8M80 20l-8 8M28 72l-8 8"/></g>'
+'<circle cx="50" cy="50" r="24" fill="#ffd166"/>'
+'<circle cx="50" cy="50" r="17" fill="#ffe08a"/>',

cat:'<path d="M28 46L22 20l20 11z" fill="#f0b77a"/><path d="M72 46l6-26-20 11z" fill="#f0b77a"/>'
+'<path d="M31 44l-3-15 12 7z" fill="#ffd7c0"/><path d="M69 44l3-15-12 7z" fill="#ffd7c0"/>'
+'<circle cx="50" cy="56" r="24" fill="#ffd9a8"/>'
+'<circle cx="41" cy="52" r="3.4" fill="#5a4319"/><circle cx="59" cy="52" r="3.4" fill="#5a4319"/>'
+'<path d="M50 60l3 3h-6z" fill="#ef8f9e"/>'
+'<path d="M50 63q-4 5-8 2M50 63q4 5 8 2" stroke="#5a4319" stroke-width="2.2" fill="none" stroke-linecap="round"/>'
+'<path d="M24 58h-9M25 64l-9 3M76 58h9M75 64l9 3" stroke="#e8bc8c" stroke-width="2.2" stroke-linecap="round"/>',

book:'<path d="M48 34q-13-8-26-5v38q13-3 26 5z" fill="#8ecdf0"/>'
+'<path d="M52 34q13-8 26-5v38q-13-3-26 5z" fill="#a8dcf7"/>'
+'<path d="M50 34v38" stroke="#4f9fd0" stroke-width="3" stroke-linecap="round"/>'
+'<path d="M29 44h14M29 52h14M29 60h10M57 44h14M57 52h14M57 60h10" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/>',

ball:'<circle cx="50" cy="52" r="28" fill="#ffffff" stroke="#dbe6ef" stroke-width="2.4"/>'
+'<path d="M50 34l10 7.4-3.8 12.2H44L40 41.4z" fill="#33414d"/>'
+'<path d="M22 42l9 4 2 10-7 5" fill="none" stroke="#33414d" stroke-width="2.6"/>'
+'<path d="M78 42l-9 4-2 10 7 5" fill="none" stroke="#33414d" stroke-width="2.6"/>'
+'<path d="M34 73l6-6h20l6 6" fill="none" stroke="#33414d" stroke-width="2.6"/>',

candy:'<path d="M30 54L12 40v28z" fill="#ffc0cf"/><path d="M70 54l18-14v28z" fill="#ffc0cf"/>'
+'<ellipse cx="50" cy="54" rx="21" ry="17" fill="#ff9db0"/>'
+'<path d="M42 42q9 12 0 24M58 42q-9 12 0 24" stroke="#ffffff" stroke-width="3" fill="none" opacity=".75" stroke-linecap="round"/>'
+'<circle cx="50" cy="54" r="4" fill="#ffffff" opacity=".6"/>',

icecream:'<path d="M34 52h32L50 88z" fill="#e8b06a"/>'
+'<path d="M39 60h22M44 70h12M48 80h4" stroke="#c9924f" stroke-width="2.2" stroke-linecap="round"/>'
+'<circle cx="50" cy="44" r="16" fill="#ffc0cf"/>'
+'<circle cx="42" cy="32" r="10" fill="#fff0f5"/>'
+'<circle cx="59" cy="31" r="9.6" fill="#b8ead0"/>'
+'<path d="M44 20l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#ffd166"/>',

flower:'<g fill="#ff9db0"><ellipse cx="50" cy="32" rx="9" ry="13"/><ellipse cx="50" cy="68" rx="9" ry="13"/>'
+'<ellipse cx="32" cy="50" rx="13" ry="9"/><ellipse cx="68" cy="50" rx="13" ry="9"/>'
+'<ellipse cx="36" cy="36" rx="9" ry="9"/><ellipse cx="64" cy="36" rx="9" ry="9"/></g>'
+'<circle cx="50" cy="50" r="11" fill="#ffd166"/>'
+'<circle cx="47" cy="48" r="2" fill="#8a5c00"/><circle cx="53" cy="48" r="2" fill="#8a5c00"/>'
+'<path d="M47 53q3 3 6 0" stroke="#8a5c00" stroke-width="1.8" fill="none" stroke-linecap="round"/>',

house:'<path d="M50 14L12 46h76z" fill="#ff8f7a"/>'
+'<rect x="22" y="44" width="56" height="40" rx="5" fill="#ffe6c4"/>'
+'<rect x="41" y="60" width="18" height="24" rx="3" fill="#c98a5a"/><circle cx="55" cy="72" r="2" fill="#ffe6c4"/>'
+'<rect x="27" y="52" width="12" height="12" rx="2.5" fill="#8ecdf0"/><rect x="61" y="52" width="12" height="12" rx="2.5" fill="#8ecdf0"/>'
+'<rect x="62" y="24" width="7" height="14" rx="2" fill="#e06b58"/>',

apple:'<path d="M50 30c-8-8-25-6-25 12 0 17 13 30 25 30s25-13 25-30c0-18-17-20-25-12z" fill="#ef5350"/>'
+'<path d="M50 30V16" stroke="#8a5a3a" stroke-width="4" stroke-linecap="round"/>'
+'<path d="M52 20q9-8 14-3-3 10-14 6z" fill="#6ecf8e"/>'
+'<path d="M36 40q-3 7 0 13" stroke="#ff9a97" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".8"/>',

water:'<path d="M50 14c12 16 22 26 22 38 0 13-10 22-22 22s-22-9-22-22c0-12 10-22 22-38z" fill="#6cc5f2"/>'
+'<path d="M50 26c8 12 15 20 15 28 0 8-6 13-15 13" fill="none" stroke="#a8dcf7" stroke-width="4" stroke-linecap="round" opacity=".8"/>'
+'<circle cx="76" cy="30" r="2.6" fill="#8ecdf0"/><circle cx="24" cy="26" r="2" fill="#8ecdf0"/>',

tree:'<rect x="45" y="58" width="10" height="28" rx="4" fill="#8a5a3a"/>'
+'<circle cx="50" cy="38" r="20" fill="#6ecf8e"/>'
+'<circle cx="33" cy="52" r="14" fill="#57c184"/><circle cx="67" cy="52" r="14" fill="#57c184"/>'
+'<circle cx="42" cy="30" r="3" fill="#ffd166"/><circle cx="60" cy="46" r="2.6" fill="#ff8f7a"/>',

rainbow:'<path d="M14 74a36 36 0 0 1 72 0" fill="none" stroke="#ff8f7a" stroke-width="8" stroke-linecap="round"/>'
+'<path d="M24 74a26 26 0 0 1 52 0" fill="none" stroke="#ffc247" stroke-width="8" stroke-linecap="round"/>'
+'<path d="M34 74a16 16 0 0 1 32 0" fill="none" stroke="#6ecf8e" stroke-width="8" stroke-linecap="round"/>'
+'<circle cx="18" cy="34" r="6" fill="#ffffff" opacity=".9"/><circle cx="82" cy="30" r="5" fill="#ffffff" opacity=".9"/>',

love:'<path d="M50 84C26 68 18 55 18 42c0-11 9-18 18-18 7 0 12 4 14 9 2-5 7-9 14-9 9 0 18 7 18 18 0 13-8 26-32 42z" fill="#ff7f95"/>'
+'<path d="M32 34q-6 4-5 12" stroke="#ffc0cb" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>'
+'<circle cx="80" cy="22" r="2.8" fill="#ffd166"/>'
};

var ART_ALIAS = {
  robots:"robot", toys:"toy", toyss:"toy", friends:"friend", cars:"car", puppies:"puppy",
  dinosaurs:"dinosaur", dinos:"dinosaur", dogs:"puppy", dog:"puppy", kitty:"cat", cats:"cat",
  balls:"ball", books:"book", stars:"star", moons:"moon", apples:"apple", houses:"house",
  trains:"train", songs:"sing", singing:"sing", music:"sing", runs:"fast", running:"fast",
  building:"build", built:"build", smiling:"smile", jumping:"jump", flying:"fly", played:"play",
  biggie:"big", tiny:"small", little:"small", strongman:"strong", magical:"magic", heros:"hero",
  colours:"red", colors:"red", blok:"blocks", block:"blocks", legoes:"lego", legos:"lego"
};

function artKey(en){
  return String(en == null ? "" : en).toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, "").replace(/s$/, "");
}
function wordArtSVG(en){
  var k = String(en == null ? "" : en).toLowerCase().trim().replace(/[^a-z0-9]+/g, "");
  var body = WORD_ART[k] || WORD_ART[ART_ALIAS[k] || ""] || WORD_ART[artKey(en)] || ART_FALLBACK;
  return '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">' + body + '</svg>';
}

function renderWords(){
  var total = state.words.length;
  var learned = 0;
  el.wwGrid.innerHTML = state.words.map(function(wd, i){
    var done = !!dashLedger[wordKey(wd.en)];
    if (done) learned++;
    var p = CARD_PALETTES[i % CARD_PALETTES.length];
    return '<div class="ww' + (done ? " learned" : "") + '" role="button" tabindex="0"'
      + ' data-word="' + esc(wd.en) + '" data-idx="' + i + '"'
      + ' style="--t1:' + p[0] + ';--t2:' + p[1] + ';--bd:' + p[2] + ';--ac:' + p[3] + '"'
      + ' aria-label="' + esc(wd.en) + ' ' + esc(wd.ko) + ' 발음 듣기">'
      + '<button class="wk" type="button" data-check="' + i + '" aria-pressed="' + (done ? "true" : "false") + '"'
      + ' aria-label="' + esc(wd.en) + ' 외웠어요 (별 +1)" title="외웠어요 (⭐ +1)">✓</button>'
      + '<div class="ww-art">' + wordArtSVG(wd.en) + '</div>'
      + '<span class="ww-spk" aria-hidden="true">🔊</span>'
      + '<div class="ww-en' + (String(wd.en).length > 13 ? " xlong" : (String(wd.en).length > 9 ? " long" : "")) + '">' + esc(wd.en) + '</div>'
      + '<div class="ww-ko">' + esc(wd.ko) + '</div>'
      + '</div>';
  }).join("");
  if (el.wwGrid.classList) el.wwGrid.classList.toggle("n10", total === 10);
  if (el.wwCount) el.wwCount.textContent = String(total);
  if (el.wwProg) {
    el.wwProg.textContent = learned + " / " + total;
    if (el.wwProg.classList) el.wwProg.classList.toggle("full", total > 0 && learned === total);
    el.wwProg.setAttribute("title", "외운 단어 " + learned + "개 / 전체 " + total + "개");
  }
}

function speakWord(card, word){
  card.classList.remove("playing");
  void card.offsetWidth;
  card.classList.add("playing");
  speak(word, false);
}

/* =========================================================
   9. 관심사 추적
   ========================================================= */
function bumpInterests(text){
  var t = String(text || "").toLowerCase();
  var changed = false;
  INTERESTS.forEach(function(it){
    var hit = 0;
    it.ko.forEach(function(k){ if (t.indexOf(k) >= 0) hit++; });
    it.en.forEach(function(k){
      try { if (new RegExp("\\b" + k + "\\b", "i").test(t)) hit++; } catch(e){}
    });
    if (hit) { state.interests[it.id] = (state.interests[it.id] || 0) + Math.min(hit, 2); changed = true; }
  });
  if (changed) { save(); renderInterest(); }
}
function rankedInterests(){
  return INTERESTS.map(function(it){ return { it:it, score:state.interests[it.id] || 0 }; })
    .filter(function(x){ return x.score > 0; })
    .sort(function(a,b){ return b.score - a.score; });
}
function topInterest(){ return rankedInterests()[0] || null; }
function renderInterest(){
  var rank = rankedInterests();
  var top = rank[0];
  el.icTop.textContent = top ? (top.it.emoji + " " + top.it.name) : "기록 중";
  if (top) {
    el.icDesc.textContent = "요즘 '" + top.it.name + "' 이야기를 " + top.score + "번이나 했어! 이어서 이야기해 볼까?";
  } else {
    el.icDesc.textContent = "대화를 하면 해율이가 좋아하는 걸 기억해 둘게!";
  }
  el.icChips.innerHTML = rank.slice(0,3).map(function(x){
    return '<span class="ic-chip">' + x.it.emoji + " " + esc(x.it.name) + " <b>" + x.score + "</b></span>";
  }).join("");
  $("interestCard").classList.toggle("on", cur.type === "interest");
}

/* =========================================================
   10. 음성 (읽어주기 / 말하기)
   ========================================================= */
/* 목소리 톤 — 영어는 Emma 선생님의 밝고 또렷한 톤, 한국어는 기존 톤 그대로 */
var TONE = {
  en: { pitch: 1.4, rate: 1.02, slow: 0.6 },
  ko: { pitch: 1.08, rate: 0.92, slow: 0.6 }
};
var voices = [], enVoice = null, koVoice = null;
function pickVoices(){
  try { voices = (window.speechSynthesis && speechSynthesis.getVoices()) || []; } catch(e){ voices = []; }
  enVoice = voices.filter(function(v){ return /^en[-_]/i.test(v.lang); })
      .sort(function(a,b){
        var score = function(v){ return (/en[-_]US/i.test(v.lang) ? 2 : 0) + (/samantha|google|zira|aria|jenny|natural/i.test(v.name) ? 1 : 0); };
        return score(b) - score(a);
      })[0] || null;
  koVoice = voices.filter(function(v){ return /^ko[-_]/i.test(v.lang); })[0] || null;
}
if (window.speechSynthesis) {
  pickVoices();
  try { speechSynthesis.onvoiceschanged = pickVoices; } catch(e){}
}
var talkTimer = null;
function speak(text, slow, lang){
  var raw = String(text || "").replace(/[“”"]/g, "").replace(/^Let's say it in English:\s*/i, "").trim();
  if (!raw) return;
  if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
    toast("이 브라우저는 읽어주기를 지원하지 않아요. 소리 없이도 공부할 수 있어요!");
    return;
  }
  try {
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(raw);
    u.lang = lang || "en-US";
    var isKo = /^ko/i.test(u.lang);
    var v = isKo ? koVoice : enVoice;
    if (v) u.voice = v;
    var tone = isKo ? TONE.ko : TONE.en;
    /* slow 에 숫자를 넘기면 그 값을 재생 속도로 쓴다(사이트워드 속도 조절 등) */
    var numRate = (typeof slow === "number" && isFinite(slow) && slow > 0) ? slow : 0;
    u.rate = numRate ? numRate : (slow ? tone.slow : tone.rate);
    u.pitch = tone.pitch;
    u.onstart = function(){ document.body.classList.add("talking"); };
    u.onend = function(){ document.body.classList.remove("talking"); };
    u.onerror = function(){ document.body.classList.remove("talking"); };
    speechSynthesis.speak(u);
    clearTimeout(talkTimer);
    talkTimer = setTimeout(function(){ document.body.classList.remove("talking"); }, 9000);
  } catch(e){ document.body.classList.remove("talking"); }
}
var SRClass = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen(lang, btn){
  if (!SRClass) {
    toast("이 브라우저는 음성 인식을 지원하지 않아요. 아래 입력창에 적어 주세요 ✏️");
    el.helpNote.textContent = "🎤 음성 인식이 안 되면 입력창에 적어 주세요. 선생님이 똑같이 도와줘요!";
    try { el.answerInput.focus(); } catch(e){}
    return;
  }
  try {
    var r = new SRClass();
    r.lang = lang;
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.continuous = false;
    btn.classList.add("listening");
    r.onresult = function(ev){
      btn.classList.remove("listening");
      var t = "";
      try { t = ev.results[0][0].transcript || ""; } catch(e){}
      if (t) handleChild(t, "voice");
    };
    r.onerror = function(ev){
      btn.classList.remove("listening");
      var code = ev && ev.error;
      if (code === "not-allowed" || code === "service-not-allowed") toast("마이크를 허용해 주세요! 아이패드 설정에서 마이크를 켤 수 있어요.");
      else if (code === "no-speech") toast("잘 안 들렸어요. 한 번 더 말해 보거나 입력창에 적어 주세요.");
      else toast("음성 인식이 잠깐 안 됐어요. 입력창에 적어도 괜찮아요 ✏️");
    };
    r.onend = function(){ btn.classList.remove("listening"); };
    r.start();
  } catch(e){
    btn.classList.remove("listening");
    toast("마이크를 켤 수 없어요. 입력창에 적어 주세요 ✏️");
  }
}

/* =========================================================
   11. 화면 렌더 (말풍선 · 로그 · 힌트 · 코치)
   ========================================================= */
function noteAtt(src){ try { if (window.SB && window.SB.markAttendance) window.SB.markAttendance(src); } catch(e){} }
function toast(msg){
  el.toast.textContent = msg;
  el.toast.hidden = false;
  el.toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(function(){ el.toast.classList.remove("show"); }, 2600);
}
function currentStep(){ return cur.steps[Math.max(0, Math.min(cur.step, cur.steps.length - 1))]; }
function stepText(step){ return (step && (step.lv[state.level - 1] || step.lv[1])) || ""; }

function addLog(who, text, ko){
  if (!text) return;
  LOG.push({ who:who, t:String(text), ko:ko || "", at:Date.now() });
  if (LOG.length > 60) LOG = LOG.slice(-60);
  renderLog();
}
function renderLog(){
  el.log.innerHTML = LOG.map(function(m){
    if (m.who === "sys") return '<div class="li sys"><div class="txt">' + esc(m.t) + "</div></div>";
    var ava = m.who === "kid" ? "🐥" : (m.who === "coach" ? "✏️" : "👩‍🏫");
    var ko = m.ko ? '<span class="ko">' + esc(m.ko) + "</span>" : "";
    return '<div class="li ' + m.who + '"><div class="ava">' + ava + '</div><div class="txt">' + esc(m.t) + ko + "</div></div>";
  }).join("");
  if (el.logEmpty) el.logEmpty.hidden = LOG.length > 1;
  el.log.scrollTop = el.log.scrollHeight;
}
function say(en, ko, opts){
  opts = opts || {};
  el.bubbleEn.textContent = en;
  el.bubbleKo.textContent = ko || "";
  el.bubbleKo.classList.toggle("hide", !state.koView || !ko);
  el.aiBadge.hidden = !opts.ai;
  if (opts.log !== false) addLog("teacher", en, ko);
  if (opts.speak !== false && state.autoRead) speak(en, !!opts.slow);
  save();
}
function renderHints(){
  var parts = [];
  if (lastCoach) {
    parts.push('<button class="hint repeat" type="button" data-repeat="1">🗣️ “' + esc(shortS(lastCoach.en)) + '” 따라 말하기</button>');
  }
  if (hintOpen) {
    var step = currentStep();
    var list = (step && step.hints[state.level - 1]) || [];
    list.slice(0, 3).forEach(function(h){
      parts.push('<button class="hint choice" type="button" data-say="' + esc(h) + '">💡 ' + esc(h) + "</button>");
    });
  }
  el.hints.innerHTML = parts.join("");
}
function showHints(){
  hintOpen = true;
  renderHints();
  say("Here are three ways to say it. Pick one! 🖐️", "이렇게 세 가지로 말할 수 있어. 하나 골라 봐!", { log:true, speak:true });
}
function clearHints(){ hintOpen = false; renderHints(); }

function applyCoach(r){
  lastCoach = r;
  el.coachEmpty.hidden = true;
  el.coach.hidden = false;
  el.coachKo.innerHTML = boldTip(r.tip);
  el.scEn.textContent = r.en;
  el.scKo.textContent = r.ko || "";
  el.coachWords.innerHTML = (r.words || []).map(function(x){
    return '<button class="wcard" type="button" data-wspeak="' + esc(x.en) + '">'
      + '<span class="we">🔊</span>'
      + "<span class=\"wt\"><b>" + esc(x.en) + "</b><span>" + esc(x.ko) + "</span></span></button>";
  }).join("");
  var already = !!state.learned.some(function(l){ return l.date === TODAY && l.en.toLowerCase() === String(r.en).toLowerCase(); });
  el.scSave.classList.toggle("saved", already);
  el.scSave.textContent = already ? "✅ 저장됨" : "⭐ 따라하기";
  renderHints();
}
function clearCoach(){
  lastCoach = null;
  el.coach.hidden = true;
  el.coachEmpty.hidden = false;
  renderHints();
}

/* =========================================================
   12. 대화 흐름 (내장 스마트 엔진)
   ========================================================= */
function packOf(type, id){ return type === "interest" ? (ISCEN[id] || null) : (SCEN[id] || null); }

function renderTopics(){
  var btns = el.topics.querySelectorAll(".topic");
  Array.prototype.forEach.call(btns, function(b){
    var on = (cur.type === "topic" && b.getAttribute("data-topic") === cur.id);
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}
function renderLevels(){
  var btns = document.querySelectorAll(".lv");
  Array.prototype.forEach.call(btns, function(b){
    var on = parseInt(b.getAttribute("data-lv"), 10) === state.level;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}
function startTalk(type, id, opts){
  opts = opts || {};
  var pack = packOf(type, id);
  if (!pack) { type = "topic"; id = "toy"; pack = SCEN.toy; }
  cur = { type:type, id:id, step:0, steps:pack.steps };
  state.mode = type;
  if (type === "topic") state.topic = id;
  lastCoach = null; hintOpen = false;
  el.coach.hidden = true; el.coachEmpty.hidden = false;
  el.aiBadge.hidden = true;
  if (!opts.keepLog) LOG = [];
  if (opts.sys) addLog("sys", opts.sys);
  var step = cur.steps[0];
  say(stepText(step), step.ko, { log:true, speak:!opts.silent });
  renderHints(); renderTopics(); renderInterest();
  save();
}
function sayStep(i, opts){
  opts = opts || {};
  cur.step = Math.max(0, Math.min(i, cur.steps.length - 1));
  var step = currentStep();
  var text = stepText(step);
  if (opts.preface) text = opts.preface + " " + text;
  say(text, step.ko, { log:true, speak:true });
  renderHints();
  save();
}
function handleChild(text, source){
  var t = String(text || "").replace(/\s+/g, " ").trim();
  if (!t) return;
  bumpInterests(t);
  addLog("kid", t);
  hintOpen = false;
  try { el.answerInput.value = ""; } catch(e){}
  if (/[가-힣]/.test(t)) respondKorean(t);
  else respondEnglish(t);
  save();
}
function respondEnglish(text){
  var prev = stepText(currentStep());        // 방금 선생님이 물어본 질문
  var wrap = cur.step + 1 >= cur.steps.length;
  var next = wrap ? 0 : cur.step + 1;
  var stepNow = currentStep();
  var nextStep = cur.steps[next];
  cur.step = next;
  if (aiOn()) aiTikiTakaEN(text, prev, nextStep, stepNow, wrap);   // AI가 있으면 진짜 티키타카
  else builtinEnglish(text, stepNow, nextStep, wrap);              // 없거나 실패하면 내장 선생님
  save();
}
function builtinEnglish(text, stepNow, nextStep, wrap){
  var ws = text.trim().split(/\s+/).filter(Boolean);
  var praise = ws.length >= 4 ? "Wow, great sentence! 🌟" : (ws.length >= 2 ? "Nice sentence! 👏" : "Good word! 👍");
  var lead = stepNow && stepNow.reaction ? stepNow.reaction + " " : "";
  var line = praise + " " + lead + (wrap ? "You did it! 🎉 " : "") + stepText(nextStep);
  say(line, nextStep.ko, { log:true, speak:true });
  renderHints();
  if (wrap) addLog("sys", "🎉 이 주제 대화를 한 바퀴 다 돌았어! 이어서 또 해보자.");
}
function respondKorean(text){
  var r = coach(text);
  applyCoach(r);
  say("Let's say it in English: “" + r.en + "”", r.ko, { log:true, speak:false });
  speak(r.en);
  if (aiOn()) enhanceWithAI(text);
  save();
}
function saveSentence(en, ko){
  if (!en) return;
  var exists = state.learned.some(function(l){ return l.date === TODAY && String(l.en).toLowerCase() === String(en).toLowerCase(); });
  if (exists) { toast("이미 오늘 배운 문장이야! 😊"); return; }
  state.learned.push({ date:TODAY, en:String(en), ko:String(ko || ""), at:Date.now() });
  if (state.learned.length > 400) state.learned = state.learned.slice(-400);
  save(); renderLearnCount(); renderLearnList();
  el.scSave.classList.add("saved");
  el.scSave.textContent = "✅ 저장됨";
  toast("오늘 배운 문장에 저장했어! 📚");
  confetti();
  noteAtt("talk");
}
function learnedToday(){ return state.learned.filter(function(l){ return l.date === TODAY; }); }
function renderLearnCount(){ el.learnNum.textContent = learnedToday().length; }
function renderLearnList(){
  var today = learnedToday();
  el.learnList.innerHTML = today.length ? today.map(function(l){
    return '<div class="learnitem"><span class="le">⭐</span><b>' + esc(l.en) + "</b><span>" + esc(l.ko || "") + "</span></div>";
  }).join("") : '<p class="hintline">오늘 배운 문장이 아직 없어요. 선생님과 대화하고 ⭐ 따라하기를 눌러 보세요!</p>';
  el.learnTotal.textContent = "오늘 " + today.length + "개 · 지금까지 " + state.learned.length + "개";
}

/* =========================================================
   13. AI 선생님 (선택 연결 · 실패하면 내장 엔진)
   ========================================================= */
function aiOn(){ return state.ai.provider !== "none" && !!state.ai.key; }
var aiLastErr = "";
function aiErrNote(){ return aiLastErr ? " (" + aiLastErr + ")" : ""; }
function aiModelName(){
  var m = String(state.ai.model || "").trim();
  /* Gemini는 구모델(2.0-flash)이 종료됐으니 자동으로 새 기본 모델을 쓴다 */
  if (state.ai.provider === "gemini" && (!m || /^gemini-2\.0-flash/i.test(m))) return GEMINI_DEFAULT;
  if (m) return m;
  return "gpt-4o-mini";
}
function fetchJSON(url, opts, ms){
  return new Promise(function(resolve, reject){
    var done = false;
    var timer = setTimeout(function(){ if (!done) { done = true; reject(new Error("timeout")); } }, ms || 12000);
    fetch(url, opts).then(function(r){
      return r.json().then(function(j){ return { ok:r.ok, status:r.status, body:j }; })
        .catch(function(){ return { ok:r.ok, status:r.status, body:null }; });
    }).then(function(x){ if (!done) { done = true; clearTimeout(timer); resolve(x); } })
      .catch(function(e){ if (!done) { done = true; clearTimeout(timer); reject(e); } });
  });
}
function parseAI(raw){
  if (!raw) return null;
  var s = String(raw).trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  var o = null;
  try { o = JSON.parse(s); } catch(e){
    var m = s.match(/\{[\s\S]*\}/);
    if (m) { try { o = JSON.parse(m[0]); } catch(e2){ o = null; } }
  }
  if (!o || typeof o !== "object") return null;
  var en = o.sentence || o.en || o.say;
  if (!en || typeof en !== "string") return null;
  var words = Array.isArray(o.words) ? o.words.filter(function(x){ return x && x.en; }).slice(0,3).map(function(x){
    return { en:String(x.en), ko:String(x.ko || ""), emoji:"💬" };
  }) : [];
  return { say:String(o.say || ('Let\'s say: "' + en + '"')), ko:String(o.ko || ""), coach:String(o.coach || ""), en:String(en), words:words };
}
/* --- AI 호출 공통 통로 (OpenAI / Gemini) --- */
function aiJSON(sys, user, maxTok){
  var provider = state.ai.provider, model = aiModelName(), p;
  aiLastErr = "";
  if (provider === "openai") {
    p = fetchJSON("https://api.openai.com/v1/chat/completions", {
      method:"POST",
      headers:{ "Content-Type":"application/json", "Authorization":"Bearer " + state.ai.key },
      body: JSON.stringify({
        model:model, temperature:0.7, max_tokens:maxTok || 400,
        response_format:{ type:"json_object" },
        messages:[{ role:"system", content:sys }, { role:"user", content:user }]
      })
    }, 12000).then(function(res){
      if (!res.ok || !res.body) { aiLastErr = "OpenAI " + res.status; throw new Error("openai " + res.status); }
      var c = res.body.choices && res.body.choices[0];
      return (c && c.message && c.message.content) || "";
    });
  } else if (provider === "gemini") {
    /* 모델은 되는 것부터 차례로 시도한다 — 종료된 모델은 404/400, 접근 제한은 403으로 돌아온다 */
    var chain = [];
    if (model) chain.push(model);
    GEMINI_FALLBACKS.forEach(function(mm){ if (chain.indexOf(mm) < 0) chain.push(mm); });
    var callGemini = function(mdl){
      var url = "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(mdl) + ":generateContent";
      return fetchJSON(url, {
        method:"POST",
        headers:{ "Content-Type":"application/json", "x-goog-api-key":state.ai.key },   // AQ. 형식의 새 키도 이 헤더로 동작
        body: JSON.stringify({
          systemInstruction:{ parts:[{ text:sys }] },
          contents:[{ role:"user", parts:[{ text:user }] }],
          generationConfig:{ temperature:0.7, maxOutputTokens:(maxTok || 400) + 400, responseMimeType:"application/json" }
        })
      }, 12000);
    };
    var usedModel = "";
    var tryAt = function(i){
      return callGemini(chain[i]).then(function(res){
        if (res.ok && res.body){ usedModel = chain[i]; return res; }
        if ((res.status === 400 || res.status === 403 || res.status === 404) && i + 1 < chain.length) return tryAt(i + 1);
        return res;
      });
    };
    p = tryAt(0).then(function(res){
      if (!res.ok || !res.body) { aiLastErr = "Gemini " + (res.status || "연결 실패"); throw new Error("gemini " + res.status); }
      if (usedModel && usedModel !== state.ai.model){ state.ai.model = usedModel; try { save(); } catch(e){} }   // 다음부터는 성공한 모델로 바로
      var cand = res.body.candidates && res.body.candidates[0];
      var parts = (cand && cand.content && cand.content.parts) || [];
      return parts.map(function(x){ return x.text || ""; }).join("");
    });
  } else {
    return Promise.resolve("");
  }
  return p.catch(function(e){ try { console.warn("AI 연결 실패:", e && e.message); } catch(e2){} aiLastErr = aiLastErr || "연결 실패"; return ""; });
}
function looseJSON(raw){
  if (!raw) return null;
  var s = String(raw).trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  var o = null;
  try { o = JSON.parse(s); } catch(e){
    var m = s.match(/\{[\s\S]*\}/);
    if (m) { try { o = JSON.parse(m[0]); } catch(e2){ o = null; } }
  }
  return (o && typeof o === "object") ? o : null;
}
function pickStr(o, keys){
  for (var i = 0; i < keys.length; i++){
    var v = o[keys[i]];
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}
function cleanEN(s){
  return String(s == null ? "" : s).trim().replace(/^["'“”]+|["'“”]+$/g, "").replace(/\s+/g, " ").trim();
}
function parseChatEN(raw){
  var o = looseJSON(raw);
  if (!o) return null;
  var react = cleanEN(pickStr(o, ["react", "reaction", "reply"]));
  var q = cleanEN(pickStr(o, ["question", "followup", "follow_up", "followup_question", "q"]));
  if (!react && !q) react = cleanEN(pickStr(o, ["say", "text", "english"]));
  if (!react && !q) return null;
  if (!q){ q = react; react = ""; }
  var rKo = pickStr(o, ["react_ko", "reactKo", "reaction_ko"]);
  var qKo = pickStr(o, ["question_ko", "questionKo", "q_ko", "followup_ko"]);
  var ko = (rKo && qKo) ? rKo + " " + qKo : (qKo || rKo || pickStr(o, ["ko", "meaning", "korean"]));
  var words = Array.isArray(o.words) ? o.words.filter(function(x){ return x && x.en; }).slice(0, 3).map(function(x){
    return { en:String(x.en), ko:String(x.ko || ""), emoji:"💬" };
  }) : [];
  return { en:(react ? react + " " : "") + q, ko:ko.trim(), react:react, reactKo:rKo, q:q, qKo:qKo,
           hint:pickStr(o, ["hint", "tip", "coach"]), words:words };
}
/* 최근 대화(로그) 6~10턴을 맥락으로 만든다 */
function dialogTailEN(n){
  var rows = LOG.filter(function(m){ return m.who === "kid" || m.who === "teacher"; });
  if (rows.length && rows[rows.length - 1].who === "kid") rows = rows.slice(0, -1);   // 방금 한 말은 따로 전달
  return rows.slice(-(n || 8)).map(function(m){
    return (m.who === "kid" ? "Haeyul" : "Teacher") + ": " + m.t;
  }).join("\n");
}
function interestLineEN(){
  var top = INTERESTS.map(function(it){ return { it:it, s:state.interests[it.id] || 0 }; })
    .filter(function(x){ return x.s > 0; })
    .sort(function(a,b){ return b.s - a.s; }).slice(0, 3)
    .map(function(x){ return x.it.name + "(" + ((x.it.en && x.it.en[0]) || x.it.name) + ")"; });
  return top.length ? top.join(", ") : "not known yet";
}
/* 영어 티키타카: 반응 + 꼬리질문 1개 */
function askAIChatEN(text, prev){
  var pack = packOf(cur.type, cur.id);
  var levelGuide = state.level <= 1 ? "Lv.1 - single words or a 2-3 word phrase"
    : (state.level === 2 ? "Lv.2 - one very short sentence, max 7 words"
    : "Lv.3 - one or two short, simple sentences");
  var sys = "You are a warm, playful English conversation partner for Haeyul, a 7-year-old Korean child who is learning English. "
    + "Keep a real back-and-forth: (1) react to what she just said in ONE very short, happy English sentence - no generic praise, "
    + "(2) then ask exactly ONE simple follow-up question about it so she wants to answer. "
    + "Difficulty " + levelGuide + ". Use only easy words a 7-year-old knows; no idioms, no long sentences. "
    + "Her interests so far: " + interestLineEN() + " - use them naturally when they fit. "
    + "Return ONLY minified JSON with keys: react (short English reaction), react_ko (its Korean meaning), "
    + "question (the ONE English follow-up question), question_ko (its Korean meaning), "
    + "hint (one short Korean encouragement or word tip), words (2-3 items of {en, ko}). No markdown, no extra text.";
  var user = "Topic: " + (pack ? pack.name + " (" + (pack.en || pack.name) + ")" : "free talk") + "\n"
    + "Level: " + state.level + "/3\n"
    + "Your last question was: " + (prev || "-") + "\n"
    + "Recent conversation:\n" + (dialogTailEN(8) || "(just started)") + "\n"
    + "Haeyul just said in English: 「" + text + "」";
  return aiJSON(sys, user, 350).then(parseChatEN);
}
var aiSeq = 0;
function aiTikiTakaEN(text, prev, nextStep, stepNow, wrap){
  var seq = ++aiSeq;
  el.aiBadge.hidden = false;
  el.aiBadge.textContent = "🤖 생각 중…";
  askAIChatEN(text, prev).then(function(r){
    if (seq !== aiSeq) return;                        // 더 새로운 말이 있으면 이 응답은 버린다
    if (!r){
      el.aiBadge.textContent = "🤖 AI";
      el.aiBadge.hidden = true;
      builtinEnglish(text, stepNow, nextStep, wrap);  // 실패하면 내장 선생님으로 부드럽게
      toast("AI 연결이 안 돼서 내장 선생님이 대답했어. 그대로 이어서 해도 좋아! 🙂" + aiErrNote());
      return;
    }
    el.aiBadge.textContent = "🤖 AI";
    say(r.en, r.ko, { log:true, ai:true, speak:true });
    renderHints();
    if (r.hint) toast("💡 " + r.hint);
    if (wrap) addLog("sys", "🎉 이 주제 대화를 한 바퀴 다 돌았어! 이어서 또 해보자.");
    save();
  });
}
function askAI(text){
  var level = state.level;
  var pack = packOf(cur.type, cur.id);
  var step = currentStep();
  var sys = "You are a warm, playful English teacher for a 7-year-old Korean child named Haeyul. "
    + "The child speaks Korean and is learning English. Level " + level + " of 3 (1 = single words, 2 = short sentences, 3 = simple questions and conversation). "
    + "Explain in very easy Korean how to say what the child means, praise the attempt, and keep English extremely short and simple. "
    + "Return ONLY minified JSON with keys: say (one short English line the teacher says, max 12 words), "
    + "ko (short Korean meaning of say), coach (Korean explanation, max 2 sentences, warm and encouraging), "
    + "sentence (the short English sentence the child should try), words (2-3 items of {en, ko}). "
    + "No markdown, no extra text.";
  var user = "Topic: " + (pack ? pack.name : "free talk") + "\nTeacher's question: " + (step ? stepText(step) : "")
    + "\nChild said in Korean: " + text;
  return aiJSON(sys, user, 400).then(parseAI);
}
function enhanceWithAI(text){
  el.aiBadge.hidden = false;
  el.aiBadge.textContent = "🤖 생각 중…";
  askAI(text).then(function(r){
    if (!r) {
      el.aiBadge.textContent = "🤖 AI";
      el.aiBadge.hidden = true;
      toast("AI 연결이 안 돼서 내장 선생님이 대답했어. 그대로 공부해도 좋아! 🙂" + aiErrNote());
      return;
    }
    el.aiBadge.textContent = "🤖 AI";
    var cr = {
      tip: r.coach || ("이렇게 말해보자! **" + r.en + "**"),
      en: r.en, ko: r.ko,
      words: (r.words && r.words.length) ? r.words : (lastCoach ? lastCoach.words : []),
      ai: true
    };
    applyCoach(cr);
    say(r.say, r.ko || cr.ko, { log:true, ai:true, speak:false });
    speak(r.en);
    toast("AI 선생님이 더 자세히 알려줬어! 🤖");
  }).catch(function(){ el.aiBadge.hidden = true; });
}

/* =========================================================
   14. 설정 · 단어 편집 · 모달
   ========================================================= */
function openModal(id){ var m = $(id); if (m) m.hidden = false; }
function closeModal(id){ var m = $(id); if (m) m.hidden = true; }
function updateEngineInfo(){
  var provider = el.aiProvider.value;
  if (provider === "none") {
    el.engineInfo.innerHTML = "지금은 <b>내장 선생님</b>이 대화해요 · 코칭 패턴 <b>" + PATTERN_COUNT + "개</b> · 인터넷 없이도 100% 동작해요.";
  } else {
    el.engineInfo.innerHTML = (provider === "gemini" ? "Gemini" : "OpenAI") + "를 연결하면 한국어 설명은 물론, **영어로 말해도 AI가 반응하고 꼬리질문으로 대화를 이어 가요**. 연결이 안 되면 내장 선생님이 대신해요.";
  }
  el.aiModel.placeholder = provider === "gemini" ? GEMINI_DEFAULT : (provider === "openai" ? "gpt-4o-mini" : "기본 모델을 써도 좋아요");
}
function openSettings(){
  try {
    if (el.aiProvider) el.aiProvider.value = state.ai.provider;
    if (el.aiKey) el.aiKey.value = state.ai.key;
    if (el.aiModel) el.aiModel.value = state.ai.model;
    if (el.dashUrl) el.dashUrl.value = state.settings.dashUrl;
    updateEngineInfo();
  } catch(e){}
  openModal("settingsModal");
}
function saveSettings(){
  var provider = el.aiProvider.value;
  var key = el.aiKey.value.trim();
  if (provider !== "none" && !key) {
    toast("API 키를 넣어 주세요. 내장 선생님만 쓸 때는 '내장 선생님만 쓰기'를 골라 주세요.");
    el.aiKey.focus();
    return;
  }
  var model = el.aiModel.value.trim();
  if (/^gemini-2\.0-flash/i.test(model)) model = GEMINI_DEFAULT;   // 종료된 구모델은 자동 대체
  state.ai = { provider:provider, key:(provider === "none" ? "" : key), model:model };
  state.settings.dashUrl = el.dashUrl.value.trim() || "./index.html";
  save(); updateDashLink(); closeModal("settingsModal");
  updateEngineInfo();
  toast(provider === "none" ? "내장 선생님으로 대화할게요!" : "AI 선생님을 연결했어요! 🤖");
}
function resetTalk(){
  closeModal("settingsModal");
  clearCoach();
  startTalk(cur.type, cur.id, { silent:false });
  toast("대화를 처음부터 다시 시작해요!");
}
function openWords(){
  el.wordEditGrid.innerHTML = state.words.map(function(wd, i){
    return '<div class="werow"><span class="wn">' + (i+1) + "</span>"
      + '<input class="en" maxlength="24" value="' + esc(wd.en) + '" aria-label="' + (i+1) + '번째 영어 단어">'
      + '<input class="ko" maxlength="24" value="' + esc(wd.ko) + '" aria-label="' + (i+1) + '번째 한글 뜻"></div>';
  }).join("");
  openModal("wordsModal");
}
function presetWords(){
  state.wordSet = (state.wordSet + 1) % WORD_PRESETS.length;
  var list = wordsFromPreset(state.wordSet);
  var rows = el.wordEditGrid.querySelectorAll(".werow");
  Array.prototype.forEach.call(rows, function(row, i){
    row.querySelector(".en").value = list[i].en;
    row.querySelector(".ko").value = list[i].ko;
  });
  toast("추천 단어 세트로 채웠어요! 저장을 눌러 주세요.");
}
function saveWords(){
  var rows = el.wordEditGrid.querySelectorAll(".werow");
  var out = [], bad = false;
  Array.prototype.forEach.call(rows, function(row){
    var en = row.querySelector(".en").value.trim();
    var ko = row.querySelector(".ko").value.trim();
    if (!en) bad = true;
    out.push({ en:en, ko:ko });
  });
  if (bad) { toast("영어 단어를 10개 모두 적어 주세요 ✏️"); return; }
  state.words = out.slice(0, 10);
  save(); renderWords(); closeModal("wordsModal");
  toast("이번 주 단어를 바꿨어요! 📚");
}
function startInterest(){
  var top = topInterest();
  var it = top ? top.it : INTERESTS[0];
  var sys = top
    ? "✨ 요즘 '" + it.name + "' 이야기를 " + top.score + "번이나 했어! 관심사 대화를 시작할게."
    : "아직 관심사 기록이 없어서 로봇 이야기부터 시작할게. 대화하다 보면 해율이 관심사를 기억해 둘게!";
  startTalk("interest", it.topic, { sys: sys });
}
function setLevel(n){
  if ([1,2,3].indexOf(n) < 0 || n === state.level) return;
  state.level = n;
  renderLevels();
  hintOpen = false;
  var step = currentStep();
  say(stepText(step), step.ko, { log:false, speak:true });
  renderHints();
  save();
  toast("영어 난이도를 Lv." + n + "로 바꿨어요");
}
function setAutoRead(on){
  state.autoRead = !!on;
  el.autoRead.classList.toggle("on", state.autoRead);
  el.autoRead.setAttribute("aria-checked", state.autoRead ? "true" : "false");
  save();
  toast(state.autoRead ? "선생님이 영어를 자동으로 읽어줄게요 🔊" : "자동 읽기를 껐어요. 🔊 버튼으로 들을 수 있어요.");
  if (state.autoRead) speak(el.bubbleEn.textContent, false);
}
function setKoView(on){
  state.koView = !!on;
  el.bubbleKo.classList.toggle("hide", !state.koView || !el.bubbleKo.textContent);
  el.btnKo.classList.toggle("on", state.koView);
  el.btnKo.setAttribute("aria-pressed", state.koView ? "true" : "false");
  save();
}

/* =========================================================
   15. 이벤트
   ========================================================= */
function bind(){
  if (el.topics) el.topics.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest(".topic") : null;
    if (!b) return;
    startTalk("topic", b.getAttribute("data-topic"), {});
  });

  document.querySelectorAll(".lv").forEach(function(b){
    b.addEventListener("click", function(){ setLevel(parseInt(b.getAttribute("data-lv"), 10)); });
  });

  if (el.autoRead) el.autoRead.addEventListener("click", function(){ setAutoRead(!state.autoRead); });
  if (el.btnKo) el.btnKo.addEventListener("click", function(){ setKoView(!state.koView); });
  if (el.btnSpeak) el.btnSpeak.addEventListener("click", function(){ speak(el.bubbleEn.textContent, false); });
  if (el.btnSlow) el.btnSlow.addEventListener("click", function(){ speak(el.bubbleEn.textContent, true); });

  if (el.btnSettings) el.btnSettings.addEventListener("click", openSettings);
  if (el.btnSaveSettings) el.btnSaveSettings.addEventListener("click", saveSettings);
  if (el.btnResetTalk) el.btnResetTalk.addEventListener("click", resetTalk);
  if (el.aiProvider) el.aiProvider.addEventListener("change", updateEngineInfo);

  if (el.btnEditWords) el.btnEditWords.addEventListener("click", openWords);  if (el.btnSaveWords) el.btnSaveWords.addEventListener("click", saveWords);
  if (el.btnPreset) el.btnPreset.addEventListener("click", presetWords);

  if (el.finishBtn) el.finishBtn.addEventListener("click", toggleDaily);
  if (el.btnInterest) el.btnInterest.addEventListener("click", startInterest);

  if (el.learnPill) el.learnPill.addEventListener("click", function(){
    renderLearnList();
    openModal("learnModal");
  });

  if (el.btnMicEn) el.btnMicEn.addEventListener("click", function(){ listen("en-US", el.btnMicEn); });
  if (el.btnMicKo) el.btnMicKo.addEventListener("click", function(){ listen("ko-KR", el.btnMicKo); });
  if (el.btnHint) el.btnHint.addEventListener("click", showHints);

  if (el.btnSend) el.btnSend.addEventListener("click", function(){ handleChild(el.answerInput.value, "type"); });
  if (el.answerInput) el.answerInput.addEventListener("keydown", function(e){
    if (e.key === "Enter") { e.preventDefault(); handleChild(el.answerInput.value, "type"); }
  });

  if (el.hints) el.hints.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest(".hint") : null;
    if (!b) return;
    if (b.hasAttribute("data-repeat")) { if (lastCoach) handleChild(lastCoach.en, "repeat"); }
    else handleChild(b.getAttribute("data-say"), "hint");
  });

  if (el.wwGrid) el.wwGrid.addEventListener("click", function(e){
    var chk = e.target.closest ? e.target.closest(".wk") : null;
    if (chk) { e.stopPropagation(); toggleWord(parseInt(chk.getAttribute("data-check"), 10)); return; }
    var card = e.target.closest ? e.target.closest(".ww") : null;
    if (card) speakWord(card, card.getAttribute("data-word"));
  });
  if (el.wwGrid) el.wwGrid.addEventListener("keydown", function(e){
    if (e.key !== "Enter" && e.key !== " ") return;
    var card = e.target.closest ? e.target.closest(".ww") : null;
    if (!card) return;
    e.preventDefault();
    speakWord(card, card.getAttribute("data-word"));
  });

  if (el.coachWords) el.coachWords.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest(".wcard") : null;
    if (b) speak(b.getAttribute("data-wspeak"), false);
  });

  if (el.scSpeak) el.scSpeak.addEventListener("click", function(){ if (lastCoach) speak(lastCoach.en, false); });
  if (el.scSlow) el.scSlow.addEventListener("click", function(){ if (lastCoach) speak(lastCoach.en, true); });
  if (el.scSave) el.scSave.addEventListener("click", function(){
    if (!lastCoach) return;
    speak(lastCoach.en, false);
    saveSentence(lastCoach.en, lastCoach.ko);
  });

  document.querySelectorAll("[data-close]").forEach(function(b){
    b.addEventListener("click", function(){ closeModal(b.getAttribute("data-close")); });
  });
  ["settingsModal","wordsModal","learnModal"].forEach(function(id){
    var _md = $(id); if (_md) _md.addEventListener("click", function(e){ if (e.target === this) closeModal(id); });
  });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") { ["settingsModal","wordsModal","learnModal"].forEach(closeModal); }
  });

  window.addEventListener("storage", function(e){
    if (!e || e.key === DASH_STARS || e.key === DASH_LEDGER || e.key === null) refreshDash();
  });
}

/* =========================================================
   16. 시작
   ========================================================= */
function restoreOrStart(){
  var s = readJSON(STORE_KEY, null);
  var ss = s && s.session;
  var pack = ss ? packOf(ss.type, ss.id) : null;
  if (ss && pack && Array.isArray(ss.log) && ss.log.length) {
    cur = {
      type: ss.type === "interest" ? "interest" : "topic",
      id: ss.id,
      step: Math.max(0, Math.min(parseInt(ss.step, 10) || 0, pack.steps.length - 1)),
      steps: pack.steps
    };
    state.mode = cur.type;
    if (cur.type === "topic") state.topic = cur.id;
    LOG = ss.log.slice(-40).map(function(m){ return { who:m.who, t:String(m.t || ""), ko:m.ko || "", at:m.at || 0 }; });
    renderLog();
    var step = currentStep();
    el.bubbleEn.textContent = stepText(step);
    el.bubbleKo.textContent = step.ko;
    el.bubbleKo.classList.toggle("hide", !state.koView);
    if (ss.lastCoach && ss.lastCoach.en) { lastCoach = ss.lastCoach; applyCoach(lastCoach); }
    renderHints(); renderTopics(); renderInterest();
  } else {
    startTalk("topic", state.topic, { silent:true });
  }
}
function init(){
  /* 🃏 단어카드·게임으로 개편되며 선생님 대화 화면이 사라졌다 — 옛 화면 요소가 없으면 건너뛴다 */
  if (!document.getElementById("bubbleEn")) return;
  renderLevels();
  el.autoRead.classList.toggle("on", state.autoRead);
  el.autoRead.setAttribute("aria-checked", state.autoRead ? "true" : "false");
  el.bubbleKo.classList.toggle("hide", !state.koView);
  el.btnKo.classList.toggle("on", state.koView);
  el.btnKo.setAttribute("aria-pressed", state.koView ? "true" : "false");
  renderWords();
  renderInterest();
  refreshDash();
  renderLearnCount();
  bind();
  restoreOrStart();
  renderLearnCount();
}

window.ENG = {
  state: state, coach: coach, RULES: RULES, PATTERN_COUNT: PATTERN_COUNT,
  WORD_ART: WORD_ART, WORD_PRESETS: WORD_PRESETS, wordArtSVG: wordArtSVG,
  SCEN: SCEN, ISCEN: ISCEN, INTERESTS: INTERESTS,
  handleChild: handleChild, setLevel: setLevel, startTalk: startTalk,
  toggleDaily: toggleDaily, toggleWord: toggleWord, awardEng: awardEng,
  readDash: readDash, refreshDash: refreshDash, TONE: TONE,
  today: function(){ return TODAY; }, cur: function(){ return cur; }
};
window.ENG.toast = toast;
window.ENG.confetti = confetti;
window.ENG.speak = speak;
window.ENG.revokeEng = revokeEng;
window.ENG.save = save;
window.ENG.aiJSON = aiJSON;
window.ENG.saveSentence = saveSentence;

init();
})();
