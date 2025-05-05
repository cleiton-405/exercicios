const output = document.getElementById("output")
const senha = document.getElementById("senha")
const nome = document.getElementById("nome")

function validarNomeESenha(){
    try{
        const nomeValue = nome.value.toLowerCase()
        const senhaValue = senha.value.toLowerCase()

        if(nomeValue == senhaValue){
            alert("!!! Nome e senha iguais !!!")   
        }

        if(nomeValue !== senhaValue){
            alert("!!! Tudo certo !!!")   
        }

        output.innerHTML = `User: ${nomeValue} --- Password: ${senhaValue}`
    }catch(error){
        throw Error ("Erro"+error.message)
    }
}