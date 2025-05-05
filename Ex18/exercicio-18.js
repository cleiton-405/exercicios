const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

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