while(true) {
    let jogador1 = prompt("(Jogador 1) Digite PEDRA, PAPEL ou TESOURA: ").toUpperCase()
        if(jogador1 !== "PEDRA" && jogador1 !== "PAPEL" && jogador1 !== "TESOURA"){
        alert("!!! Digite apenas PEDRA, PAPEL ou TESOURA !!!")
        continue
    }

    let jogador2 = prompt("(Jogador 2) Digite PEDRA, PAPEL ou TESOURA: ").toUpperCase()
        if(jogador2 !== "PEDRA" && jogador2 !== "PAPEL" && jogador2 !== "TESOURA"){
            alert("!!! Digite apenas PEDRA, PAPEL ou TESOURA !!!")
            continue
        }

    if(jogador1 === jogador2){
        alert("Empate!")
    }else{

        switch(jogador1){
            case "PEDRA":
                if(jogador2 === "TESOURA"){
                    alert("Jogador 1 venceu!")
                }else{
                    alert("Jogador 2 venceu!")
                }
            break
            case "PAPEL":
                if(jogador2 === "PEDRA"){
                    alert("Jogador 1 venceu!")
                }else{
                    alert("Jogador 2 venceu!")
                }
            break
            case "TESOURA":
                if(jogador2 === "PAPEL"){
                    alert("Jogador 1 venceu!")
                }else{
                    alert("Jogador 2 venceu!")
                }
            break
        }
    }

    let continuar = prompt("Deseja jogar novamente? (sim/não)").toLowerCase()
        if(continuar !== "sim"){
            alert("Obrigado por jogar!")
            break
        }
}
