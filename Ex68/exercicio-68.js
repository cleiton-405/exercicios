const jsonInvalido = '{"nome": "João", idade: 30}' //Entrada de dados

try{ //Try para tentar uma resposta
  const dados = JSON.parse(jsonInvalido) //Validação

  console.log("JSON válido:", dados) //Resultado

}catch(erro){ //Catch mensagem de erro, caso tenha um erro
  console.log("Erro ao fazer o parse do JSON:", erro.message) //Mensagem de erro
}