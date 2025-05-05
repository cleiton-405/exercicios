const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

function maiorNumeroEmenorNumero(){

    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    if(n1Value === 0 && n2Value === 0){
        output.innerHTML = `!!! Ambos os números são zeros !!!`
    }else if(n1Value >= 0 && n2Value >= 0){
        if(n1Value > n2Value){
            output.innerHTML = `Maior número: ${n1Value}<br>Menor número: ${n2Value}`
        }else if(n2Value > n1Value){
            output.innerHTML = `Maior número: ${n2Value}<br>Menor número: ${n1Value}`
        }else{
            output.innerHTML = `Os dois números são iguais: ${n1Value}`
        }
    }
}

function soma(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)
    
    output.innerHTML = `Soma dos números: ${n1Value+n2Value}`
}