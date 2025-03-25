while(true){

    let nota = parseFloat(prompt("Digite uma nota entre 0-10"))

    if(nota < 0 || nota > 10 || isNaN(nota)){
        alert("Número inválido, digite novamente")
        continue
    }

    console.log("Número válido: "+nota)
    console.log("FIM DO CÓDIGO")
    break

}