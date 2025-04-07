let marca = prompt("Digite a marca do carro: ")
let modelo = prompt("Digite o modelo do carro: ")
let ano = parseInt(prompt("Digite o ano do carro: "))

const carro = {
    marca: marca,
    modelo: modelo,
    ano: ano
}

function informacoesCarro(){
    document.write(`A marca ${carro.marca}, o modelo ${carro.modelo} e o ano ${carro.ano}`)
}

informacoesCarro()