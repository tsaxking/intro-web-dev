// Filter will apply a function on every element of an array
// and include only the element where the function returns a truthy value
const numbers = [ 2122, 6063, 2910, 254, 2056, 118, 115, 114, 3647, 1323, 4414, 2212, 1678 ];
const greaterThan2000 = numbers.filter(num => {
    return num > 2000;
});

console.log(greaterThan2000); // [ 2122, 6063, 2910, 2056, 3647, 4414, 2212 ]

const values = [0, "a", false, "foo", -0, 1, "", 2, undefined, true, null];
const truthy = values.filter(el => el);
console.log(truthy); // [ 'a', 'foo', 1, 2, true ]