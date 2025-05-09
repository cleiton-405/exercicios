const output = document.getElementById("output")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const profissao = document.getElementById("profissao")

function resultado(){
    const nomeValue = nome.value
    const idadeValue = Number(idade.value)
    const profissaoValue = profissao.value

    const pessoa = {
        nome: nomeValue,
        idade: idadeValue,
        profissao: profissaoValue
    }
    
    output.innerHTML = `Nome: ${pessoa.nome} <br>
    Idade: ${pessoa.idade} <br>
    Profissão: ${pessoa.profissao}`
}