// Gets the second hand's angle relative to the x axis (counter-clockwise)
function getAngle(time) {
    const dateObj = new Date(time);
    // Getting the seconds and milliseconds for a smoother animation
    const seconds = dateObj.getSeconds() + dateObj.getMilliseconds()/1000;
    // Getting the percent around the clock that the hand has moved
    const rotationPercent = seconds/60;
    // Storing this value because rewriting Math. is really ugly
    const pi = Math.PI;
    // This is the angle relative to the Y axis and going in the clockwise direction
    // However trigonometric functions start at the axis and go counter-clockwise
    // So in order to use cos and sin later we will need to offset this angle by pi/2 rad
    // And make it negative
    const clockAngle = (pi * 2) * rotationPercent;
    // Editing the angle so it works with trig stuff
    // - sign reverses the direction
    // Pi/2 offsets it from y axis to x axis
    const trigAngle = (3 * pi / 2  - clockAngle) % (pi * 2) - pi/2;
    return trigAngle;
}

// Gets what character out of -, / |, \ to use for the hand
// It bases is off the angle in radians
function getCharacter(angle) {
    const PI = Math.PI;
    // Adding 2 * PI to the angle to ensure the angle is positive before moduloing it
    // This is because modulo in js isn't actually modulo and breaks for negatives
    // Then we use % PI/2 since the character is the same between opposite angles
    const moduloedAngle = ((angle + 2 * PI) % PI/2);
    // We also multiply by 16/pi so that all the thresholds can just be 1, 3, 5, and 7
    // Instead of Pi/16, 3Pi/16, 6Pi/16, etc.
    const normalizedAngle = moduloedAngle * 16/PI;
    // Setting the character based off the angle
    const handCharacter = normalizedAngle < 1 ? "-"
        : normalizedAngle < 3 ? "/"
        : normalizedAngle < 5 ? "|"
        : normalizedAngle < 7 ? "\\"
        : "-"
    return handCharacter;
}

// Draws a clock for a certain angle
function draw(angle) {
    // Size of the clock (width/2 and height/2)
    const size = 7;
    // Looping through every y value
    for (y = -size; y <= size; y++) {
        // Creating a string for that row that we will log once it is generated
        let str = "";
        // Looping through every x value
        for(x = -size; x <= size; x++) {
            // Getting the angle of this point
            const actualAngle = -Math.atan2(y, x);
            // Comparing the angle of this point to the angle of the hand
            const dTheta = Math.abs(angle - actualAngle);
            // Getting which character this point will have based off 
            // whether the point's angle is close enough to the angle of the hand
            const char = dTheta < 0.1 ? getCharacter(actualAngle) :
                // Axes
                !y || !x ? "+":
                " ";
                // Adding a " " to make the clock more square
            str += char + " ";
        }
        console.log(str);
    }
}

setInterval(_ => {
    // Getting the angle of the hand
    const angle = getAngle(Date.now());
    // Clearing the console of the previous clock
    console.clear();

    // Drawing the clock
    draw(angle);

    // Getting a date Object with info on the current time
    const dateObj = new Date();
    console.log("Seconds: ", dateObj.getSeconds() + dateObj.getMilliseconds()/1000);
    console.log("Angle (rad):", angle);
    // Angle converted to degrees
    console.log("Angle (deg): ", angle / Math.PI * 180);
    console.log("Time:", dateObj.toLocaleTimeString());
}, 300);