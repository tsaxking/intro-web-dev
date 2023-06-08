// ██▄ █ ▄▀     █ █▄ █ ▀█▀ 
// █▄█ █ ▀▄█    █ █ ▀█  █  

// Big Ints are integers that are too large to be stored by JavaScript's number type
// You can initialize Big Ints by adding an n after the number
// For example:
const bigInt = 123120391209310293n; // will stay as 123120391209310293n
const normalNumber = 123120391209310293; // will 123120391209310290 because numbers aren't accurate enough

// other things of interest:
// BigInt has no NaN
console.log({
    bigInt,
    normalNumber
});

// █ █ █▄ █ █▀▄ ██▀ █▀ █ █▄ █ ██▀ █▀▄ 
// ▀▄█ █ ▀█ █▄▀ █▄▄ █▀ █ █ ▀█ █▄▄ █▄▀ 

// Variables are undefined when they aren't initialized or when they are assigned to something that isn't defined
let foo; // Foo is undefined because it was never assigned a value
const bar = undefined; // bar is undefined because we assigned it with the value undefined
const baz = (1).length; // baz is undefined because numbers don't have lengths

console.log({
    foo,
    bar,
    baz
});

// ▄▀▀ ▀▄▀ █▄ ▄█ ██▄ ▄▀▄ █   
// ▄█▀  █  █ ▀ █ █▄█ ▀▄▀ █▄▄ 

// Symbols are like strings but they are unique.

const str1 = "a";
const str2 = "a";
// true because the strings are the same
const stringsEqual = str1 == str2; 

const symbol1 = Symbol("a");
const symbol2 = Symbol("a");
// false because even though we passed the same strings into each symbol,
// symbols are unique so they still aren't equal
const symbolsEqual = symbol1 == symbol2;

console.log({
    stringsEqual,
    symbolsEqual
});

// █▄ █ █ █ █   █   
// █ ▀█ ▀▄█ █▄▄ █▄▄ 

// Null is basically the same thing as undefined
// but in very specific cases it is slightly different
const nullVar = null;
const nulEqualsUndefined = null === undefined; // false

console.log({
    nullVar,
    nulEqualsUndefined
});