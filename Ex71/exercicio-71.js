function operacaoPrincipal(){ //Inicio função 
    try{ //Try para tentar uma resposta
      funcaoPerigosa() //Chamando função
    }catch(error){ //Catch mensagem de erro, caso tenha um erro
      console.log("Erro na operação principal:", error.message) //Mensagem de erro
    }
}
  
function funcaoPerigosa(){ //Inicio função 
  throw Error(" !!! Algo deu muito errado na função perigosa !!!") //Mensagem de erro para retratar algo errado na função
}
  
operacaoPrincipal() //Chamando função