const bitMap = [
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
];

function draw(bitMap) {
    for (row of bitMap) {
        let str = "";
        for (bit of row) {
            str += bit ? "██": "  ";
        }
        console.log(str);
    }
}

draw(bitMap);