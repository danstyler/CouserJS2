const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));


const padrao2 = /\d+\w?/;

console.log(padrao.test("123"));
console.log(padrao.test("123a"));