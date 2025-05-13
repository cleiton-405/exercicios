function informacoes(){
    const output = document.getElementById("output")
    const tituloValue = document.getElementById("titulo").value
    const autorValue = document.getElementById("autor").value
    const anoPublicacaoValue = Number(document.getElementById("anopublicacao").value)

    const livro = {
        titulo: tituloValue,
        autor: autorValue,
        anoPublicacao:anoPublicacaoValue
    }

    output.innerHTML = `O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}`
}