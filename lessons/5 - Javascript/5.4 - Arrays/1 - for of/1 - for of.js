// So like it would be pretty cool if you could like loop through arrays or something right?
// well you can do that using for in and/or for of
// Here is an example:
const arr = ["a", "b", "c"];

// For in loops go through each index in an array.
/* This logs:
    0
    1
    2
*/
for (index in arr) {
    console.log(index);
}

console.log("---");

// For of logs every element of an array
/*  This logs:
    "a",
    "b",
    "c"
*/
for (element of arr) {
    console.log(element);
}
