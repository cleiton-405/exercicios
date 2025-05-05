const output = document.getElementById("output")
const valorHoras = document.getElementById("valorHora")
const qtdHoras = document.getElementById("qtdHoras")
    
function folhaDePagamento(){
    const valorHoraValue = Number(valorHora.value)
    const qtdHorasValue = Number(qtdHoras.value)

    salarioBruto = valorHoraValue * qtdHorasValue
            
        if(salarioBruto <= 900){
            descontoimpostoDeRenda = 0
        }else if(salarioBruto <= 1500){
            descontoimpostoDeRenda = 0.05
        }else if(salarioBruto <= 2500){
            descontoimpostoDeRenda = 0.10
        }else{
            descontoimpostoDeRenda = 0.20
        }

    ir = salarioBruto * descontoimpostoDeRenda
    inss = salarioBruto * 0.10
    fgts = salarioBruto * 0.11

        totalDescontos = ir + inss
        salarioLiquido = salarioBruto - totalDescontos

    output.innerHTML = ` Lista detalhada sobre o pagamento e descontos <br><br>
    <li> Seu salário bruto: ${salarioBruto} </li> <br>
    <li>Desconto IR: ${ir} </li> <br>
    <li>Desconto INSS: ${inss} </li> <br>
    <li>FGTS: ${fgts} </li> <br>
    <li>Total descontos:: ${totalDescontos} </li> <br>
    <li>Salário liquido: ${salarioLiquido} </li> <br>`
}