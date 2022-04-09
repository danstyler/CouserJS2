let pessoa = {
    nome: null,
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
    getNome: function() {
        return this.nome;
    }
}

pessoa.setNome("Daniel");

console.log(pessoa.getNome());




const cachorro = {
    raca: 'poodle',
    uivar: function() {
        console.log("Auuuuu");
    },
    rosnar: function() {
        console.log("grrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca())