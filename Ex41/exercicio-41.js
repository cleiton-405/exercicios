const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

const array1 = []
const array2 = []

function mostrarArray1(){
    const n1Value = Number(n1.value)
    array1.push(n1Value)

    output.innerHTML = `Array1: ${array1}`
}

function mostrarArray2(){
    const n2Value = Number(n2.value)
    array2.push(n2Value)

    output.innerHTML = `Array2: ${array2}`
}

function arrayconcatenada(){
    const array3 = array1.concat(array2)

    output.innerHTML = `Concatenação: ${array3}`
}