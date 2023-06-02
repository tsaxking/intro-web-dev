const arr1 = [];
const arr2 = [];

const { random } = Math;

for (i = 0; i < 10; i++) {
    if (random() > 0.5) {
        arr1.push(i);
    } else {
        arr2.push(i);
    }
}

console.log({
    arr1,
    arr2
});

for (i = 0; i < 10; i ++) {
    const [removingArr, addingArray] = random() > 0.5 ? [arr1, arr2] : [arr2, arr1];
    const item = random() > 0.5 ? removingArr.pop() : removingArr.shift();
    if (item !== undefined) random() > 0.5 ? addingArray.push(item) : addingArray.unshift(item);

    console.log(`
---
arr1: ${arr1},
arr2: ${arr2},
item: ${item} 
    `);
}