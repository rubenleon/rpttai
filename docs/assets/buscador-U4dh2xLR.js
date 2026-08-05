import{t as e}from"./githubStart-u1emfE8W.js";import{t}from"./check-rpt-TEPsPCvM.js";import{t as n}from"./table-sort-eicihVap.js";/* empty css                 */import{t as r}from"./preload-helper-Czpn1I53.js";var i={"02":`Albacete`,"03":`Alicante`,"04":`Almería`,"01":`Álava`,33:`Asturias`,"05":`Ávila`,"06":`Badajoz`,"07":`Illes Balears`,"08":`Barcelona`,48:`Bizkaia`,"09":`Burgos`,10:`Cáceres`,11:`Cádiz`,39:`Cantabria`,12:`Castellón`,13:`Ciudad Real`,14:`Córdoba`,15:`A Coruña`,16:`Cuenca`,20:`Gipuzkoa`,17:`Girona`,18:`Granada`,19:`Guadalajara`,21:`Huelva`,22:`Huesca`,23:`Jaén`,24:`León`,25:`Lleida`,27:`Lugo`,28:`Madrid`,29:`Málaga`,30:`Murcia`,31:`Navarra`,32:`Ourense`,34:`Palencia`,35:`Las Palmas`,36:`Pontevedra`,26:`La Rioja`,37:`Salamanca`,38:`Santa Cruz de Tenerife`,40:`Segovia`,41:`Sevilla`,42:`Soria`,43:`Tarragona`,44:`Teruel`,45:`Toledo`,46:`Valencia`,47:`Valladolid`,49:`Zamora`,50:`Zaragoza`,51:`Ceuta`,52:`Melilla`,todas:`Puestos de trabajo en todas las provincias`},a=()=>{let e=document.getElementById(`cookie-banner`),t=document.getElementById(`accept-cookies`);localStorage.getItem(`cookiesAccepted`)||(e.style.display=`block`),t.addEventListener(`click`,function(){localStorage.setItem(`cookiesAccepted`,`true`),e.style.display=`none`,n()}),localStorage.getItem(`cookiesAccepted`)&&n();function n(){console.log(`Cargando Google AdSense...`);let e=document.createElement(`script`);e.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079`,e.async=!0,e.setAttribute(`crossorigin`,`anonymous`),document.head.appendChild(e)}},o=`1 de Abril del 2026`;e();var s=0,c=1,l=3,u=5,d=8,f=10,p=11,m=12,h=13,g=14,_=15,v=19,y=25,b=26,x=27,S=28,C=29,w=30,T=new Map,E=0,D=0,O=``,k=``,A=document.getElementById(`contenedor-puestos`),j=document.getElementById(`search`),M=document.getElementById(`btn_enviar`);document.getElementById(`btn_info`),document.getElementById(`select_html`);var N=document.getElementById(`cuerpo`),P=document.getElementById(`sVacantes`),F=``,I=[],L=async()=>{I.length>0||(I=(await r(()=>import(`./rpt-D4SbeSDs.js`),[])).puestos)},R=e=>{let t=String(e??``).trim();return t===`V`?`Vacante`:t===`NV`?`No vacante`:t},z=async()=>{O=j.value.toLowerCase(),M.innerHTML=`<span aria-busy="true">Buscando...</span>`,await L(),E=0,D=0,A.innerHTML=``,T=new Map;let e=j.value;V(e),M.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                            <path d="M9 17h2"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                          </svg> Buscar`};M.addEventListener(`click`,e=>{e.preventDefault(),k=``,z()});function B(e){let t={á:`a`,é:`e`,í:`i`,ó:`o`,ú:`u`,Á:`A`,É:`E`,Í:`I`,Ó:`O`,Ú:`U`};return e.split(``).map(e=>t[e]||e).join(``).toString()}var V=(e,n=!1)=>{let r=k?B(k).toLowerCase():``;I.forEach(t=>{(t[d]==e||t[x]==e||t[y]==e||e==`todas`)&&(!r||[t[h],t[m],t[l],t[u],t[f],t[S],t[b]].some(e=>B(String(e??``)).toLowerCase().includes(r)))&&(t[v].includes(N.value)||N.value==`TODOS`)&&(t[w].trim()==P.value.trim()||P.value==`TODOS`)&&(T.get(t[s])==null?T.set(t[s],[t]):T.get(t[s]).push(t),t[w]==`V`&&E++,D++)});let a=``,j=0;if(D<=0)a=`<div class="noEncontrado"><h1>!  No se ha encontrado ningún dato <i class="bi bi-ban"></i> ¡</h1></div>`;else{let n=1,s=0;a=`
        <h1> <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/city.png" alt="city"/> ${i[e]}: ${r?`<span class="busqueda-texto">«${k}»</span>`:``} </h1>
        <p><mark class="mark-cont">${E}</mark> plazas vacantes de <strong>${D}</strong> puestos</p>`;for(let e of T.keys()){let r=0,i=`
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
            `;j=0,T.get(e).forEach(e=>{s++,j++;let n=t(e,o),a=``;e[w]==`V`?(a=`span-vacante`,r++):a=``,F=e[C],F==`OEP`&&(F=`OEP`),i+=`
                <tr>
                    <th class="td-text-small" scope="row">${j}</th>
                    <td class="td-text-small"><span class="${a}">${R(e[w])}</span></td>
                    <td class="td-text-large">${e[l]}</td>
                    <td class="td-text-large">${e[u]}</td>
                    <td class="td-text-medio"><a class="puesto-link" href="/puesto?puesto=${encodeURIComponent(e[p])}">${e[p]}</a></td>
                    <td class="td-text-small">${e[v]}</td>
                    <td class="td-text-small">${e[g]}</td>
                    <!-- <td>${e[g]}</td> -->
                    <td class="td-text-medio">${e[_]}</td>
                    <td class="td-text-large">${e[h]}</td>
                    <!-- <td>${O.toUpperCase()}</td> -->
                    <td class="td-text-small">${e[f]}</td>
                    <td class="td-text-small">${e[S]}</td>
                    <td class="td-text-small">${F}</td>
                    <td class="col-cambios">${n}</td>
                </tr>
                `}),i+=`</tbody></table></div>`,a+=`
            <details>
                <summary role="button">
                    <div class="summary-titulo">
                        <span class="summary-cont">${n}. </span>
                        <p>${T.get(e)[0][c]}</p>
                    </div>
                    <div class="summary-total">Total puestos vacantes <mark>${r}</mark> de <strong>${T.get(e).length}</strong></div>
                        
                </summary>
                <div class="overflow-auto">
                    ${i}
                </div>
                
            </details>
            `,n++}}j>0&&(A.innerHTML=a),n==0&&(document.querySelector(`#form-contenedor`).classList=`ocultar`,document.getElementById(`filtro`).innerHTML=`<button class="secondary"><svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 12h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 19h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Mostrar formulario</button>`,document.getElementById(`filtro`).style.padding=`5px`)};document.getElementById(`filtro`).addEventListener(`click`,()=>{document.querySelector(`#form-contenedor`).classList=``}),document.addEventListener(`DOMContentLoaded`,e=>{let t=(new URLSearchParams(window.location.search).get(`q`)||``).trim();t&&(k=t,j.value=`todas`,N.value=`TODOS`,P.value=`TODOS`,z()),a(),n()});