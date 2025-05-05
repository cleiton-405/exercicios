const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

function soma(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    let soma = 0
    soma = n1Value + n2Value
    
    return output.innerHTML = "Soma dos números: "+soma
}