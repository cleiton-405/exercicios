function somaSegura(a, b){ //Inicio da função passando dois números por parâmetros
    if(typeof a !== "number" || typeof b !== "number"){ //Usando if para comparações
        alert("Erro: ambos os parâmetros devem ser números.") //Mensagem de erro
    }
    return a + b //Retorno da função somando
  }

console.log(somaSegura(5, 10)) //Resultado correto
console.log(somaSegura(3, "abc")) //Resultado errado
console.log(somaSegura("2", true)) //Resultado errado