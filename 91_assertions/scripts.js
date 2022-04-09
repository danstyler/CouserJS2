
const arr = [1,2,3,4,5,6];

const arr2 = [];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < arr.length; i++) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2)  
}

iterarArray(arr)

console.log(arr2)