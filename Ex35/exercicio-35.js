            let nome = prompt("Digite seu nome: ")
            let nota1 = parseFloat(prompt("Digite sua nota 1: "))
            let nota2 = parseFloat(prompt("Digite sua nota 2: "))

            const aluno = {nome, nota1, nota2}

            media = 0

            media = (aluno.nota1 + aluno.nota2) / 2

            console.log(`O ${aluno.nome} tirou ${aluno.nota1} e ${aluno.nota2}. Teve uma media de `+media+".")