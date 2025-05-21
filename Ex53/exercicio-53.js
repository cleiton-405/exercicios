const output = document.getElementById("output")

const numeros = []

function adicionaArray(){
    const numValue = Number(document.getElementById("num").value)

    numeros.push(numValue)

    output.innerHTML = ` !!! ${numValue} adicionado com sucesso !!! `

}

function somaArray(){
    const soma = numeros.reduce((acc, num) => acc + num, 0)
    
    return output.innerHTML = `Soma: ${soma}`
}