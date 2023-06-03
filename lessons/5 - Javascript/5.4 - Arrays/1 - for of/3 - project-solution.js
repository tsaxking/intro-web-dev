// Creating a 2 dimensional/doubled array
// It's an array of 5 arrays of 5 numbers so that's why it's a doubled array
const bitMap = [
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
];

// Creating a draw function in case you want to draw multiple bitMaps
function draw(bitMap) {
    // Going through each of the array's rows
    // row would be something like [0, 1, 1, 1, 0],
    for (row of bitMap) {
        // Creating a string that we will log to the command line eventually
        let str = "";

        // Going through each of the 1s and 0s of the array
        for (bit of row) {
            // Adding a different value to the string depending on if
            // The bit is truthy (1 is truthy and 0 isn't)
            str += bit ? "██": "  ";
        }
        // Logging the row
        console.log(str);
    }
}

draw(bitMap);