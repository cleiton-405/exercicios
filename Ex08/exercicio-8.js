const output = document.getElementById("output")

const maiorNumeroEmenorNumero = () =>{
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    if(n1 === 0 && n2 === 0){
        output.innerHTML = `!!! Ambos os números são zeros !!!`
    }else if(n1 >= 0 && n2 >= 0){
        if(n1 > n2){
            output.innerHTML = `Maior número: ${n1}<br>Menor número: ${n2}`
        }else if(n2 > n1){
            output.innerHTML = `Maior número: ${n2}<br>Menor número: ${n1}`
        }else{
            output.innerHTML = `Os dois números são iguais: ${n1}`
        }
    }
}

const soma = () =>{
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)
    
    output.innerHTML = `Soma dos números: ${n1+n2}`
}