import{t as e}from"./githubStart-u1emfE8W.js";/* empty css             */import{a as t}from"./estadisticas-C647LRvQ.js";import{t as n}from"./table-sort-eicihVap.js";/* empty css                 */var r={"A CORUÑA":`A Coruña`,ALBACETE:`Albacete`,"ALICANTE - ALACANT":`Alicante`,ALMERIA:`Almería`,"ARABA/ALAVA":`Álava`,ASTURIAS:`Asturias`,AVILA:`Ávila`,BADAJOZ:`Badajoz`,BARCELONA:`Barcelona`,BIZKAIA:`Bizkaia`,BURGOS:`Burgos`,CACERES:`Cáceres`,CADIZ:`Cádiz`,CANTABRIA:`Cantabria`,"CASTELLON/CASTELLO":`Castellón`,CEUTA:`Ceuta`,"CIUDAD REAL":`Ciudad Real`,CORDOBA:`Córdoba`,CUENCA:`Cuenca`,GIPUZKOA:`Gipuzkoa`,GIRONA:`Girona`,GRANADA:`Granada`,GUADALAJARA:`Guadalajara`,HUELVA:`Huelva`,HUESCA:`Huesca`,"ILLES BALEARS":`Illes Balears`,JAEN:`Jaén`,"LA RIOJA":`La Rioja`,"LAS PALMAS":`Las Palmas`,LEON:`León`,LLEIDA:`Lleida`,LUGO:`Lugo`,MADRID:`Madrid`,MALAGA:`Málaga`,MELILLA:`Melilla`,MURCIA:`Murcia`,NAVARRA:`Navarra`,OURENSE:`Ourense`,PALENCIA:`Palencia`,PONTEVEDRA:`Pontevedra`,"S. C. TENERIFE":`Santa Cruz de Tenerife`,SALAMANCA:`Salamanca`,SEGOVIA:`Segovia`,SEVILLA:`Sevilla`,SORIA:`Soria`,TARRAGONA:`Tarragona`,TERUEL:`Teruel`,TOLEDO:`Toledo`,VALENCIA:`Valencia`,VALLADOLID:`Valladolid`,ZAMORA:`Zamora`,ZARAGOZA:`Zaragoza`},i=e=>r[e]??e;e();var a={"A CORUÑA":[43.3623,-8.4115],ALBACETE:[38.9943,-1.8585],"ALICANTE - ALACANT":[38.3452,-.481],ALMERIA:[36.8381,-2.4597],"ARABA/ALAVA":[42.8507,-2.676],ASTURIAS:[43.3619,-5.8494],AVILA:[40.6586,-4.7005],BADAJOZ:[38.8794,-6.9707],BARCELONA:[41.3874,2.1686],BIZKAIA:[43.263,-2.935],BURGOS:[42.3439,-3.6969],CACERES:[39.4765,-6.3725],CADIZ:[36.5271,-6.2886],CANTABRIA:[43.4623,-3.8099],"CASTELLON/CASTELLO":[39.9864,-.0366],CEUTA:[35.8894,-5.3213],"CIUDAD REAL":[38.9848,-3.9272],CORDOBA:[37.8882,-4.7794],CUENCA:[40.0718,-2.135],GIPUZKOA:[43.311,-1.9751],GIRONA:[41.9794,2.8214],GRANADA:[37.1773,-3.5986],GUADALAJARA:[40.6322,-3.1656],HUELVA:[37.2614,-6.9447],HUESCA:[42.1399,-.4089],"ILLES BALEARS":[39.5696,2.6502],JAEN:[37.7796,-3.7849],"LA RIOJA":[42.4627,-2.4446],"LAS PALMAS":[28.1235,-15.4363],LEON:[42.5987,-5.5671],LLEIDA:[41.6187,.6022],LUGO:[43.0117,-7.5585],MADRID:[40.4168,-3.7038],MALAGA:[36.7213,-4.4214],MELILLA:[35.2923,-2.9381],MURCIA:[37.9922,-1.1307],NAVARRA:[42.8183,-1.6455],OURENSE:[42.3355,-7.8639],PALENCIA:[42.0096,-4.5283],PONTEVEDRA:[42.431,-8.6444],"S. C. TENERIFE":[28.2916,-16.6291],SALAMANCA:[40.9652,-5.664],SEGOVIA:[40.9429,-4.1088],SEVILLA:[37.3828,-5.9963],SORIA:[41.7641,-2.4627],TARRAGONA:[41.1189,1.2445],TERUEL:[40.3438,-1.1069],TOLEDO:[39.8568,-4.0244],VALENCIA:[39.4699,-.3763],VALLADOLID:[41.6517,-4.7244],ZAMORA:[41.5038,-5.7448],ZARAGOZA:[41.6488,-.8891]},o=new Intl.NumberFormat(`es-ES`),s=Object.entries(t).map(([e,{vacantes:t,noVacantes:n,totales:r}])=>({provincia:e,nombre:i(e),vacantes:t,noVacantes:n,totales:r,porcentaje:r>0?t/r*100:0})).sort((e,t)=>t.totales-e.totales),c=document.getElementById(`resumen-totales`);if(c&&!c.innerHTML.trim()){let e=s.reduce((e,t)=>e+t.totales,0),t=s.reduce((e,t)=>e+t.vacantes,0),n=s.reduce((e,t)=>e+t.noVacantes,0);c.innerHTML=`
    <div class="resumen-tarjeta">
      <span class="resumen-valor">${o.format(e)}</span>
      <span class="resumen-etiqueta">Puestos totales</span>
    </div>
    <div class="resumen-tarjeta resumen-tarjeta-vacantes">
      <span class="resumen-valor">${o.format(t)}</span>
      <span class="resumen-etiqueta">Vacantes</span>
    </div>
    <div class="resumen-tarjeta">
      <span class="resumen-valor">${o.format(n)}</span>
      <span class="resumen-etiqueta">No vacantes</span>
    </div>
    <div class="resumen-tarjeta">
      <span class="resumen-valor">${s.length}</span>
      <span class="resumen-etiqueta">Provincias</span>
    </div>
  `}var l=document.getElementById(`datosProvincias`);if(l&&!l.innerHTML.trim()&&(l.innerHTML=s.map((e,t)=>`
      <tr>
        <td class="td-text-small">${t+1}</td>
        <td class="td-text-large">${e.nombre}</td>
        <td class="td-text-medio resumen-fila-total">${o.format(e.totales)}</td>
        <td class="td-text-medio resumen-fila-vacantes">${o.format(e.vacantes)}</td>
        <td class="td-text-medio">${o.format(e.noVacantes)}</td>
        <td class="td-text-small">${e.porcentaje.toLocaleString(`es-ES`,{minimumFractionDigits:1,maximumFractionDigits:1})}%</td>
      </tr>
    `).join(``)),document.getElementById(`mapaProvincias`)&&typeof L<`u`){let e=Math.max(...s.map(e=>e.totales)),t=t=>{let n=t/e;return n>.5?`#facc15`:n>.25?`#60a5fa`:n>.1?`#2563eb`:`#1d4ed8`},n=L.map(`mapaProvincias`,{zoomControl:L.control.zoom({zoomInTitle:`Acercar`,zoomOutTitle:`Alejar`})});n.setView([40,-3.5],6),L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`,{attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">Colaboradores de OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>`,subdomains:`abcd`,maxZoom:19}).addTo(n),s.forEach(({provincia:e,nombre:r,vacantes:i,noVacantes:s,totales:c})=>{let l=a[e];if(!l)return;let u=Math.max(7,Math.sqrt(c)*1.35);L.circleMarker(l,{radius:u,fillColor:t(c),color:`#0f172a`,weight:1.5,opacity:1,fillOpacity:.85}).addTo(n).bindPopup(`<div class="provincias-popup">
          <strong>${r}</strong>
          <p>Totales: <strong>${o.format(c)}</strong></p>
          <p>Vacantes: <strong>${o.format(i)}</strong></p>
          <p>No vacantes: <strong>${o.format(s)}</strong></p>
        </div>`).bindTooltip(`${r}: ${o.format(c)}`,{direction:`top`,opacity:.9})})}document.addEventListener(`DOMContentLoaded`,()=>{n()});