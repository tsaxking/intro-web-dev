// For Each applies a function to each element of an array

const arr = [1, 2, 3];
arr.forEach((element, index, array) => {
    console.log(`The element at index ${index} is ${element}`);
});
// Logs:
// The element at index 0 is 1
// The element at index 1 is 2
// The element at index 2 is 3