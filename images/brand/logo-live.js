/* Живой логотип ГЕШ СТОР.
   Заменяет картинку images/brand/logo.svg в .logo на тот же логотип из частей:
   шапка — один раз за визит собирается, потом лепесток иногда поворачивается
   (и по нажатию); подвал — лепесток смотрит на курсор или палец.
   Не сработал скрипт — остаётся обычная картинка. Формы взяты из logo.svg. */
(function(){
const L=["M94.4 -210.4 L94.4 0 L32 0 L32 -237.2 C32 -259.3 49.9 -277.2 72 -277.2 L221.2 -277.2 L221.2 -224.4 L108.4 -224.4 C100.7 -224.4 94.4 -218.1 94.4 -210.4 Z", "M469.6 0 L297.2 -0 C283.9 -0 273.2 -10.7 273.2 -24 L273.2 -253.2 C273.2 -266.5 283.9 -277.2 297.2 -277.2 L460.4 -277.2 L460.4 -224.8 L344 -224.8 C339.4 -224.8 335.6 -221 335.6 -216.4 L335.6 -170.4 L446.4 -170.4 L446.4 -119.2 L335.6 -119.2 L335.6 -60.8 C335.6 -56.2 339.4 -52.4 344 -52.4 L469.6 -52.4 L469.6 0 Z", "M863.6 -277.2 L863.6 -24 C863.6 -10.7 852.9 -0 839.6 -0 L543.6 -0 C530.3 -0 519.6 -10.7 519.6 -24 L519.6 -277.2 L582 -277.2 L582 -61.2 C582 -56.6 585.8 -52.8 590.4 -52.8 L652 -52.8 C656.6 -52.8 660.4 -56.6 660.4 -61.2 L660.4 -277.2 L722.8 -277.2 L722.8 -61.2 C722.8 -56.6 726.6 -52.8 731.2 -52.8 L792.8 -52.8 C797.4 -52.8 801.2 -56.6 801.2 -61.2 L801.2 -277.2 L863.6 -277.2 Z", "M1158 5.6Q1090.4 5.6 1055 -32Q1019.6 -69.6 1019.6 -138.8Q1019.6 -173.2 1030.4 -200.2Q1041.2 -227.2 1060 -245.8Q1078.8 -264.4 1104.8 -274Q1130.8 -283.6 1161.2 -283.6Q1178.8 -283.6 1193.2 -281Q1207.6 -278.4 1218.4 -275Q1229.2 -271.6 1236.4 -268Q1243.6 -264.4 1246.8 -262.4L1228.8 -212Q1216 -218.8 1199 -223.6Q1182 -228.4 1160.4 -228.4Q1146 -228.4 1132.2 -223.6Q1118.4 -218.8 1107.8 -208.2Q1097.2 -197.6 1090.8 -180.8Q1084.4 -164 1084.4 -140Q1084.4 -120.8 1088.6 -104.2Q1092.8 -87.6 1102.2 -75.6Q1111.6 -63.6 1126.8 -56.6Q1142 -49.6 1163.6 -49.6Q1177.2 -49.6 1188 -51.2Q1198.8 -52.8 1207.2 -55Q1215.6 -57.2 1222 -60Q1228.4 -62.8 1233.6 -65.2L1250.8 -15.2Q1237.6 -7.2 1213.6 -0.8Q1189.6 5.6 1158 5.6Z", "M1270.8 -277.2 L1500.4 -277.2 L1500.4 -224 L1425.2 -224 C1420.6 -224 1416.8 -220.2 1416.8 -215.6 L1416.8 0 L1354.4 0 L1354.4 -215.6 C1354.4 -220.2 1350.6 -224 1346 -224 L1270.8 -224 L1270.8 -277.2 Z", "M1947.6 -280.4Q2009.6 -280.4 2042.8 -258.6Q2076 -236.8 2076 -187.2Q2076 -137.2 2042.4 -115Q2008.8 -92.8 1946.4 -92.8H1926.8V0H1864.4V-273.2Q1884.8 -277.2 1907.6 -278.8Q1930.4 -280.4 1947.6 -280.4ZM1951.6 -227.2Q1944.8 -227.2 1938.2 -226.8Q1931.6 -226.4 1926.8 -226V-146H1946.4Q1978.8 -146 1995.2 -154.8Q2011.6 -163.6 2011.6 -187.6Q2011.6 -199.2 2007.4 -206.8Q2003.2 -214.4 1995.4 -219Q1987.6 -223.6 1976.4 -225.4Q1965.2 -227.2 1951.6 -227.2Z"], O="M1808.4 -138.8Q1808.4 -103.2 1797.8 -76.2Q1787.2 -49.2 1768.8 -31Q1750.4 -12.8 1725 -3.6Q1699.6 5.6 1670.4 5.6Q1642 5.6 1616.8 -3.6Q1591.6 -12.8 1572.8 -31Q1554 -49.2 1543.2 -76.2Q1532.4 -103.2 1532.4 -138.8Q1532.4 -174.4 1543.6 -201.4Q1554.8 -228.4 1573.8 -246.8Q1592.8 -265.2 1617.8 -274.4Q1642.8 -283.6 1670.4 -283.6Q1698.8 -283.6 1724 -274.4Q1749.2 -265.2 1768 -246.8Q1786.8 -228.4 1797.6 -201.4Q1808.4 -174.4 1808.4 -138.8Z";
const P='M1 62 C-2 30 22 4 60 0 C61 34 38 58 1 62Z';
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;

const css=document.createElement('style');
css.textContent=`
.logo svg{display:block;height:100%;width:auto}
.logo .lp{transition:transform .9s cubic-bezier(.65,0,.25,1)}
.logo .lt,.logo .lo,.logo .lpo{transition:none}
.logo.intro .lt{transform:translateY(300px);animation:lgRise .7s cubic-bezier(.65,0,.25,1) forwards}
.logo.intro .lo{opacity:0;transform:translate(1670px,-139px) rotate(-120deg) scale(.4) translate(-1670px,139px);
  animation:lgRoll .9s cubic-bezier(.65,0,.25,1) .3s forwards}
.logo.intro .lpo{transform:rotate(-46deg) scaleY(0) rotate(46deg);animation:lgOpen .5s cubic-bezier(.65,0,.25,1) 1s forwards}
@keyframes lgRise{to{transform:none}}
@keyframes lgRoll{to{opacity:1;transform:translate(1670px,-139px) rotate(0) scale(1) translate(-1670px,139px)}}
@keyframes lgOpen{to{transform:rotate(-46deg) scaleY(1) rotate(46deg)}}`;
document.head.appendChild(css);

const svg=()=>`<svg viewBox="0 0 2107 294" role="img" aria-label="ГЕШ СТОР"><g transform="translate(8.3 285.5)">
<g fill="#4A4A4C" stroke="#4A4A4C" stroke-width="12.5" stroke-linejoin="round">${L.map((d,i)=>`<path class="lt" style="animation-delay:${[0,.05,.1,.18,.23,.33][i]}s" d="${d}"/>`).join('')}</g>
<g class="lo"><path fill="#7451D6" stroke="#7451D6" stroke-width="12.5" stroke-linejoin="round" d="${O}"/>
<g transform="translate(1670.4 -138.8) scale(2.4)"><g class="lpo"><g class="lp"><path fill="var(--milk,#F6F2EE)" transform="translate(-30.5 -31)" d="${P}"/></g></g></g></g>
</g></svg>`;

const logos=[...document.querySelectorAll('.logo')];
logos.forEach(a=>{const img=a.querySelector('img'); if(img) img.outerHTML=svg();});
if(calm) return;

/* шапка */
const head=logos.find(a=>a.closest('nav')), foot=logos.find(a=>a.closest('footer'));
if(head){
  const lp=head.querySelector('.lp'); let turn=0;
  const spin=()=>{turn+=180; lp.style.transform=`rotate(${turn}deg)`;};
  let seen=false; try{seen=sessionStorage.getItem('geshIntro')==='1'; sessionStorage.setItem('geshIntro','1')}catch(e){}
  if(!seen){ head.classList.add('intro'); setTimeout(()=>head.classList.remove('intro'),1700); }
  setTimeout(()=>setInterval(()=>{ if(!document.hidden) spin(); },8000), seen?0:1700);
  head.addEventListener('click',spin);
  head.addEventListener('mouseenter',spin);
}

/* подвал */
if(foot){
  const lp=foot.querySelector('.lp'), s=foot.querySelector('svg');
  lp.style.transition='none';
  let on=false, tgt=0, cur=0, last=0, t0=performance.now();
  const aim=(x,y)=>{const r=s.getBoundingClientRect();
    const cx=r.left+r.width*1678.7/2107, cy=r.top+r.height*146.7/294;
    tgt=Math.atan2(y-cy,x-cx)*180/Math.PI+46; last=performance.now();};
  addEventListener('pointermove',e=>on&&aim(e.clientX,e.clientY),{passive:true});
  addEventListener('touchmove',e=>on&&aim(e.touches[0].clientX,e.touches[0].clientY),{passive:true});
  new IntersectionObserver(es=>{on=es[0].isIntersecting; if(on) requestAnimationFrame(tick);}).observe(foot);
  function tick(now){
    if(now-last>2500) tgt=Math.sin((now-t0)/1500)*22;
    cur+=(((tgt-cur+540)%360)-180)*.08;
    lp.style.transform=`rotate(${cur}deg)`;
    if(on) requestAnimationFrame(tick);
  }
}
})();
