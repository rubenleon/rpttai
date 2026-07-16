import{t as e}from"./githubStart-B6S0mawn.js";/* empty css             */import{t}from"./table-sort-eicihVap.js";import{t as n}from"./preload-helper-PQJXhb1v.js";e();var r=e=>{let t=String(e??``).trim();return t===`V`?`Vacante`:t===`NV`?`No vacante`:t};t(),(async()=>{let e=document.getElementById(`datosTabla`);e.innerHTML=`<tr><td colspan="12">Cargando nuevas plazas...</td></tr>`;let{puestos:t}=await n(async()=>{let{puestos:e}=await import(`./rpt-Comny1fQ.js`);return{puestos:e}},[]),i=``,a=1;t.forEach(e=>{e[31].split(`:`)[0]==`NEW`&&(i+=`
          <tr>
              <td class="td-text-small" scope="row">${a}</td>
              <td class="td-text-small">${r(e[30])}</td>
              <td class="td-text-large">${e[3]}</td>
              <td class="td-text-large">${e[5]}</td>
              <td class="td-text-medio"><a class="puesto-link" href="/puesto?puesto=${encodeURIComponent(e[11])}">${e[11]}</a></td>
              <td class="td-text-small">${e[19]}</td>
              <td class="td-text-small">${e[14]}</td>
              <td class="td-text-medio">${e[15]}</td>
              <td class="td-text-large">${e[13]}</td>
              <td class="td-text-small">${e[9]}</td>
              <td class="td-text-small">${e[28]}</td>
              <td class="td-text-small">${e[29]}</td>
          </tr>
          `,a++)}),e.innerHTML=i})();