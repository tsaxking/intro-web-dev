// One way (actually four ways but shh) to add and remove stuff from an array 
// is using push, pop, unshift, and shift
// Push adds an item to the end of an array
// Pop removes an item from the end of an array and returns that item
// Unshift adds an item to the start of an array
// Shift removes an item from the end of an array and returns that item

const arr = ["first", "middle", "last"];

console.log({ arr }); //{ arr: [ 'first', 'middle', 'last' ] }

const last = arr.pop();
console.log({ arr, last }); // { arr: [ 'first', 'middle' ], last: 'last' }

arr.push(last);
console.log({ arr }); // { arr: [ 'first', 'middle', 'last' ] }

const first = arr.shift(); 
console.log({ arr, first });  // { arr: [ 'middle', 'last' ], first: 'first' }

arr.push(first);
console.log({ arr }); // { arr: [ 'middle', 'last', 'first' ] }