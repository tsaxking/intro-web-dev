// Math.random generates a random number between 0-1
// once it has been multiplied by 10 we now have a random number between 0-10 (not including 10)
// however that number is not an integer so we can use Math.floor to convert it to an integer
const num = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const num3 = Math.floor(Math.random() * 10);

console.log({
    num,
    num2,
    num3
});

console.log(num * num2 - num3);