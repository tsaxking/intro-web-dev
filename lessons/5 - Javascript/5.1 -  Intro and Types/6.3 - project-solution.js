// Creating two strings
const greeting = "Hello";
const greetee = "World";

// Combining the strings with a template string
console.log(`${greeting} ${greetee}`);
// Combining the strings by adding them together
console.log(greeting + " " + greetee);
// Combining the strings with concat
console.log(greeting.concat(" ", greetee));

// Math.random generates a random number between 0-1
// once it has been multiplied by 10 we now have a random number between 0-10 (not including 10)
// however that number is not an integer so we can use Math.floor to convert it to an integer
const num = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const num3 = Math.floor(Math.random() * 10);

console.log({
    num,
    num2,
    num3
});

console.log(num * num2 - num3);

// Creating two booleans
const bool1 = true;
const bool2 = false;

console.log(bool1 || bool2);
console.log(bool1 && bool2);
