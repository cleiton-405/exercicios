const output = document.getElementById("output")
const frutas = document.getElementById("frutas")

const listafrutas = []

function adicionarFrutas(){
    const frutasValue = frutas.value.trim() // .trim() remove os espaços

    if(frutasValue === ""){
        alert(" !!! Campo de fruta está vazio !!! ")
        
    }

    listafrutas.push(frutasValue)
    
    alert(" !!! Fruta adicionada com sucesso !!! ")

    frutas.value = "" //Limpa o campo após adicionar
}

function listaFrutas(){
    if(listafrutas.length === 0){
        output.innerHTML = "Nenhuma fruta adicionada."
    }else{
        output.innerHTML = `Frutas: ${listafrutas.join(" - ")}`
    }
}