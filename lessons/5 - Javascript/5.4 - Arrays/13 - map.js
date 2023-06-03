// Map runs a function on each element of an array 
// and then returns a copy of an array of the return values of each of those functions
const arr = [1, 2, 3, 4];
const doubledArray = arr.map(el => {
    return el * 2;
});

console.log(doubledArray); // [ 2, 4, 6, 8 ] (:O Team Appreciate Reference???!?!??@!?!??)

// You also do array stuff like this
const halvedIndices = [1,1,1,1].map((_, i) => {
    return i / 2;
});

console.log(halvedIndices) // [0, 0.5, 1, 1.5]