class Cachorro {
    constructor(raca) {
        this.raca = raca
    }
}

let labrador = new Cachorro('Poodle')

console.log(labrador.raca)


class Gato {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}


let wish = new Gato('Persa', 4, 'Amarelo');

let flet = new Gato('Siamês', 4, 'Amarelo');

console.log(wish.raca, flet.raca)