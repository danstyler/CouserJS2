const calculadora = {

    soma: (a, b) => {
        return a + b;
    },
    divisao: (a, b) => {
        return a / b;
    },
    multiplicacao: (a, b) => {
        return a * b;
    },
    subtracao: (a, b) => {
        return a - b;
    }
}

console.log(calculadora.soma(1,2));
console.log(calculadora.divisao(4,2));
console.log(calculadora.multiplicacao(10,2));
console.log(calculadora.subtracao(6,2));


const teste = [1,2,3,4,5,6,7,8]


for (i = 0; i < teste.length; i++) {
    console.log (teste[i]+1)
}