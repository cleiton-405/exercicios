let titulo = prompt("Digite o título: ")
    let autor = prompt("Digite o autor: ")
    let numeroDePaginas = parseInt(prompt("Digite o número de páginas do livro: "))

    const livro = {titulo, autor, numeroDePaginas}

    console.log("Informações do livro")
    console.log("--------------------")
    console.log(livro)