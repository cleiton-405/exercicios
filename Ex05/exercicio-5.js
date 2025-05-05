const output = document.getElementById("output")

function numerosNormal(){
    let num = 0
    for(num = 1; num <= 10; num++){
        output.innerHTML += `${num}-`
    }
}

function numerosAbaixo(){
    let num = 0
    for (num = 1; num <= 10; num++) {
        output.innerHTML += `${num}<br>`
    }
}