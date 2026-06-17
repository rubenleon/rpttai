import{s as $}from"./githubStart-CkZZkJhH.js";import{_ as v}from"./buscador-DcJjoCVd.js";/* empty css             */import{c as b}from"./check-rpt-CSKtmCa-.js";$();const k="1 de Enero del 2026",y='<svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m12 19-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',C='<svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 7h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',S='<svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 6 12 2 8 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',P=[["Ministerio",1],["Centro directivo",3],["Unidad",5],["País unidad",7],["Provincia unidad",9],["Localidad unidad",10],["Id. puesto",11],["Denominación corta",12],["Denominación larga",13],["Nivel",14],["Complemento específico",15],["Tipo de puesto",16],["Provisión",17],["Administración pública",18],["Grupo/Subgrupo",19],["Cuerpo",20],["Titulación académica",21],["Formación específica",22],["País residencia",24],["Provincia residencia",26],["Localidad residencia",28],["Observaciones",29],["Estado",30],["Últimos cambios",31]],L=[["Identificación",[11,30,31]],["Organización",[1,3,5]],["Características del puesto",[12,13,14,15,16,17,18,19,20,21,22,29]],["Ubicación",[7,9,10,24,26,28]]],M=new Map(P.map(([e,t])=>[t,e])),E=new URLSearchParams(window.location.search),l=E.get("puesto")?.trim(),p=document.getElementById("puesto-detalle"),c=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),r=e=>{const t=String(e??"").trim();return t.length>0?c(t):'<span class="puesto-vacio">Sin dato</span>'},u=e=>{const t=String(e??"").trim();return t==="V"?"Vacante":t==="NV"?"No vacante":t||"Sin dato"},w=e=>{const t=String(e[19]??"").trim(),a=String(e[14]??"").trim(),o=String(e[15]??"").trim();return!t||!a||!o?null:`https://s-nt-s.github.io/age/sueldo/?${new URLSearchParams({grupo:t,nivel:a,especifico:o}).toString()}`},T=(e,t)=>{if(t===31)return b(e,k);if(t===30)return c(u(e[t]));if(t!==15)return r(e[t]);const a=w(e);return a?`<a class="puesto-link puesto-link-externo" href="${a}" target="_blank" rel="noopener noreferrer" aria-label="Calcular sueldo con complemento específico ${c(e[t])} en una página externa">${r(e[t])}</a>`:r(e[t])},x=(e,t,a)=>`
    <section class="puesto-card" aria-labelledby="${e.toLowerCase().replaceAll(" ","-")}">
        <h2 id="${e.toLowerCase().replaceAll(" ","-")}">${e}</h2>
        <dl class="puesto-grid">
            ${t.map(o=>`
                <div class="puesto-campo">
                    <dt>${M.get(o)}</dt>
                    <dd>${T(a,o)}</dd>
                </div>
            `).join("")}
        </dl>
    </section>
`,A=()=>{p.innerHTML=`
        <article class="puesto-card puesto-alerta">
            <h2>Puesto no encontrado</h2>
            <p>No se ha encontrado ningún puesto con el identificador <strong>${c(l??"")}</strong>.</p>
            <a class="puesto-accion" href="/buscador">Volver al buscador</a>
        </article>
    `},s=(e,t)=>{const a=document.head.querySelector(e);a&&a.setAttribute("content",t)},I=(e,t)=>{const a=`${e[11]} - ${e[13]} - RPT.OVH`,o=`Ficha del puesto ${e[11]}: ${e[13]}, ${u(e[30])}, grupo ${e[19]}, nivel ${e[14]}, complemento específico ${e[15]}.`;document.title=a,s('meta[name="description"]',o),s('meta[property="og:title"]',a),s('meta[property="og:description"]',o),s('meta[property="og:url"]',t),s('meta[name="twitter:title"]',a),s('meta[name="twitter:description"]',o),s('meta[property="twitter:url"]',t);const n=document.createElement("script");n.type="application/ld+json",n.textContent=JSON.stringify({"@context":"https://schema.org","@type":"JobPosting",title:String(e[13]??""),identifier:{"@type":"PropertyValue",name:"Id. puesto RPT",value:String(e[11]??"")},hiringOrganization:{"@type":"Organization",name:String(e[1]??"Administracion General del Estado")},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",addressLocality:String(e[28]||e[10]||""),addressRegion:String(e[26]||e[9]||""),addressCountry:"ES"}},employmentType:String(e[16]??""),description:o,url:t}),document.head.append(n)},N=e=>{const t=document.getElementById("puesto-compartir");t&&t.addEventListener("click",async()=>{const a={title:`${e[11]} - ${e[13]}`,text:`Puesto ${e[11]} en RPT.OVH`,url:window.location.href};if(navigator.share){await navigator.share(a);return}await navigator.clipboard.writeText(window.location.href),t.textContent="Enlace copiado",setTimeout(()=>{t.textContent="Compartir puesto"},1800)})},U=e=>{const t=String(e[28]??"").trim(),a=String(e[26]??"").trim(),o=String(e[10]??"").trim(),n=String(e[9]??"").trim();return t?{localidad:t,provincia:a,tipo:"Localidad residencia"}:o?{localidad:o,provincia:n,tipo:"Localidad unidad"}:null},V=async e=>{const t=document.getElementById("puesto-mapa-info"),a=document.getElementById("puesto-mapa"),o=U(e);if(!(!t||!a)){if(!o){t.textContent="No hay localidad disponible para mostrar el mapa.",a.hidden=!0;return}t.textContent=`Buscando ${o.tipo.toLowerCase()}: ${o.localidad}${o.provincia?`, ${o.provincia}`:""}`;try{const n=[o.localidad,o.provincia,"España"].filter(Boolean).join(", "),i=await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(n)}`);if(!i.ok)throw new Error("No se pudo consultar la ubicación");const d=(await i.json())[0];if(!d||!window.L){t.textContent=`No se ha podido localizar en el mapa: ${n}`,a.hidden=!0;return}const h=Number(d.lat),g=Number(d.lon),f=window.L.map(a).setView([h,g],12);window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(f),window.L.marker([h,g]).addTo(f).bindPopup(`${o.tipo}: ${o.localidad}`).openPopup(),t.textContent=`${o.tipo}: ${o.localidad}${o.provincia?`, ${o.provincia}`:""}`}catch{t.textContent="No se ha podido cargar la ubicación del mapa.",a.hidden=!0}}},R=async()=>{if(!l){p.innerHTML=`
            <article class="puesto-card puesto-alerta">
                <h2>Falta el identificador del puesto</h2>
                <p>Usa una URL con el formato <code>/puesto?puesto=IDPUESTO</code>.</p>
                <a class="puesto-accion" href="/buscador">Ir al buscador</a>
            </article>
        `;return}const{puestos:e}=await v(async()=>{const{puestos:i}=await import("./rpt-BLo-c_rw.js");return{puestos:i}},[]),t=e.find(i=>String(i[11]).trim()===l);if(!t){A();return}const a=`${t[11]} - ${t[13]}`,o=w(t),n=document.createElement("link");n.rel="canonical",n.href=`${window.location.origin}/puesto?puesto=${encodeURIComponent(l)}`,document.head.append(n),I(t,n.href),p.innerHTML=`
        <article class="puesto-hero">
            <div class="puesto-acciones" aria-label="Acciones del puesto">
                <a class="puesto-boton puesto-boton-secundario" href="/buscador">${y} Volver al buscador</a>
                ${o?`<a class="puesto-boton puesto-link-externo" href="${o}" target="_blank" rel="noopener noreferrer">${C} Calcular sueldo</a>`:""}
                <button id="puesto-compartir" class="puesto-boton" type="button">${S} Compartir puesto</button>
            </div>
            <p class="puesto-etiqueta">Puesto ${r(t[11])}</p>
            <h2>${r(a)}</h2>
            <p>${r(t[1])}</p>
            <div class="puesto-resumen">
                <span class="${t[30]==="V"?"span-vacante":"puesto-chip"}">${c(u(t[30]))}</span>
                <span class="puesto-chip">Nivel ${r(t[14])}</span>
                <span class="puesto-chip">Grupo ${r(t[19])}</span>
                <span class="puesto-chip">Complemento ${r(t[15])}</span>
                <span class="puesto-chip">${r(t[28]||t[10]||t[9]||t[26])}</span>
            </div>
        </article>
        ${L.map(([i,m])=>x(i,m,t)).join("")}
        <section class="puesto-card puesto-mapa-card" aria-labelledby="puesto-mapa-titulo">
            <h2 id="puesto-mapa-titulo">Mapa de ubicación</h2>
            <p id="puesto-mapa-info" class="puesto-mapa-info">Preparando mapa...</p>
            <div id="puesto-mapa" class="puesto-mapa" role="img" aria-label="Mapa con la ubicación del puesto"></div>
        </section>
    `,V(t),N(t)};R();
