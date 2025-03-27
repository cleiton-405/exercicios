let titulo = prompt("Digite o título do livro: ")
let autor = prompt("Digite o autor do livro: ")
let anoPublicacao = parseInt(prompt("Digite o ano da publicação do livro: "))

const livro = {titulo, autor, anoPublicacao}

function informacoes(){
    console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}`)
}

informacoes()