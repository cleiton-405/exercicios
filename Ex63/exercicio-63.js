const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const ano = document.getElementById("ano")
const output = document.getElementById("output")

function formatarData(){
    let diaValue = parseInt(dia.value)
    let mesValue = parseInt(mes.value)
    let anoValue = parseInt(ano.value)

    let diaFormatado = diaValue.toString().padStart(2, '0');
    let mesFormatado = mesValue.toString().padStart(2, '0');

    output.innerHTML = `${diaFormatado}/${mesFormatado}/${anoValue}`
}