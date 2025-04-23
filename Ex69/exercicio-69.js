function dividir(n1, n2){  //Inicio da função passando dois números por parâmetros
    if(typeof n1 !== "number" || typeof n2 !== "number"){  //Usando if para comparações
        throw Error("Digite apenas números") //Mensagem de erro
    }

    if(n2 === 0){
        throw Error("Não é possível dividir por zero") //Mensagem de erro
    }

    return n1 / n2 //Retorno da função
}

try{ //Try para tentar uma resposta
    console.log(dividir(10, 2)) //Resultado correto
    console.log(dividir("asdasd", 2)) //Resultado errado
    console.log(dividir(100, 5)) //Resultado correto
    console.log(dividir(10, 0)) //Resultado errado
}catch(error){ //Catch mensagem de erro, caso tenha um erro
    console.log(error.message)  //Mensagem de erro
}