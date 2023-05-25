// Create a function that takes in the parameters a, b, and c.
function solveQuadratic(a, b, c) {
    // Create a for loop that will initialize sign as -1,
    // increase sign so that it is +1,
    // and end when sign is no longer less than or equal to 1
    for (sign = -1; sign <= 1; sign += 2) {
        // Within the loop you can just do the normal quadratic formula
        // Note that you may want to split up some of the formula into multiple variables like the numerator and denominator
        // To make your code look better
        const insideSqrt = b ** 2 - 4 * a * c;
        // Also instead of doing + or - Math.sqrt() you can do + sign * Math.sqrt()
        // Because of the for loop
        const numerator = -b + sign * Math.sqrt(insideSqrt);
        const denominator = 2 * a;
        // Log the result
        console.log(numerator/denominator);
    }
}

// Set your own a, b, and c variables
const a = 2;
const b = 8;
const c = 3;

// plug them into the function
solveQuadratic(a, b, c);

// You can check whether they are valid using desmos