async function somar(a, b) {
    return a + b;
}

somar(2, 2).then(function(value) {
    console.log(value);
})


async function subtrair(a, b) {

    return a - b
}


subtrair(2,1).then(function(value) {
    console.log(value)
})
