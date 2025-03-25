            let string = prompt("Digite uma palavra: ")

            const vogais = "aeiouAEIOU"
            let contador = 0

            for(let i = 0; i < string.length; i++){
                if(vogais.includes(string[i])){
                    contador++
                }
            }

            console.log("Quantidade de vogais: "+contador)