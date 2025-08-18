const output = document.getElementById("output")

const inverterString = () =>{
    const text = document.getElementById("text").value

    output.innerHTML = text.split('').reverse().join('')
}

/*

Crie uma função chamada inverterString que receba uma string como argumento e retorne essa string invertida.

*/