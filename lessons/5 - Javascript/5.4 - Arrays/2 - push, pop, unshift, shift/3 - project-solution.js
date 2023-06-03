// Getting when the program started so we can see how many milliseconds it took to run
const start = Date.now();

// Creating two empty arrays
const arr1 = [];
const arr2 = [];

// Deconstructing random from math so I don't have to keep rewriting it
const { random } = Math;

// adding the numbers 0-4 to one of the arrays
for (i = 0; i < 5; i++) {
    // Checking if a random number is less than 0.5
    // This is a 50-50 chance
    // Then we push to a different array based off that
    if (random() < 0.5) {
        arr1.push(i);
    } else {
        arr2.push(i);
    }
}

// Logging the arrays so we know how they started out
console.log({
    arr1,
    arr2
});

// Checks if an array is numerically sortied
function checkSorted(arr) {
    // Looping through each index in arr
    // We aren't using for of because we actually do need the index
    // this is because we need access to the previous item
    for (index in arr) {
        // Checking if index is not 0
        // if index is 0 then we don't have a previous item to compare this item to
        if (index) {
            const item = arr[index];
            const previous = arr[index -1];
            // Returning false if the an item is less then the previous item because that they aren't sorted from least to most
            // Note that returning ends this function so as soon as this is called the function is done
            if (item < previous) return false;
        };
    }

    // Returning true if the for loop never returned false
    return true;
}

const interval = setInterval(_ => {
    // Getting a random boolean. 
    // We want to store this in a variable because we want it to be the same between removingArr and addingArr
    // This means that addingArr and removingArr will never be the same
    const randomBoolean = random() < 0.5;
    const removingArr = randomBoolean ? arr1 : arr2;
    const addingArr = randomBoolean ? arr2: arr1;

    // removing an item from the beginning or end of the removingArr
    const item = random() < 0.5 ? removingArr.pop() : removingArr.shift();
    // Checking if the item is undefined
    // It can be undefined when we try to remove an item from an empty array
    // In those cases the empty array stays empty and we don't change the other array
    if (item !== undefined) {
        // adding to the start or end of the addingArr
        if(random() < 0.5) addingArr.push(item)
        else addingArr.unshift(item);
    }

    // The string isn't indented because multi-line strings would have those indents
    // When they get logged to the console
    console.log(`---
arr1: ${arr1},
arr2: ${arr2},
item: ${item}`);

    // Checking if the two arrays are sorted and the other array is empty
    const arr1Sorted = !arr2.length && checkSorted(arr1);
    const arr2Sorted = !arr1.length && checkSorted(arr2);
    if (arr1Sorted || arr2Sorted) {
        // Logging the time between now and when the script started
        console.log(`Sorted in ${(Date.now()-start)/1000} seconds!`);
        console.log({
            arr1,
            arr2
        });
        clearInterval(interval);
    }
});