let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2)

console.log(pessoa === pessoa2)

pessoa.nome = "Daniel"

console.log(pessoa)
console.log(pessoa2)