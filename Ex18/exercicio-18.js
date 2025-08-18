const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

class Notas{
    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
        this.media = ((n1+n2) / 2)
    }
}

const resultado = () =>{
    const n1Field = document.getElementById("n1")
    const n2Field = document.getElementById("n2")

    const n1 = Number(n1Field.value)
    const n2 = Number(n2Field.value)

    const resultadoNotas = new Notas(n1, n2)

    if(n1 < 0 || n2 < 0){
        alert(" !!! Digite apenas números positivos !!! ")
        return
    }

    if(resultadoNotas.media >= 7){
            if(resultadoNotas.media === 10){
                output.innerHTML =  `!!! APROVADO COM DISTINÇÃO (TU É PIKA MESMO): !!!: ${resultadoNotas.media}`
            }else{
                output.innerHTML =  `!!! APROVADO (FEZ O MÍNIMO) !!!: ${resultadoNotas.media}`
            }
        }else{
            output.innerHTML = `!!! REPROVADO IDIOTA !!!: ${resultadoNotas.media}`
        }

    // Limpa os campos
    n1Field.value = ""
    n2Field.value = ""    
}

/*

function resultado(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    let media = 0

    media = (n1Value + n2Value) / 2 

        if(media >= 7){
            if(media === 10){
                output.innerHTML = " !!! APROVADO COM DISTINÇÃO (TU É PIKA MESMO) !!! "
            }else{
                output.innerHTML = " !!! APROVADO (FEZ O MÍNIMO) !!! "
            }
        }else{
            output.innerHTML = " !!! REPROVADO IDIOTA !!! "
        }
}

*/