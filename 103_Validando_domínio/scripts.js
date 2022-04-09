let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"))
console.log(frutas.test("25 batatas"))
console.log(frutas.test("8 laranjas"))


const reg = /\w+: (Daniel|João|Maria)/;

console.log(reg.test("Nome: Daniel"));
console.log(reg.test("Nome: Matheus"))