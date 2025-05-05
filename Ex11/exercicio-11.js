const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")

const array = []

function arrayDigitada(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)
    const n3Value = Number(n3.value)

    array.push(n1Value, n2Value, n3Value)

    output.innerHTML = `Lista normal: ${array.join("-")}`

}

function inverterArray(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)
    const n3Value = Number(n3.value)

    array.reverse(n1Value, n2Value, n3Value)

    output.innerHTML = `Lista invertida: ${array.join("-")}`
}