// Creating a new scope
if (true) {
    // Defining a let and var
    var a = "foo";
    let b = "bar";
}

// Trying to log 
console.log(a); // Doesn't throw an error
console.log(b); // Throws an error