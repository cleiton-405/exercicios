const output = document.getElementById("output")

function validarSenha(){
    const senhaValue = document.getElementById("senha").value
    try{
        if(senhaValue.length < 8){
          throw Error(" !!! Senha muito curta !!! ") 
        }

        output.innerHTML = ` !!! Senha válida !!! `
    }catch(erro){
        console.log("Erro", erro.message) 
    }
}