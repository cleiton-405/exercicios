const output = document.getElementById("output")

function somaSegura(){
    const n1Value = Number(document.getElementById("n1").value)
    const n2Value = Number(document.getElementById("n2").value)

    let resultado = 0

    resultado = n1Value + n2Value

    output.innerHTML = `Soma: ${resultado}`

}