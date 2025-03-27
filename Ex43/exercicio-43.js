
while(true){
    let nome = prompt("Digite seu nome: ")
        if(nome.length <= 3){
            alert(" !!! Informe um nome válido !!! ")
            continue
        }

    let idade = parseInt(prompt("Digite sua idade: "))
        if(idade <= 0 || idade >= 120){
            alert(" !!! Informe uma idade válida !!! ")
            continue
        }

    let profissao = prompt("Digite sua profissao: ")
        if(profissao.length <= 3){
            alert(" !!! Informe uma profissão válida !!! ")
            continue
        }

    const pessoa = {nome, idade, profissao}

    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.profissao)

    console.log(pessoa)

    break
}