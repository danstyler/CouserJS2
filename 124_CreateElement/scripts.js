let lista = document.createElement('ul');

for(i = 0; i < 5; i ++) {

    let item = document.createElement('li');

    let texto = document.createTextNode("texto lista " + i);
    
    item.appendChild(texto);
    lista.appendChild(item);
}


let container = document.getElementById('container-principal');

container.appendChild(lista);


console.log(
  [1, 2, 3, 4].reduce((a, b) => a + b, 0)
)