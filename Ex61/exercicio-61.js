const output = document.getElementById("output")

function verificarPar(){
    const n1Value = Number(document.getElementById("n1").value)

    if(n1Value % 2 === 0){
        output.innerHTML = `O número ${n1Value} é par.`
    }else{
        output.innerHTML = `O número ${n1Value} é ímpar.`
    }
}