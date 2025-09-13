import{s as L,p as T}from"./style-CZqZCQWb.js";const M={"02":"Albacete","03":"Alicante","04":"Almería","01":"Álava",33:"Asturias","05":"Ávila","06":"Badajoz","07":"Illes Balears","08":"Barcelona",48:"Bizkaia","09":"Burgos",10:"Cáceres",11:"Cádiz",39:"Cantabria",12:"Castellón",13:"Ciudad Real",14:"Córdoba",15:"A Coruña",16:"Cuenca",20:"Gipuzkoa",17:"Girona",18:"Granada",19:"Guadalajara",21:"Huelva",22:"Huesca",23:"Jaén",24:"León",25:"Lleida",27:"Lugo",28:"Madrid",29:"Málaga",30:"Murcia",31:"Navarra",32:"Ourense",34:"Palencia",35:"Las Palmas",36:"Pontevedra",26:"La Rioja",37:"Salamanca",38:"Santa Cruz de Tenerife",40:"Segovia",41:"Sevilla",42:"Soria",43:"Tarragona",44:"Teruel",45:"Toledo",46:"Valencia",47:"Valladolid",49:"Zamora",50:"Zaragoza",51:"Ceuta",52:"Melilla",todas:"Puestos de trabajo en todas las provincias"};function w(s,l){let o=s[31];console.log("rpttexto_cambios: ",o);const a=o.split(":");let e="";if(a[0]=="S"){let n=a[1].split("|");console.log("PartesRPT: ",{partesRPT:n}),e="Si, ";let r=n[0],i=n[1],t=n[2];r!="="&&r!=null&&(e+=`<strong>Nivel:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${r}</mark>`),i!="="&&i!=null&&(e+=`<strong>Complemento:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${i}</mark>`),t!="="&&t!=null&&(e+=`<strong>Estado:</strong> En la rpt <q><i>${l}</i></q> era: <mark>${t}</mark>`),e+=""}else a[0]=="NEW"?e+='<img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/new.png" alt="new"/> Nuevo puesto':e="No";return e}const I=()=>{const s=document.getElementById("cookie-banner"),l=document.getElementById("accept-cookies");localStorage.getItem("cookiesAccepted")||(s.style.display="block"),l.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","true"),s.style.display="none",o()}),localStorage.getItem("cookiesAccepted")&&o();function o(){console.log("Cargando Google AdSense...");const a=document.createElement("script");a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079",a.async=!0,a.setAttribute("crossorigin","anonymous"),document.head.appendChild(a)}};let P="1 de Junio del 2025";L();let h=0,x=1,S=3,_=5,D=8,O=10,A=11,N=13,b=14,j=15,$=19,z=29,d=30,c=new Map,v=0,u=0,C="",B=document.getElementById("rpttai"),k=document.getElementById("search"),m=document.getElementById("btn_enviar");document.getElementById("btn_info");document.getElementById("select_html");let y=document.getElementById("cuerpo"),E=document.getElementById("sVacantes"),p="";m.addEventListener("click",s=>{s.preventDefault(),C=k.value.toLowerCase(),console.log({$btn_enviar:m}),m.innerHTML='<span aria-busy="true">Buscando...</span>',new Promise((o,a)=>{setTimeout(()=>{v=0,u=0,B.innerHTML="",c=new Map;let e=k.value;G(e),o("ok")},2e3)}).then(o=>{m.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                            <path d="M9 17h2"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                          </svg> Buscar`})});const G=(s,l=!1)=>{console.log("codigo: ",{codigo:s}),T.forEach(e=>{(e[D]==s||s=="todas")&&(e[$].includes(y.value)||y.value=="TODOS")&&(e[d].trim()==E.value.trim()||E.value=="TODOS")&&(c.get(e[h])==null?c.set(e[h],[e]):c.get(e[h]).push(e),e[d]=="V"&&v++,u++)});let o="",a=0;if(u<=0)o='<div class="noEncontrado"><h1>!  No se ha encontrado ningún dato <i class="bi bi-ban"></i> ¡</h1></div>';else{let e=1;o=`
        <h1> <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/city.png" alt="city"/> ${M[s]}: </h1>
        <p><mark class="mark-cont">${v}</mark> plazas vacantes de <strong>${u}</strong> puestos</p>`;for(let n of c.keys()){let r=0,i=`
            <div class="table-container">
            <table class="table">
              <thead data-theme="dark">
                <tr>
                    <th scope="col">#</th>
                    
                    <th scope="col">Estado</th>
                    <th scope="col">D.CDir</th>
                    <th scope="col">Unidad</th>
                    <!-- <th scope="col">Id.Puesto</th> -->
                    <th scope="col">Grupo</th>
                    <th scope="col">Nivel</th>
                    <th scope="col">C.Específico</th>
                    <th scope="col">Descripción</th>
                    <!-- <th scope="col">Provincia</th> -->
                    <th scope="col">Localidad</th>
                    <th scope="col">Observa.</th>
                    <th class="col-cambios" scope="col">Cambios</th>
                 </tr>
                </thead>
                <tbody>
            `;a=0,c.get(n).forEach(t=>{a++;let f=w(t,P);console.log("Resultado: ",{cambiosRPT:f});let g="";t[d]=="V"?(g="#aae3ba",r++):g="",p=t[z],p=="OEP"&&(p="OEP"),i+=`
                <tr>
                    <th class="td-text-small" scope="row">${a}</th>
                    
                    <td class="td-text-small" style="background-color:${g};font-weight:bold">${t[d]}</td>
                    <td class="td-text-large">${t[S]}</td>
                    <td class="td-text-large">${t[_]}</td>
                    <!-- <td>${t[A]}</td> -->
                    <td class="td-text-small">${t[$]}</td>
                    <td class="td-text-small">${t[b]}</td>
                    <!-- <td>${t[b]}</td> -->
                    <td class="td-text-medio">${t[j]}</td>
                    <td class="td-text-large">${t[N]}</td>
                    <!-- <td>${C.toUpperCase()}</td> -->
                    <td class="td-text-small">${t[O]}</td>
                    <td class="td-text-small">${p}</td>
                    <td class="col-cambios">${f}</td>
                </tr>
                `}),i+="</tbody></table></div>",o+=`
            <details>
                <summary role="button">
                    <small>${e}. </small>${c.get(n)[0][x]}
                    <br>
                    <span class="span-total">Total puestos vacantes <mark>${r}</mark> de <strong>${c.get(n).length}</strong></span>
                        
                </summary>
                <div class="overflow-auto">
                    ${i}
                </div>
                
            </details>
            `,e++}}a>0&&(B.innerHTML=o),l==!1&&(document.getElementsByTagName("form")[0].classList="ocultar",document.getElementById("filtro").innerHTML='<button class="secondary">🎯 Mostrar Filtro</button>',document.getElementById("filtro").style.padding="5px")};let H=document.getElementById("filtro");H.addEventListener("click",()=>{document.getElementsByTagName("form")[0].classList=""});document.addEventListener("DOMContentLoaded",s=>{console.log("Cargado el DOM."),I()});
