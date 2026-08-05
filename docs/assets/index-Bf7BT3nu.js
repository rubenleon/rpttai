import{t as e}from"./githubStart-u1emfE8W.js";/* empty css             */import{i as t,n,r,t as i}from"./estadisticas-C647LRvQ.js";e();var a={A1:938,A2:r,B:5,C1:t,C2:58},o=document.getElementById(`cuerposRanking`);if(o){let e=Object.values(a).reduce((e,t)=>e+t,0),t=new Intl.NumberFormat(`es-ES`);o.innerHTML=Object.entries(a).sort(([,e],[,t])=>t-e).map(([n,r],i)=>{let a=r/e*100,o=a.toLocaleString(`es-ES`,{minimumFractionDigits:1,maximumFractionDigits:1});return`
        <div class="cuerpo-row${i===0?` cuerpo-row-destacado`:``}">
          <div class="cuerpo-label"><strong>${n}</strong><span>${o}%</span></div>
          <div class="cuerpo-track"><span style="width: ${a}%"></span></div>
          <data value="${r}">${t.format(r)} puestos</data>
        </div>
      `}).join(``)}document.addEventListener(`DOMContentLoaded`,e=>{});var s=document.getElementById(`totalesRPT`);if(s){let e=new Intl.NumberFormat(`es-ES`);s.innerHTML=[{valor:i,etiqueta:`Plazas de la AGE`,descripcion:`Total de puestos de la Relación de Puestos de Trabajo`},{valor:n,etiqueta:`Puestos TIC`,descripcion:`Puestos de informática en la AGE`},{valor:353,etiqueta:`Nuevos puestos TIC`,descripcion:`Nuevos puestos TIC de la última RPT`,enlace:`/nuevos-puestos`}].map(t=>`
      <div class="total-rpt-tarjeta${t.enlace?` total-rpt-tarjeta-enlace`:``}">
        ${t.enlace?`<a href="${t.enlace}" aria-label="${t.etiqueta}">
                <span class="total-rpt-valor">${e.format(t.valor)}</span>
                <span class="total-rpt-etiqueta">${t.etiqueta} ↗</span>
                <span class="total-rpt-descripcion">${t.descripcion}</span>
              </a>`:`<span class="total-rpt-valor">${e.format(t.valor)}</span>
               <span class="total-rpt-etiqueta">${t.etiqueta}</span>
               <span class="total-rpt-descripcion">${t.descripcion}</span>`}
      </div>
    `).join(``)}var c=0,l=document.querySelector(`.r`);l.addEventListener(`click`,e=>{if(c++,c==10){let e=prompt(`update RPT:`);l.innerHTML=`<div style="word-wrap: break-word;"><a href="${e}" target="_blank">${e}</a></div>`,c=0}});