            alert(" --- Conversor de moedas ---")
            alert(" 1- USD")
            alert(" 2- EUR")
            alert(" 3- GBP")
            alert(" 0- Sair")

            while(true){

                let valor = parseFloat(prompt("Digite um valor (0 para sair): "))

                if(valor === 0){
                    alert(" !!! Você saiu do programa !!! ")
                    break
                }

                if(isNaN(valor) || valor < 0){
                    alert(" !!! Digite um valor válido !!! ")
                    continue 
                }

                let moeda = parseInt(prompt("Qual moeda você deseja fazer a conversão: "))

                if(moeda <= 0 || moeda > 4){
                    alert(" !!! Escolha entre 1-3 para conversão de moedas !!! ")
                    continue
                }

                switch (moeda){
                    case 1:
                        usd = valor * 0.20
                        alert("Dólar: "+usd)
                    break
                    case 2:
                        eur = valor * 0.18
                        alert("Euro: "+eur)
                    break
                    case 3:
                        gbp = valor * 0.16
                        alert("Libras esterlinas: "+gbp)
                    break
                }

            }