const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

function notas(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    let media = 0

    media = (n1Value + n2Value) / 2

    if(media >= 9 && media <= 10){
                
        output.innerHTML = `<li> Nota 1: ${n1Value} </li> <br>
        <li> Nota 2: ${n2Value} </li> <br>
        <li> Sua média: ${media} </li> <br>
        <li> Conceito: A </li> <br>
        <li> !!! APROVADO !!! </li>`

    }else if(media >= 7.5 && media < 9){
                
        output.innerHTML = `<li> Nota 1: ${n1Value} </li> <br>
        <li> Nota 2: ${n2Value} </li> <br>
        <li> Sua média: ${media} </li> <br>
        <li> Conceito: B </li> <br>
        <li> !!! APROVADO !!! </li>`

    }else if(media >= 6 && media < 7.5){
                
        output.innerHTML = `<li> Nota 1: ${n1Value} </li> <br>
        <li> Nota 2: ${n2Value} </li> <br>
        <li> Sua média: ${media} </li> <br>
        <li> Conceito: C </li> <br>
        <li> !!! APROVADO !!! </li>`

    }else if(media >= 4 && media < 6){
                
        output.innerHTML = `<li> Nota 1: ${n1Value} </li> <br>
        <li> Nota 2: ${n2Value} </li> <br>
        <li> Sua média: ${media} </li> <br>
        <li> Conceito: D </li> <br>
        <li> !!! REPROVADO !!! </li>`

    }else if(media >= 0 || media < 0 && media < 4){
                
        output.innerHTML = `<li> Nota 1: ${n1Value} </li> <br>
        <li> Nota 2: ${n2Value} </li> <br>
        <li> Sua média: ${media} </li> <br>
        <li> Conceito: E </li> <br>
        <li> !!! REPROVADO !!! </li>`

    }
}