let nome = prompt("Digite o seu nome: ")
let nota1 = parseFloat(prompt("Digite a nota 1: "))
let nota2 = parseFloat(prompt("Digite a nota 2: "))

const aluno = {nome,nota1,nota2}

const informacoesAluno = document.getElementById("informacoesAluno")

informacoesAluno.innerHTML = "<h2>Aluno: "+aluno.nome+"</h2>"
informacoesAluno.innerHTML += "<p>Notas: </p>"
informacoesAluno.innerHTML += "<ul>"

    informacoesAluno.innerHTML += "<li>"+aluno.nota1+"</li>"
    informacoesAluno.innerHTML += "<li>"+aluno.nota2+"</li>"

    let media = 0

    media = (aluno.nota1 + aluno.nota2) / 2

informacoesAluno.innerHTML += "</ul>"

informacoesAluno.innerHTML += "<p> Média: "+media.toFixed(2)+"</p>"

    let aprovado = (media >= 7) ? "Sim" : "Não"

informacoesAluno.innerHTML += "Aprovado? " + aprovado    