import{s as e}from"./githubStart-CkZZkJhH.js";import{_ as o}from"./buscador-DcJjoCVd.js";/* empty css             */import{e as r}from"./table-sort-JVNqLWVj.js";e();const c=a=>{const s=String(a??"").trim();return s==="V"?"Vacante":s==="NV"?"No vacante":s};r();const n=async()=>{const a=document.getElementById("datosTabla");a.innerHTML='<tr><td colspan="10">Cargando nuevas plazas...</td></tr>';const{puestos:s}=await o(async()=>{const{puestos:t}=await import("./rpt-BLo-c_rw.js");return{puestos:t}},[]);let d="",l=1;s.forEach(t=>{t[31].split(":")[0]=="NEW"&&(d+=`
          <tr>
              <td class="td-text-small" scope="row">${l}</td>
              <td class="td-text-small">${c(t[30])}</td>
              <td class="td-text-large">${t[3]}</td>
              <td class="td-text-large">${t[5]}</td>
              <td class="td-text-medio"><a class="puesto-link" href="/puesto?puesto=${encodeURIComponent(t[11])}">${t[11]}</a></td>
              <td class="td-text-small">${t[19]}</td>
              <td class="td-text-small">${t[14]}</td>
              <td class="td-text-medio">${t[15]}</td>
              <td class="td-text-large">${t[13]}</td>
              <td class="td-text-small">${t[9]}</td>
              <td class="td-text-small">${t[28]}</td>
              <td class="td-text-small">${t[29]}</td>
              <td class="col-cambios">${t[31]}</td>
          </tr>
          `,l++)}),a.innerHTML=d};n();
