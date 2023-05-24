// Create a new function that generates 
// a doubled array that is just filled with blank strings
function background() {
    // You can use new Array(length) to create an array of a certain length
    // You can then use fill to fill the array with a value
    // (Note that in order to use map you have to fill an array for some reason)
    // Also note that filling arrays can be goofy because of dependencies
    const background = new Array(5).fill().map(_ => {
        return new Array(5).fill("  ");
    });

    return background;
}

// Create a function that will take in a doubled array,
// combine it and then log the combined array
// You can use console.clear() in order to remove the previous drawings
function draw(array) {
    console.clear();

    const str = array.map(el => {
        return el.join("  ");
    }).join("\n\n");

    console.log(str);
}

/*
    Create a function named animate that 
    will take in an array of { 
        x: number,
        y: number
    } objects

    Then use set interval to loop through the array 
    and call your draw function from earlier on a blank doubled array that has been edited
*/
function animate(array) {
    // You can use a variable to store where you are within the array 
    let index = 0;

    // Then you can use setInterval to draw things each frame
    setInterval(_ => {
        if (index >= array.length) {
            index = 0;
        }

        // You can use the first function you created to generate
        // A blank doubled array
        const drawing = background();

        // Then you can take a coordinate from the coordinate array
        // You can edit a certain place (based of the coordinate) in the array
        // and change that place's value to "O" or some other string
        const coordinate = array[index];
        const { x, y } = coordinate;
        
        drawing[x][y] = "O";

        // Finally you can call your draw function on the doubled array to log it
        draw(drawing);

        // Also remember to increment your variable 
        // that is storing where you are in the array
        index ++;
    }, 200);
    

    
}

/* 
    Create an array of coordinates in the form:
        { 
            x: number,
            y: number
        }
*/

const arr = [
    {
        x: 1,
        y: 1,
    },
    {
        x: 1,
        y: 2,
    },
    {
        x: 1,
        y: 3,
    },
    {
        x: 2,
        y: 3,
    },
    {
        x: 3,
        y: 3,
    },
    {
        x: 3,
        y: 2,
    },
    {
        x: 3,
        y: 1,
    },
    {
        x: 2,
        y: 1
    }
];

// Then call your animate function on the array!
animate(arr);