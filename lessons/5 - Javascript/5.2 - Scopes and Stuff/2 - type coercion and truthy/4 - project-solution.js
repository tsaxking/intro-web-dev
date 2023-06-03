// Take a number and see how many types you can convert it into
const num = 2;
// By adding a string to a number, the number becomes a string
const strNum = num + "";
// Using two not gate we can convert the number to a boolean without altering it's truthiness
const boolNum = !!num;
// By trying to take a property of num that doesn't exist we can get undefined
const undefinedNum = num.foo;


console.log({
    num,
    strNum,
    boolNum,
    undefinedNum,
});

// We can add a string that is a number to make it a number again
const numFromStr = +strNum;
// This will convert the boolean into 0 or 1 based off if it is false or true. This will preserve the original number
// Only if the original number is 0 or 1
const numFromBool = +boolNum;
// This turns undefined into a boolean then convert it to a number the same way as above
// This won't preserve the original number because the value of undefined is the same between all original numbers
const numFromUndefined = +!!undefinedNum;

console.log({
    num,
    numFromStr,
    numFromBool,
    numFromUndefined,
});