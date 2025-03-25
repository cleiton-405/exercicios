let n1 = parseFloat(prompt("Digite um número"))
let n2 = parseFloat(prompt("Digite outro número"))

    let menorNumero = 0
    let maiorNumero = 0
    let soma = 0

    while(n1 >= 0 && n2 >= 0){
        if(n1 > n2){
            maiorNumero = n1
            menorNumero = n2
        }else if(n2 > n1){
            maiorNumero = n2
            menorNumero = n1
        }
        break
    }

    soma = (n1+n2)

    console.log("Maior número é: "+maiorNumero)
    console.log("Menor número é: "+menorNumero)
    console.log("Soma dos valores: "+soma)