function inverterString(str){ ////Inicio da função passando str como parâmetro
    return str.split('').reverse().join('') //Retorno pegando a string e invertendo ela
}
  
console.log(inverterString("javascript")) //Resultado ao contrário
console.log(inverterString("banana")) //Resultado ao contrário
console.log(inverterString("12345")) //Resultado ao contrário