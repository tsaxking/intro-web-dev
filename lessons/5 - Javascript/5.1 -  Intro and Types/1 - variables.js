// In JavaScript, you can create variables in order to store data.
// You can do this by saying:
let variableName1 = "value";
// or
var variableName2 = "value";
// or
const variableName3 = "value";

// “const” means that the variable will can’t change while “var” and “let”
// allow the variable to have different values.

// Using constants means that you don’t have to worry about 
// accidentally changing a variable’s value. It is also better for memory purposes.

// Generally it is best to use “const” when the variable doesn’t change and “let” when it does.

let a = 1;
let b = a + 1; // b will be equal to 2
a = 2; // A is now equal to 2 because it is a let
const c = a + 1; // c is equal to 3
c = 1 // This will throw an error if you run this file