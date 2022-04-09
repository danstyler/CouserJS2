let foraSequecia = /[^123]/;

console.log(foraSequecia.test("1112"));
console.log(foraSequecia.test("14"));
console.log(foraSequecia.test("1"));


const notab = /[^ab]/

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));

console.log(nottoaz.test("asdaseqwdaczxwerxczxa"));

