            alert(" ---- BOA TARDE ---- ")
            alert(" ---- DIGITE UM NÚMERO ---- ")
            alert(" 1 - SOMA ")
            alert(" 2 - SUBTRAÇÃO ")
            alert(" 3 - MULTIPLICAÇÃO ")
            alert(" 4 - DIVISÃO ")
            alert(" 0 - SAIR DO PROGRAMA ")

            let num = parseInt(prompt("Digite sua opção: "))

            if(num >= 1 && num <= 4){

            let n1 = parseFloat(prompt("Digite o primeiro número: "))
            let n2 = parseFloat(prompt("Digite o segundo número: "))

            switch(num){
                case 1:
                    soma = 0
                    soma = n1 + n2
                    
                    console.log("A soma dos números é: "+soma)
                break;
                case 2:
                    subtracao = 0
                    subtracao = n1 - n2

                    console.log("A subtração dos números é: "+subtracao)
                break;
                case 3:
                    multiplicacao = 0
                    multiplicacao = n1 * n2

                    console.log("A multiplicação dos números é: "+multiplicacao)
                break;
                case 4:
                    divisao = 0
                    divisao = n1 / n2

                    console.log("A divisão dos números é: "+divisao)
                break;
            }

            }else{
                alert(" !!! SAIU DO PROGRAMA !!! ")
            }