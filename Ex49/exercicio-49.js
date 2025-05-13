const output = document.getElementById("output")

let array = []

function adiciona(){
    const numValue = Number(document.getElementById("num").value)

    if(numValue == 0){
        alert(" !!! Nenhum número adicionado !!! ")
    }else{
        array.push(numValue)
        output.innerHTML = ` !!! Adicionado com sucesso !!! <br> ${array}`
    }
}

function somar(){
    let somarArray = 0

    array.forEach(array => {somarArray += array})

    output.innerHTML = `Soma dos números: ${somarArray}`
}