// Join combines an array into a string
const stringArray = ['a', 'b', 'c'];
// This will join the array and also put a " - " between each of the strings
const string = stringArray.join(" - ");
console.log(string); // "a - b - c"

// You can also combine other data types into strings

const numArray = [1, 2, 3];
const numberString = numArray.join(", ");
console.log(numberString); // "1, 2, 3"

const differentTypesArray = [1, "a", false, true, undefined, { foo: 'bar' }, [1], null, 10n];
const typeString = differentTypesArray.join(", ");
console.log(typeString) // 1, a, false, true, , [object Object], 1, , 10, note that undefined and null are coerced into empty strings