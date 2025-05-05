const output = document.getElementById("output")
const num = document.getElementById("num")
const arraySoma = []

function soma(){
    const numValue = Number(num.value)

    if(arraySoma.length < 5){
        arraySoma.push(numValue)
        output.innerHTML = ` !!! Número adicionado: ${numValue} !!! `
    }

    if(arraySoma.length === 5) {
        let soma = 0
    
        for(let i = 0; i < arraySoma.length; i++){
            soma += arraySoma[i]
        }

        // ou arraySoma.reduce((acc, val) => acc + val, 0)

        output.innerHTML = `Soma total: ${soma}`
    }
}

function media(){
    let soma = 0

    for(let i = 0; i < arraySoma.length; i++){
        soma += arraySoma[i]
    }

    // ou arraySoma.reduce((acc, val) => acc + val, 0)

    const media = soma / arraySoma.length

    output.innerHTML = `Média: ${media}`
}

// arraySoma.reduce((acc, val) => acc + val, 0)

// É uma forma moderna e eficiente de somar todos os valores de um array em JavaScript.