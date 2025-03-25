            alert(" --- Menu interativo --- ")
            alert(" 1- Verificar par ou Ímpar ")
            alert(" 2- Calcular fatorial ")
            alert(" 3- Sair do menu")

            while(true){
                let menu = parseInt(prompt("Digite sua opção do menu: "))

                if(menu === 3){
                    alert("Obrigado por usar o programa")
                    break
                }

                if (menu < 1 || menu > 4) {
                    alert(" !!! Número inválido, tente novamente !!! ")
                    continue
                }

                switch(menu){
                    case 1:
                        let num = parseInt(prompt("Digite um número: "))
                            if(num % 2 === 0){
                                alert("Número é par")
                            }else{
                                alert("Número é ímpar")
                            }
                    break
                    case 2: 
                        let fat = parseInt(prompt("Digite um número: "))

                        if (fat === 0 || fat === 1){
                            fat = 1
                        }    
                        for (let i = fat - 1; i >= 1; i--) {
                            fat = fat * i;
                            alert("Fatorial: "+fat)
                        }
                    break
                    case 3: 
                        alert(" !!! Você saiu do menu interativo !!! ")
                    break
                }

            }