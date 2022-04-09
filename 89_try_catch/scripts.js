try{
    let c = a + b;
} catch(error) {
    console.log(`Algo esta errado ${error}.`)
}


try{
    let b = 3
    let a = 2 + b;

    console.log(a)

} catch(e) {
    console.log(e)
}