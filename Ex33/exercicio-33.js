            let marca = prompt("Digite a marca do carro: ")
            let modelo = prompt("Digite o modelo do carro: ")
            let ano = parseInt(prompt("Digite o ano do carro: "))

            const carro = {marca, modelo, ano}

            for(let prop in carro){
                console.log(carro[prop])
            }