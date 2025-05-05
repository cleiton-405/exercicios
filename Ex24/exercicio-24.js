const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

let nome = []

function resultado(){
    const n1Value = n1.value
    const n2Value = n2.value

    // Use !isNaN(valor) para verificar se é número.

    if(!isNaN(n1Value) || !isNaN(n2Value)){
        alert(" !!! 🚫 Digite apenas nomes 🚫 !!! ")
    }

    nome.push(n1Value, n2Value)

    const nomesInvertidos = nome.map(nome => nome.split("").reverse().join("")) // Aplica arrow function para cada nome

    output.innerHTML = `Nomes: ${nome.join(" - ")} <br> Nomes invertidos: ${nomesInvertidos.join(" - ")}`
}