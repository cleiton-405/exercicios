const output = document.getElementById("output")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")
const p5 = document.getElementById("p5")

const resultado = () =>{

    const p1Value = Number(p1.value)
    const p2Value = Number(p2.value)
    const p3Value = Number(p3.value)
    const p4Value = Number(p4.value)
    const p5Value = Number(p5.value)

    if(isNaN(p1Value) || isNaN(p2Value) || isNaN(p3Value) || isNaN(p4Value) || isNaN(p5Value)){
        alert(" !!! APENAS NÚMEROS !!! ")

        p1.value = ""
        p2.value = ""
        p3.value = ""
        p4.value = ""
        p5.value = ""

        return
    }

    if(p1Value < 0 || p1Value > 1){
        alert(" !!! APENAS OS NÚMEROS 0 E 1 !!! ")

        p1.value = ""
        p2.value = ""
        p3.value = ""
        p4.value = ""
        p5.value = ""

        return
    }

    if(p2Value < 0 || p2Value > 1){
        alert(" !!! APENAS OS NÚMEROS 0 E 1 !!! ")

        p1.value = ""
        p2.value = ""
        p3.value = ""
        p4.value = ""
        p5.value = ""

        return
    }

    if(p3Value < 0 || p3Value > 1){
        alert(" !!! APENAS OS NÚMEROS 0 E 1 !!! ")

        p1.value = ""
        p2.value = ""
        p3.value = ""
        p4.value = ""
        p5.value = ""

        return
    }

    if(p4Value < 0 || p4Value > 1){
        alert(" !!! APENAS OS NÚMEROS 0 E 1 !!! ")

        p1.value = ""
        p2.value = ""
        p3.value = ""
        p4.value = ""
        p5.value = ""

        return
    }

    if(p5Value < 0 || p5Value > 1){
        alert(" !!! APENAS OS NÚMEROS 0 E 1 !!! ")

        p1.value = ""
        p2.value = ""
        p3.value = ""
        p4.value = ""
        p5.value = ""

        return
    }

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

/*

const valores = [p1, p2, p3, p4, p5].map(p => Number(p.value))
const contador = valores.reduce((acc, curr) => acc + curr, 0)

Outra forma de fazer. Mais clara e limpa

*/