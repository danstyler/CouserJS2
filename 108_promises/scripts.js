let promessa = Promise.resolve(4 + 8);

console.log("Algum código");

promessa.then((value) => console.log(`A soma é ${value}`))


let p = Promise.resolve(5);

console.log("Outros códigos");

p.then((value) => console.log(`O valor é ${value}`))

console.log(p)