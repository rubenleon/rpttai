import{t as e}from"./githubStart-B6S0mawn.js";import{t}from"./check-rpt-TEPsPCvM.js";import{t as n}from"./table-sort-eicihVap.js";import{t as r}from"./preload-helper-PQJXhb1v.js";var i={"02":`Albacete`,"03":`Alicante`,"04":`Almería`,"01":`Álava`,33:`Asturias`,"05":`Ávila`,"06":`Badajoz`,"07":`Illes Balears`,"08":`Barcelona`,48:`Bizkaia`,"09":`Burgos`,10:`Cáceres`,11:`Cádiz`,39:`Cantabria`,12:`Castellón`,13:`Ciudad Real`,14:`Córdoba`,15:`A Coruña`,16:`Cuenca`,20:`Gipuzkoa`,17:`Girona`,18:`Granada`,19:`Guadalajara`,21:`Huelva`,22:`Huesca`,23:`Jaén`,24:`León`,25:`Lleida`,27:`Lugo`,28:`Madrid`,29:`Málaga`,30:`Murcia`,31:`Navarra`,32:`Ourense`,34:`Palencia`,35:`Las Palmas`,36:`Pontevedra`,26:`La Rioja`,37:`Salamanca`,38:`Santa Cruz de Tenerife`,40:`Segovia`,41:`Sevilla`,42:`Soria`,43:`Tarragona`,44:`Teruel`,45:`Toledo`,46:`Valencia`,47:`Valladolid`,49:`Zamora`,50:`Zaragoza`,51:`Ceuta`,52:`Melilla`,todas:`Puestos de trabajo en todas las provincias`},a=()=>{let e=document.getElementById(`cookie-banner`),t=document.getElementById(`accept-cookies`);localStorage.getItem(`cookiesAccepted`)||(e.style.display=`block`),t.addEventListener(`click`,function(){localStorage.setItem(`cookiesAccepted`,`true`),e.style.display=`none`,n()}),localStorage.getItem(`cookiesAccepted`)&&n();function n(){console.log(`Cargando Google AdSense...`);let e=document.createElement(`script`);e.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079`,e.async=!0,e.setAttribute(`crossorigin`,`anonymous`),document.head.appendChild(e)}},o=`1 de Abril del 2026`;e();var s=0,c=1,l=3,u=5,d=8,f=10,p=11,m=13,h=14,g=15,_=19,v=25,y=27,b=28,x=29,S=30,C=new Map,w=0,T=0,E=``,D=document.getElementById(`contenedor-puestos`),O=document.getElementById(`search`),k=document.getElementById(`btn_enviar`);document.getElementById(`btn_info`),document.getElementById(`select_html`);var A=document.getElementById(`cuerpo`),j=document.getElementById(`sVacantes`),M=``,N=[],P=async()=>{N.length>0||(N=(await r(()=>import(`./rpt-Comny1fQ.js`),[])).puestos)},F=e=>{let t=String(e??``).trim();return t===`V`?`Vacante`:t===`NV`?`No vacante`:t};k.addEventListener(`click`,e=>{e.preventDefault(),E=O.value.toLowerCase(),k.innerHTML=`<span aria-busy="true">Buscando...</span>`,requestAnimationFrame(async()=>{await P(),w=0,T=0,D.innerHTML=``,C=new Map;let e=O.value;I(e),k.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                            <path d="M9 17h2"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                          </svg> Buscar`})});var I=(e,n=!1)=>{N.forEach(t=>{(t[d]==e||t[y]==e||t[v]==e||e==`todas`)&&(t[_].includes(A.value)||A.value==`TODOS`)&&(t[S].trim()==j.value.trim()||j.value==`TODOS`)&&(C.get(t[s])==null?C.set(t[s],[t]):C.get(t[s]).push(t),t[S]==`V`&&w++,T++)});let r=``,a=0;if(T<=0)r=`<div class="noEncontrado"><h1>!  No se ha encontrado ningún dato <i class="bi bi-ban"></i> ¡</h1></div>`;else{let n=1,s=0;r=`
        <h1> <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/city.png" alt="city"/> ${i[e]}: </h1>
        <p><mark class="mark-cont">${w}</mark> plazas vacantes de <strong>${T}</strong> puestos</p>`;for(let e of C.keys()){let i=0,d=`
            <div class="tablaMinisterios-container">
            <table class="tablaMinisterios">
              <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Estado</th>
                    <th scope="col">D.CDir</th>
                    <th scope="col">Unidad</th>
                    <th scope="col">Id.Puesto</th>
                    <th scope="col">Grupo</th>
                    <th scope="col">Nivel</th>
                    <th scope="col">C.Específico</th>
                    <th scope="col">Descripción</th>
                    <!-- <th scope="col">Provincia</th> -->
                    <th scope="col">Localidad</th>
                    <th scope="col">Localidad Residencia</th>
                    <th scope="col">Observa.</th>
                    <th class="col-cambios" scope="col">Últ.Cambios</th>
                 </tr>
                </thead>
                <tbody>
            `;a=0,C.get(e).forEach(e=>{s++,a++;let n=t(e,o),r=``;e[S]==`V`?(r=`span-vacante`,i++):r=``,M=e[x],M==`OEP`&&(M=`OEP`),d+=`
                <tr>
                    <th class="td-text-small" scope="row">${a}</th>
                    <td class="td-text-small"><span class="${r}">${F(e[S])}</span></td>
                    <td class="td-text-large">${e[l]}</td>
                    <td class="td-text-large">${e[u]}</td>
                    <td class="td-text-medio"><a class="puesto-link" href="/puesto?puesto=${encodeURIComponent(e[p])}">${e[p]}</a></td>
                    <td class="td-text-small">${e[_]}</td>
                    <td class="td-text-small">${e[h]}</td>
                    <!-- <td>${e[h]}</td> -->
                    <td class="td-text-medio">${e[g]}</td>
                    <td class="td-text-large">${e[m]}</td>
                    <!-- <td>${E.toUpperCase()}</td> -->
                    <td class="td-text-small">${e[f]}</td>
                    <td class="td-text-small">${e[b]}</td>
                    <td class="td-text-small">${M}</td>
                    <td class="col-cambios">${n}</td>
                </tr>
                `}),d+=`</tbody></table></div>`,r+=`
            <details>
                <summary role="button">
                    <div class="summary-titulo">
                        <span class="summary-cont">${n}. </span>
                        <p>${C.get(e)[0][c]}</p>
                    </div>
                    <div class="summary-total">Total puestos vacantes <mark>${i}</mark> de <strong>${C.get(e).length}</strong></div>
                        
                </summary>
                <div class="overflow-auto">
                    ${d}
                </div>
                
            </details>
            `,n++}}a>0&&(D.innerHTML=r),n==0&&(document.querySelector(`#form-contenedor`).classList=`ocultar`,document.getElementById(`filtro`).innerHTML=`<button class="secondary"><svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 12h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 19h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Mostrar formulario</button>`,document.getElementById(`filtro`).style.padding=`5px`)};document.getElementById(`filtro`).addEventListener(`click`,()=>{document.querySelector(`#form-contenedor`).classList=``}),document.addEventListener(`DOMContentLoaded`,e=>{a(),n()});