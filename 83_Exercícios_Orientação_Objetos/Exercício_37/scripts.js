class contaBanco {
    constructor(saldo) {
        this.saldo = saldo;
    
    }

    Saldo() {
        console.log(`O seu saldo é R$ ${this.saldo}`)
    
    }

    Deposito(valor) {
        this.saldo += valor

        console.log(`Você realizou um depósito de R$ ${valor}, seu saldo é R$ ${this.saldo}.`)
    }

    Saque(valor) {
        this.saldo -= valor

        console.log(`Você realizou um Saque de R$ ${valor}, seu saldo é R$ ${this.saldo}.`)
    }


}

let contaA = new contaBanco(25.00)

contaA.Saldo()

contaA.Deposito(50)

contaA.Saldo()

contaA.Saque(20)

contaA.Saldo()


let contaB = new contaBanco(500.00)

contaB.Saldo()

contaB.Deposito(50)

contaB.Saldo()

contaB.Saque(20)

contaB.Saldo()
contaA.Saldo()
