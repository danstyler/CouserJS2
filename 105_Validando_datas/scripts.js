let validarData = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;


console.log(validarData.test('25/12/2020'));

console.log(validarData.test('25/12/20'));

console.log(validarData.test('5/2/2020'));

console.log(validarData.test('25/12/1999'));