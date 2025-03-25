let numeros = []
let n1 = 0
let n2 = 0
let n3 = 0

    for(let i = 0; i < 3; i++){
        let num = parseInt(prompt("Digite um número: "))

        numeros[i] = num
    }

    if(numeros[0] > numeros[1] && numeros[0] > numeros[2]){
        n3 = numeros[0]
            if(numeros[1] > numeros[2]){
                n2 = numeros[1]
                n1 = numeros[2]
            }else{
                n2 = numeros[2]
                n1 = numeros[1]
            }
    }else if(numeros[0] < numeros[1] && numeros[0] < numeros[2]){
        n1 = numeros[0]
            if(numeros[1] < numeros[2]){
                n2 = numeros[1]
                n3 = numeros[2]
            }else{
                        n2 = numeros[2]
                        n3 = numeros[1]
            }
    }else{
        n2 = numeros[0]
            if(numeros[1] > numeros[2]){
                n3 = numeros[1]
                n1 = numeros[2]
            }else{
                n3 = numeros[2]
                n1 = numeros[1]
            }
    }

    console.log("Números digitados: "+numeros)
    console.log("Números ordenados: "+n1+" - "+n2+" - "+n3)  