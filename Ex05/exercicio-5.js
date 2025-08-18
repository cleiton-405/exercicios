const output = document.getElementById("output")

const numerosNormal = () =>{
    let num = 0
    for(num = 1; num <= 10; num++){
        output.innerHTML += `${num}-`
    }
}

const numerosAbaixo = () =>{
    let num = 0
    for (num = 1; num <= 10; num++) {
        output.innerHTML += `${num}<br>`
    }
}