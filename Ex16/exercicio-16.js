const output = document.getElementById("output")

function loop(){
    for(let num = 0;num <= 100; num++){
        output.innerHTML += `${num}<br>`
    }
}
