const output = document.getElementById("output")

const validarNomeESenha = () =>{
    try{
        const senha = document.getElementById("senha").value.toLowerCase()
        const nome = document.getElementById("nome").value.toLowerCase()

        if(nome == senha){
            alert("!!! Nome e senha iguais !!!")   
        }

        if(nome !== senha){
            alert("!!! Tudo certo !!!")   
        }

        output.innerHTML = `User: ${nome} --- Password: ${senha}`
    }catch(error){
        throw Error ("Erro"+error.message)
    }
}