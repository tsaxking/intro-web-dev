// arr.indexOf find the index of an element in an array
const numArr = [3, 4, 1];
console.log(numArr.indexOf(1)); // 2
// If the element isn't in the array it will return -1
console.log(numArr.indexOf(2)); // -1

const obj1 = { foo: "bar" };
const obj2 = { foo: "not bar" };

const objArr = [{ foo: "bar"}, obj1, obj2];

// Logs 1 because even though the first member of objArr is identical to obj1 they are different objects
console.log(objArr.indexOf(obj1)); 

// Logs -1 Because this is actually a different object from the { foo: "bar"} in objArr
console.log(objArr.indexOf({ foo: "bar"}));