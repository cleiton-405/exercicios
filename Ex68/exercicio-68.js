const output = document.getElementById("output")

const jsonInvalido = {
  nome: "",
  idade: 0
}

function validar(){
  try{
    const nomeValue = document.getElementById("nome").value
    const idadeValue = Number(document.getElementById("idade").value)

      if(jsonInvalido.idade <= 0){
        throw Error("dados inválidos ou nome ou idade inválida")
      }
     
    jsonInvalido.nome = nomeValue
    jsonInvalido.idade = idadeValue  

    output.innerHTML = `JSON válido: nome = ${jsonInvalido.nome}, idade = ${jsonInvalido.idade}`

  }catch(erro){
    console.error("Erro:", erro.message)
  }
}