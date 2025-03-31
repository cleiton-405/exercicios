const estoque = {
    produto: "Produto Exemplo", // Nome do produto
    quantidade: 100, // Quantidade inicial em estoque
    preco: 50, // Preço por unidade do produto
  
    // Método para adicionar ao estoque
    adicionarEstoque: function(quantidade){
      estoque.quantidade += quantidade
    },
  
    // Método para vender o produto
    venderProduto: function(quantidade) {
      if(quantidade <= estoque.quantidade){
        estoque.quantidade -= quantidade
        return estoque.preco * quantidade // Retorna o valor da venda
      }else{
        console.log("Quantidade insuficiente em estoque.")
        return 0
      }
    }
  }
  
  estoque.adicionarEstoque(50) // Aumenta o estoque em 50 unidades

  console.log(estoque.quantidade) // Exibe a nova quantidade em estoque
  
  const valorVenda = estoque.venderProduto(30) // Vende 30 unidades

  console.log("Valor da venda: R$", valorVenda) // Exibe o valor da venda

  console.log(estoque.quantidade) // Exibe a quantidade restante após a venda

  