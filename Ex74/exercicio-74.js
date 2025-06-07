const listaProdutos = []

function adicionarProdutos(){
    const nome = document.getElementById("nomeProduto").value
    const preco = document.getElementById("precoProduto").value

    if(nome && !isNaN(preco)){
        listaProdutos.push({nome, preco})
        alert("Produto adicionado")

        // Limpa os campos após adicionar
        document.getElementById('nomeProduto').value = ''
        document.getElementById('precoProduto').value = ''
    }else{
        alert(" !!! Preencha os campos com nome e preço !!! ")
    }
}

function calcularTotalProdutos(){
    let total = 0

    total += listaProdutos.length

    alert(`O total dos produtos é R$ ${total}`)
}

function mostrarProdutos(){
    const output = document.getElementById("output")

    if(listaProdutos.length === 0){
        output.innerHTML = "<p>Nenhum produto cadastrado.</p>"
        return
    }

    let html = "<h3>Produtos cadastrados:</h3><ul>"

    listaProdutos.forEach((produto, index) => {
        html += `<li>${index + 1}. ${produto.nome} - R$ ${produto.preco}</li>`
    })

    html += "</ul>"
    output.innerHTML = html
}