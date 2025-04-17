function somaSegura(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        alert("Erro: ambos os parâmetros devem ser números.")
    }
    return a + b
  }

console.log(somaSegura(5, 10))
console.log(somaSegura(3, "abc"))
console.log(somaSegura("2", true))