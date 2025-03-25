function validarNome(nome){
    return nome.length > 3
}

function validarIdade(idade){
    return idade >= 0 && idade <= 150
}

function validarSalario(salario){
    return salario > 0
}

function validarSexo(sexo){
    return sexo === 'f' || sexo === 'm'
}

function validarEstadoCivil(estadoCivil) {
    return estadoCivil === 's' || estadoCivil === 'c' || estadoCivil === 'v' || estadoCivil === 'd'
}

function lerDados(){
    let nome
    let idade
    let salario
    let sexo
    let estadoCivil

    while(true){
        nome = prompt("Digite seu nome (maior que 3 caracteres):")
        if (validarNome(nome)){
            break
        }else{
            alert("Nome inválido. O nome deve ter mais que 3 caracteres.")
        }
    }

    while(true){
        idade = parseInt(prompt("Digite sua idade (entre 0 e 150):"))
        if (validarIdade(idade)){
            break
        }else{
            alert("Idade inválida. A idade deve estar entre 0 e 150.")
        }
    }

    while(true){
        salario = parseFloat(prompt("Digite seu salário (maior que 0):"))
        if (validarSalario(salario)){
            break
        }else{
            alert("Salário inválido. O salário deve ser maior que 0.")
        }
    }

    while(true){
        sexo = prompt("Digite seu sexo ('f' para feminino ou 'm' para masculino):").toLowerCase()
        if(validarSexo(sexo)){
            break
        }else{
            alert("Sexo inválido. Use 'f' para feminino ou 'm' para masculino.")
        }
    }

    while(true){
        estadoCivil = prompt("Digite seu estado civil ('s' para solteiro, 'c' para casado, 'v' para viúvo, 'd' para divorciado):").toLowerCase()
        if(validarEstadoCivil(estadoCivil)){
            break
        }else{
            alert("Estado civil inválido. Use 's' para solteiro, 'c' para casado, 'v' para viúvo ou 'd' para divorciado.")
        }
    }

    alert("\nDados Validados:" +
        "\nNome: " + nome +
        "\nIdade: " + idade +
        "\nSalário: " + salario +
        "\nSexo: " + sexo +
        "\nEstado Civil: " + estadoCivil)
}

// Usando o \n para pular uma linha

lerDados()