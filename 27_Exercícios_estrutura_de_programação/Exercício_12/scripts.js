let idade = 16
let cnh = NaN

if(idade >= 18 && cnh == false) {
    console.log("Maior que 18 anos e não possui CNH")
} else if (idade >= 18 && cnh == true ) {
    console.log("Maior que 18 anos e possui CNH.")

} else if (idade < 18 && cnh == NaN || cnh == undefined ) {
    console.log("Menor que 18 anos e sem CNH.")
} else {
    console.log("Não atende aos requisitos.")
}