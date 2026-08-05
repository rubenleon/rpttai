import{t as e}from"./githubStart-u1emfE8W.js";/* empty css             */import{t}from"./check-rpt-TEPsPCvM.js";/* empty css                 */import{t as n}from"./preload-helper-Czpn1I53.js";e();var r=`1 de Abril del 2026`,i=`<svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m12 19-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,a=`<svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 7h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,o=`<svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 6 12 2 8 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,s=[[`Ministerio`,1],[`Centro directivo`,3],[`Unidad`,5],[`País unidad`,7],[`Provincia unidad`,9],[`Localidad unidad`,10],[`Id. puesto`,11],[`Denominación corta`,12],[`Denominación larga`,13],[`Nivel`,14],[`Complemento específico`,15],[`Tipo de puesto`,16],[`Provisión`,17],[`Administración pública`,18],[`Grupo/Subgrupo`,19],[`Cuerpo`,20],[`Titulación académica`,21],[`Formación específica`,22],[`País residencia`,24],[`Provincia residencia`,26],[`Localidad residencia`,28],[`Observaciones`,29],[`Estado`,30],[`Últimos cambios`,31]],c=[[`Identificación`,[11,30,31]],[`Organización`,[1,3,5]],[`Características del puesto`,[12,13,14,15,16,17,18,19,20,21,22,29]],[`Ubicación`,[7,9,10,24,26,28]]],l=new Map(s.map(([e,t])=>[t,e])),u=new URLSearchParams(window.location.search).get(`puesto`)?.trim(),d=document.getElementById(`puesto-detalle`),f=e=>String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`),p=e=>{let t=String(e??``).trim();return t.length>0?f(t):`<span class="puesto-vacio">Sin dato</span>`},m=e=>{let t=String(e??``).trim();return t===`V`?`Vacante`:t===`NV`?`No vacante`:t||`Sin dato`},h=e=>{let t=String(e[19]??``).trim(),n=String(e[14]??``).trim(),r=String(e[15]??``).trim();return!t||!n||!r?null:`https://s-nt-s.github.io/age/sueldo/?${new URLSearchParams({grupo:t,nivel:n,especifico:r}).toString()}`},g=(e,n)=>{if(n===31)return t(e,r);if(n===30)return f(m(e[n]));if(n!==15)return p(e[n]);let i=h(e);return i?`<a class="puesto-link puesto-link-externo" href="${i}" target="_blank" rel="noopener noreferrer" aria-label="Calcular sueldo con complemento específico ${f(e[n])} en una página externa">${p(e[n])}</a>`:p(e[n])},_=(e,t,n)=>`
    <section class="puesto-card" aria-labelledby="${e.toLowerCase().replaceAll(` `,`-`)}">
        <h2 id="${e.toLowerCase().replaceAll(` `,`-`)}">${e}</h2>
        <dl class="puesto-grid">
            ${t.map(e=>`
                <div class="puesto-campo">
                    <dt>${l.get(e)}</dt>
                    <dd>${g(n,e)}</dd>
                </div>
            `).join(``)}
        </dl>
    </section>
`,v=()=>{d.innerHTML=`
        <article class="puesto-card puesto-alerta">
            <h2>Puesto no encontrado</h2>
            <p>No se ha encontrado ningún puesto con el identificador <strong>${f(u??``)}</strong>.</p>
            <a class="puesto-accion" href="/buscador">Volver al buscador</a>
        </article>
    `},y=(e,t)=>{let n=document.head.querySelector(e);n&&n.setAttribute(`content`,t)},b=(e,t)=>{let n=`${e[11]} - ${e[13]} - RPT.OVH`,r=`Ficha del puesto ${e[11]}: ${e[13]}, ${m(e[30])}, grupo ${e[19]}, nivel ${e[14]}, complemento específico ${e[15]}.`;document.title=n,y(`meta[name="description"]`,r),y(`meta[property="og:title"]`,n),y(`meta[property="og:description"]`,r),y(`meta[property="og:url"]`,t),y(`meta[name="twitter:title"]`,n),y(`meta[name="twitter:description"]`,r),y(`meta[property="twitter:url"]`,t);let i=document.createElement(`script`);i.type=`application/ld+json`,i.textContent=JSON.stringify({"@context":`https://schema.org`,"@type":`JobPosting`,title:String(e[13]??``),identifier:{"@type":`PropertyValue`,name:`Id. puesto RPT`,value:String(e[11]??``)},hiringOrganization:{"@type":`Organization`,name:String(e[1]??`Administracion General del Estado`)},jobLocation:{"@type":`Place`,address:{"@type":`PostalAddress`,addressLocality:String(e[28]||e[10]||``),addressRegion:String(e[26]||e[9]||``),addressCountry:`ES`}},employmentType:String(e[16]??``),description:r,url:t}),document.head.append(i)},x=e=>{let t=document.getElementById(`puesto-compartir`);t&&t.addEventListener(`click`,async()=>{let n={title:`${e[11]} - ${e[13]}`,text:`Puesto ${e[11]} en RPT.OVH`,url:window.location.href};if(navigator.share){await navigator.share(n);return}await navigator.clipboard.writeText(window.location.href),t.textContent=`Enlace copiado`,setTimeout(()=>{t.textContent=`Compartir puesto`},1800)})},S=e=>{let t=String(e[28]??``).trim(),n=String(e[26]??``).trim(),r=String(e[10]??``).trim(),i=String(e[9]??``).trim();return t?{localidad:t,provincia:n,tipo:`Localidad residencia`}:r?{localidad:r,provincia:i,tipo:`Localidad unidad`}:null},C=async e=>{let t=document.getElementById(`puesto-mapa-info`),n=document.getElementById(`puesto-mapa`),r=S(e);if(!(!t||!n)){if(!r){t.textContent=`No hay localidad disponible para mostrar el mapa.`,n.hidden=!0;return}t.textContent=`Buscando ${r.tipo.toLowerCase()}: ${r.localidad}${r.provincia?`, ${r.provincia}`:``}`;try{let e=[r.localidad,r.provincia,`España`].filter(Boolean).join(`, `),i=await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(e)}`);if(!i.ok)throw Error(`No se pudo consultar la ubicación`);let a=(await i.json())[0];if(!a||!window.L){t.textContent=`No se ha podido localizar en el mapa: ${e}`,n.hidden=!0;return}let o=Number(a.lat),s=Number(a.lon),c=window.L.map(n).setView([o,s],12);window.L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,{attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`,maxZoom:19}).addTo(c),window.L.marker([o,s]).addTo(c).bindPopup(`${r.tipo}: ${r.localidad}`).openPopup(),t.textContent=`${r.tipo}: ${r.localidad}${r.provincia?`, ${r.provincia}`:``}`}catch{t.textContent=`No se ha podido cargar la ubicación del mapa.`,n.hidden=!0}}};(async()=>{if(!u){d.innerHTML=`
            <article class="puesto-card puesto-alerta">
                <h2>Falta el identificador del puesto</h2>
                <p>Usa una URL con el formato <code>/puesto?puesto=IDPUESTO</code>.</p>
                <a class="puesto-accion" href="/buscador">Ir al buscador</a>
            </article>
        `;return}let{puestos:e}=await n(async()=>{let{puestos:e}=await import(`./rpt-D4SbeSDs.js`);return{puestos:e}},[]),t=e.find(e=>String(e[11]).trim()===u);if(!t){v();return}let r=`${t[11]} - ${t[13]}`,s=h(t),l=document.createElement(`link`);l.rel=`canonical`,l.href=`${window.location.origin}/puesto?puesto=${encodeURIComponent(u)}`,document.head.append(l),b(t,l.href),d.innerHTML=`
        <article class="puesto-hero">
            <div class="puesto-acciones" aria-label="Acciones del puesto">
                <a class="puesto-boton puesto-boton-secundario" href="/buscador">${i} Volver al buscador</a>
                ${s?`<a class="puesto-boton puesto-link-externo" href="${s}" target="_blank" rel="noopener noreferrer">${a} Calcular sueldo</a>`:``}
                <button id="puesto-compartir" class="puesto-boton" type="button">${o} Compartir puesto</button>
            </div>
            <p class="puesto-etiqueta">Puesto ${p(t[11])}</p>
            <h2>${p(r)}</h2>
            <p>${p(t[1])}</p>
            <div class="puesto-resumen">
                <span class="${t[30]===`V`?`span-vacante`:`puesto-chip`}">${f(m(t[30]))}</span>
                <span class="puesto-chip">Nivel ${p(t[14])}</span>
                <span class="puesto-chip">Grupo ${p(t[19])}</span>
                <span class="puesto-chip">Complemento ${p(t[15])}</span>
                <span class="puesto-chip">${p(t[28]||t[10]||t[9]||t[26])}</span>
            </div>
        </article>
        ${c.map(([e,n])=>_(e,n,t)).join(``)}
        <section class="puesto-card puesto-mapa-card" aria-labelledby="puesto-mapa-titulo">
            <h2 id="puesto-mapa-titulo">Mapa de ubicación</h2>
            <p id="puesto-mapa-info" class="puesto-mapa-info">Preparando mapa...</p>
            <div id="puesto-mapa" class="puesto-mapa" role="img" aria-label="Mapa con la ubicación del puesto"></div>
        </section>
    `,C(t),x(t)})();