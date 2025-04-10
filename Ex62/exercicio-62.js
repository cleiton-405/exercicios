const array = []
const n1Input = document.getElementById("n1")
const resultado = document.getElementById("resultado")
const maiorNumeroResultado = document.getElementById("maiorNumeroResultado")

function adicionarArray(){
    let valor = parseInt(n1Input.value)

    if(!isNaN(valor)){
        array.push(valor)
        resultado.innerHTML = `Número ${valor} adicionado!`
        n1Input.value = ""

    }else{
        resultado.innerHTML = "Por favor, insira um número válido."
    }
}

function maiorNumero(array){
    if(array.length === 0){
        return null
    }

    let maior = array[0]

    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }

    return maior
}

function mostraMaiorNumero(){
    const maior = maiorNumero(array)

    maiorNumeroResultado.innerHTML = "<p>Maior número: "+maior+"</p>"
}