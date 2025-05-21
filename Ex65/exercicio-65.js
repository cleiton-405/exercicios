const output = document.getElementById("output")

let array = []

function adicionarArray(){ 
    const n1Value = Number(document.getElementById("n1").value)

    array.push(n1Value)

    output.innerHTML = `Valor adicionado: ${n1Value}`

    n1.value = ""
}

function somaArray(){
    const soma = array.reduce((acc, val) => acc + val, 0)

    output.innerHTML = `Soma: ${soma}`
}

function mediaArray(){
    const soma = array.reduce((acc, val) => acc + val, 0)
    
    const media = soma / array.length

    output.innerHTML = `Sua média é: ${media.toFixed(2)}`
}