// The date object is an object that lets you do time stuff
// You can initialize it using new Date() or new Date(ms) where ms is the amount of milliseconds since Jan 1st 1970.
const date = new Date();
// this date variable is what is called an instance of the Date class
// And because we used new Date(), the date object has the Date prototype
// This means that it has all of the methods of date like Date.toLocaleString() or Date.getHours()

console.log({
    localeString: date.toLocaleString(),
    hours: date.getHours()
});