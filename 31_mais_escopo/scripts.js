let x = 10;

if(x > 5) {
    let x = 20;
    x++;
    console.log("Valor dentro do escopo é " + x);
}


console.log("Valor fora do escopo é " + x);