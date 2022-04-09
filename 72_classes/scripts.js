let cachorro = {
    raca: 'SRD',
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemão';
pastorAlemao.raca = 'poodle';

console.log(pastorAlemao.raca);

let gato = {
    patas: 4,
    raca: 'SRD',
    miado: function() {
        console.log("Miauuuuuu");
    }
}

let hibrido = Object.create(gato)

hibrido.miado();

gato.raca = 'biru'

console.log(gato.raca)