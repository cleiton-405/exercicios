const output = document.getElementById("output")

function numerosPrimos(){
    let primosEncontrados = 0

    for(dividendo = 2; dividendo <= 200; dividendo++){
        let ehPrimo = true
    for(divisor = 2; divisor < dividendo; divisor++){
        if(dividendo % divisor == 0){
                ehPrimo = false
            break
            }
        }
        if(Boolean(ehPrimo)){ 
            primosEncontrados++;
        }
    }

    output.innerHTML = `Números primos encontrados: ${primosEncontrados}`
}