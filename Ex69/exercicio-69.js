const output = document.getElementById("output")

function dividir(){
    try{
        const n1Value = Number(document.getElementById("n1").value)
        const n2Value = Number(document.getElementById("n2").value)

            if(n2Value === 0 || n2){
                throw Error("Não é possível dividir por zero")
            }

        let resultado = n1Value / n2Value

        output.innerHTML =  `${resultado}`

    }catch(erro){
        console.error("Erro:", erro.message)
    }
}