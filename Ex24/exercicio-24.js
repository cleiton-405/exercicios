const output = document.getElementById("output")

let nome = []

const resultado = () =>{
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")

    const n1Value = n1.value
    const n2Value = n2.value

    // Use !isNaN(valor) para verificar se é número.

    if(!isNaN(n1Value) || !isNaN(n2Value)){
        alert(" !!! Digite apenas nomes !!! ")
        return
    }

    nome.push(n1Value, n2Value)

    const nomesInvertidos = nome.map(nome => nome.split("").reverse().join(" - ")) 
    // Aplica arrow function para cada nome
    // .split() - Separa a palavra dentro da array em um
    // .reverse() - Inverte a string
    // .join() - Separa a string com espaço ou traço

    output.innerHTML = `
    Nomes: ${nome.join(" - ")} <br> 
    Nomes invertidos: ${nomesInvertidos.join(" - ")}`

    n1.value = ""
    n2.value = ""
}