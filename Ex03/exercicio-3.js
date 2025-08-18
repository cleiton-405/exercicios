const output = document.getElementById("output")

const lerDados = () =>{
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const salario = document.getElementById("salario").value
    const sexo = document.getElementById("sexo").value.toLowerCase()
    const estadoCivil = document.getElementById("estadoCivil").value.toLowerCase()

    try{
        if(nome.length < 3){
            alert(" !!! Nome inválido, digite um nome com mais de 3 caracteres !!! ")
        }else{
            alert(" !!! Tudo certo !!! ")
        }
    }catch(error){
        throw Error ("Erro ao validar o nome: " + error.message)
    }

    try{
        if(idade < 0 || idade > 150){
            alert(" !!! Idade inválida, digite uma idade entre 0-150 !!!")
        }else{
            alert(" !!! Tudo certo !!! ")
        }
    }catch(error){
        throw Error ("Erro ao validar a idade: " + error.message)
    }

    try{
        if(salario < 0){
            alert(" !!! Salário inválido, digite um salário maior que 0 !!!")
        }else{
            alert(" !!! Tudo certo !!! ")
        }
    }catch(error){
        throw Error ("Erro ao validar o salário: " + error.message)
    }

    try{
        if(sexo !== 'f' && sexo !== 'm'){
            alert(" !!! Sexo inválido, digite sexo usando f ou m !!!")
        }else{
            alert(" !!! Tudo certo !!! ")
        }
    }catch(error){
        throw Error ("Erro ao validar o sexo: " + error.message)
    }

    try{
        if(estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd'){
            alert(" !!! Estado Civil inválido, digite um estado civil com s, c, v, d !!!")
        }else{
            alert(" !!! Tudo certo !!! ")
        }
    }catch(error){
        throw Error ("Erro ao validar o estado civil: " + error.message)
    }

    output.innerHTML = `
    Nome: ${nome}<br> 
    Idade: ${idade}<br> 
    Salário: R$ ${salario}<br> 
    Sexo: ${sexo}<br> 
    Estado Civil: ${estadoCivil}<br><hr>

    <div>
        <ul>
            <li>
                ${nome}
            </li>
            <li>
                ${idade}
            </li>
            <li>
                ${salario}
            </li>
            <li>
                ${sexo}
            </li>
            <li>
                ${estadoCivil}
            </li>
        </ul>
    </div>
    `
}

function validar(){
    lerDados()
}