/*
Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

function another(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let newArr = [];
    newArr.push(arr.splice(0, 1)[0]);
    newArr.push(arr.splice(arr.length - 1, 1)[0]);
    return newArr;
}

console.log(another([14, 35, 6, 1, 34, 54])); //expecting [1,54]
