const output = document.getElementById("output")

class Pagamento{
    constructor(valorHoras, qtdHoras){
        this.valorHoras = valorHoras
        this.qtdHoras = qtdHoras
        this.salarioBruto = (valorHoras * qtdHoras)
    }
}

const folhaDePagamento = () =>{
    const valorHorasInput = document.getElementById("valorHora")
    const qtdHorasInput = document.getElementById("qtdHoras")

    const valorHoras = Number(valorHorasInput.value)
    const qtdHoras = Number(qtdHorasInput.value)

    const pagamentoFuncionario = new Pagamento(valorHoras, qtdHoras)

    if(pagamentoFuncionario.salarioBruto <= 900){
        descontoimpostoDeRenda = 0
    }else if(pagamentoFuncionario.salarioBruto <= 1500){
        descontoimpostoDeRenda = 0.05
    }else if(pagamentoFuncionario.salarioBruto <= 2500){
        descontoimpostoDeRenda = 0.10
    }else{
        descontoimpostoDeRenda = 0.20
    }

    ir = pagamentoFuncionario.salarioBruto * descontoimpostoDeRenda
    inss = pagamentoFuncionario.salarioBruto * 0.10
    fgts = pagamentoFuncionario.salarioBruto * 0.11

    totalDescontos = ir + inss
    salarioLiquido = pagamentoFuncionario.salarioBruto - totalDescontos

    output.innerHTML = ` 
    <p style="text-align: left;">Lista detalhada sobre o pagamento e descontos</p> <br>
    <ul style="text-align: left;">
        <li> Seu salário bruto: R$ ${pagamentoFuncionario.salarioBruto.toFixed(2)}</li><br>
        <li>Desconto IR: R$ ${ir.toFixed(2)}</li><br>
        <li>Desconto INSS: R$ ${inss.toFixed(2)}</li><br>
        <li>FGTS: R$ ${fgts.toFixed(2)}</li><br>
        <li>Total descontos: R$ ${totalDescontos.toFixed(2)}</li><br>
        <li>Salário liquido: R$ ${salarioLiquido.toFixed(2)}</li><br>
    </ul>`

    valorHorasInput.value = ""
    qtdHorasInput.value = ""
}

/*

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

*/