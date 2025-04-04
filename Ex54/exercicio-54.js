let titular = prompt("Digite o nome do titular: ")
let saldo = parseFloat(prompt("Digite o seu saldo: "))
let deposito = parseFloat(prompt("Digite um valor para depósito: "))

const contaBancaria = {titular,saldo, deposito}

const info = document.getElementById("info")

info.innerHTML += "<p>Nome do titular: "+contaBancaria.titular+"</p>"

info.innerHTML += "<p>Saldo: "+contaBancaria.saldo+"</p>"

contaBancaria.deposito += contaBancaria.saldo

info.innerHTML += "<p>Novo saldo com depósito: "+contaBancaria.deposito+"</p>"