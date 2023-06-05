// Create a flash card class
class FlashCard {
    // Create a constructor that takes in a question and an answer
    constructor(question, answer) {
        // Set this.question to the question and do the same thing for the answer
        this.question = question;
        this.answer = answer;
        // It may also be useful to store which side the flash card is on
        this.questionSide = false;
    }

    // Create a method that will flip the flash card and then log the new value
    flip() {
        // the question mark thing does the same thing as this but is way cleaner
        // if (this.questionSide) {
        //     console.log(this.answer);
        // } else {
        //     console.log(this.question);
        // }

        // Check which side the card is on and log the question or answer based off that
        console.log(this.questionSide ? this.answer : this.question);

        // Change which side it thinks it on
        this.questionSide = !this.questionSide;
    }
}

// You can use a index variable to track where in the array you are selecting
let index = 0;
// Create an array of instances of the FlashCard class
const flashCards = [
    new FlashCard(118, "Robonauts"),
    new FlashCard(254, "Cheesy Poofs"),
    new FlashCard(1323, "Madtown"),
    new FlashCard(1678, "Citrus Circuits"),
    new FlashCard(2056, "OP Robotics"),
    new FlashCard(2122, "Tators"),
    new FlashCard(2910, "Jack in the Box"),
    new FlashCard(4414, "High Tide"),
    new FlashCard(6036, "Peninsula Robotics")
];

// Create an interval (you may want to store the interval's id so you can clear it later)
const interval = setInterval(_ => {
    // Check if the index is still valid (is it less then the array length)
    if (index >= flashCards.length) {
        // if it isn't you could either clear the interval or reset the index
        clearInterval(interval);
        return;
    }

    // you can use a variable to store which flash card you are currently displaying
    const flashCard = flashCards[index];

    // You can maybe use a method from earlier to log the flash card's value and/or flip it
    flashCard.flip();
    // Then you can use a timeout to delay when the flash card will be flipped
    setTimeout(_ => {
        // Then you can use the same or a different method to log the card's value again
        flashCard.flip();
        setTimeout(_ => {
            // Finally you might want to add some sort of space or divider between each card to make it easy to read
            console.log("------");
        }, 250);
    }, 2500);
    // Edit the index
    index ++;
}, 3000);