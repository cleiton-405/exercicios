const output = document.getElementById("output")

const contaBancaria = {
    nome: "",
    saldo: 0
}

function depositar(){
    const valorValue = Number(document.getElementById("valor").value)
    const titularValue = document.getElementById("titular").value

    contaBancaria.nome = titularValue
    contaBancaria.saldo += valorValue

    output.innerHTML = ` !!! Depósito adicionado com sucesso: R$ ${valorValue.toFixed(2)} !!! `
}

function saque(){
    const saqueDinheiroValue = Number(document.getElementById("saquedinheiro").value)

    if(saqueDinheiroValue <= 0){
        output.innerHTML = `!!! Valor de saque inválido !!!`
        return
    }

    if(saqueDinheiroValue > contaBancaria.saldo){
        output.innerHTML = `!!! Saldo insuficiente para saque !!!`
    }else{
        contaBancaria.saldo -= saqueDinheiroValue
        output.innerHTML = `!!! Saque realizado com sucesso: R$ ${saqueDinheiroValue.toFixed(2)} !!!`
    }
}

function saldo(){
    if(contaBancaria.saldo === 0){
        output.innerHTML = `!!! Nenhum dinheiro depositado !!!`
    }else{
        output.innerHTML = `Nome: ${contaBancaria.nome} <br> 
        Saldo: R$ ${contaBancaria.saldo.toFixed(2)}`
    }
}