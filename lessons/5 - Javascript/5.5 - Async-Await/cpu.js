const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const cpu = () => {
    return new Promise(async (resolve, reject) => {
        const start = Date.now();
        while (Date.now() - start < 10000) {
            await sleep(0);
            console.log('working...');
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