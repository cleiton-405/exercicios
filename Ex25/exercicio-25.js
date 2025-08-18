const output = document.getElementById("output")

let total = []

const adicionarProduto = () =>{
    const codigo = document.getElementById("codigo")
    const qtd = document.getElementById("qtd")

    const codigoValue = Number(codigo.value)
    const qtdValue = Number(qtd.value)

    let preco = 0
    let nomeProduto = ""

    switch (codigoValue){
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
        total.push(totalProdutos)

        const totalArray = total.reduce((acc, val) => acc + val, 0)

        output.innerHTML = `${nomeProduto} adicionado com sucesso (R$ ${totalArray})`

        codigo.value = ""
        qtd.value = ""
}

const totalPedidos = () =>{
    const totalArray = total.reduce((acc, val) => acc + val, 0)

    if(totalArray === 0){
        return output.innerHTML = `!!! Carrinho vazio !!!`
    }else{
        return output.innerHTML = `Total do pedido: R$ ${totalArray}`
    }
}

const resetPedidos = () =>{
    total = 0
    
    codigo.value = ""
    qtd.value = ""

    return output.innerHTML = `!!! Esvaziou o carrinho !!!`
}