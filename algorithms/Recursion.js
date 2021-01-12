//Recursion is a computational approach where a function calls itself from within its body
//use recursion when they need to perform the similar action multiple times in a row until it reaches a predefined stopping point, also known as a base case
const Node = require('../data-structures/Node');
const LinkedList = require('../data-structures/LinkedList');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

// Add checkpoint 2 code below:
const myNodeRecursive = myList.findNodeRecursively('Node 2');
console.log(myNodeRecursive);
