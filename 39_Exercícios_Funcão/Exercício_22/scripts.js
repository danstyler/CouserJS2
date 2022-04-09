function tipoDado(dado) {
    console.log(`O tipo do dado é ${typeof(dado)}.`)
}

tipoDado(2);
tipoDado('Daniel');
tipoDado(true);
tipoDado(2.2);


function verificaTipoDado(dado) {
    if(typeof dado === 'string') {
        console.log('Este dado é uma string')
    } else if(typeof dado === 'number') {
        console.log('Este dado é um number')
    } else if( typeof dado === 'boolean') {
        console.log('Este dado é um boolean.')
    } else if(dado == undefined || dado == null) {
        console.log('Informe um valor')
    } else {
        console.log('Verifique o input')
    }
}

verificaTipoDado(3);
verificaTipoDado('Daniel');
verificaTipoDado(true);
verificaTipoDado();
verificaTipoDado(NaN);