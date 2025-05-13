const output = document.getElementById("output")

function pedraPapelTesoura(){
    const jogador1Value = document.getElementById("jogador1").value.toUpperCase()
    const jogador2Value = document.getElementById("jogador2").value.toUpperCase()

    if(jogador1Value !== "PEDRA" && jogador1Value !== "PAPEL" && jogador1Value !== "TESOURA"){
            alert("!!! Digite apenas PEDRA, PAPEL ou TESOURA !!!")
    }

    if(jogador2Value !== "PEDRA" && jogador2Value !== "PAPEL" && jogador2Value !== "TESOURA"){
            alert("!!! Digite apenas PEDRA, PAPEL ou TESOURA !!!")
    }

    if(jogador1Value === jogador2Value){
        output.innerHTML = `Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = EMPATE`
    }else{
        switch(jogador1Value){
            case "PEDRA":
                if(jogador2Value === "TESOURA"){
                    output.innerHTML = `Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = Jogador 1 venceu`
                }else{
                    output.innerHTML = ` Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = Jogador 2 venceu`
                }
            break
            case "PAPEL":
                if(jogador2Value === "PEDRA"){
                    output.innerHTML = `Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = Jogador 1 venceu`
                }else{
                    output.innerHTML = ` Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = Jogador 2 venceu`
                }
            break
            case "TESOURA":
                if(jogador2Value === "PAPEL"){
                    output.innerHTML = `Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = Jogador 1 venceu`
                }else{
                    output.innerHTML = ` Jogador 1 - ${jogador1Value} | Jogador 2 - ${jogador2Value} = Jogador 2 venceu`
                }
            break
        }
    }
}