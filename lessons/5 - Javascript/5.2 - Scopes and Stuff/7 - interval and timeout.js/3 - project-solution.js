

// Creating a variable to store the time of the last message so that
// We can log the time between messages
let lastTime = Date.now();
const interval = 5000;

function log() {
    // Logs the time since the last message
    console.log(Date.now() - lastTime);
    // Updates the time of the last message
    lastTime = Date.now();
}

function logTwice() {
    // Logs once
    log();
    // Sets a timeout so that it will log sometime between each interval being called
    setTimeout(log, interval * Math.random());
}

// Calling log twice so that it will log immediately then have the interval 
// rather than having to wait for 5 seconds for the program to run
logTwice();
setInterval(logTwice, interval);
