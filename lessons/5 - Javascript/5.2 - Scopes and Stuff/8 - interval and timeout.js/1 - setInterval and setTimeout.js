// In JavaScript, when you try exiting the page or press a key it fires an event
// You can do things when these are fired and we will learn about that later
// Anyways, these events can't just interrupt the currently running code, so they enter a queue where they will wait for the code to complete
// This means that if you have a while true loop and try exiting the page,
// you won't be able to because the page exit event will be stuck in the queue until the while true ends (which is never)
// The solution to this is that when you have an infinite loop you should also add stuff to the queue after the events so that the events only wait for your code to loop around once
// This is where setInterval comes into play

// ▀█▀ █    ▀ █▀▄ █▀▄ 
//  █  █▄▄ ▄▀ █▄▀ █▀▄ : while loops don’t let you exit the page while they are running. setInterval lets you exit the page while intervals are running

// Set Interval takes in a function and an amount of time, x in milliseconds
// It will then run that code every x milliseconds

// Instead of an underscore you can use () here but underscores look nicer :/
const logThingy = _ => console.log('thingy');

// This will log 'thingy' once per second
setInterval(logThingy, 1000);

// Since setInterval is also a function it has a return value
// This return value is a number which represents the id of the interval
// You can then run clearInterval on the id to end the interval
const interval = setInterval(_ => {
    console.log('thingy2');
}, 200);

// SetTimeout is similar to setInterval but instead of repeatedly running the code,
// it just waits a certain amount of time and then runs that code
setTimeout(_ => {
    // This will clear the interval from before after 1 second
    clearInterval(interval);
}, 1000);

// If you don't pass in an amount of time, the interval will just repeatedly add more things to the queue
// That means that it is kind of like a while loop except that it doesn't break the browser
const spamInterval = setInterval(() => {
    console.log("spaaaaaam!!!!");
});

setTimeout(_ => {
    clearInterval(spamInterval);
}, 300);