const output = document.getElementById("output")

function inverterString(){
    const strValue = document.getElementById("str").value

    if(!isNaN(strValue)){
        alert(" !!! Digite apenas letras !!! ")
    }

    const resultado = strValue.split('').reverse().join('')

    output.innerHTML = `Invertido: ${resultado}`
}