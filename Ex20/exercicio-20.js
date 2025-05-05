const output = document.getElementById("output")
const n1 = document.getElementById("n1")

function semana(){
    const n1Value = Number(n1.value)

        if(n1Value == 0){
            output.innerHTML = ("DOMINGO")
        }else if(n1Value == 1){
            output.innerHTML = ("SEGUNDA-FEIRA")
        }else if(n1Value == 2){
            output.innerHTML = ("TERÇA-FEIRA")
        }else if(n1Value == 3){
            output.innerHTML = ("QUARTA-FEIRA")
        }else if(n1Value == 4){
            output.innerHTML = ("QUINTA-FEIRA")
        }else if(n1Value == 5){
            output.innerHTML = ("SEXTA-FEIRA")
        }else if(n1Value == 6){
            output.innerHTML = ("SABADO")
        }else{
            output.innerHTML = (" !!! NÚMERO INVÁLIDO !!! ")
        }
}