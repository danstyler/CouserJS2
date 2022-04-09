function multiplicarTresNumeros(x, y, z) {
    return x * y * z
}

const resultado = multiplicarTresNumeros(2,3,4)

console.log(resultado)


function podeDirigir(idade, cnh) {
    if (idade >=18 && cnh == true) {
        console.log("Pode dirigir")
    } else {
        console.log("Não pode dirigir")
    }
}

podeDirigir(17,true)