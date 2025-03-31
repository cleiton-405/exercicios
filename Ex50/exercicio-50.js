
while(true){
    let horario = parseInt(prompt("Digite um horário de 0-23: "))

    if(horario === -1){
        alert("Você saiu do programa")
        break
    }

    if(isNaN(horario)){
        alert(" !!! DIGITE APENAS NÚMEROS !!! ")
        continue
    }

    switch(true){
        case (horario >= 0 && horario <= 5):
            alert(" Boa madrugada ")
        break 
        case (horario >= 6 && horario <= 11):
            alert(" Bom dia ")
        break   
        case (horario >= 12 && horario <= 17):
            alert(" Boa tarde ")
        break
        case (horario >= 18 && horario <= 23):
            alert(" Boa noite ")
        break
        case (horario > 23):
            alert(" !!! Horario inexistente !!! ")
        break
    }
}