const output = document.getElementById("output")
const num = document.getElementById("num")

function imparEPar(){
    const numValue = Number(num.value)

        if(numValue % 2 === 0){
            output.innerHTML = `${numValue} é Par.`
        }else{
            output.innerHTML = `${numValue} é ímpar`
        }
}

function calcularFatorial(){
    let numValue = Number(num.value)

    if(numValue < 0 ){
        output.innerHTML = ` !!! Não têm fatorial de números negativos !!! `
        return
    }

    if(numValue === 0 || numValue === 1){
        output.innerHTML = `Fatorial: 1`
        return
    }

    let resultado = numValue

    for(let i = numValue - 1; i >= 1; i--){
        resultado *= i //resultado = resultado * i
    }

    output.innerHTML = `Fatorial: ${resultado}`
}