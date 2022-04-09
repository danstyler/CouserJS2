class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

Cachorro.prototype.raca = 'Poodle'

let patas = Symbol();

Cachorro.prototype[patas] = 4


let labrador = new Cachorro('Labrador', 'Amarelo');

// acessando symbol

    console.log(Cachorro.prototype[patas])

    console.log(labrador)