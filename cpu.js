const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const cpu = () => {
    return new Promise(async (resolve, reject) => {
        const start = Date.now();
        while (Date.now() - start < 10000) {
            await sleep(0);
            let i = Math.random();
            for (const j in new Array(10000).fill()) {
                i *= Math.random() + 0.5;
            }
            console.log(i);
        }
        resolve();
    });
}

cpu();

const clock = () => {
    const logNow = () => {
        console.log(Date.now());
    }

    logNow();
    
    const interval = setInterval(logNow, 1000);
}

clock();
