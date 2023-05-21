// A boolean is a variable that is true or false
const t = true;
const f = false;

// You can compare booleans using boolean operators

// A NOT operator just reverses the boolean
const notTrue = !true; // false
const notFalse = !false; // true;

// An AND operator, &&, checks if both values are true
const trueAndTrue = true && true // true because both values are true
const trueAndFalse = true && false // false because one of the values is false

// An OR operator, ||, checks if either value is true
const falseOrFalse = false || false; // False because neither value is true
const trueOrFalse = true || false; // True because one of the values is true

console.log({
    notFalse,
    notTrue,
    trueAndTrue,
    trueAndFalse,
    trueOrFalse,
    falseOrFalse,
});