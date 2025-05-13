function saudacao(){
    const horaValue = Number(document.getElementById("hora").value)

    if(horaValue == -1){
        alert(" !!! Horário inexistente !!! ")
    }

    switch(true){
        case (horaValue >= 0 && horaValue <= 5):
            alert(" Boa madrugada ")
        break 
        case (horaValue >= 6 && horaValue <= 11):
            alert(" Bom dia ")
        break   
        case (horaValue >= 12 && horaValue <= 17):
            alert(" Boa tarde ")
        break
        case (horaValue >= 18 && horaValue <= 23):
            alert(" Boa noite ")
        break
        case (horaValue > 23):
            alert(" !!! Horario inexistente !!! ")
        break
    }
}