
// Si hay texto_cambios|nivel,complenteo,vacante.
// "S|22|7111|NV"
// "N|22|7111|NV"
// "N|22|7111|NV"

export function checkrpt(item,rptAnterior) {
    let rpttexto_cambios = item[31]

    const partes = rpttexto_cambios.split(":"); // Divide el string por comas

    let texto_cambios=""
    if(partes[0]=="S")
    {
        let partesRPT = partes[1].split("|")
        texto_cambios="Si, "

        let nivelCambios = partesRPT[0]
        let complementoCambios = partesRPT[1]
        let vacanteCambios = partesRPT[2]
        

        if(nivelCambios!="=" && nivelCambios!=undefined) //nivel
        {
            texto_cambios+=`<strong>Nivel:</strong> En la rpt <q><i>${rptAnterior}</i></q> era: <mark>${nivelCambios}</mark>`
        }
        if(complementoCambios!="=" && complementoCambios!=undefined) //complemento
        {
            texto_cambios+=`<strong>Complemento:</strong> En la rpt <q><i>${rptAnterior}</i></q> era: <mark>${complementoCambios}</mark>`
        }
        if(vacanteCambios!="=" && vacanteCambios!=undefined) //vacante
        {
            texto_cambios+=`<strong>Estado:</strong> En la rpt <q><i>${rptAnterior}</i></q> era: <mark>${vacanteCambios}</mark>`
        }
        texto_cambios+=""
    }
    else if(partes[0]=="NEW")
    {
        texto_cambios+= `<img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/new.png" alt="new"/> Nuevo puesto`
    }
    else
    {
        texto_cambios="No"
    }
    
    return texto_cambios

}