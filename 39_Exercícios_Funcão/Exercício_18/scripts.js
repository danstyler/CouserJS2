function minhaIdade(anonasc) {
    let idade = new Date().getFullYear() - anonasc 
    console.log(`Você tem ${idade} anos`)

}

minhaIdade(1994)