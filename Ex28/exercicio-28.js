while(true){

    let idade = parseInt(prompt("Digite sua idade (0 para sair): "))

    if(idade === 0){
        alert("Você saiu do programa")
        break
    }

    if(idade < 1 || idade === ""){
        alert(" !!! DIGITE UMA IDADE !!! ")
        continue
    }

        switch(true){
            case (idade > 0 && idade < 10):
                alert("Você é uma criança")
            break
            case (idade >= 10 && idade < 18):
                alert("Você é um adolescente")
            break
            case (idade >= 18 && idade < 60):
                alert("Você é um adulto")
            break
            case (idade >= 60):
                alert("Você é um idoso")
            break        
        }
    }