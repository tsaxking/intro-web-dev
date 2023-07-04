// A try catch lets you handle errors
// Instead of errors causing the code to stop you can put a catch statement
// When an error is thrown within the try, it will activate the catch
let probablyFunction;

try {
    probablyFunction(1);
} catch (e) {
    console.error(e);
}

console.log("code still running!!!");