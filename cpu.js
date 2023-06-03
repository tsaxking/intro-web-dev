const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const test = () => {
    return Math.random() >= 0.5 ? 1 : 0;
}

const tests = 1000000000;

const runTest = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += test();
    }
    return sum / num;
}

if (isMainThread) {
    // run 100 tests in parallel
    const promises = [];
    for (let i = 0; i < 100; i++) {
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(__filename, { workerData: tests });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            });
        }));
    }
    Promise.all(promises).then((results) => {
        console.log(results.reduce((a, b) => a + b, 0) / results.length);
    }).catch((err) => {
        console.error(err);
    });
} else {
    // console.log('Worker thread');
    const result = runTest(workerData);
    parentPort.postMessage(result);
}