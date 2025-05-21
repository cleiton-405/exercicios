const output = document.getElementById("output")

let resultado = 0

function somar(){
    const num1Value = Number(document.getElementById("num1").value)
    const num2Value = Number(document.getElementById("num2").value)

    resultado = num1Value + num2Value

    output.innerHTML = `Soma: ${resultado}`
}

function subtrair(){
    const num1Value = Number(document.getElementById("num1").value)
    const num2Value = Number(document.getElementById("num2").value)

    resultado = num1Value - num2Value

    output.innerHTML = `Subtração: ${resultado}`
}

function multiplicar(){
    const num1Value = Number(document.getElementById("num1").value)
    const num2Value = Number(document.getElementById("num2").value)

    resultado = num1Value * num2Value

    output.innerHTML = `Multiplicação: ${resultado}`
}

function dividir(){
    const num1Value = Number(document.getElementById("num1").value)
    const num2Value = Number(document.getElementById("num2").value)

    if(num2Value === 0){
        output.innerHTML = 'Não é possível dividir por zero'
    }else{
        resultado = num1Value / num2Value

        output.innerHTML = `Divisão: ${resultado}`
    }
}