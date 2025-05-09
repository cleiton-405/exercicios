const output = document.getElementById("output")
const num = document.getElementById("num")

const numeros = []

function numerosPares(){
    const numValue = Number(num.value)

    numeros.push(numValue)
    
    const pares = numeros.filter(num => num % 2 === 0)

    output.innerHTML = `Números da array: ${numeros.join(" - ")} <br>
    Números pares: ${pares.join(" - ")}`
}