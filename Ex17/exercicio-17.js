const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const op = document.getElementById("op")

function operadoresLogicos(){
    const opValue = Number(op.value)

        const n1Value = Number(n1.value)
        const n2Value = Number(n2.value)

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