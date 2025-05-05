const output = document.getElementById("output")
const n1 = document.getElementById("n1")
let numeros = []

//USANDO UMA FUNÇÃO E SORT PARA ORDENAR OS NÚMEROS

function ordemCrescente(){
    const n1Value = Number(n1.value)

    if(isNaN(n1Value)){
        alert("Por favor, insira um número válido.")
    }

    numeros.push(n1Value) // Adiciona o número ao array

    // Ordena o array em ordem crescente
    numeros.sort(function (a, b) {
        return a - b
    })

    output.innerHTML = `Ordem dos números: ${numeros}`
}