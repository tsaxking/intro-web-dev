// Generating a random number between 0-1
// This is inclusive of 0 but not of 1 so if rand is 0.5 we will say heads to make up for 1 not being a possible number
const rand = Math.random();

// Checking if rand is greater than 0.5
if (rand >= 0.5) {
    console.log("Heads");
// Checking if rand is less than 0.5
} else {
    console.log("Tails");
}