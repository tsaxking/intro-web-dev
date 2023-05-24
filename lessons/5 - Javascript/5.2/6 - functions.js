// Functions are code that you can write that can be called later
// Just like in math a function takes in parameters and returns a value
// So, if f(x) = x + 1:
function f(x) {
    return x + 1;
}

// Later we can call functions in order to get their return values
const two = f(1);
const three = f(2);

// functions can also take in multiple parameters:
function add(x, y) {
    return x + y;
}
const five = add(2, 3);
const seven = add(3,4)

// Functions that just take something in and return stuff are pure functions
// However functions can also do other stuff besides returning a value
// For example:
let variable;
function setVariable(v) {
    variable = v;
    console.log(v);
}

setVariable(1);
// In this example the function did stuff without returning a value
