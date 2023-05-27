interface Drawable {
    draw(canvas: Canvas, options?: any): void;
}

class Point {
    static random(): Point {
        return new Point(Math.random(), Math.random());
    }

    constructor(public x: number = 0, public y: number = 0, public color: string = 'Black') {}

    draw(canvas: Canvas) {
        canvas.context.beginPath();
        canvas.context.arc(this.x, this.y, 5, 0, Math.PI * 2);
        canvas.context.fillStyle = this.color;
        canvas.context.fill();
    }

    add(point: Point | Vector): Point {
        return new Point(this.x + point.x, this.y + point.y);
    }

    subtract(point: Point | Vector): Point {
        return new Point(this.x - point.x, this.y - point.y);
    }

    multiply(value: number): Point {
        return new Point(this.x * value, this.y * value);
    }

    divide(value: number): Point {
        return new Point(this.x / value, this.y / value);
    }

    distance(point: Point): number {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }

    clone(): Point {
        return new Point(this.x, this.y);
    }

    angle(point: Point): number {
        return Math.atan2(point.y - this.y, point.x - this.x);
    }

    tangent(point: Point): Vector {
        const angle = this.angle(point);
        const v = new Vector(Math.cos(angle), Math.sin(angle));
        return v.perpendicular(true);
    }
}


class Canvas {
    elements: Array<Drawable> = [];
    context: CanvasRenderingContext2D;
    #animating: boolean = false;


    constructor(public canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    addElement(...element: Drawable[]) {
        this.elements.push(...element);
    }

    removeElement(element: Drawable) {
        this.elements = this.elements.filter(e => e !== element);
    }

    clearElements() {
        this.elements = [];
    }

    draw() {
        this.elements.forEach(e => {
            this.context.save();
            e.draw(this);
            this.context.restore();
        });
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    get width(): number {
        return this.canvas.width;
    }

    get height(): number {
        return this.canvas.height;
    }

    set width(value: number) {
        this.canvas.width = value;
    }

    set height(value: number) {
        this.canvas.height = value;
    }

    get minDimension(): number {
        return Math.min(this.width, this.height);
    }

    start() {
        if (this.#animating) return;
        this.#animating = true;
        const animate = () => {
            if (!this.#animating) return;
            this.clear();
            this.draw();
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    stop() {
        this.#animating = false;
    }

    get animating(): boolean {
        return this.#animating;
    }
}

class Circle implements Drawable {
    static random(): Circle {
        return new Circle(Point.random(), Math.random() * 0.05, Color.random().rgb.toString());
    }

    constructor(public center: Point, public radius: number, public color: string = "black") {}

    draw(canvas: Canvas): void {
        canvas.context.beginPath();
        canvas.context.arc(
            this.center.x * canvas.width, 
            this.center.y * canvas.height, 
            this.radius * canvas.minDimension, 
            0, 
            Math.PI * 2
        );
        canvas.context.fillStyle = this.color;
        canvas.context.fill();
    }
}

class Line implements Drawable {
    static fromPointVector(point: Point, vector: Vector): Line {
        return new Line(point, point.add(vector));
    }

    constructor(public start: Point, public end: Point, public color: string = "black") {}

    draw(canvas: Canvas): void {
        canvas.context.beginPath();
        canvas.context.moveTo(this.start.x * canvas.width, this.start.y * canvas.height);
        canvas.context.lineTo(this.end.x * canvas.width, this.end.y * canvas.height);
        canvas.context.strokeStyle = this.color;
        canvas.context.stroke();
    }

    get vector(): Vector {
        const v = new Vector(this.end.x - this.start.x, this.end.y - this.start.y);
        return v;
    }

    get normal(): Vector {
        return new Vector(this.vector.y, -this.vector.x);
    }
}

class InfiniteLine implements Drawable {
    constructor(public point: Point, public vector: Vector) {}

    draw(canvas: Canvas): void {
        const start = this.point.subtract(this.vector.multiply(1000));
        const end = this.point.add(this.vector.multiply(1000));
        new Line(start, end).draw(canvas);
    }
}

class Rectangle implements Drawable {
    constructor(public start: Point, public end: Point, public color: string = "black") {}

    draw(canvas: Canvas): void {
        canvas.context.beginPath();
        canvas.context.rect(this.start.x * canvas.width, this.start.y * canvas.height, (this.end.x * canvas.width) - (this.start.x * canvas.width), (this.end.y * canvas.height) - (this.start.y * canvas.height));
        canvas.context.fillStyle = this.color;
        canvas.context.fill();
    }
}

class Vector implements Drawable {
    static fromPolar(angle: number, radius: number): Vector {
        return new Vector(Math.cos(angle) * radius, Math.sin(angle) * radius);
    }

    static random(scale: number = 1): Vector {
        const random = () => {
            const neg = Math.random() < 0.5 ? -1 : 1;
            return Math.random() * neg * scale;
        }

        return new Vector(random(), random());
    }

    static zero(): Vector {
        return new Vector(0, 0);
    }


    constructor(public x: number, public y: number) {}

    add(vector: Vector): Vector {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector: Vector): Vector {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(value: number): Vector {
        const v = new Vector(this.x, this.y);
        v.magnitude *= value;
        return v;
    }

    divide(value: number): Vector {
        return new Vector(this.x / value, this.y / value);
    }

    reflect(normal: Vector): Vector {
        return this.subtract(normal.multiply(2 * this.dot(normal)));
    }

    dot(vector: Vector): number {
        return this.x * vector.x + this.y * vector.y;
    }

    perpendicular(dir: boolean): Vector {
        return new Vector(dir ? this.y : -this.y, dir ? -this.x : this.x);
    }

    get magnitude(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    get normalized(): Vector {
        return this.divide(this.magnitude);
    }

    get angle(): number {
        return Math.atan2(this.y, this.x);
    }

    set angle(value: number) {
        const magnitude = this.magnitude;
        this.x = Math.cos(value) * magnitude;
        this.y = Math.sin(value) * magnitude;
    }

    set magnitude(value: number) {
        const angle = this.angle;
        this.x = Math.cos(angle) * value;
        this.y = Math.sin(angle) * value;
    }

    draw(canvas: Canvas, point: Point): void {
        Line.fromPointVector(point, this.multiply(100)).draw(canvas);
    }

    components(vector: Vector): { parallel: Vector, perpendicular: Vector } {
        const dot = this.dot(vector);
        const x = vector.multiply(dot / vector.dot(vector));
        const y = this.subtract(x);
        return { parallel: x, perpendicular: y };
    }
}