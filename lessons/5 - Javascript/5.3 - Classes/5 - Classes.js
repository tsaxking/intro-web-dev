// Now that you have kind of learned what a prototype is,
// We can talk about how to create prototypes
// Generally the main way to do that is with classes
// Classes are like a cookie cutter if objects were cookies

// Here is an example of a person class that can create people objects:
class Person {
    // The constructor is what creates the objects
    // This is what is called when you run new Person/new Date
    constructor(name, favoriteColor) {
        // In order to access an object from within a class you can use <this>
        // This means that the object the constructor returns an object 
        // with the name property of whatever the passed in name is
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    // This is an example of a method
    // This means that when you create a new person object
    // and then do person.logColor(), it will run this code
    logColor() {
        console.log(this.favoriteColor);
    }
}

// Creates the object:
/* 
{
    name: 'Bob',
    favoriteColor: 'green',
}
*/
const person1 = new Person("Bob", "green");
// Since we defined logColor above,
// We can run it here
person1.logColor();