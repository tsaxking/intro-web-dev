import { Point } from "./point";
import { PointState } from "./pointstate";
import { Row } from "./row";

export enum Difficulty {
    // % of bombs on the board
    easy = 3,
    medium = 5,
    hard = 7
}

export class Game {
    readonly rows: Row[];

    cursorPoint: Point;

    constructor(difficulty: Difficulty) {
        console.clear();
        let { rows, columns } = process.stdout;
        rows -= 1; // remove 2 rows for the prompt


        const bombs = Math.floor(rows * columns * difficulty / 100);
        console.log(`Generating a ${rows}x${columns} board with ${bombs} bombs...`);

        this.rows = new Array(rows)
            .fill(null)
            .map((_, y) => 
                new Row(y, new Array(columns).fill(null).map((_, x) => {
                    const p = new Point(x, y, false, this);

                    // switch (x) {
                    //     case 0:
                    //         p.state = PointState.start;
                    //         break;
                    //     case columns - 1:
                    //         p.state = PointState.end;
                    //         break;
                    // }

                    return p;
                }))
            );

        for (let i = 0; i < bombs; i++) {
            let x: number, y: number;

            do {
                x = Math.floor(Math.random() * columns);
                y = Math.floor(Math.random() * rows);
            } while (this.rows[y].points[x].isBomb);

            this.rows[y].points[x].isBomb = true;
        }

        this.cursorPoint = this.rows[0].points[0];
    }

    prompt() {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearScreenDown();
        process.stdout.write('\nf: flag, r: reveal, c: chord, arrow keys: move, ctrl + c: quit');
    }

    gameOver() {
        this.view();
        console.log('Game over!');
        process.exit();
    }

    checkWin() {
        const { rows } = this;

        if (rows.every(row => row.points.every(point => point.isBomb || point.state !== PointState.hidden))) {
            this.view();
            console.log('You win!');
            process.exit();
        }
    }

    view() {
        for (const row of this.rows) {
            for (const point of row.points) {
                point.view();
            }
        }
    }

    setListeners() {
        process.stdin.setRawMode(true);
        process.stdin.on('data', (data) => {
            // arrow keys
            switch (data.toString()) {
                case '\u001B\u005B\u0041': // up
                    this.cursorPoint?.move.up();
                    break;
                case '\u001B\u005B\u0043': // right
                    this.cursorPoint?.move.right();
                    break;
                case '\u001B\u005B\u0042': // down
                    this.cursorPoint?.move.down();
                    break;
                case '\u001B\u005B\u0044': // left
                    this.cursorPoint?.move.left();
                    break;
                case '\u0003': // ctrl + c
                    this.gameOver();
                    break;
                case '\u000D': // enter
                    this.cursorPoint?.reveal();
                    break;
                case '\u0020': // space
                    break;
                case '\u0008': // backspace
                    break;
                case '\u007F': // delete
                    break;
                case '\u001B\u005B\u0031\u007E': // home
                    break;
                case '\u001B\u005B\u0034\u007E': // end
                    break;
                case 'f': // flag
                    this.cursorPoint?.flag();
                    break;
                case 'r': // reveal
                    this.cursorPoint?.reveal();
                    break;
                case 'c': // chord
                    this.cursorPoint?.chord();
                    break;
            }

            this.cursorPoint?.setCursor();
        });
    }

    start() {
        this.cursorPoint = this.rows[0].points[0];
        this.cursorPoint.cursor = true;
        this.render();
        this.prompt();
        this.setListeners();
    }

    render() {
        this.rows.forEach(row => {
            row.points.forEach(point => {
                point.write();
            });
        });
    }
}