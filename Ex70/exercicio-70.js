function validarSenha(senha){ //Inicio da função com entrada da senha
    try{ //Try para tentar uma resposta
        if(senha.length < 8){ //Usando if para comparação
          throw Error("Senha muito curta") //Mensagem de erro
        }

        console.log("Senha válida!") //Resultado final
    }catch(error){ //Catch mensagem de erro, caso tenha um erro
        console.log("Erro", error.message) //Mensagem de erro
    }
}

validarSenha("12345678") //Chamando função : correto
validarSenha("123") //Chamando função : errado