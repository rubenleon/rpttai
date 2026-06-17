import{s as _}from"./githubStart-CkZZkJhH.js";import{_ as w}from"./buscador-DcJjoCVd.js";import{c as I}from"./check-rpt-CSKtmCa-.js";import{e as D}from"./table-sort-JVNqLWVj.js";const S={"02":"Albacete","03":"Alicante","04":"Almería","01":"Álava",33:"Asturias","05":"Ávila","06":"Badajoz","07":"Illes Balears","08":"Barcelona",48:"Bizkaia","09":"Burgos",10:"Cáceres",11:"Cádiz",39:"Cantabria",12:"Castellón",13:"Ciudad Real",14:"Córdoba",15:"A Coruña",16:"Cuenca",20:"Gipuzkoa",17:"Girona",18:"Granada",19:"Guadalajara",21:"Huelva",22:"Huesca",23:"Jaén",24:"León",25:"Lleida",27:"Lugo",28:"Madrid",29:"Málaga",30:"Murcia",31:"Navarra",32:"Ourense",34:"Palencia",35:"Las Palmas",36:"Pontevedra",26:"La Rioja",37:"Salamanca",38:"Santa Cruz de Tenerife",40:"Segovia",41:"Sevilla",42:"Soria",43:"Tarragona",44:"Teruel",45:"Toledo",46:"Valencia",47:"Valladolid",49:"Zamora",50:"Zaragoza",51:"Ceuta",52:"Melilla",todas:"Puestos de trabajo en todas las provincias"},T=()=>{const e=document.getElementById("cookie-banner"),o=document.getElementById("accept-cookies");localStorage.getItem("cookiesAccepted")||(e.style.display="block"),o.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","true"),e.style.display="none",l()}),localStorage.getItem("cookiesAccepted")&&l();function l(){console.log("Cargando Google AdSense...");const s=document.createElement("script");s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079",s.async=!0,s.setAttribute("crossorigin","anonymous"),document.head.appendChild(s)}};let x="1 de Enero del 2026";_();let h=0,P=1,A=3,O=5,V=8,z=10,b=11,G=13,y=14,j=15,k=19,H=25,R=27,N=28,U=29,c=30,n=new Map,g=0,d=0,L="",B=document.getElementById("contenedor-puestos"),$=document.getElementById("search"),m=document.getElementById("btn_enviar");document.getElementById("btn_info");document.getElementById("select_html");let E=document.getElementById("cuerpo"),C=document.getElementById("sVacantes"),r="",v=[];const q=async()=>{if(v.length>0)return;v=(await w(()=>import("./rpt-BLo-c_rw.js"),[])).puestos},Z=e=>{const o=String(e??"").trim();return o==="V"?"Vacante":o==="NV"?"No vacante":o};m.addEventListener("click",e=>{e.preventDefault(),L=$.value.toLowerCase(),m.innerHTML='<span aria-busy="true">Buscando...</span>',requestAnimationFrame(async()=>{await q(),g=0,d=0,B.innerHTML="",n=new Map;let o=$.value;F(o),m.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                            <path d="M9 17h2"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                          </svg> Buscar`})});const F=(e,o=!1)=>{v.forEach(a=>{(a[V]==e||a[R]==e||a[H]==e||e=="todas")&&(a[k].includes(E.value)||E.value=="TODOS")&&(a[c].trim()==C.value.trim()||C.value=="TODOS")&&(n.get(a[h])==null?n.set(a[h],[a]):n.get(a[h]).push(a),a[c]=="V"&&g++,d++)});let l="",s=0;if(d<=0)l='<div class="noEncontrado"><h1>!  No se ha encontrado ningún dato <i class="bi bi-ban"></i> ¡</h1></div>';else{let a=1;l=`
        <h1> <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/city.png" alt="city"/> ${S[e]}: </h1>
        <p><mark class="mark-cont">${g}</mark> plazas vacantes de <strong>${d}</strong> puestos</p>`;for(let i of n.keys()){let f=0,u=`
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
            `;s=0,n.get(i).forEach(t=>{s++;let M=I(t,x),p="";t[c]=="V"?(p="span-vacante",f++):p="",r=t[U],r=="OEP"&&(r="OEP"),u+=`
                <tr>
                    <th class="td-text-small" scope="row">${s}</th>
                    <td class="td-text-small"><span class="${p}">${Z(t[c])}</span></td>
                    <td class="td-text-large">${t[A]}</td>
                    <td class="td-text-large">${t[O]}</td>
                    <td class="td-text-medio"><a class="puesto-link" href="/puesto?puesto=${encodeURIComponent(t[b])}">${t[b]}</a></td>
                    <td class="td-text-small">${t[k]}</td>
                    <td class="td-text-small">${t[y]}</td>
                    <!-- <td>${t[y]}</td> -->
                    <td class="td-text-medio">${t[j]}</td>
                    <td class="td-text-large">${t[G]}</td>
                    <!-- <td>${L.toUpperCase()}</td> -->
                    <td class="td-text-small">${t[z]}</td>
                    <td class="td-text-small">${t[N]}</td>
                    <td class="td-text-small">${r}</td>
                    <td class="col-cambios">${M}</td>
                </tr>
                `}),u+="</tbody></table></div>",l+=`
            <details>
                <summary role="button">
                    <div class="summary-titulo">
                        <span class="summary-cont">${a}. </span>
                        <p>${n.get(i)[0][P]}</p>
                    </div>
                    <div class="summary-total">Total puestos vacantes <mark>${f}</mark> de <strong>${n.get(i).length}</strong></div>
                        
                </summary>
                <div class="overflow-auto">
                    ${u}
                </div>
                
            </details>
            `,a++}}s>0&&(B.innerHTML=l),o==!1&&(document.querySelector("#form-contenedor").classList="ocultar",document.getElementById("filtro").innerHTML='<button class="secondary"><svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 12h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 19h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Mostrar formulario</button>',document.getElementById("filtro").style.padding="5px")};let J=document.getElementById("filtro");J.addEventListener("click",()=>{document.querySelector("#form-contenedor").classList=""});document.addEventListener("DOMContentLoaded",e=>{T(),D()});
