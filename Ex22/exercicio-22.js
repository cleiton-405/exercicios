            alert("Para as seguintes perguntas, responda somente com ( 1 - Sim ) ou ( 0 - Não )")

            let pergunta1 = parseInt(prompt("Telefonou para a vítima: "))
            let pergunta2 = parseInt(prompt("Esteve no local do crime?"))
            let pergunta3 = parseInt(prompt("Mora perto da vítima?"))
            let pergunta4 = parseInt(prompt("Devia para a vítima?"))
            let pergunta5 = parseInt(prompt("Já trabalhou com a vítima?"))

            let contador = pergunta1+pergunta2+pergunta3+pergunta4+pergunta5

            if(contador == 2){
                console.log("Suspeita")
            }else if(contador == 3 || contador == 4){
                console.log("Cúmplice")
            }else if(contador == 5){
                console.log("Assassino")
            }else{
                console.log("Inocente")
            }