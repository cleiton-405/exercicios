const n1 = document.getElementById("n1")
const resultado = document.getElementById("resultado")

function verificarPar(){

    let n1Value = n1.value
    n1Value = parseInt(n1Value)

    resultado.innerHTML = ""

    if(n1Value % 2 == 0){
        resultado.innerHTML += `O número ${n1Value} é par.`
    }else{
        resultado.innerHTML += `O número ${n1Value} é ímpar.`
    }
}