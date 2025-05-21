const output = document.getElementById("output")

const aluno = {
    nome: "",
    notas: []
}

function adicionarNotas(){
    const notaValue = Number(document.getElementById("nota").value)
    const nomeValue = document.getElementById("nome").value

    aluno.nome = nomeValue
    aluno.notas.push(notaValue)

    output.innerHTML = `!!! Nota adicionada com sucesso ${notaValue} !!!`
}

function calcularMedia(notas){
    if(notas.length === 0)
        return 0
    const soma = notas.reduce((acc, nota) => acc + nota, 0)
        return soma / 2
}

function informacoes(){
    const media = calcularMedia(aluno.notas)
    output.innerHTML = `Nome: ${aluno.nome} <br> Média do aluno: ${media.toFixed(2)}`
}