// Starting i at 1 since we want the numbers 1-5 and not 0-4
let i = 1;
// Checking if i is less than 6 because 1-5 are less than 6
while (i < 6) {
    // Initializing a second loop so that we can log the think that many times
    let j = 0;
    // Making it so that it will log i, i times
    while (j < i) {
        // Logging i
        console.log(i);
        // Increasing j by 1 so it doesn't infinite loop
        j++;
    }
    // Increasing i by 1 so it doesn't infinite loop
    i++;
}