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
const seven = add(3,4);

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

// Functions can also be written like this:
const func1 = function(param1, param2) {
    return param1 + param2;
}
// or like this
const func2 = (param1, param2) => {
    return param1 + param2;
}

// or like this
const func3 = param1 => {
    return param1 + 1;
}

// or like this
const func4 = param1 => param1 + 1;

// or like this (but please don't)
const func5 = new Function("param1", "param2", "return param1 + param2");

console.log({
    func1: func1(1, 2),
    func2: func2(1, 2),
    func3: func3(2),
    func4: func4(2),
    func5: func5(1, 2), 
});
