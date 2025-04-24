function processarDados(obj){ //Inicio da função parassando obj como parâmetro
    try{ //Try para tentar uma resposta
        if(!obj.nome){ //Verificação
            throw new Error("Campo 'nome' é obrigatório") //Mensagem de erro
        }
      
        if(!obj.idade){ //Verificação
            throw Error("Campo 'idade' é obrigatório") //Mensagem de erro
        }
      
        console.log("Dados processados com sucesso:", obj) //Mensagem com todos os itens corretos
    }catch(error){ //Catch mensagem de erro, caso tenha um erro
      console.log("Erro:", error.message) //Mensagem de erro
    }
}
  

processarDados({ nome: "João", idade: 25 }) // Correto
processarDados({ nome: "João" }) // Erro: Campo 'idade' é obrigatório
processarDados({}) // Erro: Campo 'nome' é obrigatório
