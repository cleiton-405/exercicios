const output = document.getElementById("output")

function operadoresLogicos(){
const opValue = Number(document.getElementById("op").value)

const n1Value = Number(document.getElementById("n2").value)
const n2Value = Number(document.getElementById("n1").value)

let resultado = 0

switch(opValue){
    case 1:
        resultado = n1Value + n2Value
                    
        output.innerHTML = "A soma dos números é: "+resultado
    break;
    case 2:
        resultado = n1Value - n2Value

        output.innerHTML = "A subtração dos números é: "+resultado
    break;
    case 3:
        resultado = n1Value * n2Value

        output.innerHTML = "A multiplicação dos números é: "+resultado
    break;
    case 4:
        if(n2Value === 0){
            output.innerHTML = "Divisão por zero não é permitida."
        }else{
            resultado = n1Value / n2Value
            output.innerHTML = "A divisão dos números é: " + resultado
        }
    break;
    }
}

/*

const operadoresLogicos = () =>{
    const n1Value = Number(document.getElementById("n2").value)
    const n2Value = Number(document.getElementById("n1").value)

    let resultado = 0

    output.innerHTML = `
    <ul style="text-align: left;">
        <li>Soma: ${resultado = n1Value + n2Value}</li>
        <li>Subtração: ${resultado = n1Value - n2Value}</li>
        <li>Multiplicação: ${resultado = n1Value * n2Value}</li>
        <li>Divisão: ${resultado = n1Value / n2Value}</li>
    </ul>
    `
}

///////////////////////////////////////////////////////////////////////////

Usando Classe e Objetos

class OperadoresLogicos{
    constructor(n1, n2) {
        this.n1 = n1
        this.n2 = n2
        this.soma = n1 + n2
        this.sub = n1 - n2
        this.mul = n1 * n2
        this.div = n2 !== 0 ? (n1 / n2) : '!!! Divisão por zero !!!'
        // Faz o cálculo e caso tenha um número negativo ele mostra a mensagem
    }
}

const operadoresLogicos = () =>{
    const n1Field = document.getElementById("n1")
    const n2Field = document.getElementById("n2")

    const n1 = Number(n1Field.value)
    const n2 = Number(n2Field.value)

    const op = new OperadoresLogicos(n1, n2)

    if(n1 < 0 || n2 < 0){
        alert(" !!! Digite apenas números positivos !!! ")
        return
    }

    output.innerHTML = `
        Soma: ${op.soma} <br>
        Subtração: ${op.sub} <br>
        Multiplicação: ${op.mul} <br>
        Divisão: ${op.div}
    `

    // Limpar os campos após o cálculo
    n1Field.value = ""
    n2Field.value = ""
}

*/