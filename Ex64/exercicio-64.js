const output = document.getElementById("output")
const ano = document.getElementById("ano")

function verificarAnoBissexto(){
    let anoValue = parseInt(ano.value)

    if((anoValue % 4 === 0 && anoValue % 100 !== 0) || (anoValue % 400 === 0)){
        output.innerHTML = `True`
    }else{
        output.innerHTML = `False`
    }     
}