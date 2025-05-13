const output = document.getElementById("output")

let carrinho = {
    produtos:[]
}

function adicionarProduto(){
    const nomeValue = document.getElementById("nome").value
    const qtdProdutoValue = Number(document.getElementById("qtdProduto").value)
    const precoValue = Number(document.getElementById("preco").value)

    const produtoExistente = carrinho.produtos.find(p => p.nome === nomeValue)
    
    if(produtoExistente){
        produtoExistente.quantidade += qtdProdutoValue
        produtoExistente.preco = precoValue
    }else{
        carrinho.produtos.push({
            nome: nomeValue,
            quantidade: qtdProdutoValue,
            preco: precoValue
        })
    }

    alert(" !!! Produto adicionado !!! ")

}

function removerProduto(){
    const nomeValue = document.getElementById("nome").value

    const indice = carrinho.produtos.findIndex(p => p.nome === nomeValue)

    if(indice !== -1){
        carrinho.produtos.splice(indice, 1)
    }else{
        alert(" !!! Produto não encontrado !!! ")
    }

}

function calcularTotal(carrinho){
    let total = 0

    carrinho.produtos.forEach(produto => {total += produto.quantidade * produto.preco})

    return total
}

function estoqueProdutos(){

    output.innerHTML = carrinho.produtos.map(produto => `
        Nome: ${produto.nome} <br>
        Quantidade: ${produto.quantidade} <br>
        Preço: R$${produto.preco.toFixed(2)} <br>
        <p>Total: R$${calcularTotal(carrinho).toFixed(2)}</p>`)
}