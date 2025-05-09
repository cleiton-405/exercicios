const output = document.getElementById("output")
const temp = document.getElementById("temp")

function temperatura(){
    const tempValue = Number(temp.value)

    switch(true){
        case (tempValue < 0):
            output.innerHTML = `Congelante`
        break
        case (tempValue >= 0 && tempValue <= 10):
            output.innerHTML = `Frio`
        break    
        case (tempValue >= 11  && tempValue <= 20):
            output.innerHTML = `Agradável`
        break
        case (tempValue >= 21 && tempValue <= 30):
            output.innerHTML = `Quente`
        break
        case (tempValue > 30):
            output.innerHTML = `Muito quente`
        break        
    }
}