const output = document.getElementById("output")
const titulo = document.getElementById("titulo")
const autor = document.getElementById("autor")
const numpaginas = document.getElementById("numpaginas")

const livro = {}

function mostrarObjeto(){
    const tituloValue = titulo.value
    const autorValue = autor.value
    const numpaginasValue = Number(numpaginas.value)

    const livro = {
        titulo: tituloValue,
        autor: autorValue,
        numpaginas: numpaginasValue
    }

    for (let itens in livro) {
        output.innerHTML += `<li>${itens}: ${livro[itens]}</li>`
    } // Outra maneira de mostrar o objeto usando um loop e mostrando em uma lista 

    // output.innerHTML = `Objeto: ${JSON.stringify(livro)}`
}