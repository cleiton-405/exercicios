let paisA = 80000
    let paisB = 200000
    let anos = 0

    while(paisB > paisA){
        populacaoA = (paisA * 0.03)
        populacaoB = (paisB * 0.015)

        paisA = paisA + populacaoA
        paisB = paisB + populacaoB

        anos = anos + 1
    }
    
    console.log("Demorou "+anos+" anos para a população A passar a população B")