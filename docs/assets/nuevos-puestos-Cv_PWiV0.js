import{s as l}from"./githubStart-BWgQO704.js";/* empty css             */import{p as a}from"./buscador-BPsYvb9x.js";l();let d="",s=1;a.forEach(t=>{t[31].split(":")[0]=="NEW"&&(d+=`
        <tr>
            <td class="td-text-small" scope="row">${s}</td>
            <td class="td-text-small">${t[30]}</td>
            <td class="td-text-large">${t[1]}</td>
            <td class="td-text-large">${t[5]}</td>
            <td class="td-text-small">${t[19]}</td>
            <td class="td-text-small">${t[14]}</td>
            <td class="td-text-small">${t[15]}</td>
            <td class="td-text-large">${t[13]}</td>
            <td class="td-text-medio">${t[9]}/${t[10]}</td>
            <td class="td-text-small">${t[29]}</td>
            
            
        </tr>
        `,s++)});document.getElementById("datosTabla").innerHTML=d;
