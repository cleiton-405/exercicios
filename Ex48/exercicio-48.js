const carrinho = {
    produtos:[
        { nome: "Maça", quantidade: 20, preco: 5 },
        { nome: "Banana", quantidade: 50, preco: 10 },
        { nome: "Uva", quantidade: 30, preco: 20 }
    ]
}

function adicionarProduto(carrinho, produto){
    const produtoExistente = carrinho.produtos.find(p => p.nome === produto.nome)
    
    if(produtoExistente){
        produtoExistente.quantidade += produto.quantidade
    }else{
        carrinho.produtos.push(produto)
    }
}

function removerProduto(carrinho, nome){
    const indice = carrinho.produtos.findIndex(p => p.nome === nome)
    
    if(indice !== -1){
        carrinho.produtos.splice(indice, 1)
    }else{
        console.log("Produto não encontrado.")
    }
}

function calcularTotal(carrinho){
    let total = 0
    
    carrinho.produtos.forEach(produto => {total += produto.quantidade * produto.preco})

    return total
}

adicionarProduto(carrinho, {nome: "Pera", quantidade: 10, preco: 8})
console.log(carrinho.produtos)

removerProduto(carrinho, "Banana")
console.log(carrinho.produtos)

const total = calcularTotal(carrinho)
console.log("Total do carrinho:", total)