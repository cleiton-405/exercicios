const output = document.getElementById("output")
const num = document.getElementById("num")

const numeros = []

function maioreMenor(){
    const numValue = Number(num.value)

    numeros.push(numValue)

    let max = Math.max(...numeros)
    //Usado método math.max() para identificar o maior número em uma array
    //Operador spread (...) para verificar dentro de uma array

    let min = Math.min(...numeros)
    //Usado método math.min() para identificar o menor número em uma array
    //Operador spread (...) para verificar dentro de uma array

    output.innerHTML = `Números da array: ${numeros.join(" - ")} <br>
    Maior número: ${max} <br>
    Menor número: ${min}`
}