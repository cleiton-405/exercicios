/*

Crie uma função chamada soma que recebe dois números como parâmetros e retorna a soma deles.

*/
const output = document.getElementById("output")

const soma = () =>{
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    let resultado = n1 + n2

    output.innerHTML = `Resultado: ${resultado}`
}