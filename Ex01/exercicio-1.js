const output = document.getElementById("output")
const n1 = document.getElementById("n1")

function validar(){
    try{
        const n1Value = parseInt(n1.value)

        if(isNaN(n1Value) || n1Value < 0 || n1Value > 10){
            throw Error (" !!! Número inválido !!! ")
            return // Encerra a função se inválido
        }

        output.innerHTML = `Número válido: ${n1Value}`
    }catch(error){
        throw Error ("Ocorreu um erro: " + error.message)
    }
}