    let valorSuaHora = parseFloat(prompt("Digite o valor da sua hora: "))
    let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a sua quantidade de hor    trabalhadas no mês: "))

    salarioBruto = valorSuaHora * quantidadeHorasTrabalhadas
            
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

    console.log("Seu salário bruto: "+salarioBruto)
    console.log("Desconto IR: "+ir)
    console.log("Desconto INSS: "+inss)
    console.log("FGTS: "+fgts)
    console.log("Total descontos: "+totalDescontos)
    console.log("Salário liquido: "+salarioLiquido)