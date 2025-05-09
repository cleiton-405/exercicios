const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

const array1 = []
const array2 = []

function concatenarArrays(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

        array1.push(n1Value)
        array2.push(n2Value)
        
        const array3 = array1.concat(array2)

        output.innerHTML = `Array1: ${array1.join(" - ")} <br>
        Array2: ${array2.join(" - ")} <br>
        Array3 concatenada: ${array3.join(" - ")}`
}