function informacoes(){
    const nomeValue = document.getElementById("nome").value
    const idadeValue = Number(document.getElementById("idade").value)
    const notaValue = Number(document.getElementById("nota").value)
    const cursoValue = document.getElementById("curso").value
    const output = document.getElementById("output")

    const estudante ={
        nome:nomeValue,
        idade:idadeValue,
        nota:notaValue
    }

    for(let prop in estudante){
        output.innerHTML += `${prop} - ${estudante[prop]} <br>`
    }

    estudante.curso = cursoValue

    delete estudante.nota

    output.innerHTML += " -------------------------- <br>"

    for (let prop in estudante) {
        output.innerHTML += `${prop} - ${estudante[prop]} <br>`
    }
}