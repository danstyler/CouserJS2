let a = 1

if(a != 2) {
    throw new Error("número é diferente de 2");
}

function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parâmetro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Daniel")
saudacao("10");