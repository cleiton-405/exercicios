const output = document.getElementById("output")
let numbers = []

//USANDO UMA FUNÇÃO ARROW E SORT PARA ORDENAR OS NÚMEROS

const ordemCrescente = () =>{
    const n1 = Number(document.getElementById("n1").value)

    if(isNaN(n1)){
        alert("Por favor, insira um número válido.")
        return
    }

    numbers.push(n1) // Adiciona o número ao array

    // Ordena o array em ordem crescente, usando método sort
    numbers.sort((a, b) =>{
        return a - b
    })

    output.innerHTML = `Ordem dos números: ${numbers}`
}