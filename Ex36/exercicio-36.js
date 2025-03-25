            const objetos = {0: "a", 1: "b", 2: "c"}

            console.log(Object.keys(objetos))
            /*O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in enumera propriedades que estejam na cadeia de protótipos).*/

            console.log(Object.values(objetos))
            /*O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).*/

            console.log(Object.entries(objetos))
            /*O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain).*/

            for(let prop in objetos){
                console.log(objetos[prop])
            }