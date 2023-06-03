import { Point } from "./point";

export class Row {
    constructor(public readonly y: number, public readonly points: Point[]) {}
}