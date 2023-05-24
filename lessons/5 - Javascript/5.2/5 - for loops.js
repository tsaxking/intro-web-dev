// For loop does the same as the while loop from before except it is built to increment a certain amount of times
// A for loop takes in 3 things, a variable initialization, a condition, and something it will do every time it completes a loop

// So instead of
let i = 0;
while (i < 5) {
    console.log(i);
    i ++;
}

// We can do
for (i = 0; i < 5; i++) {
    console.log(i);
}