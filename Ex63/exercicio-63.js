const output = document.getElementById("output")

function formatarData(){
    const diaValue = Number(document.getElementById("dia").value)
    const mesValue = Number(document.getElementById("mes").value)
    const anoValue = Number(document.getElementById("ano").value)

    let diaFormatado = diaValue.toString().padStart(2, '0')
    let mesFormatado = mesValue.toString().padStart(2, '0')

    output.innerHTML = `${diaFormatado}/${mesFormatado}/${anoValue}`
}