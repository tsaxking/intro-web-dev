setInterval(_ => {
    // Getting an object that stores info on the current time
    const dateObj = new Date();
    // using one of the object's methods to log the current time
    console.log(dateObj.toLocaleTimeString());
}, 1000);