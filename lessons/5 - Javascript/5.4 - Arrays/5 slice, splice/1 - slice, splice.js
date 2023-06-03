// Slice takes a section out of an array
// It takes in a start index and end index, which default to the start and end of the array respectively
// It will include the start index but no the end index
const arr = [1, 2, 3, 4, 5];
const clone = arr.slice(); // This just clones the array
clone[0] = 2;
console.log({ arr, clone });

const firstHalf = arr.slice(0, 2);
// This will start with the second to last element of the array and continue to the end of the array
const secondHalf = arr.slice(-2);
const middle = arr.slice(1, 4); 
console.log({ firstHalf, middle, secondHalf });