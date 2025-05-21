const output = document.getElementById("output")

const carro = {
    marca: "",
    modelo: "",
    ano: 0
}

function informacoes(){
    const marcaValue = document.getElementById("marca").value
    const modeloValue = document.getElementById("modelo").value
    const anoValue = Number(document.getElementById("ano").value)

    carro.marca = marcaValue
    carro.modelo = modeloValue
    carro.ano = anoValue

    const linhas = []

    for(let prop in carro){
        linhas.push(`${prop} = ${carro[prop]}`)
    }

    output.innerHTML = linhas.join("<br>")
}