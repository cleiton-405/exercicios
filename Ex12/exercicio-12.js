const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")

function ordemCrescente(){
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