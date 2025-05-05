const output = document.getElementById("output")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")
const p5 = document.getElementById("p5")

    alert("Para as seguintes perguntas, responda somente com ( 1 - Sim ) ou ( 0 - Não )")

function resultado(){

    const p1Value = Number(p1.value)
    const p2Value = Number(p2.value)
    const p3Value = Number(p3.value)
    const p4Value = Number(p4.value)
    const p5Value = Number(p5.value)

    /*
        const valores = [p1, p2, p3, p4, p5].map(p => Number(p.value))
        const contador = valores.reduce((acc, curr) => acc + curr, 0)

        Outra forma de fazer. Mais clara e limpa

    */

    let contador = (p1Value + p2Value + p3Value + p4Value + p5Value)

    if(contador == 2){
        output.innerHTML = `Suspeita`
    }else if(contador == 3 || contador == 4){
        output.innerHTML = `Cúmplice`
    }else if(contador == 5){
        output.innerHTML = `Assassino`
    }else{
        output.innerHTML = `Inocente`
    }
}