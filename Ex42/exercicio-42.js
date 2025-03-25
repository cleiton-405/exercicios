function verificarArrayVazio(array) {
    return array.length === 0
}

const array1 = []
const array2 = [1, 2, 3]

console.log(verificarArrayVazio(array1)) // true
console.log(verificarArrayVazio(array2)) // false

/*

//Método feito de uma maneira diferente (apenas uma ideia)

const array = []

for(let i = 0; i < 1; i++){
    let n1 = parseInt(prompt(" Digite algo: "))

    array[i] = n1
}

if(array == 0){
    alert("Vazio")
}else{
    alert("Não vazio")
}

*/