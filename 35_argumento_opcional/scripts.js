function nomeComCnh(nome = null, cnh = null) {

    if(nome === null || cnh === null){
        console.log("Alimente o parâmentro")
    } else {
        console.log(`O nome é ${nome} e possui cnh ${cnh}`)
    }

}

nomeComCnh(null,12312)