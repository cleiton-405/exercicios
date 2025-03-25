let i = 0 
let soma = 0
let media = 0

    for(i = 0;i <= 5; ++i) {
        let num = parseInt(prompt("Digite um número: "))

        num = num + 1
        soma = num + num + num + num + num
        media = soma / 2

    }

    console.log("A soma dos números é: "+soma)
    console.log("A média dos números é: "+media)

    //Outra forma de realizar o exercicio

    /*

    let i = 0 
    let maior = 1
            
    for(i = 1;i <= 5;++i){
        let num = parseInt(prompt("Digite um número: "))
            if(num > maior){
                maior = num
            }
    }
    
    console.log("O maior número é: ", maior)

    */