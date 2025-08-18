const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

class Numeros{
    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
    }
}

const soma = () =>{
    const n1Field = document.getElementById("n1")
    const n2Field = document.getElementById("n2")

    const n1Input = Number(n1Field.value)
    const n2Input = Number(n2Field.value)

    const numeros = new Numeros(n1Input, n2Input)

    const resultado = numeros.n1 + numeros.n2

    output.innerHTML = `Soma: ${resultado}`

    // Limpa os campos
    n1Field.value = ""
    n2Field.value = ""
}

/*

function soma(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    let soma = 0
    soma = n1Value + n2Value
    
    return output.innerHTML = "Soma dos números: "+soma
}

*/