const output = document.getElementById("output")

function verificarAnoBissexto(){
    const anoValue = Number(document.getElementById("ano").value)

    if((anoValue % 4 === 0 && anoValue % 100 !== 0) || (anoValue % 400 === 0)){
        output.innerHTML = `True`
    }else{
        output.innerHTML = `False`
    }     
}