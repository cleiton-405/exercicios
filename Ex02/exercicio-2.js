let nome = prompt("Digite seu nome")
            let senha = prompt("Digite sua senha")

            do{
                prompt("Digite novamente as informações !!!")
            }while(nome == senha)
            
            document.write("Seu nome é: "+ nome+"<br>")
            document.write("Sua senha é: "+ senha+"<br>")