const output = document.getElementById("output")

let array = []

function adicionar(){
    const numValue = Number(document.getElementById("num").value)
    array.push(numValue)

    output.innerHTML = `!!! ${numValue} Adicionado com sucesso !!! `
}

function media(){
    const soma = array.reduce((acc, valor) => acc + valor, 0)

    const media = soma / array.length

    output.innerHTML = `!!! Média: ${media.toFixed(2)} !!! `
}

function total(){
    const total = array.reduce((acc, valor) => acc + valor, 0)

    output.innerHTML = `Soma do array: ${total.toFixed(2)}`
}