let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada.then((value) => console.log(value)).catch(reason => console.log("Erro: " + reason));



let p = Promise.resolve(new Error("Não deu certo"));

console.log("lalala");

p.then((value) => console.log(value)).catch(reason => console.log("Falhou: " + reason))