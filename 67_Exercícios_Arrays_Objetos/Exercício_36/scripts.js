let calculadora = {
    somar: (num1,num2) => {
        return num1 + num2
    },
    subtrair: (num1, num2) => {
        return num1 - num2
    },
    multiplicar: (num1, num2) => {
        return num1 * num2
    },
    dividir: (num1, num2) => {
        return num1 / num2
    }
}


console.log(calculadora.somar(2,2));
console.log(calculadora.subtrair(10,5));
console.log(calculadora.multiplicar(5,2));
console.log(calculadora.dividir(10,2));