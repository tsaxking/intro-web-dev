/*
    Create a function named animate that 
    will take in an array of { 
        x: number,
        y: number
    } objects
*/

function background() {
    const background = new Array(5).fill().map(_ => {
        return new Array(5).fill(" ");
    });

    return background;
}

function draw(array) {
    const str = array.reduce((acc, cur) => {
        return acc + cur.reduce((acc2, cur2) => {
            return acc2 + cur2;
        }, "") + "\n";
    }, "");

    console.log(str);
}

function animate(array) {
    // Create a new 5 x 5 doubled array
    // Fill it with a string for the character 
    // you want to put in your background

    let index = 0;

    setInterval(_ => {
        const drawing = background();

        if (index >= array.length) {
            index = 0;
        }

        const coordinate = array[index];
            const { x, y } = coordinate;
            
            drawing[x][y] = "O";

        console.clear();
        draw(drawing);

        index ++;
    }, 300);
    

    
}

/* 
    Create an array of coordinates in the form:
        { 
            x: number,
            y: number
        }
    Make these coordinates have x and y values from 0-4
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
    },
    {
        x: 1,
        y: 1,
    }
];

animate(arr);