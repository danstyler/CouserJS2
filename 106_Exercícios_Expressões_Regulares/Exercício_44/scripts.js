let marca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test("Marca: Adidas"))
console.log(marca.test("Marca: Puma"))
console.log(marca.test("Marca: Pad"))