let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

Object.assign(carro, adicionais);

console.log(carro)


let programador = {
    nome: "Daniel",
    anonasc: 1994,
    idade: 28
}

let skills = [{curso: "javascript"}, {curso: "nodejs"}, {curso: "NoSQL"}]


Object.assign(programador, skills[0])

console.log(programador)
