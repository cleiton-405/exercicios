const output = document.getElementById("output")
const palavra = document.getElementById("palavra")

function contadorVogais(){
    const palavraValue = palavra.value

    if(!isNaN(palavraValue) && palavraValue !== ""){
        output.innerHTML = ` !!! Digite apenas palavras !!! `
        return
    }

    const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚ"
    let contador = 0

    for(let i = 0; i < palavraValue.length; i++){
        if(vogais.includes(palavraValue[i])){
            contador++
        }
    }

    output.innerHTML = `Quantidade de vogais: ${contador}`
}