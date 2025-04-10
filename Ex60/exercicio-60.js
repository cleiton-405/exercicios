let text = prompt("Digite uma frase ou palavra: ")

function mostrarTotalPalavras(text){
    const palavras = text.split(/\s+/)

    return palavras.length
}

console.log("Total: "+mostrarTotalPalavras(text))