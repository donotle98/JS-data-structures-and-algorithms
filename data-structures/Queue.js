//A queue is a linear collection of nodes that exclusively adds (enqueues) nodes to the tail, and removes (dequeues) nodes from the head of the queue
//They can be implemented using different underlying data structures, but one of the more common methods is to use a singly linked list
//Think of the queue data structure as an actual queue, or line, in a grocery store
//Queues:
//Contain data nodes
//Support three main operations:
// - Enqueue adds data to the back of the queue
// - Dequeue removes and provides data from the front of the queue
// - Peek provides data on the front of the queue
//Can be implemented using a linked list or array
//Bounded queues have a limited size.
//Enqueueing onto a full queue causes a queue overflow
//Queues process data First In, First Out (FIFO)

//Queues are usually implemented with linked list or arrays

const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        } else {
            throw new Error('Queue is full!');
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            return data;
        } else {
            throw new Error('Queue is empty!');
        }
    }
}

module.exports = Queue;
