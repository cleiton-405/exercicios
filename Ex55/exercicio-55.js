while (true) {

    alert("Para sair do programa, digite 0 em qualquer momento.")

    let nome1 = prompt("Digite um nome: ")
    if(nome1 === "0"){
        alert("!!! Você saiu do programa !!!")
        break
    }
    if(nome1.length <= 2){
        alert("!!! Digite um nome com mais de 2 caracteres !!!")
        continue
    }

    let idade1 = parseInt(prompt("Digite uma idade: "))
    if(idade1 === 0){
        alert("!!! Você saiu do programa !!!")
        break
    }
    if(isNaN(idade1) || idade1 <= 0){
        alert("!!! Digite apenas números inteiros válidos para idade !!!")
        continue
    }

    let nome2 = prompt("Digite um nome: ")
    if(nome2 === "0"){
        alert("!!! Você saiu do programa !!!")
        break
    }
    if(nome2.length <= 2){
        alert("!!! Digite um nome com mais de 2 caracteres !!!")
        continue
    }

    let idade2 = parseInt(prompt("Digite uma idade: "))
    if(idade2 === 0){
        alert("!!! Você saiu do programa !!!")
        break
    }
    if(isNaN(idade2) || idade2 <= 0){
        alert("!!! Digite apenas números inteiros válidos para idade !!!")
        continue
    }

    const pessoa1 = { nome: nome1, idade: idade1 }
    const pessoa2 = { nome: nome2, idade: idade2 }

    const pessoas = document.getElementById("pessoas")

    pessoas.innerHTML += "<p>Nome: "+pessoa1.nome+""+" Idade: "+pessoa1.idade+"</p>"

    pessoas.innerHTML += "<p>Nome: "+pessoa2.nome+""+" Idade: "+pessoa2.idade+"</p>"

    break
}
