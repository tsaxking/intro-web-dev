// Getting a random number between 0-1
const rand = Math.random();

// Getting a boolean to represent whether the random number is above 0.5
const heads = rand >= 0.5;

// Loging heads if the boolean is true and tails otherwise
console.log(heads ? "heads" : "tails");