while(true){
    let nome = prompt("Digite seu nome: ")
    let senha = prompt("Digite sua senha: ")

    if(nome == senha){
        alert("!!! Nome e senha iguais, digite novamente !!!")
        continue
    }

    console.log("Seu nome é: "+nome)
    console.log("Sua senha é: "+senha)
    break
}