

// Creating a variable to store the time of the last message so that
// We can log the time between messages
let lastTime = Date.now();
const interval = 5000;

function log() {
    console.log(Date.now() - lastTime);
    lastTime = Date.now();
}

function logTwice() {
    log();
    setTimeout(log, interval * Math.random());
}

logTwice();
setInterval(logTwice, interval);
