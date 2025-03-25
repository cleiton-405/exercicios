let numeros = []

    for(let i = 0; i < 3; i++){
        let num = parseInt(prompt("Digite um número: "))

        numeros[i] = num
                
    }

    console.log("Números: "+numeros)
    console.log("Números ao contrário: "+numeros.reverse())