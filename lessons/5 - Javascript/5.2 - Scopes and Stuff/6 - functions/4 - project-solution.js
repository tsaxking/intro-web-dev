const domain1 = -10;
const domain2 = 10;
// const domain2 = Infinity;

// This is just the range you want to display it doesn't necessarily have
// To be the actual range of the function within the above domain
const range1 = -100;
const range2 = 100;

// Until we learn about array's it is easier to do f(y) because the command line logs vertically
function f(y) {
    // return 2 * y ** 2 - 5 * y - 10;
    
    // If you change the domain2 to Infinity and then put this as f(y), it kinda has a cool effect
    // return ((y/10) + Math.sin(y)) % 200 - 100
}

function draw(y) {
    // Rounding the position because we are just going to check if the j value is
    // Equal to pos for every j value until we find a working one so that only works with ints
    const pos = Math.round(f(y));
    let row = "";
    // Looping through the range
    for (j = range1; j <= range2; j++) {
        // We are then going to add some character to the row 

        // Making the character an O if it is on the line
        const character = j == pos ? "O" 
            // Making the character a plus if it is the origin and a | if it is the vertical axis
            : j == 0 ? i == 0 ? "+" : "|"
            // Making the character a minus sin if it is on the horizontal axis 
            : i == 0 ? "-"
            // Making the rest of the graph blank
            : " ";
        row += character;
    }

    console.log(row);
}

// Looping through each integer x value and drawing a row for it
for (i = domain1; i <= domain2; i++) {
    draw(i);
}
// console.log("|____________________")