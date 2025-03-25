            let nota1 = parseFloat(prompt("Digite a primeira nota: "))
            let nota2 = parseFloat(prompt("Digite a segunda nota: "))

            media = 0

            media = (nota1 + nota2) / 2 

            if(media >= 7){
                if(media === 10){
                    console.log(" !!! APROVADO COM DISTINÇÃO (TU É PIKA MESMO) !!! ")
                }else{
                    console.log(" !!! APROVADO (FEZ O MÍNIMO) !!! ")
                }
            }else{
                console.log(" !!! REPROVADO IDIOTA !!! ")
            }