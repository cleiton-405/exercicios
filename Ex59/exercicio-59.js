let n1 = parseFloat(prompt("Digite o primeiro número: "))
let n2 = parseFloat(prompt("Digite o segundo número: "))

function soma(n1,n2){
    return n1 + n2
}

function subtrair(n1,n2){
    return n1 - n2
}

function multiplicar(n1,n2){
    return n1 * n2
}

function dividir(n1,n2){
    if(n2 === 0){
        return 'Não é possível dividir por zero'
    }
    return n1 / n2
}   

console.log(soma(n1,n2))
console.log(subtrair(n1,n2))
console.log(multiplicar(n1,n2))
console.log(dividir(n1,n2))