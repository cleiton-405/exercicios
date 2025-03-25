            let nota1 = parseFloat(prompt("Digite a primeira nota: "))
            let nota2 = parseFloat(prompt("Digite a segunda nota: "))

            let media = 0

            media = (nota1 + nota2) / 2

            if(media >= 9 && media <= 10){
                
                console.log("Nota 1: "+nota1)
                console.log("Nota 2: "+nota2)
                console.log("Sua média: "+media)
                console.log("Conceito: "+ "A")
                console.log(" !!! APROVADO !!! ")

            }else if(media >= 7.5 && media < 9){
                
                console.log("Nota 1: "+nota1)
                console.log("Nota 2: "+nota2)
                console.log("Sua média: "+media)
                console.log("Conceito: "+ "B")
                console.log(" !!! APROVADO !!! ")

            }else if(media >= 6 && media < 7.5){
                
                console.log("Nota 1: "+nota1)
                console.log("Nota 2: "+nota2)
                console.log("Sua média: "+media)
                console.log("Conceito: "+ "C")
                console.log(" !!! APROVADO !!! ")

            }else if(media >= 4 && media < 6){
                
                console.log("Nota 1: "+nota1)
                console.log("Nota 2: "+nota2)
                console.log("Sua média: "+media)
                console.log("Conceito: "+ "D")
                console.log(" !!! REPROVADO !!! ")

            }else if(media >= 0 || media < 0 && media < 4){
                
                console.log("Nota 1: "+nota1)
                console.log("Nota 2: "+nota2)
                console.log("Sua média: "+media)
                console.log("Conceito: "+ "E")
                console.log(" !!! REPROVADO !!! ")

            }