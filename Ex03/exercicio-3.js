const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const salario = document.getElementById("salario")
const sexo = document.getElementById("sexo")
const estadoCivil = document.getElementById("estadoCivil")
const output = document.getElementById("output")

function validar(){
    lerDados()
}

function lerDados(){
    const nomeValue = nome.value
    const idadeValue = idade.value
    const salarioValue = salario.value
    const sexoValue = sexo.value.toLowerCase()
    const estadoCivilValue = estadoCivil.value.toLowerCase()

        try{
            if(nomeValue.length < 3){
                alert(" !!! Nome inválido, digite um nome com mais de 3 caracteres !!! ")
            }else{
                alert(" !!! Tudo certo !!! ")
            }
        }catch(error){
            throw Error ("Erro ao validar o nome: " + error.message)
        }

        try{
            if(idadeValue < 0 || idadeValue > 150){
                alert(" !!! Idade inválida, digite uma idade entre 0-150 !!!")
            }else{
                alert(" !!! Tudo certo !!! ")
            }
        }catch(error){
            throw Error ("Erro ao validar a idade: " + error.message)
        }

        try{
            if(salarioValue < 0){
                alert(" !!! Salário inválido, digite um salário maior que 0 !!!")
            }else{
                alert(" !!! Tudo certo !!! ")
            }
        }catch(error){
            throw Error ("Erro ao validar o salário: " + error.message)
        }

        try{
            if(sexoValue !== 'f' && sexoValue !== 'm'){
                alert(" !!! Sexo inválido, digite sexo usando f ou m !!!")
            }else{
                alert(" !!! Tudo certo !!! ")
            }
        }catch(error){
            throw Error ("Erro ao validar o sexo: " + error.message)
        }

        try{
            if(estadoCivilValue !== 's' && estadoCivilValue !== 'c' && estadoCivilValue !== 'v' && estadoCivilValue !== 'd'){
                alert(" !!! Estado Civil inválido, digite um estado civil com s, c, v, d !!!")
            }else{
                alert(" !!! Tudo certo !!! ")
            }
        }catch(error){
            throw Error ("Erro ao validar o estado civil: " + error.message)
        }

        output.innerHTML = `Nome: ${nomeValue}<br> Idade: ${idadeValue}<br> Salário: R$ ${salarioValue}<br> Sexo: ${sexoValue}<br> Estado Civil: ${estadoCivilValue}`
}