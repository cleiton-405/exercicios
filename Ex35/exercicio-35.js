const output = document.getElementById("output")
const nome = document.getElementById("nome")
const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")

function media(){
    const nomeValue = nome.value
    const nota1Value = Number(nota1.value)
    const nota2Value = Number(nota2.value)

    const aluno = {
        nome: nomeValue,
        nota1: nota1Value,
        nota2: nota2Value
    }

    mediaNotas = 0

    mediaNotas = (aluno.nota1 + aluno.nota2) / 2

    output.innerHTML = `O aluno ${aluno.nome} tirou as notas: ${aluno.nota1} e ${aluno.nota2}. E obteve uma média de ${mediaNotas}`

}