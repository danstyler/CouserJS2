function* genTest() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criarId = genTest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);


function* criadorId() {
    let id = 0;
    while(true) {
        yield id++
    }
}

let criaIdd = criadorId();

console.log(criaIdd.next().value)
console.log(criaIdd.next().value)
console.log(criaIdd.next().value)