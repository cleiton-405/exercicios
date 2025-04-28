function raizQuadrada(n){
    const raizQuadrada = Math.sqrt(n)

    if (typeof n !== "number"){
        throw new Error("O valor precisa ser um número.")
    }

    if(n < 0){
        throw new Error("Não é possível calcular a raiz quadrada de número negativo.")
    }

    return raizQuadrada
}

try{
    console.log(raizQuadrada("abc")) // Erro: não é número
}catch(error){
    console.log("Erro capturado:", error.message)
}
  
try{
    console.log(raizQuadrada(-4)) // Erro: número negativo
}catch(error){
    console.log("Erro capturado:", error.message)
}
  
try{
    console.log(raizQuadrada(16))    // Deve funcionar: 4
}catch(error){
    console.log("Erro capturado:", error.message)
}
