const contagemRegressiva = () =>{
    let num = 10
    const output = document.getElementById('output') 
    // Certifique-se de que o elemento existe

    const timer = setInterval(() =>{ 
        output.innerHTML = `Contagem: ${num}`
        num--

        if(num < 0){
            clearInterval(timer)
            output.innerHTML = "!!! Fim da contagem !!!"
        }
    }, 500) // 1000 milissegundos = 1 segundo
}