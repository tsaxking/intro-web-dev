import { Game } from "./game";
import { PointState } from "./pointstate";

export class Point {
    state: PointState;
    #cursor: boolean = false;
    cursorView: boolean = false;
    timeout?: NodeJS.Timeout;
    revealed: boolean = false;

    constructor(public readonly x: number, public readonly y: number, public isBomb: boolean, public readonly game: Game) {
        // this.state = PointState.hidden;
        this.state = PointState.hidden;
    }

    get surroundings(): Point[] {
        const { rows } = this.game;
        const { x, y } = this;

        return [
            rows[y - 1]?.points[x - 1],
            rows[y - 1]?.points[x],
            rows[y - 1]?.points[x + 1],
            rows[y]?.points[x - 1],
            rows[y]?.points[x + 1],
            rows[y + 1]?.points[x - 1],
            rows[y + 1]?.points[x],
            rows[y + 1]?.points[x + 1]
        ].filter(p => p);
    }

    get nearBomb(): boolean {
        return this.surroundings.some(p => p.isBomb);
    }

    get nearFlag(): boolean {
        return this.surroundings.some(p => p.state === PointState.flag);
    }

    get nearbyBombs(): number {
        return this.surroundings.filter(p => p.isBomb).length;
    }

    get move() {
        return {
            up: () => {
                const p = this.game.rows[this.y - 1]?.points[this.x];
                if (p) {
                    p.cursor = true;
                    this.cursor = false;
                    this.game.cursorPoint = p;
                    p.write();
                    this.write();
                    return p;
                }
                else return this;
            },
            down: () => {
                const p = this.game.rows[this.y + 1]?.points[this.x];
                if (p) {
                    p.cursor = true;
                    this.cursor = false;
                    this.game.cursorPoint = p;
                    p.write();
                    this.write();
                    return p;
                }
                else return this;
            },
            left: () => {
                const p = this.game.rows[this.y]?.points[this.x - 1];
                if (p) {
                    p.cursor = true;
                    this.cursor = false;
                    this.game.cursorPoint = p;
                    p.write();
                    this.write();
                    return p;
                }
                else return this;
            },
            right: () => {
                const p = this.game.rows[this.y]?.points[this.x + 1];
                if (p) {
                    p.cursor = true;
                    this.cursor = false;
                    this.game.cursorPoint = p;
                    p.write();
                    this.write();
                    return p;
                }
                else return this;
            }
        }
    }

    get cursor() {
        return this.#cursor;
    }

    set cursor(value: boolean) {
        if (this.#cursor !== value) {
            this.#cursor = value;
            this.cursorView = value;
            this.update();
        }
    }

    revealSurroundings() {
        const { surroundings } = this;
        const flags = surroundings.filter(p => p.state === PointState.flag);
        const hidden = surroundings.filter(p => p.state === PointState.hidden);

        if (flags.length === this.surroundings.filter(p => p.isBomb).length) {
            hidden.forEach(p => {
                if (!p.revealed) {
                    p.surReveal();
                }
            });
        }
    }

    surReveal() {
        if (this.isBomb) return;
        if (this.state !== PointState.hidden) return;
        if (this.nearbyBombs) {
            this.state = PointState.temp;
            return this.update();
        }

        this.state = PointState.empty;
        this.update();
        this.revealed = true;
        this.revealSurroundings();
    }

    reveal() {
        if (this.isBomb) {
            this.state = PointState.boom;
            return this.game.gameOver();
        } else if (this.state === PointState.hidden) {
            this.game.checkWin();
            this.state = PointState.temp;
        }

        this.revealSurroundings();

        this.update();
        this.revealed = true;
    }

    flag() {
        if (this.state === PointState.flag) {
            this.state = PointState.hidden;
        } else if (this.state === PointState.hidden) {
            this.state = PointState.flag;
        }

        this.update();
    }

    chord() {
        if (this.state === PointState.hidden) {
            const surroundings = this.surroundings;

            if (surroundings.filter(p => p.isBomb).length === 0) {
                surroundings.forEach(p => p.reveal());
            } else {
                this.game.gameOver();
            }

            this.update();
        }
    }

    update() {
        if (this.state === PointState.hidden) return;
        const bombs = this.nearbyBombs;
        switch (bombs) {
            case 0:
                this.state = PointState.empty;
                break;
            case 1:
                this.state = PointState.one;
                break;
            case 2:
                this.state = PointState.two;
                break;
            case 3:
                this.state = PointState.three;
                break;
            case 4:
                this.state = PointState.four;
                break;
            case 5:
                this.state = PointState.five;
                break;
            case 6:
                this.state = PointState.six;
                break;
            case 7:
                this.state = PointState.seven;
                break;
            case 8:
                this.state = PointState.eight;
                break;
            default: 
                throw new Error(`Invalid bomb count: ${bombs}`);
        }

        this.write();
    }

    write() {
        const { x, y } = this;
        process.stdout.cursorTo(x, y);

        if (this.cursor) {
            process.stdout.write('\x1b[7m');
            process.stdout.write(this.state);
            process.stdout.write('\x1b[0m');

            // if (this.timeout) clearTimeout(this.timeout);
            // this.timeout = setTimeout(() => {
            //     this.cursorView = !this.cursorView;
            //     this.write();
            // }, 500);
        }
        else process.stdout.write(this.state);
    }

    view() {
        if (this.isBomb) this.state = PointState.bomb;
        this.cursor = false;
        this.write();
    }

    setCursor() {
        process.stdout.cursorTo(this.x, this.y);
    }
}