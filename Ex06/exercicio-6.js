const output = document.getElementById("output")
const arraySoma = []

const soma = () =>{
    const num = Number(document.getElementById("num").value)

    if(arraySoma.length < 5){
        arraySoma.push(num)
        output.innerHTML = ` !!! Número adicionado: ${num} !!! `
    }

    if(arraySoma.length === 5){
        const soma = arraySoma.reduce((acc, val) => acc + val, 0)

        /* 
        for(let i = 0; i < arraySoma.length; i++){
            soma += arraySoma[i]
        }
        */

        output.innerHTML = `Soma total: ${soma}`
    }
}

const media = () =>{
    const soma = arraySoma.reduce((acc, val) => acc + val, 0)

    /* 
    
    for(let i = 0; i < arraySoma.length; i++){
        soma += arraySoma[i]
    }

    */

    const media = soma / arraySoma.length

    output.innerHTML = `Média: ${media}`
}

// arraySoma.reduce((acc, val) => acc + val, 0)

// É uma forma moderna e eficiente de somar todos os valores de um array em JavaScript.