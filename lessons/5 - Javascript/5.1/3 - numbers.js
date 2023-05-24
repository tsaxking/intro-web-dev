// In JavaScript, all numbers are just numbers instead of there
// being different classes for integers and floats.
// For example: 
const foo = 1;

// You can combine numbers using +, -, *, /, ** (exponents), and % (remainder.

// If you try turning something that isn’t a number into a number it will turn into NaN or not a number which is actually a number. 
const str = "string";
const notANumber = str - 1; // Returns NaN because you can't subtract a number from a string
const string1 = str + 1 // Returns "string1" because you can add a number to string
console.log({
    notANumber,
    string1,
})

// You can also use things like Math.round(), Math.log(), Math.random(). etc. to do other things with number
