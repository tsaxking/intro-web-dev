// Reduce takes in a function and applies it to the return value of the previous element and the current element then returns the final value
// For example, we can average an array by doing
const arr = [1, 2, 4, 5];
const { length } = arr;
const avg = arr.reduce((accumulator, currentElement) => {
    /* This will log: 
        { accumulator: 0, currentElement: 1 }
        { accumulator: 1, currentElement: 2 }
        { accumulator: 3, currentElement: 4 }
        { accumulator: 7, currentElement: 5 }
    */
    console.log({ accumulator, currentElement});

    return accumulator + currentElement;
}, /* this 0 means that the accumulator begins at 0 */ 0)/length;

console.log({ avg }); // 3