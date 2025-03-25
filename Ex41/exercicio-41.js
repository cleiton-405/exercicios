            const array1 = []
            const array2 = []

            function escreva(){
                while(true){
                    let n1 = parseInt(prompt("Digite um número para o array 1: "))
                    let n2 = parseInt(prompt("Digite um número para o array 2: "))

                    if(isNaN(n1) || isNaN(n2)){
                        alert(" !!! Informe apenas números inteiros !!! ")
                        continue
                    }

                    array1.push(n1)
                    array2.push(n2)
                    break
                }
                
            }

            function concatenar(array1, array2){
                return array1.concat(array2)
            }

            console.log(escreva())

            console.log(" Array 1 ")
            array1.forEach(item => console.log(item))

            console.log(" ------------ ")

            console.log(" Array 2 ")
            array2.forEach(item => console.log(item))

            console.log(" ------------ ")

            const arrayconcatena = concatenar(array1, array2)

            console.log(" Array concatenado ")
            console.log(arrayconcatena)