const output = document.getElementById("output")
const n1 = document.getElementById("n1")

const array = []

function arrayVazio(){
    const n1Value = Number(n1.value)

    const estaVazio = array.length === 0

    array.push(n1Value)

    output.innerHTML = estaVazio
}