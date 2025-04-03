const array = {
    numeros:[1,2,3]
}

const arrayInfo = document.getElementById("arrayInfo")

arrayInfo.innerHTML += "<p>Array: "+array.numeros+"</p>"

    let soma = 0

    for(let i = 0; i < array.numeros.length; i++){
        soma += array.numeros[i]
    }

arrayInfo.innerHTML += "<p>Soma: "+soma+"</p>"