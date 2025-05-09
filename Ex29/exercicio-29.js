const usd = document.getElementById("usd")
const eur = document.getElementById("eur")
const gbp = document.getElementById("gbp")
const num = document.getElementById("num")
const moeda = document.getElementById("moeda")

function conversor(){
    const numValue = Number(num.value)
    const moedaValue = Number(moeda.value)

    let resultado = 0

        switch (moedaValue){
            case 1:
                resultado = numValue * 0.20
                usd.innerHTML = `${resultado}`
            break
            case 2:
                resultado = numValue * 0.18
                eur.innerHTML = `${resultado}`
            break
            case 3:
                resultado = numValue * 0.16
                gbp.innerHTML = `${resultado}`
            break
    }
}