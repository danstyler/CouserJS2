try{
    let c = a + b;
} catch(error) {
    console.log(`Algo deu errado: ${error}`);
} finally {
    console.log("Executou")
}


try {
    let a = 2 + b;
} catch(e) {
    console.log(e);
} finally {
    console.log("Executou")
}