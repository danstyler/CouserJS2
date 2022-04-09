function Cachorro(raca) {
    this.raca = raca ;
}


let husky = new Cachorro('Husky');

console.log(husky.raca)


function Gato(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        return "Miauu"
    }
}

let ciames = new Gato( 'ciames', 4, 'preto')

console.log(ciames.uivar())