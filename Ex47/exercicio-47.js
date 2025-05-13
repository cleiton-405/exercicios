const output = document.getElementById("output")

let estoque = {
    produto: "",
    quantidade: 0,
    preco: 0,
}

function adicionarProduto(){
    const produtoValue = document.getElementById("produto").value
    const qtdValue = Number(document.getElementById("qtd").value)
    const precoValue = Number(document.getElementById("preco").value)

    estoque.produto = produtoValue
    estoque.quantidade += qtdValue
    estoque.preco = precoValue

    output.innerHTML = ` !!! Produto "${produtoValue}" adicionado com sucesso! !!! `
}

function verificarEstoque(){
    output.innerHTML = `Produto: ${estoque.produto} <br>
    Quantidade em estoque: ${estoque.quantidade} <br>
    Preço unitário: R$ ${estoque.preco.toFixed(2)}`
}

function venderProdutos(){
    const qtdValue = Number(document.getElementById("qtd").value)

    if(qtdValue <= estoque.quantidade){
        estoque.quantidade -= qtdValue
        const total = estoque.preco * qtdValue
        output.innerHTML = ` ! Venda realizada com sucesso! Total: R$ ${total.toFixed(2)}`
    }else{
        output.innerHTML = ` !!! Quantidade insuficiente em estoque !!! `
    }
}