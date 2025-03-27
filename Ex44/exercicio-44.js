
let nome = prompt("Digite o seu nome: ")
let idade = parseInt(prompt("Digite a sua idade: "))
let nota = parseInt(prompt("Digite a sua nota: "))

let estudante = {nome, idade, nota}

estudante.curso = prompt("Digite o seu curso: ")

delete estudante.nota

for(let prop in estudante){
    console.log(estudante[prop])
}