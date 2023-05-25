// Type coercion is what happens when you pass a data type into something that requires a different data type
// For example:
const str = "abc";
const num = 1;

// stillAString is equal to "abc1" because the 1 got coerced into the string "1"
const stillAString = str + num; 

// Values are called "truthy" or "falsy" based on whether they are true or false when you coerce them into boolean

// You can tell whether a value is truthy in most cases by either doing if(value) or !!value
// if (value) converts a value to a boolean because if statements only take in booleans
// !!value converts the value to a boolean because not gates only take in booleans
// However, arrays are falsy with if([]) and truthy with !![]

const emptyString = '';
const string = 'string';

// This will not run because empty strings are not truthy
if (emptyString) console.log("string is truthy");
// This will run because all other strings are truthy
if (string) console.log("string is truthy");

// You can look at the a diagram of what is and isn't truthy on the drawio file (if you have the vs code extension that lets you view it) or the powerpoint

// Other types of type coercion

// You can coerce things into strings by adding a string or an empty array to them
const str2 = num + '';
const str3 = num + [];

// You can convert things into numbers using a plus sign
const numberString = '3';
const number = +numberString;

// You can also coerce things by just doing this:
const normalNumber = 1;
const bigInt = BigInt(normalNumber);
const stringNumber = String(normalNumber);

console.log({
    str2,
    str3,
    number,
    bigInt,
    stringNumber,
});