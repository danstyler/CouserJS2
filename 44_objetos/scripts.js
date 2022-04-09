let pessoa = {
    nome: "Daniel",
    profissao: "Programador",
    idade: 28
}

console.log(pessoa.nome);
console.log(pessoa.profissao);



    for(let i = 0; i <= 1; i = i + 1) {
        let pessoas = [{
            nome: "Daniel",
            profissao: "Programador",
            anonasc: 1994,
            idade: function() {
                return (new Date().getFullYear() - this.anonasc) 
            }
        },{
            nome: "Mile",
            profissao: "Advogada",
            anonasc: 1992,
            idade: function() {
                return (new Date().getFullYear() - this.anonasc) 
            }
        }]
        

        console.log(`A pessoa ${pessoas[i].nome} é ${pessoas[i].profissao} e possui ${pessoas[i].idade()} anos de idade.`)

    }
    
