let p = document.querySelector('p');
let btn = document.querySelector('button');

p.addEventListener("click", function (e) {
    console.log("click 1");
    e.stopPropagation();
});

btn.addEventListener("click", function() {
    console.log("click 2");
});