const output = document.getElementById("output")
class Livro{

    constructor(titulo, autor, numpaginas){
        this.titulo = titulo
        this.autor = autor
        this.numpaginas = numpaginas
    }

}

const mostrarObjeto = () =>{
    const pessoa = new Livro()

    pessoa.titulo = document.getElementById("titulo").value
    pessoa.autor = document.getElementById("autor").value
    pessoa.numpaginas = Number(document.getElementById("numpaginas").value)

    output.innerHTML = `
    <ul style="text-align: left;">
        <li>${pessoa.titulo}</li>
        <li>${pessoa.autor}</li>
        <li>${pessoa.numpaginas}</li>
    </ul>
    `
}