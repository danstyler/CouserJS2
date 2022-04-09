function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        return "Au au au au"
    }

    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta');

console.log(doberman)
console.log(doberman.latir())

doberman.latir()