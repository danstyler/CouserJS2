const reg1 = new RegExp('bola');


console.log(reg1.test("cade a bola?"))

console.log(reg1.test("Não Tem"))

let text = "onde tem um quadrado"

const reg2 = /bola/;


console.log(reg2.test("cade a bola?"));
console.log(reg2.test("Não Tem"));
console.log(reg2.test(text));
console.log(/quadrado/.test("Onde tem um quadrado"));
