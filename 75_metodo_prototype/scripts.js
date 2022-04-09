function Cachorro(raca, patas) {
    this.raca = raca;
    this.patas = patas;
}

Cachorro.prototype.uivar = function() {
    console.log('Auuuuuuu');
}

Cachorro.prototype.patas = 4

let pug = new Cachorro('Pug', 4);

console.log(pug);
pug.uivar();