// Spread syntax basically removes the brackets from an array kinda.
// You can do it by putting ... in front of an array
const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [ 'a', 'b', 'c', 1, 2, 3 ]

// You can also spread strings:
const arr4 = [..."foo", ...[1, 2, 3]];

console.log(arr4) // [ 'f', 'o', 'o', 1, 2, 3 ];

// It also lets you do stuff with functions
function foo(a, b, c) {
    console.log({ a, b, c });
}

foo(arr2); // { a: [ 1, 2, 3 ], b: undefined, c: undefined }
foo(...arr2); // { a: 1, b: 2, c: 3 }

// It can also go the other way with functions

function bar(...args) {
    console.log(args);
}

bar("a", "b", "c", "d"); // logs: [ 'a', 'b', 'c', 'd' ]

// You can also spread objects into other objects as well
const obj = {
    ...{ a: 1, b: "b", c: "c" },
    a: "a",
    d: "d",
};

console.log(obj); // { a: 'a', b: 'b', c: 'c', d: 'd' }

// And since arrays are also objects you can spread arrays into objects (You can’t spread objects into arrays though)
const obj2 = {
    ...[1, 2]
};

console.log(obj2); // { '0': 1, '1': 2 }
