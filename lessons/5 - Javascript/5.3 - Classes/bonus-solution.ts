// Make a 2D game

class Field {
    cols: number;
    rows: number;
    field: GameElement[][];

    constructor() {
        const cols = process.stdout.columns;
        const rows = process.stdout.rows;

        this.cols = cols;
        this.rows = rows - 1;

        this.field = new Array(rows).fill([]).map((_, i) => {
            return new Array(cols).fill(0).map((_, j) => {
                return new Blank(j, i);
            });
        });

    }
    draw() {
        // console.clear();
        console.log(this.field.map(row => row.map(element => element.char).join('')).join('\n'));
    }

    addElement(...elements: GameElement[]) {
        for (const element of elements) {
            this.field[element.y][element.x] = element;
        }
    }
}

class GameElement {
    x: number;
    y: number;
    char: string;

    constructor(x: number, y: number, char: string) {
        this.x = x;
        this.y = y;
        this.char = char;
    }
}

class Food extends GameElement {
    constructor(x: number, y: number) {
        const chars = [
            '🍔',
            '🍕',
            '🍟',
            '🌭',
            '🥪',
            '🌮',
            '🌯',
            '🥙',
            '🍳',
            '🥘',
            '🍲',
            '🥗',
            '🍿',
            '🍱',
            '🍘',
            '🍙',
            '🍚',
            '🍛',
            '🍜',
            '🍝',
            '🍠',
            '🍢',
            '🍣',
            '🍤',
            '🍥'
        ];

        super(x, y, chars[Math.floor(Math.random() * chars.length)]);
    }
}

class Blank extends GameElement {
    constructor(x: number, y: number) {
        super(x, y, " ");
    }
}

class Player extends GameElement {
    field: Field;

    constructor(x: number, y: number, field: Field) {
        super(x, y, '👾');

        this.field = field;
    }

    action(key: string) {
        this.field.field[this.y][this.x] = new Blank(this.x, this.y);
        switch (key) {
            case 'w':
                this.moveUp();
                break;
            case 'a':
                this.moveLeft();
                break;
            case 's':
                this.moveDown();
                break;
            case 'd':
                this.moveRight();
                break;
            case 'k':
                this.kill();
                break;
            case 'q':
                this.kill();
                break;
        }
        this.field.field[this.y][this.x] = this;
    }

    moveLeft() {
        this.x--;
    }

    moveRight() {
        this.x++;
    }

    moveUp() {
        this.y--;
    }

    moveDown() {
        this.y++;
    }

    kill() {
        this.char = '💀';
    }
}

const field = new Field();

const player = new Player(10, 10, field);
const food = new Array(10).fill(0).map(() => new Food(Math.floor(Math.random() * field.cols), Math.floor(Math.random() * field.rows)));

field.addElement(...food);
field.addElement(player);

field.draw();

const { stdin } = process;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (key: string) => {
    player.action(key);

    if (key === 'q') {
        player.kill();
        field.draw();
        process.exit();
    }
});

setInterval(field.draw.bind(field), 500);