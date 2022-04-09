const person = {
    name: 'Jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);


let obj = {
    rodas: 4,
    portas: 4,
    tetosolar:true,
    motor: '2.0'
}

const {
    rodas: lrodas, portas: lportas, tetosolar: ltetosolar, motor: lmotor
} = obj;

console.log(lrodas)
console.log(lportas)
console.log(ltetosolar)
console.log(lmotor)