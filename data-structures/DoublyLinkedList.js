//doubly linked list also has a link to the node before it
//These previous links, along with the added tail property, allow you to iterate backward through the list as easily as you could iterate forward through the singly linked list
//Doubly Linked Lists:
//Are comprised of nodes that contain links to the next and previous nodes
//Are bidirectional, meaning it can be traversed in both directions
//Have a pointer to a single head node, which serves as the first node in the list
//Have a pointer to a single tail node, which serves as the last node in the list
//Require the pointers at the head of the list to be updated after addition to or removal of the head
//Require the pointers at the tail of the list to be updated after addition to or removed of the tail
//Require the pointers of the surrounding nodes to be updated after removal from the middle of the list

const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    }

    addToTail(data) {
        const newTail = new Node(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        if (this.head) {
            this.head.setPreviousNode(null);
        }
        if (removedHead === this.tail) {
            this.removeTail();
        }
        return removedHead.data;
    }

    removeTail() {
        const removedTail = this.tail;
        if (!removedTail) {
            return;
        }
        this.tail = removedTail.getPreviousNode();
        if (this.tail) {
            this.tail.setNextNode(null);
        }
        if (removedTail === this.head) {
            this.removeHead();
        }
        return removedTail.data;
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode();
        }
        if (!nodeToRemove) {
            return null;
        }
        if (nodeToRemove === this.head) {
            this.removeHead();
        } else if (nodeToRemove === this.tail) {
            this.removeTail();
        } else {
            const nextNode = nodeToRemove.getNextNode();
            const previousNode = nodeToRemove.getPreviousNode();
            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        }
        return nodeToRemove;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

module.exports = DoublyLinkedList;
