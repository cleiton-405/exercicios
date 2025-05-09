const output = document.getElementById("output")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const newname = document.getElementById("newname")

function trocarNome(){
    const nomeValue = nome.value
    const idadeValue = idade.value
    const newnameValue = newname.value

    const pessoa = {
        nome: nomeValue,
        idade: idadeValue
    }
    
    output.innerHTML = `Nome: ${pessoa.nome} <br>
    Idade: ${pessoa.idade}`

    pessoa.nome = newnameValue

    output.innerHTML = `Nome: ${pessoa.nome} <br>
    Idade: ${pessoa.idade}`
}