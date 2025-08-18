const output = document.getElementById("output")

const notas = () =>{
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")

    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    if(n1Value > 10 || n2Value > 10){
        alert(" !!! NOTA MUITO ALTA, APENAS VALORES ABAIXO DE 10 OU 10 !!! ")

        n1.value = ""
        n2.value = ""

        return
    }

    let media = 0

    media = (n1Value + n2Value) / 2

    if(media >= 9){
                
        output.innerHTML = `
        <ul style="list-style: none;">
            <li> Nota 1: ${n1Value} </li> <br>
            <li> Nota 2: ${n2Value} </li> <br>
            <li> Sua média: ${media} </li> <br>
            <li> Conceito: A </li> <br>
            <li> !!! APROVADO !!! </li> 
        </ul>`

        n1.value = ""
        n2.value = ""

    }else if(media >= 7.5 && media < 9){
                
        output.innerHTML = `
        <ul style="list-style: none;">
            <li> Nota 1: ${n1Value} </li> <br>
            <li> Nota 2: ${n2Value} </li> <br>
            <li> Sua média: ${media} </li> <br>
            <li> Conceito: B </li> <br>
            <li> !!! APROVADO !!! </li> 
        </ul>`

        n1.value = ""
        n2.value = ""

    }else if(media >= 6 && media < 7.5){
                
        output.innerHTML = `
        <ul style="list-style: none;">
            <li> Nota 1: ${n1Value} </li> <br>
            <li> Nota 2: ${n2Value} </li> <br>
            <li> Sua média: ${media} </li> <br>
            <li> Conceito: C </li> <br>
            <li> !!! APROVADO !!! </li> 
        </ul>`

        n1.value = ""
        n2.value = ""

    }else if(media >= 4 && media < 6){
                
        output.innerHTML = `
        <ul style="list-style: none;">
            <li> Nota 1: ${n1Value} </li> <br>
            <li> Nota 2: ${n2Value} </li> <br>
            <li> Sua média: ${media} </li> <br>
            <li> Conceito: D </li> <br>
            <li> !!! REPROVADO !!! </li> 
        </ul>`

        n1.value = ""
        n2.value = ""

    }else if(media >= 0 || media < 0 && media < 4){
                
        output.innerHTML = `
        <ul style="list-style: none;">
            <li> Nota 1: ${n1Value} </li> <br>
            <li> Nota 2: ${n2Value} </li> <br>
            <li> Sua média: ${media} </li> <br>
            <li> Conceito: E </li> <br>
            <li> !!! REPROVADO !!! </li> 
        </ul>`

        n1.value = ""
        n2.value = ""
    }
}

/*

Usando arrow function e operador ternário para uma simples comparação de notas

const verificarNota = (n1, n2) =>{
    let media = (n1 + n2) / 2
    let resultado = media >= 5 ? "Aprovado" : "Reprovado"

    console.log(media)
    console.log(resultado)
}

verificarNota(5, 5)

*/