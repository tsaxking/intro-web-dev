// Objects are key-value pairs
// They are initialized using curly brackets {}
// Then you can put <the name of the key>: <the value> to add a key and value

// For example:

const key3 = 'value3';
const obj = {
    key1: "value1",
    key2: "value2",
    key3,
}

// You can then access the value for a key by doing obj["key"] or obj.key

console.log(obj["key1"]); // logs "value1"
console.log(obj.key1) // Also logs "value1"

// In addition, you can edit the values for each key as if they were variable
obj.key4 = 'value4';

// One object you have already used is console
// console is an object that looks somewhat like this
const console2 = {
    log: string => {
        // console.log doesn't call console.log but I'm just going to do that
        // Because the code console.log actually calls is probably not written in JS
        console.log(string);
    }   
}

// When the value of an object is a function, it is called a method
// Also people often refer to the values as properties and the keys are just the name of the property

console2.log("yay this worked");