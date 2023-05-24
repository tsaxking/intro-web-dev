const generatePoint = fn => x => ([x, fn(x)]);

const fx = x => 2 * x + 5;

const draw = (canvas, fn) => {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const generator = generatePoint(fn);

    const points = new Array(width).fill(0).map((_, i) => generator(i));

    const min = Math.min(...points.map(p => p[1]));
    const max = Math.max(...points.map(p => p[1]));

    const scale = height / (max - min);

    ctx.beginPath();
    ctx.moveTo(0, height - (points[0][1] - min) * scale);

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(i, height - (points[i][1] - min) * scale);
    }

    ctx.stroke();
}