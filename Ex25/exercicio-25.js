const output = document.getElementById("output")
const codigo = document.getElementById("codigo")
const qtd = document.getElementById("qtd")

let total = 0

function adicionarProduto(){
    const codigoValue = Number(codigo.value)
    const qtdValue = Number(qtd.value)

    let preco = 0
    let nomeProduto = ""

    switch (codigoValue) {
        case 100:
            preco = 1.20
            nomeProduto = "Cachorro Quente"
        break
        case 101:
            preco = 1.30
            nomeProduto = "Bauru Simples"
        break
        case 102:
            preco = 1.50
            nomeProduto = "Bauru com Ovo"
        break
        case 103:
            preco = 1.20
            nomeProduto = "Hambúrguer"
        break
        case 104:
            preco = 1.70
            nomeProduto = "Cheeseburguer"
        break
        case 105:
            preco = 2.20
            nomeProduto = "Refrigerante"
        break
        default:
            output.innerHTML = `!!! Código inválido !!!`
        return
    }

        let totalProdutos = preco * qtdValue
        total += totalProdutos

        output.innerHTML = `${nomeProduto} adicionado com sucesso (R$ ${totalProdutos})`
}

function totalPedidos(){
    return output.innerHTML = `Total do pedido: R$ ${total.toFixed(2)}`
}