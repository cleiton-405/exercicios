const output = document.getElementById("output")

function compararIdades(){
    const nome1Value = (document.getElementById("nome1").value)
    const nome2Value = (document.getElementById("nome2").value)
    const idade1Value = Number(document.getElementById("idade1").value)
    const idade2Value = Number(document.getElementById("idade2").value)

    const pessoa1 = { nome1: nome1Value, idade1: idade1Value }
    const pessoa2 = { nome2: nome2Value, idade2: idade2Value }

    if(pessoa1.idade1 == pessoa2.idade2){
        return output.innerHTML = `Ambas têm a mesma idade`
    }

    if(pessoa1.idade1 > pessoa2.idade2){
        output.innerHTML = `${pessoa1.nome1} é a pessoa mais velha com ${pessoa1.idade1}`
    }else{
        output.innerHTML = `${pessoa2.nome2} é a pessoa mais velha com ${pessoa2.idade2}`
    }
}