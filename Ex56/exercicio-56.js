const output = document.getElementById("output")

const pessoa = {
    nome: "",
    idade: 0,
    email: "",
    newemail: ""
}

function cumprimentar(){
    const nomeValue = document.getElementById("nome").value

    pessoa.nome = nomeValue

    output.innerHTML = `Olá, meu nome é ${pessoa.nome}` 
}

function mostrarIdade(){
    const idadeValue = Number(document.getElementById("idade").value)

    pessoa.idade = idadeValue

    output.innerHTML = `Você têm ${pessoa.idade} anos`
}

function atualizarEmail(){
    const newemailValue = document.getElementById("newemail").value

    pessoa.email = newemailValue

    output.innerHTML = `Email atualizado: ${pessoa.email}`
}

function informacoes(){
    const nomeValue = document.getElementById("nome").value
    const idadeValue = Number(document.getElementById("idade").value)
    const emailValue = document.getElementById("email").value
    const newemailValue = document.getElementById("newemail").value

    pessoa.nome = nomeValue
    pessoa.idade = idadeValue
    pessoa.email = emailValue
    pessoa.newemail = newemailValue

    output.innerHTML = `Nome: ${pessoa.nome} <br>
    Idade: ${pessoa.idade} <br>
    Email: ${pessoa.email} <br>
    New Email: ${pessoa.newemail}`
}