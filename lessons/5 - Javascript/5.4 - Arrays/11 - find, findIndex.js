// Find is an array method that takes in a function
// and then returns the first element of an array where that function returns true

const personArray = [
    {
        name: "Bob",
        netWorth: 1
    }, {
        name: "Jones",
        netWorth: 100
    }, {
        name: "Smith",
        netWorth: 3,
    }, {
        name: "John jacob jingleheimer schmidt",
        netWorth: 100
    }
];

// This will loop through each person and check if they have a netWorth of 100
// Once it reaches Jones it will stop looping and will return Jones because the function returned true
const netWorth100 = personArray.find(person => {
    return person.netWorth == 100;
});

console.log(netWorth100) // Logs { name: 'Jones', netWorth: 100 }

// Find index does the same thing but it returns the index rather than the value
const johnJacobJingleheimerSchmidtIndex = personArray.findIndex(person => {
    return person.name == 'John jacob jingleheimer schmidt';
});

console.log(johnJacobJingleheimerSchmidtIndex); // 3