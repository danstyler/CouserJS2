class Conta {
    constructor(saldoCC, saldoPP, jurosPP) {
        this.saldoCC = saldoCC;
        this.saldoPP = saldoPP;
        this.jurosPP = jurosPP;
    }

    depositoCC(valor) {
        this.saldoCC += valor
        console.log(`Você depositou R$ ${valor} na conta corrente. Seu saldo é R$ ${this.saldoCC}`)
    }

    saqueCC(valor) {
        this.saldoCC -= valor
        console.log(`Você sacou R$ ${valor} da conta corrente. Seu saldo é R$ ${this.saldoCC}`)
    }

    depositoPP(valor) {
        this.saldoPP += valor
        console.log(`Você depositou R$ ${valor} na conta Poupança. Seu saldo é R$ ${this.saldoPP}`)
    }

    saquePP(valor) {
        this.saldoPP -= valor
        console.log(`Você sacou R$ ${valor} da conta Poupança. Seu saldo é R$ ${this.saldoPP}`)
    }

    transferirPPCC(valor) {

    this.saldoPP -= valor;
    this.saldoCC += valor;

    console.log(`Você transferiu R$ ${valor} da conta poupança para Corrente.\nSegue os saldos:\n Conta Corrente: R$${this.saldoCC}\n Conta Poupança: R$${this.saldoPP}`)

    }
    
    transferirCCPP(valor) {

        this.saldoPP += valor;
        this.saldoCC -= valor;
    
        console.log(`Você transferiu R$ ${valor} da conta Corrente para Poupança.\nSegue os saldos:\n Conta Corrente: R$${this.saldoCC}\n Conta Poupança: R$${this.saldoPP}`)
    }
        


}

let conta = new Conta(500, 1000, 1.5)

console.log(conta)

conta.depositoCC(1000)

conta.saqueCC(500)

conta.depositoPP(1000)

conta.saquePP(500)

conta.transferirPPCC(500)

conta.transferirCCPP(500)


class contaEspecial extends Conta {
    constructor(saldoCC, saldoPP, jurosPP){
        super(saldoCC, saldoPP, jurosPP * 2)
    
    }
}

let contaEsp = new contaEspecial(2,2,2)

console.log(contaEsp)

contaEsp.transferirPPCC(500)