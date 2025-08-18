const output = document.getElementById("output")
let arrayFrutas = []
class Frutas{
    constructor(frutasnew){
        this.frutasnew = frutasnew
    }
}

const adicionarFrutas = () =>{
    const frutaInput = document.getElementById("frutas")
    const fruta1 = new Frutas(frutaInput.value)

    arrayFrutas.push(fruta1) // Adiciona o objeto em uma array
    alert("!!! Fruta adicionada !!!")

    frutaInput.value = "" // Limpa o campo
}

const listaFrutas = () =>{
    if(arrayFrutas.length === 0){
        output.innerHTML = "!!! Nenhuma fruta adicionada !!!"
    }else{
        const nomeFrutas = arrayFrutas.map(f => f.frutasnew)
        output.innerHTML = `Frutas: ${nomeFrutas.join(" - ")}`
    }
}

/*

const adicionarFrutas = () =>{
    const frutasValue = document.getElementById("frutas").value.trim() // .trim() remove os espaços

    if(frutasValue === ""){
        alert(" !!! Campo de fruta está vazio !!! ")
        return  
    }

    listafrutas.push(frutasValue) // Adiciona a fruta
    alert(" !!! Fruta adicionada com sucesso !!! ")

    frutas.value = "" //Limpa o campo após adicionar
}

const listaFrutas = () =>{
    if(listafrutas.length === 0){
        output.innerHTML = "!!! Nenhuma fruta adicionada !!!"
    }else{
        output.innerHTML = `Frutas: ${listafrutas.join(" - ")}`
    }
}

*/