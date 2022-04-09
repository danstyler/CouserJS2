let nome = "Daniel";

for (let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
        nome = "Lucas";
    }

    if (i == 5 && nome == "Daniel") {
        console.log("O nome é Daniel, pode parar");
        break;
    }

    console.log(i);
}