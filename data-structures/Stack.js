//Stacks are another data structure with a perfectly descriptive name. Like a queue, a stack is a linear collection of nodes that adds (pushes) data to the head, or top, of the stack
//a stack removes data (pops) from the head of the stack. Think of it as a stack of books, where you can only pick up the top book, and add a new book to the top
//A real-world computing example of a stack is a web browser’s back/forward function
//Contain data nodes
//Support three main operations:
// - Push adds data to the top of the stack
// - Pop removes and provides data from the top of the stack
// - Peek reveals data on the top of the stack
//Implementations include a linked list or array
//Can have a limited size
//Pushing data onto a full stack results in a stack overflow
//Stacks process data Last In, First Out (LIFO)

const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    // Add helper methods below this line
    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is full');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            throw new Error('Stack is empty');
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack.head.data;
        } else {
            return null;
        }
    }
}

module.exports = Stack;
