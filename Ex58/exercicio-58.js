const pessoas = [
    {nome: "Carlos", idade: 30},
    {nome: "Maria", idade: 25},
    {nome: "José", idade: 40}
]

function ordenarPessoasPorIdade(pessoas){
    return pessoas.sort((a, b) => a.idade - b.idade)
}

console.log(ordenarPessoasPorIdade(pessoas))