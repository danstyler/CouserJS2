let ano = /\d\d\d\d/;

console.log("d/d/d/d/")
console.log(ano.test("05"));
console.log(ano.test("2019"));
console.log(ano.test("opa"));

let palavraTresLetras = /\w\w\w/;

console.log("w/w/w/w/")
console.log(palavraTresLetras.test("dia"));
console.log(palavraTresLetras.test("ano"));
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste"));



const dia = /\d\d/;

console.log("d/d/")
console.log(dia.test("2019") && "2019".lenght == 2)
console.log(dia.test("asd"))
console.log(dia.test("30") && "30".lenght == 2)
console.log(dia.test("as12"))


const palavraQuatroLetras = /\w\w\w\w/;

console.log(palavraQuatroLetras.test("qwerd"))
console.log(palavraQuatroLetras.test("qwe"))
console.log(palavraQuatroLetras.test("qwer"))
