// make a function that takes a number of milliseconds and returns an object with the following properties:
// year, month, day, hour, minute, second, date, ms, time, ampm, timezone, timeString
// the timeString property should be a string in the format of "hour:minute:second AM/PM"
// (ms is the number of milliseconds since 1/1/1970)
// this is the format javascript uses to store dates internally
const msToReadableTime = (ms) => {
    // initialize an array of months for use with the getMonth method.
    // Each index of the array corresponds to the month number returned by the getMonth method.
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Septemper',
        'October',
        'November',
        'December'
    ];

    // initialize an array of days for use with the getDay method.
    // Each index of the array corresponds to the day number returned by the getDay method.
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    // create a new Date object from the ms parameter
    const date = new Date(ms);

    // create a custom date class that will be returned by the function
    class CustomDate {
        constructor(date) {
            this.year = date.getFullYear();
            this.month = months[date.getMonth()];
            this.day = days[date.getDay()];
            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
            this.date = date.getDate();
            this.ms = date.getMilliseconds();
            this.time = date.getTime();
            this.ampm = date.getHours() >= 12 ? 'PM' : 'AM';
            this.timezone = date.getTimezoneOffset();

            this.timeString = `${this.hour - (this.ampm === 'PM' ? 12 : 0)}:${this.minute}:${this.second} ${this.ampm}`;
        }
    }
    
    // initialize a new CustomDate object and return it
    return new CustomDate(date);
}

// make a function that logs the current time to the console every second, starting from when the function is called
const clock = () => {
    // make a function to log the current time to the console
    const logNow = () => {
        // use Date.now() to get the current time in milliseconds since 1/1/1970
        const now = Date.now();

        const { timeString } = msToReadableTime(now);

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