let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@email.com"));
console.log(validarEmail.test("email@email"));
console.log(validarEmail.test("ronaldo@yahoo.com.br"));
console.log(validarEmail.test("email.com"));