const output = document.getElementById("output")

const verificaNumeroPrimo = () =>{
    const numValue = Number(document.getElementById("num").value)

    if(isNaN(numValue) || numValue < 1){
        alert(" !!! Digite apenas números e positivos !!! ")
        return
    }

    let divisores = 0

    for(let i = 1 ; i <= numValue ; i++){
        if(numValue % i == 0){
            divisores++
        }
  	}
    
    if(divisores == 2){
        output.innerHTML = `O número ${numValue} é primo`
    }else{
        output.innerHTML = `O número ${numValue} não é primo`
    }
}