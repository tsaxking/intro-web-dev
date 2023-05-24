// make a function that takes a number of milliseconds and returns an object with the following properties:
// the timeString property should be a string in the format of "hour:minute:second AM/PM"
// (ms is the number of milliseconds since 1/1/1970)
// this is the format javascript uses to store dates internally
const msToReadableTime = (ms) => {
    // create a new Date object from the ms parameter
    const date = new Date(ms);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours < 12 ? 'AM' : 'PM';

    return `${hours % 12}:${minutes}:${seconds} ${ampm}`;
}

// make a function that logs the current time to the console every second, starting from when the function is called
const clock = () => {
    // make a function to log the current time to the console
    const logNow = () => {
        // use Date.now() to get the current time in milliseconds since 1/1/1970
        const now = Date.now();

        const timeString = msToReadableTime(now);

        // log the current time to the console
        console.log(timeString); 
    }

    // run the logNow function immediately
    logNow();
    
    // use setInterval to run the logNow function every second
    const interval = setInterval(logNow, 1000);
}

// run the clock function
clock();