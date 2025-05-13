const output = document.getElementById("output")

function informacoes(){
    const nome1Value = document.getElementById("nome1").value
    const cargo1Value = Number(document.getElementById("cargo1").value)
    const salario1Value = Number(document.getElementById("salario1").value)

    const nome2Value = document.getElementById("nome2").value
    const cargo2Value = Number(document.getElementById("cargo2").value)
    const salario2Value = Number(document.getElementById("salario2").value)

    const empresa = {
        funcionarios:[
            {nome: nome1Value, cargo: cargo1Value, salario: salario1Value},
            {nome: nome2Value, cargo: cargo2Value, salario: salario2Value}
        ]
    }

    function funcionarioComMaiorSalario(funcionarios){
        let maiorSalario = 0
        let nomeFuncionario = ''

    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i].salario
            nomeFuncionario = funcionarios[i].nome
        }
    }

    return {nome: nomeFuncionario, salario: maiorSalario}
}

let funcionarioMaiorSalario = funcionarioComMaiorSalario(empresa.funcionarios)
    output.innerHTML = `"O funcionário ${funcionarioMaiorSalario.nome} possui o maior salário. <br>
    ${funcionarioMaiorSalario.salario}`
}