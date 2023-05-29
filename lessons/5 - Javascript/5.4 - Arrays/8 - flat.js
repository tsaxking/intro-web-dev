// Flat takes a multi-dimensional array and makes in a less dimensional array
const twoDimensionalArray = [
    [ 0, 1 ],
    [ 2, 3 ],
];

const oneDimensionalArray = twoDimensionalArray.flat();
console.log(oneDimensionalArray); // Logs [ 0,  1,  2,  3 ]

// Note that by default flat will only decrease the dimensions of the array by one 
// but you can pass other numbers into flat to change how far it lowers the dimension by
// you can pass infinity in to always have a 1d array

const multiDimensionalArray = [[[[[[[[[[1, 2, 3, [[[[4, 5]]]]]], 6]]], [[[[[7, 8, [[9]]]]]]]]]]]]
console.log(multiDimensionalArray.flat()); // Logs [ [ [ [Array] ] ] ]
console.log(multiDimensionalArray.flat(11)); // Logs [ 1, 2, 3, [ [ 4, 5 ] ], 6, 7, 8, 9 ]
console.log(multiDimensionalArray.flat(Infinity)); // Logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];