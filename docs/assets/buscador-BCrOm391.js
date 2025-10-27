import"./style-TBYWEVep.js";import{s as L,p as T}from"./githubStart-DQa3QPhl.js";const w={"02":"Albacete","03":"Alicante","04":"Almería","01":"Álava",33:"Asturias","05":"Ávila","06":"Badajoz","07":"Illes Balears","08":"Barcelona",48:"Bizkaia","09":"Burgos",10:"Cáceres",11:"Cádiz",39:"Cantabria",12:"Castellón",13:"Ciudad Real",14:"Córdoba",15:"A Coruña",16:"Cuenca",20:"Gipuzkoa",17:"Girona",18:"Granada",19:"Guadalajara",21:"Huelva",22:"Huesca",23:"Jaén",24:"León",25:"Lleida",27:"Lugo",28:"Madrid",29:"Málaga",30:"Murcia",31:"Navarra",32:"Ourense",34:"Palencia",35:"Las Palmas",36:"Pontevedra",26:"La Rioja",37:"Salamanca",38:"Santa Cruz de Tenerife",40:"Segovia",41:"Sevilla",42:"Soria",43:"Tarragona",44:"Teruel",45:"Toledo",46:"Valencia",47:"Valladolid",49:"Zamora",50:"Zaragoza",51:"Ceuta",52:"Melilla",todas:"Puestos de trabajo en todas las provincias"};function x(o,l){let s=o[31];console.log("rpttexto_cambios: ",s);const a=s.split(":");let t="";if(a[0]=="S"){let n=a[1].split("|");console.log("PartesRPT: ",{partesRPT:n}),t="Si, ";let i=n[0],d=n[1],e=n[2];i!="="&&i!=null&&(t+=`<strong>Nivel:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${i}</mark>`),d!="="&&d!=null&&(t+=`<strong>Complemento:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${d}</mark>`),e!="="&&e!=null&&(t+=`<strong>Estado:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${e}</mark>`),t+=""}else a[0]=="NEW"?t+='<img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/new.png" alt="new"/> Nuevo puesto':t="No";return t}const M=()=>{const o=document.getElementById("cookie-banner"),l=document.getElementById("accept-cookies");localStorage.getItem("cookiesAccepted")||(o.style.display="block"),l.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","true"),o.style.display="none",s()}),localStorage.getItem("cookiesAccepted")&&s();function s(){console.log("Cargando Google AdSense...");const a=document.createElement("script");a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079",a.async=!0,a.setAttribute("crossorigin","anonymous"),document.head.appendChild(a)}};let P="1 de Junio del 2025";L();let h=0,D=1,I=3,S=5,_=8,A=10,N=11,O=13,b=14,j=15,f=19,z=25,G=27,H=28,q=29,r=30,c=new Map,v=0,p=0,E="",C=document.getElementById("rpttai"),$=document.getElementById("search"),g=document.getElementById("btn_enviar");document.getElementById("btn_info");document.getElementById("select_html");let k=document.getElementById("cuerpo"),y=document.getElementById("sVacantes"),m="";g.addEventListener("click",o=>{o.preventDefault(),E=$.value.toLowerCase(),g.innerHTML='<span aria-busy="true">Buscando...</span>',new Promise((s,a)=>{setTimeout(()=>{v=0,p=0,C.innerHTML="",c=new Map;let t=$.value;R(t),s("ok")},2e3)}).then(s=>{g.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                            <path d="M9 17h2"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                          </svg> Buscar`})});const R=(o,l=!1)=>{T.forEach(t=>{(t[_]==o||t[G]==o||t[z]==o||o=="todas")&&(t[f].includes(k.value)||k.value=="TODOS")&&(t[r].trim()==y.value.trim()||y.value=="TODOS")&&(c.get(t[h])==null?c.set(t[h],[t]):c.get(t[h]).push(t),t[r]=="V"&&v++,p++)});let s="",a=0;if(p<=0)s='<div class="noEncontrado"><h1>!  No se ha encontrado ningún dato <i class="bi bi-ban"></i> ¡</h1></div>';else{let t=1;s=`
        <h1> <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/city.png" alt="city"/> ${w[o]}: </h1>
        <p><mark class="mark-cont">${v}</mark> plazas vacantes de <strong>${p}</strong> puestos</p>`;for(let n of c.keys()){let i=0,d=`
            <div class="table-container">
            <table class="table">
              <thead data-theme="dark">
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
                    <th scope="col">Localidad (1)</th>
                    <th scope="col">Observa.</th>
                    <th class="col-cambios" scope="col">Últ.Cambios</th>
                 </tr>
                </thead>
                <tbody>
            `;a=0,c.get(n).forEach(e=>{a++;let B=x(e,P),u="";e[r]=="V"?(u="#aae3ba",i++):u="",m=e[q],m=="OEP"&&(m="OEP"),d+=`
                <tr>
                    <th class="td-text-small" scope="row">${a}</th>
                    <td class="td-text-small" style="background-color:${u};font-weight:bold">${e[r]}</td>
                    <td class="td-text-large">${e[I]}</td>
                    <td class="td-text-large">${e[S]}</td>
                    <td class="td-text-medio">${e[N]}</td>
                    <td class="td-text-small">${e[f]}</td>
                    <td class="td-text-small">${e[b]}</td>
                    <!-- <td>${e[b]}</td> -->
                    <td class="td-text-medio">${e[j]}</td>
                    <td class="td-text-large">${e[O]}</td>
                    <!-- <td>${E.toUpperCase()}</td> -->
                    <td class="td-text-small">${e[A]}</td>
                    <td class="td-text-small">${e[H]}</td>
                    <td class="td-text-small">${m}</td>
                    <td class="col-cambios">${B}</td>
                </tr>
                `}),d+="</tbody></table></div>",s+=`
            <details>
                <summary role="button">
                    <small>${t}. </small>${c.get(n)[0][D]}
                    <br>
                    <span class="span-total">Total puestos vacantes <mark>${i}</mark> de <strong>${c.get(n).length}</strong></span>
                        
                </summary>
                <div class="overflow-auto">
                    ${d}
                </div>
                
            </details>
            `,t++}}a>0&&(C.innerHTML=s),l==!1&&(document.getElementsByTagName("form")[0].classList="ocultar",document.getElementById("filtro").innerHTML='<button class="secondary">🎯 Mostrar Filtro</button>',document.getElementById("filtro").style.padding="5px")};let V=document.getElementById("filtro");V.addEventListener("click",()=>{document.getElementsByTagName("form")[0].classList=""});document.addEventListener("DOMContentLoaded",o=>{M()});
