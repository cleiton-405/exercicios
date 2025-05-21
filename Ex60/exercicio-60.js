const output = document.getElementById("output")

function mostrarTotalPalavras(){
    const palavrasValue = document.getElementById("palavras").value.trim()

    const contador = palavrasValue.split(/\s+/).length

    output.innerHTML = `Total: ${contador}`
}