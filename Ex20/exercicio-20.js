const output = document.getElementById("output")
class Semana{
    constructor(){
        this.dias = [
        /*0*/    "Domingo",
        /*1*/   "Segunda-feira",
        /*2*/    "Terça-feira",
        /*3*/    "Quarta-feira",
        /*4*/    "Quinta-feira",
        /*5*/    "Sexta-feira",
        /*6*/    "Sábado"
        ]
    }
    // Dentro do constructor usando uma array para os dias da semana. Como array começa com zero, atribuimos os dias com as posições da array

    getDia(numero){
        return this.dias[numero]
    }
    // Criado um método que retorna o dia da semana com base no número
}

const semana = () =>{
    const n1Input = document.getElementById("n1")
    const n1 = Number(n1Input.value)

    if(n1 < 0 || n1 > 6){
        alert("!!! NÚMERO INVÁLIDO !!!")
        return
    }

    const semana = new Semana() // Criando um "objeto" da classe
    const nomeDoDia = semana.getDia(n1) // Chamando o método dentro da classe

    output.innerHTML = `Dia: ${nomeDoDia}`
}
/*

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

*/