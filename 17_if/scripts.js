let altura = 19
let peso = 50

if(altura < 20 && peso >= 50) {
    console.log("Altura maior que 20 metros e peso maior ou igual a 50 kg")
} else {
    console.log("Altura ultrapassou o limite de 20 metros")
}

let idade = 27;

if(idade == 27) {
    console.log("A idade é = 27")
}

if (idade > 25) {
    console.log("A idade é maior que 25 anos")
}

let nome = "Daniel"

if(nome == "Daniel" && idade > 10) {
    console.log("liberado!")
}

let passaporte = true

if(nome == "Daniel" && idade > 10 || passaporte == true) {
    console.log("Liberado!")
}