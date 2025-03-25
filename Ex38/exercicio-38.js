            const numeros = []

            for(let i = 0; i < 5; i++){
                let n1 = parseInt(prompt("Digite um número: "))

                numeros[i] = n1
            }

            console.log("Números da array")
            console.log(numeros)
            
            let max = Math.max(...numeros)
            console.log("Maior número:")
            console.log(max)
            //Usado método math.max() para identificar o maior número em uma array
            //Operador spread (...) para verificar dentro de uma array

            let min = Math.min(...numeros)
            console.log("Menor número:")
            console.log(min)
            //Usado método math.min() para identificar o menor número em uma array
            //Operador spread (...) para verificar dentro de uma array