const boolean = false;

// If statements will take in a boolean and run code if the boolean is true
// else statements after an if statement will run code if the if statement didn't run
if (boolean) {
    console.log("boolean is true");
} else {
    console.log("boolean is false");
}

// You can also write if statements on one line if you only want to run one line of code
if (boolean) console.log("boolean is true");
else console.log('boolean is false');

// If statements can also be used for comparisons since comparisons will return a boolean
// For example you can check if str and str2 are equal by doing

const str = "a";
const str2 = "a";

if (str == str2) {
    console.log("Strings are equal!");
}

// Alternatively you can do

const stringsEqual = str == str2;
if (stringsEqual) {
    console.log("Strings are equal!");
}

// There is also the != operator which checks if two things are not equal
if (str != str2) {
    console.log("Strings aren't Equal D:");
}

const num = 3;
const num2 = 2;

// You can also compare numbers using the:
// less than operator, <
// greater than operator, >
// less than or equal to operator, <=
// greater than or equal to operator, >=

if (num > num2) {
    console.log("num is greater than num2");
} else if (num < num2) {
    console.log("num is less than num2");
} else {
    console.log("num and num2 are equal");
}
if (num >= num2) {
    console.log("num is greater than or equal to num2");
}
if (num <= num2) {
    console.log("num is less than or equal to num2");
}