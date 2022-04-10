function verificarAlgo(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log("O número é 2"));
        } else {
            reject(new Error("Falhou aqui"));
        }
    })
}

verificarAlgo(2);


function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O numero é ${num}`));
        } else {
            reject(new Error("Falhou aqui oo"));
        }
    })
}

verificarNumero(2)
verificarNumero(3)