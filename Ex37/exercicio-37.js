            const numeros = []

            for(let i = 0; i < 5; i++){
                let n1 = parseInt(prompt("Digite um número: "))

                numeros[i] = n1
            }

            console.log("Números da array")
            console.log(numeros)
            
            const numerosPares = numeros.filter(num => num % 2 === 0)

            console.log("Números pares")
            console.log(numerosPares)