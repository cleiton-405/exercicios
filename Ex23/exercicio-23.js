const output = document.getElementById("output")

const numerosPrimos = () =>{
    let primosEncontrados = 0
    const primos = []

    for(let i = 2; i <= 200; i++){
        let ehPrimo = true
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i % j == 0){
                    ehPrimo = false
                    break
                }
            }
        if(Boolean(ehPrimo)){ 
            primosEncontrados++;
        }
        if(ehPrimo){
            primos.push(i)
        }
    }

    output.innerHTML = `
    Números primos encontrados: ${primosEncontrados}<br>
    Números primos: ${primos.join(" - ")}`
}