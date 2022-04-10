console.log("Ainda não chamou o callback")

setTimeout(function() {
    console.log("Chamou o callback");
}, 2000);


console.log("1");

setTimeout(function() {
    console.log("5")

}, 2000);

console.log("2");
console.log("3");
console.log("4")