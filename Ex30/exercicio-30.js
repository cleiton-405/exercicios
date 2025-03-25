            alert(" ----- Cardápio -----")
            alert(" 1- Pizza (R$ 30) ")
            alert(" 2- Hambúrguer (R$ 15) ")
            alert(" 3- Salada (R$ 10) ")
            alert(" 4- Refeição completa (R$ 40) ")

            while(true){
                let menu = parseInt(prompt(" Digite um item do cardápio (0 para sair do programa): "))

                if(menu === 0){
                    alert(" !!! VOCÊ SAIU DO PROGRAMA !!! ")
                    break
                }

                if(menu < 0 || menu > 5 || isNaN(menu)){
                    alert(" !!! DIGITE UM NÚMERO VÁLIDO !!! ")
                    continue
                }

                switch(menu){
                    case 1:
                        total = 30 + (30 * 0.1)
                        alert("Preço: R$ 30 -- Total: "+total)
                    break
                    case 2:
                        total = 15 + (15 * 0.1)
                        alert("Preço: R$ 15 -- Total: "+total)
                    break
                    case 3:
                        total = 10 + (10 * 0.1)
                        alert("Preço: R$ 10 -- Total: "+total)
                    break
                    case 4:
                        total = 40 + (40 * 0.1)
                        alert("Preço: R$ 40 -- Total: "+total)
                    break
                }
            }