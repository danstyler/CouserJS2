class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }

    get verRaca() {
        return 'A raça é ' + this.raca;
    }

    set novaRaca(value) {
        this.raca = value;
    }
}

let golden = new Cachorro('Pastor Alemão');

console.log(golden.verRaca);

golden.novaRaca = 'Golden';

console.log(golden.verRaca)


class Gato{
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    get verRaca() {
        return `A raça é ${this.raca}`
    }

    get getCor() {
        return this.cor;
    }

    set novaRaca(value) {
        this.raca = value;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let siames = new Gato('persa')

console.log(siames.verRaca)

siames.novaRaca = 'siames'

console.log(siames.verRaca)

siames.setCor = "Preto"

console.log(siames.getCor)