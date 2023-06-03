// When you use an if statements you create something called a scope
// Variables within scopes only apply to those scopes.
// variables outside of any scopes are called global variables and are in the global scope

//  is a global variable so we can access it anywhere
const a = 1;
if (true) {
    // logs 1 because a is defined in the global scope
    console.log(a);

    // B is only defined in this scope
    // In other words you can only access it within this if statement
    const b = 2;
}

console.log(b); // throws "ReferenceError: b is not defined" because b is not defined in this scope