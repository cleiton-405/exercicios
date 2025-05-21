const output = document.getElementById("output")

const pessoas = []

function adicionarPessoas(){
    const nomeValue = document.getElementById("nome").value
    const idadeValue = Number(document.getElementById("idade").value)

    pessoas.push({nome: nomeValue, idade: idadeValue})

    output.innerHTML = `${nomeValue} adicionada com sucesso!`
}

function ordenarPorIdade(){
    pessoas.sort((a, b) => a.idade - b.idade)

    output.innerHTML = "Pessoas ordenadas por idade:<br>"
    pessoas.forEach(pessoa => {output.innerHTML += `${pessoa.nome}, ${pessoa.idade} anos<br>`})
}