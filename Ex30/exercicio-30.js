const output = document.getElementById("output")
const qtd = document.getElementById("qtd")
const codigo = document.getElementById("codigo")

let total = 0

function adicionarProdutos(){
    const qtdValue = Number(qtd.value)
    const codigoValue = Number(codigo.value)

        let preco = 0
        let nome = ""

        switch (codigoValue) {
            case 1:
                preco = 30
                nome = "Pizza"
            break
            case 2:
                preco = 15
                nome = "Hambúrguer"
            break
            case 3:
                preco = 10
                nome = "Salada"
            break
            case 4:
                preco = 40
                nome = "Refeição completa"
            break
            default:
                output.innerHTML = "Código inválido."
                return
        }

    const subtotal = qtdValue * preco
    const taxa = subtotal * 0.1
    const totalItem = subtotal + taxa

        total += totalItem
    
        output.innerHTML = `${nome} adicionado com sucesso. Subtotal: R$ ${totalItem.toFixed(2)}`
}

function totalProdutos(){
    output.innerHTML = `Total acumulado: R$ ${total.toFixed(2)}`
}            