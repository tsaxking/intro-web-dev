class Bubble implements Drawable {
    static random() {
        return new Bubble(Circle.random(), Vector.random(.001));
    }

    constructor(public circle: Circle, public vector: Vector) {}

    draw(canvas: Canvas) {
        this.circle.draw(canvas);
        // this.vector.draw(canvas, this.circle.center);

        this.circle.draw(canvas)

        for (const element of canvas.elements) {
            // continue;
            if (element === this) continue;

            if (element instanceof Bubble) {
                // if the distance between the two circles is less than the sum of their radii
                // bounce off the tangent line at the point of contact

                const distance = this.circle.center.distance(element.circle.center);

                if (distance < (this.circle.radius + element.circle.radius)) {
                    // const tangent = this.circle.center.tangent(element.circle.center);

                    // // get the components of the vectors where tangent is the x component and normal is the y component
                    // const { perpendicular: perpendicular1, parallel: parallel1 } = this.vector.components(tangent);
                    // const y1 = perpendicular1;
                    // const x1 = parallel1;

                    // const { perpendicular: perpendicular2, parallel: parallel2 } = element.vector.components(tangent);
                    // const y2 = perpendicular2;
                    // const x2 = parallel2;

                    // // swap the x components
                    // const v1 = x2.add(y1);
                    // const v2 = x1.add(y2);

                    // this.vector = v1;
                    // element.vector = v2;
                    const v = this.vector;
                    this.vector = element.vector;
                    element.vector = v;
                }
            }
        }

        const newPoint = this.circle.center.add(this.vector);

        // bounce off the walls
        if ((newPoint.x - this.circle.radius) < 0 || (newPoint.x + this.circle.radius) > 1) {
            this.vector.x *= -1;

            if (newPoint.add(this.vector).x < 0) {
                newPoint.x = this.circle.radius;
            }

            if (newPoint.add(this.vector).x > 1) {
                newPoint.x = 1 - this.circle.radius;
            }
        }

        if ((newPoint.y - this.circle.radius) < 0 || (newPoint.y + this.circle.radius) > 1) {
            this.vector.y *= -1;

            if (newPoint.add(this.vector).y < 0) {
                newPoint.y = this.circle.radius;
            }

            if (newPoint.add(this.vector).y > 1) {
                newPoint.y = 1 - this.circle.radius;
            }
        }

        this.circle.center = newPoint;
    }
}