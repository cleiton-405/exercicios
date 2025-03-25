while(true){
    let temp = parseInt(prompt(" Digite a temperatura (0 para sair do programa): "))

    if(temp === 0){
        alert(" !!! Saiu do programa !!! ")
        break
    }

    if(isNaN(temp)){
        alert(" !!! DIGITE APENAS NÚMEROS !!! ")
        continue
    }

    switch(true){
        case (temp < 0):
            alert("Congelante")
        break
        case (temp >= 0 && temp <= 10):
            alert("Frio")
        break    
        case (temp >= 11  && temp <= 20):
            alert("Agradável")
        break
        case (temp >= 21 && temp <= 30):
            alert("Quente")
        break
        case (temp > 30):
            alert("Muito quente")
        break        
    }
}