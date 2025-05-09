const output = document.getElementById("output")
const marca = document.getElementById("marca")
const modelo = document.getElementById("modelo")
const ano = document.getElementById("ano")

function resultado(){
    const marcaValue = marca.value
    const modeloValue =  modelo.value
    const anoValue = Number(ano.value)

    const carro = {
        marca:marcaValue,
        modelo: modeloValue,
        ano: anoValue
    }

    for(let prop in carro){
        output.innerHTML += `${prop} ${carro[prop]} <br>`
    }
}