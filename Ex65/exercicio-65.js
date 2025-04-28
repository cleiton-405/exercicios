const n1 = document.getElementById("n1") //Validando n1 para digitação
const output = document.getElementById("output")
let array = [] //Array

function adicionarArray(){ // Inicio da função
    const n1Value = parseInt(n1.value) //Validando o número digitado

    if(!isNaN(n1Value)){ //Inicio do if verificando se ele é número
        array.push(n1Value) // Adiciona valor ao array
        if(array.length === 4){
            mediaArray(array)
            array = [] // Zera o array para novo uso
        }else{
            const restante = 4 - array.length
            output.innerHTML = `Valor adicionado: ${n1Value}. Faltam ${restante} valor(es).`
        }
    }else{
        output.innerHTML = "Por favor, insira um número válido."
    }

    n1.value = "" //Limpa o input
    n1.focus() //Mantém o foco no input
}

function mediaArray(array){
    const soma = array.reduce((acc, val) => acc + val, 0)
    const media = soma / array.length

    output.innerHTML = `Sua média é: ${media.toFixed(2)}` //Mostra o resultado e Arredonda para 2 casas

    return media //Retorna a media
}