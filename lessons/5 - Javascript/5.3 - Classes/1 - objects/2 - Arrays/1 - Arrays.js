// Arrays are lists of things
// They can be initialized using square brackets []
// You can then put the array elements within the brackets separated by comments like:
const arr = [1, 2, 3, "a", "b", "c"];

// You can then access the elements of the array using [array index]
// The array index starts at 0
const one = arr[0]; // 1
const a = arr[3] // "a"

// You can get the length of an array using array.length 
const length = arr.length; // 6

// Arrays also have methods like push
arr.push('d'); // This will add d to the end of the array
const d = arr[6] // "d"
// We will go over array methods in lesson 5.4

// One thing to note is that arrays are actually just objects
// Instead of doing:
const arr2 = [1, 2, 3, "a", "b", "c"];
// You can do:
const arr3 = {
    0: 1,
    1: 2,
    2: 3,
    3: "a",
    4: "b",
    5: "c",
};


const two = arr3[1]; // 2
const b = arr3[4]; // "b"

// However if you initialize arrays this way you will face two issues:
// 1. You won't have any of the array methods so you can't push to the array
// 2. You will be held before a Grand Jury for JavaScript crimes and be banned from pushing to GitHub

try {
    arr3.push("d") // throws an error because arr3 is doesn't have the push method
} catch (e) {
    console.error(e);
}


// The reason you don't have array methods is because of what is called a prototype
// A prototype is a list of what properties and methods and object is supposed to have
// For example, the prototype for an array says that it has:
// A length property
// A push method along with other methods we will learn about later