let nums = [2, 3, 4, 5, 1, 2, 4]

let nomes = ["Ana", "Maria", "Clara", "Tripz"]


function verificaElementos(objs) {

    let elementos = objs

    if(elementos.length < 5 ) {
        console.log("Poucos Elementos")
    } else if( elementos.length > 5) {
        console.log("Muitos elementos")
    }
};

verificaElementos(nums)
verificaElementos(nomes)