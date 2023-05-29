// Sort sorts an array
// It takes ina function that takes in two of the array's elements a and b
// If the return value is negative it will put a before b
// If the return value is positive it will put b before a
// If the return value is 0 it will just keep the order

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

const sortedPeople = personArray.sort((personA, personB) => {
    return personB.netWorth - personA.netWorth;
});

console.log(sortedPeople.map(p => p.name)); // [ 'Jones', 'John jacob jingleheimer schmidt', 'Smith', 'Bob' ]