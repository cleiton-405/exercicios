const output = document.getElementById("output")

const array = []

const arrayDigitada = () =>{
    const n1Value = Number(document.getElementById("n1").value)
    const n2Value = Number(document.getElementById("n2").value)
    const n3Value = Number(document.getElementById("n3").value)

    array.length = 0 // Limpa o array

    array.push(n1Value, n2Value, n3Value) // Adiciona no array

    output.innerHTML = `Lista normal: ${array.join("-")}` 
    // Mostrando no HTML usando .join()
}

const inverterArray = () =>{
    array.reverse() // Invertando a array

    output.innerHTML = `Lista invertida: ${array.join("-")}`
    // Mostrando no HTML usando .join()
}