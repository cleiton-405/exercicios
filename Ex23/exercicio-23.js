        let primosEncontrados = 0

            for (dividendo = 2; dividendo <= 200; dividendo++) {
                let ehPrimo = true
            for (divisor = 2; divisor < dividendo ; divisor++) {
                if (dividendo % divisor == 0) {
                    ehPrimo = false
                break
                }
            }
            if (Boolean(ehPrimo)) { 
                primosEncontrados++;
            }
            }

            console.log("Números primos encontrados: "+primosEncontrados)