// Deconstruction allows you to turn properties of an object into variables

const obj = {
    foo: "bar",
    baz: 'waldo',
    key: 1
}

// You can do this by creating a variable and setting the name to an object
// That is a mirror to the obj on the right
// it's like really goofy algebra
const { key: variableName, foo, baz } = obj;

console.log(foo, baz, variableName);

// You can also do deconstruction for arrays
const arr = ["a", "b", "c"];
const [ a, b, c ] = arr;

console.log(a, b, c);