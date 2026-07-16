import{t as e}from"./githubStart-B6S0mawn.js";/* empty css             */e();var t={A1:975,A2:1959,B:5,C1:5740,C2:58},n=document.getElementById(`cuerposRanking`);if(n){let e=Object.values(t).reduce((e,t)=>e+t,0),r=new Intl.NumberFormat(`es-ES`);n.innerHTML=Object.entries(t).sort(([,e],[,t])=>t-e).map(([t,n],i)=>{let a=n/e*100,o=a.toLocaleString(`es-ES`,{minimumFractionDigits:1,maximumFractionDigits:1});return`
        <div class="cuerpo-row${i===0?` cuerpo-row-destacado`:``}">
          <div class="cuerpo-label"><strong>${t}</strong><span>${o}%</span></div>
          <div class="cuerpo-track"><span style="width: ${a}%"></span></div>
          <data value="${n}">${r.format(n)} puestos</data>
        </div>
      `}).join(``)}document.addEventListener(`DOMContentLoaded`,e=>{});var r=0,i=document.querySelector(`.r`);i.addEventListener(`click`,e=>{if(r++,r==10){let e=prompt(`update RPT:`);i.innerHTML=`<div style="word-wrap: break-word;"><a href="${e}" target="_blank">${e}</a></div>`,r=0}});