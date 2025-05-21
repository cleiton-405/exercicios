const array = []
const output = document.getElementById("output")

function adicionarArray(){
    const n1Value = Number(document.getElementById("n1").value)

    array.push(n1Value)

    output.innerHTML = `Número ${array} adicionado!`
}

function maiorNumero(array){
    if(array.length === 0){
        output.innerHTML = `Array vazia`
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

    output.innerHTML = "<p>Maior número: "+maior+"</p>"
}