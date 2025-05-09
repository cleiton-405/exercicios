const output = document.getElementById("output")
const idade = document.getElementById("idade")

function resultado(){
    const idadeValue = Number(idade.value)

        if(idadeValue < 1){
            output.innerHTML = ` !!! DIGITE UMA IDADE MAIOR QUE 1 !!! `
            return
        }

        switch(true){
            case (idadeValue > 0 && idadeValue < 10):
                output.innerHTML = `Você é uma criança`
            break
            case (idadeValue >= 10 && idadeValue < 18):
                output.innerHTML = `Você é um adolescente`
            break
            case (idadeValue >= 18 && idadeValue < 60):
                output.innerHTML = `Você é um adulto`
            break
            case (idadeValue >= 60):
                output.innerHTML = `Você é um idoso`
            break        
        }
}