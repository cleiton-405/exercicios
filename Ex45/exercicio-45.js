alert("Informe o primeiro funcionário")

let nome1 = prompt("Digite seu nome: ")
let cargo1 = prompt("Digite o seu cargo: ")
let salario1 = parseFloat(prompt("Digite o seu salário: "))

alert("Informe o segundo funcionário")

let nome2 = prompt("Digite seu nome: ")
let cargo2 = prompt("Digite o seu cargo: ")
let salario2 = parseFloat(prompt("Digite o seu salário: "))

const empresa = {
    funcionarios: [
        { nome: nome1, cargo: cargo1, salario: salario1 },
        { nome: nome2, cargo: cargo2, salario: salario2 }
    ]
}

function funcionarioComMaiorSalario(funcionarios){
    let maiorSalario = 0
    let nomeFuncionario = ''

    for (let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i].salario
            nomeFuncionario = funcionarios[i].nome
        }
    }

    return nomeFuncionario
}

let funcionarioMaiorSalario = funcionarioComMaiorSalario(empresa.funcionarios)
    console.log("O fucnionário "+funcionarioMaiorSalario+" possui o maior salário")