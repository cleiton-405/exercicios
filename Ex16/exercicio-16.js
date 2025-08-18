const output = document.getElementById("output")

const loop = () =>{
    for(let num = 0;num <= 100; num++){
        output.innerHTML += `${num}<br>`
    }
}