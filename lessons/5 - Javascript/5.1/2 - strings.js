// ▄▀▀ ▀█▀ █▀▄ █ █▄ █ ▄▀  ▄▀▀ 
// ▄█▀  █  █▀▄ █ █ ▀█ ▀▄█ ▄█▀ 

// Strings are just text 
// they are created using quotation marks: ("/'/`)
// For example: 
const foo1 = 'bar';
const foo2 = "baz";
const foo3 = `
    Foo bar 
    test 123
`;

// Template strings are strings created using ``
// They allow you to write multi-line strings
// An you can also use ${variable} to add variables within the string
// For example:
const foo = "World";
const bar = `Hello ${foo}`; // Bar will be equal to "Hello World"
console.log({ bar });

// You can connect strings with the + operator 
// or using string1.concat(string2, string3, string4);
// For example:
const hello = "Hello";
const world = "World";
const helloWorld1 = hello + " " + world;
const helloWorld2 = hello.concat(" ", world);
console.log({ helloWorld1, helloWorld2 });

// You can get the length of a string using string.length:
const length = hello.length; // length will be equal to 5
console.log({ length });

// You can make strings upper and lower case using
// string.toUpperCase(); and string.toLowerCase();
// Note that these do not change the original string

const string = "mY KEybOARd HaD a STroKe";

const upperCase = string.toUpperCase();
const lowerCase = string.toLowerCase();

/* logs:
    {
        string: 'mY KEybOARd HaD a STroKe',
        upperCase: 'MY KEYBOARD HAD A STROKE',
        lowerCase: 'my keyboard had a stroke'
    }
*/
console.log({ string, upperCase, lowerCase });

// To see other things you can do with strings you can go to 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 