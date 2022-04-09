class Mamifero {
    constructor(patas, cor) {
        this.patas = patas;
        this.cor = cor;
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca, cor) {
        super(patas, cor);
        
        this.raca = raca;
    }
}

let pug = new Cachorro(4, 'Pug', 'branco');

console.log(pug);


class Gato extends Mamifero {
    constructor(patas, raca,cor) {
        super(patas, cor)
       

        this.raca = raca;
    }
}

let persa = new Gato(4, 'persa', 'preto');

console.log(persa)


console.log(new Cachorro instanceof Mamifero);
console.log(new Gato instanceof Mamifero);