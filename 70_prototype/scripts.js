let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);



const animal = {
    patas: 4,
}

console.log(Object.getPrototypeOf(animal) === Object.prototype);


console.log(pessoa.hasOwnProperty('maos'))