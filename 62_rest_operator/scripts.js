let nomes1 = [ "carro", "avião", "barco"]

let nomes2 = ["Moto", "Helicóptero", "Nave"]

let nomes = [...nomes1, ...nomes2]

console.log(nomes)


let num = 1;
let num1 = 5;
let num2 = 7;
let num3 = 8;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);

    }
}

imprimirNumeros(num, num1, num2, num3)