while(true){

    let nome = prompt("Digite o seu nome: ")
        if(nome.length <= 2){
            alert("!!! Digite um nome com mais de 2 caracteres !!!")
            continue
        }
    let idade = parseInt(prompt("Digite sua idade: "))
        if(isNaN(idade)|| idade <= 0){
            alert("!!! Digite apenas números inteiros válidos para idade !!!")
            continue
        }
    let email = prompt("Digite o seu email: ")
        if(email.length <= 2){
            alert("!!! Digite um email válido !!!")
            continue
        }

    const pessoa = {nome: nome,idade: idade,email: email}

    function cumprimentar(){
        alert(" Olá, "+pessoa.nome)
    }

    function envelhecer(){
        alert(" Você têm "+pessoa.idade+" anos.")
    }

    function atualizarEmail(){
        pessoa.email = "joão@server.com"
    }

    cumprimentar()
    envelhecer()
    atualizarEmail()

    const pessoaInfo = document.getElementById("pessoaInfo")

    pessoaInfo.innerHTML += "<p>Nome: "+pessoa.nome+"</p>"

    pessoaInfo.innerHTML += "<p>Idade: "+pessoa.idade+"</p>"

    pessoaInfo.innerHTML += "<p>Email: "+pessoa.email+"</p>"

    break
}