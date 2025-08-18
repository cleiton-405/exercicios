const output = document.getElementById("output")

const validar = () =>{
    try{
        const n1 = Number(document.getElementById("n1").value)

        if(isNaN(n1) || n1 < 0 || n1 > 10){
            throw Error (" !!! Número inválido !!! ")
            return // Encerra a função se inválido
        }

        output.innerHTML = `Número válido: ${n1}`
    }catch(error){
        throw Error ("Ocorreu um erro: " + error.message)
    }
}