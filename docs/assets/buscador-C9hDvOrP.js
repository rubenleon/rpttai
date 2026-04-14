import{s as B}from"./githubStart-BWgQO704.js";import{p as M}from"./buscador-BPVc5QgZ.js";const x={"02":"Albacete","03":"Alicante","04":"Almería","01":"Álava",33:"Asturias","05":"Ávila","06":"Badajoz","07":"Illes Balears","08":"Barcelona",48:"Bizkaia","09":"Burgos",10:"Cáceres",11:"Cádiz",39:"Cantabria",12:"Castellón",13:"Ciudad Real",14:"Córdoba",15:"A Coruña",16:"Cuenca",20:"Gipuzkoa",17:"Girona",18:"Granada",19:"Guadalajara",21:"Huelva",22:"Huesca",23:"Jaén",24:"León",25:"Lleida",27:"Lugo",28:"Madrid",29:"Málaga",30:"Murcia",31:"Navarra",32:"Ourense",34:"Palencia",35:"Las Palmas",36:"Pontevedra",26:"La Rioja",37:"Salamanca",38:"Santa Cruz de Tenerife",40:"Segovia",41:"Sevilla",42:"Soria",43:"Tarragona",44:"Teruel",45:"Toledo",46:"Valencia",47:"Valladolid",49:"Zamora",50:"Zaragoza",51:"Ceuta",52:"Melilla",todas:"Puestos de trabajo en todas las provincias"};function P(o,l){let s=o[31];console.log("rpttexto_cambios: ",s);const a=s.split(":");let e="";if(a[0]=="S"){let n=a[1].split("|");console.log("PartesRPT: ",{partesRPT:n}),e="Si, ";let d=n[0],i=n[1],t=n[2];d!="="&&d!=null&&(e+=`<strong>Nivel:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${d}</mark>`),i!="="&&i!=null&&(e+=`<strong>Complemento:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${i}</mark>`),t!="="&&t!=null&&(e+=`<strong>Estado:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${t}</mark>`),e+=""}else a[0]=="NEW"?e+='<img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/new.png" alt="new"/> Nuevo puesto':e="No";return e}const S=()=>{const o=document.getElementById("cookie-banner"),l=document.getElementById("accept-cookies");localStorage.getItem("cookiesAccepted")||(o.style.display="block"),l.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","true"),o.style.display="none",s()}),localStorage.getItem("cookiesAccepted")&&s();function s(){console.log("Cargando Google AdSense...");const a=document.createElement("script");a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079",a.async=!0,a.setAttribute("crossorigin","anonymous"),document.head.appendChild(a)}};let T="1 de Enero del 2026";B();let h=0,w=1,D=3,I=5,_=8,A=10,O=11,j=13,f=14,q=15,b=19,z=25,G=27,N=28,H=29,r=30,c=new Map,v=0,p=0,E="",C=document.getElementById("contenedor-puestos"),y=document.getElementById("search"),g=document.getElementById("btn_enviar");document.getElementById("btn_info");document.getElementById("select_html");let $=document.getElementById("cuerpo"),k=document.getElementById("sVacantes"),m="";g.addEventListener("click",o=>{o.preventDefault(),E=y.value.toLowerCase(),g.innerHTML='<span aria-busy="true">Buscando...</span>',new Promise((s,a)=>{setTimeout(()=>{v=0,p=0,C.innerHTML="",c=new Map;let e=y.value;R(e),s("ok")},2e3)}).then(s=>{g.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                            <path d="M9 17h2"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                          </svg> Buscar`})});const R=(o,l=!1)=>{M.forEach(e=>{(e[_]==o||e[G]==o||e[z]==o||o=="todas")&&(e[b].includes($.value)||$.value=="TODOS")&&(e[r].trim()==k.value.trim()||k.value=="TODOS")&&(c.get(e[h])==null?c.set(e[h],[e]):c.get(e[h]).push(e),e[r]=="V"&&v++,p++)});let s="",a=0;if(p<=0)s='<div class="noEncontrado"><h1>!  No se ha encontrado ningún dato <i class="bi bi-ban"></i> ¡</h1></div>';else{let e=1;s=`
        <h1> <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/city.png" alt="city"/> ${x[o]}: </h1>
        <p><mark class="mark-cont">${v}</mark> plazas vacantes de <strong>${p}</strong> puestos</p>`;for(let n of c.keys()){let d=0,i=`
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
            `;a=0,c.get(n).forEach(t=>{a++;let L=P(t,T),u="";t[r]=="V"?(u="span-vacante",d++):u="",m=t[H],m=="OEP"&&(m="OEP"),i+=`
                <tr>
                    <th class="td-text-small" scope="row">${a}</th>
                    <td class="td-text-small"><span class="${u}">${t[r]}</span></td>
                    <td class="td-text-large">${t[D]}</td>
                    <td class="td-text-large">${t[I]}</td>
                    <td class="td-text-medio">${t[O]}</td>
                    <td class="td-text-small">${t[b]}</td>
                    <td class="td-text-small">${t[f]}</td>
                    <!-- <td>${t[f]}</td> -->
                    <td class="td-text-medio">${t[q]}</td>
                    <td class="td-text-large">${t[j]}</td>
                    <!-- <td>${E.toUpperCase()}</td> -->
                    <td class="td-text-small">${t[A]}</td>
                    <td class="td-text-small">${t[N]}</td>
                    <td class="td-text-small">${m}</td>
                    <td class="col-cambios">${L}</td>
                </tr>
                `}),i+="</tbody></table></div>",s+=`
            <details>
                <summary role="button">
                    <div class="summary-titulo">
                        <span class="summary-cont">${e}. </span>
                        <p>${c.get(n)[0][w]}</p>
                    </div>
                    <div class="summary-total">Total puestos vacantes <mark>${d}</mark> de <strong>${c.get(n).length}</strong></div>
                        
                </summary>
                <div class="overflow-auto">
                    ${i}
                </div>
                
            </details>
            `,e++}}a>0&&(C.innerHTML=s),l==!1&&(document.querySelector("#form-contenedor").classList="ocultar",document.getElementById("filtro").innerHTML='<button class="secondary">🎯 Mostrar formulario</button>',document.getElementById("filtro").style.padding="5px")};let V=document.getElementById("filtro");V.addEventListener("click",()=>{document.querySelector("#form-contenedor").classList=""});document.addEventListener("DOMContentLoaded",o=>{S()});
