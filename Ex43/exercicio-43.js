const output = document.getElementById("output")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const profissao = document.getElementById("profissao")

function verificarIdade(){
    const nomeValue = nome.value
    const idadeValue = Number(idade.value)
    const profissaoValue = profissao.value

    const pessoa = {
        nome:nomeValue,
        idade:idadeValue,
        profissao:profissaoValue
    }

    if(pessoa.idade >= 18){
        output.innerHTML = `Maior de idade <br>`
    }else{
        output.innerHTML = `Menor de idade <br>`
    }

    for(let prop in pessoa){
        output.innerHTML += `${prop} - ${pessoa[prop]} <br>`
    }
}