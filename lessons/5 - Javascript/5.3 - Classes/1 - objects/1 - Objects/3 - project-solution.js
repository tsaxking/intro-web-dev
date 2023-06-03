function add(point1, point2) {
    // Creates a new point object
    return {
        // sets the x value to the sum of the two x values
        x: point1.x + point2.x,
        y: point1.y + point2.y,
        z: point1.z + point2.z,
    }
}

function multiply(point, number) {
    return {
        x: point.x * number,
        y: point.y * number,
        z: point.z * number,
    }
}

function subtract(point1, point2) {
    // This works because
    // a - b = a + (-b)
    return add(point1, multiply(point2, -1));
}

function divide(point1, point2) {
    // This works because
    // a/b = a * 1/b
    // (1/b == b^-1)
    return multiply(point1, point2 ** -1);
}

const point1 = {
    x: 1,
    y: -1,
    z: 2,
};

const point2 = {
    x: -1,
    y: 3,
    z: -4,
}


const point3 = add(point1, point2);
const point4 = subtract(point1, point2);
const point5 = multiply(point1, 2);
const point6 = divide(point2, -2);

// This is just a nice way to log things since it will log them as { name: value }
console.log({
    point3,
    point4,
    point5,
    point6
});