class Carro {
    constructor(marca, cor, gasolinaRestante) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante= gasolinaRestante;
    }

    dirigirKM(value) {

        this.gasolinaRestante -= (0.071 * value)

        if(this.gasolinaRestante <= 2){

            console.log(`Você possui ${this.gasolinaRestante}/l de gasolina, necessário abastecer! `)
        } else if(this.gasolinaRestante <= 0 ) {

            console.log('Carro parado!')

        } else {
            console.log(`Você consumiu ${(0.071 * value)}/l de gasolina.`)
        }
    }

    abastecerValor(value) {

        this.gasolinaRestante += (0.125 * value)

        console.log(`Voce abasteceu R$ ${value} [${(0.125 * value)}/l].`)

    }


}

let carro = new Carro("Fiat", "Vermelho", 3)

console.log(carro)

carro.dirigirKM(2)
carro.dirigirKM(20)

console.log(carro.gasolinaRestante)
carro.abastecerValor(8)
console.log(carro.gasolinaRestante)

carro.dirigirKM(20)
