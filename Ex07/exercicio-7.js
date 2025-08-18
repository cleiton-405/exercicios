const output = document.getElementById("output")

const impares = () =>{
    let num = 0

    for(num = 0;num <= 30; num++){
        if(num % 2 != 0){
            output.innerHTML += `${num}<br>`
        }
    }
}