//USANDO UMA FUNÇÃO E SORT PARA ORDENAR OS NÚMER
let numeros = []
            
    for(let i = 0; i <= 4; i++){
        let num = parseInt(prompt("Digite um número: "))
                
        numeros[i] = num
    }
            
    function compararNumeros(a, b){
        return a - b
    }

    numeros.sort(function (a, b) {
        return a - b
    })
    
    console.log("Os números ordenados: "+numeros)