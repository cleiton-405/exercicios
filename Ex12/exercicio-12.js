const output = document.getElementById("output")
let arr = []

const add = () =>{
    const n1 = Number(document.getElementById("n1").value)

    if(arr.length < 5){
        arr.push(n1)
        alert(`Número (${n1}) adicionado com sucesso`)
    }

    if(arr.length === 5){
        alert(" !!! Não precisa de mais números !!! ")
    }
}

const bubbleSort = () =>{
    let n = arr.length

    // Percorre todos os elementos do array
    for (let i = 0; i < n; i++){
        // Últimos i elementos já estão no lugar
        for (let j = 0; j < n - i - 1; j++){
            // Troca se o elemento atual for maior que o próximo
            if (arr[j] > arr[j + 1]){
                // Troca os elementos
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    output.innerHTML = `Array ordenado: ${arr.join(", ")}`

}

/*
Outra maneira de fazer

    let n1Value = Number(n1.value)
    let n2Value = Number(n2.value)
    let n3Value = Number(n3.value)

    let maior = 0
    let menor = 0
    let meio = 0

    if(n1Value > n2Value && n1Value > n3Value){
        maior = n1Value
            if(n2Value > n3Value){
                meio = n2Value
                menor = n3Value
            }else{
                meio = n3Value
                menor = n2Value
            }
    }else if(n1Value < n2Value && n1Value < n3Value){
        menor = n1Value
            if(n2Value < n3Value){
               meio = n2Value 
               maior = n3Value
            }else{
                maior = n2Value
                meio = n3Value
            }
    }else{
        meio = n1Value
            if(n2Value > n3Value){
                menor = n3Value
                maior = n2Value
            }else{
                maior = n3Value
                menor = n2Value
            }
    }

    output.innerHTML = `Números em ordem crescente: ${menor} - ${meio} - ${maior}`
}

*/