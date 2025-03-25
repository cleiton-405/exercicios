            let total = 0

            alert(" 100 - Cachorro Quente ")
            alert(" 101 - Bauru Simples ")
            alert(" 102 - Bauru com ovo ")
            alert(" 103 - Hambúrguer ")
            alert(" 104 - Cheeseburguer ")
            alert(" 105 - Refrigerante ")
            alert(" -- Cardápio restaurante -- ")

            while (true) {
                let codigo = parseInt(prompt("Digite o código do produto (0 para encerrar):"))

                if (codigo === 0) {
                break
                }

                if (codigo < 100 || codigo > 105) {
                alert("Código inválido! Tente novamente.")
                continue
                }

                let quantidade = parseInt(prompt("Qual a quantidade desse produto?"))

                let preco = 0
                let nomeProduto = ""

                if (codigo === 100) {
                    preco = 1.20
                    nomeProduto = "Cachorro Quente"
                } else if (codigo === 101) {
                    preco = 1.30
                    nomeProduto = "Bauru Simples"
                } else if (codigo === 102) {
                    preco = 1.50
                    nomeProduto = "Bauru com ovo"
                } else if (codigo === 103) {
                    preco = 1.20
                    nomeProduto = "Hambúrguer"
                } else if (codigo === 104) {
                    preco = 1.30
                    nomeProduto = "Cheeseburguer"
                } else if (codigo === 105) {
                    preco = 1.00
                    nomeProduto = "Refrigerante"
                }

                let totalItem = preco * quantidade
                total= total + totalItem

                alert(nomeProduto + " - Quantidade: " + quantidade + " - Total: R$ " + totalItem)
                }

                alert("Total do pedido: R$ " + total)