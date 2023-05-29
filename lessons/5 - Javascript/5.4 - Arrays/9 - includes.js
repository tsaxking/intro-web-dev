// Includes checks whether an array include an element
const arr = [0, 1, 2];
console.log(arr.includes(0)) // true
console.log(arr.includes(3)) // false

const obj1 = { foo: "baz" };
const objArray = [{ foo: "bar"}, obj1];
console.log(objArray.includes(obj1)) // true
console.log(objArray.includes({ foo: "bar" })); // false because JS is goofy