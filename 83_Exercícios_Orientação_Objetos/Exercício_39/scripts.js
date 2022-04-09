class Endereco {
    constructor( rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    get verEndereco() {
        return `${this.rua}, ${this.bairro}, ${this.cidade}, ${this.estado}.`
    }

    set setRua(value) {
        this.rua = value;
    }

    set setBairro(value) {
        this.bairro = value;
    }

    set setCidade(value) {
        this.cidade = value;
    }

    set setEstado(value) {
        this.estado = value;
    }
}

let endereco = new Endereco("Luiz Dias", "Liberdade", "Salvador", "Bahia")

console.log(endereco)