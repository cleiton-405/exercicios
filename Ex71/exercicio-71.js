function operacaoPrincipal(){
    try{
      funcaoPerigosa()
    }catch(error){
      console.log("Erro na operação principal:", error.message)
    }
}
  
function funcaoPerigosa(){ 
  throw Error(" !!! Algo deu muito errado na função perigosa !!!")
}
  
operacaoPrincipal()