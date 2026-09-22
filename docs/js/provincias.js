import { resumenProvincias } from "/datos/estadisticas.js";
import { nombreProvincia } from "/datos/nombresProvincias.js";
import { enableTableSorting } from "./table-sort.js";

const coordenadasProvincias = {
  "A CORUÑA": [43.3623, -8.4115],
  "ALBACETE": [38.9943, -1.8585],
  "ALICANTE - ALACANT": [38.3452, -0.481],
  "ALMERIA": [36.8381, -2.4597],
  "ARABA/ALAVA": [42.8507, -2.676],
  "ASTURIAS": [43.3619, -5.8494],
  "AVILA": [40.6586, -4.7005],
  "BADAJOZ": [38.8794, -6.9707],
  "BARCELONA": [41.3874, 2.1686],
  "BIZKAIA": [43.263, -2.935],
  "BURGOS": [42.3439, -3.6969],
  "CACERES": [39.4765, -6.3725],
  "CADIZ": [36.5271, -6.2886],
  "CANTABRIA": [43.4623, -3.8099],
  "CASTELLON/CASTELLO": [39.9864, -0.0366],
  "CEUTA": [35.8894, -5.3213],
  "CIUDAD REAL": [38.9848, -3.9272],
  "CORDOBA": [37.8882, -4.7794],
  "CUENCA": [40.0718, -2.135],
  "GIPUZKOA": [43.311, -1.9751],
  "GIRONA": [41.9794, 2.8214],
  "GRANADA": [37.1773, -3.5986],
  "GUADALAJARA": [40.6322, -3.1656],
  "HUELVA": [37.2614, -6.9447],
  "HUESCA": [42.1399, -0.4089],
  "ILLES BALEARS": [39.5696, 2.6502],
  "JAEN": [37.7796, -3.7849],
  "LA RIOJA": [42.4627, -2.4446],
  "LAS PALMAS": [28.1235, -15.4363],
  "LEON": [42.5987, -5.5671],
  "LLEIDA": [41.6187, 0.6022],
  "LUGO": [43.0117, -7.5585],
  "MADRID": [40.4168, -3.7038],
  "MALAGA": [36.7213, -4.4214],
  "MELILLA": [35.2923, -2.9381],
  "MURCIA": [37.9922, -1.1307],
  "NAVARRA": [42.8183, -1.6455],
  "OURENSE": [42.3355, -7.8639],
  "PALENCIA": [42.0096, -4.5283],
  "PONTEVEDRA": [42.431, -8.6444],
  "S. C. TENERIFE": [28.2916, -16.6291],
  "SALAMANCA": [40.9652, -5.664],
  "SEGOVIA": [40.9429, -4.1088],
  "SEVILLA": [37.3828, -5.9963],
  "SORIA": [41.7641, -2.4627],
  "TARRAGONA": [41.1189, 1.2445],
  "TERUEL": [40.3438, -1.1069],
  "TOLEDO": [39.8568, -4.0244],
  "VALENCIA": [39.4699, -0.3763],
  "VALLADOLID": [41.6517, -4.7244],
  "ZAMORA": [41.5038, -5.7448],
  "ZARAGOZA": [41.6488, -0.8891],
};

const formatter = new Intl.NumberFormat("es-ES");

const datos = Object.entries(resumenProvincias)
  .map(([provincia, { vacantes, noVacantes, totales }]) => ({
    provincia,
    nombre: nombreProvincia(provincia),
    vacantes,
    noVacantes,
    totales,
    porcentaje: totales > 0 ? (vacantes / totales) * 100 : 0,
  }))
  .sort((a, b) => b.totales - a.totales);

const resumenTotales = document.getElementById("resumen-totales");

if (resumenTotales && !resumenTotales.innerHTML.trim()) {
  const totalPuestos = datos.reduce((sum, d) => sum + d.totales, 0);
  const totalVacantes = datos.reduce((sum, d) => sum + d.vacantes, 0);
  const totalNoVacantes = datos.reduce((sum, d) => sum + d.noVacantes, 0);

  resumenTotales.innerHTML = `
    <div class="resumen-tarjeta">
      <span class="resumen-valor">${formatter.format(totalPuestos)}</span>
      <span class="resumen-etiqueta">Puestos totales</span>
    </div>
    <div class="resumen-tarjeta resumen-tarjeta-vacantes">
      <span class="resumen-valor">${formatter.format(totalVacantes)}</span>
      <span class="resumen-etiqueta">Vacantes</span>
    </div>
    <div class="resumen-tarjeta">
      <span class="resumen-valor">${formatter.format(totalNoVacantes)}</span>
      <span class="resumen-etiqueta">No vacantes</span>
    </div>
    <div class="resumen-tarjeta">
      <span class="resumen-valor">${datos.length}</span>
      <span class="resumen-etiqueta">Provincias</span>
    </div>
  `;
}

const tabla = document.getElementById("datosProvincias");

if (tabla && !tabla.innerHTML.trim()) {
  tabla.innerHTML = datos
    .map(
      (d, index) => `
      <tr>
        <td class="td-text-small">${index + 1}</td>
        <td class="td-text-large">${d.nombre}</td>
        <td class="td-text-medio resumen-fila-total">${formatter.format(d.totales)}</td>
        <td class="td-text-medio resumen-fila-vacantes">${formatter.format(d.vacantes)}</td>
        <td class="td-text-medio">${formatter.format(d.noVacantes)}</td>
        <td class="td-text-small">${d.porcentaje.toLocaleString("es-ES", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}%</td>
      </tr>
    `
    )
    .join("");
}

const mapaElemento = document.getElementById("map");

if (mapaElemento && typeof L !== "undefined") {
  const maxTotales = Math.max(...datos.map((d) => d.totales));

  const obtenerColor = (totales) => {
    const ratio = totales / maxTotales;
    if (ratio > 0.5) return "#facc15";
    if (ratio > 0.25) return "#60a5fa";
    if (ratio > 0.1) return "#2563eb";
    return "#1d4ed8";
  };

  const mapa = L.map("map", {
    zoomControl: L.control.zoom({
      zoomInTitle: "Acercar",
      zoomOutTitle: "Alejar",
    }),
  });

  mapa.setView([40, -3.5], 6);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">Colaboradores de OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }).addTo(mapa);

  datos.forEach(({ provincia, nombre, vacantes, noVacantes, totales }) => {
    const coords = coordenadasProvincias[provincia];
    if (!coords) return;

    const radio = Math.max(7, Math.sqrt(totales) * 1.35);

    L.circleMarker(coords, {
      radius: radio,
      fillColor: obtenerColor(totales),
      color: "#0f172a",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.85,
    })
      .addTo(mapa)
      .bindPopup(
        `<div class="provincias-popup">
          <strong>${nombre}</strong>
          <p>Totales: <strong>${formatter.format(totales)}</strong></p>
          <p>Vacantes: <strong>${formatter.format(vacantes)}</strong></p>
          <p>No vacantes: <strong>${formatter.format(noVacantes)}</strong></p>
        </div>`
      )
      .bindTooltip(
        `${nombre}: ${formatter.format(totales)}`,
        { direction: "top", opacity: 0.9 }
      );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  enableTableSorting();
});
