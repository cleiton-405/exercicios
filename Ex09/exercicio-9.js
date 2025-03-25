let num = parseInt(prompt("Digite um número"))
    divisores = 0

    for(i = 1 ; i <= num ; i++){
        if(num % i == 0){
            divisores++
        }
  	}
    
    if(divisores == 2){
        console.log("O "+num+" é primo")
    }else{
        console.log("O "+num+" não é primo")
    }