console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 8 está presente aqui"));

const reg1 = /[12345]/

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o número 2"));


const reg2 = /[0-9]/;

console.log(reg2.test("temos 1?"))