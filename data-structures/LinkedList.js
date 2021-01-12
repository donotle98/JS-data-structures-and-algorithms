//Linking together nodes using their next property creates a singly linked list
//Like nodes, these lists are used as foundations for future data structures and are an alternative to arrays when trying to store information in a linear way
//Linked lists are comprised of:
//Are comprised of nodes
//Can be unidirectional or bidirectional
//The nodes contain a link to the next node (and also the previous node for bidirectional linked lists)
//Are a basic data structure, and form the basis for many other data structures
//Have a single head node, which serves as the first node in the list
//Require some maintenance in order to add or remove nodes

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
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
    findNodeIteratively(data) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    findNodeRecursively(data, currentNode = this.head) {
        if (currentNode === null) {
            return null;
        } else if (currentNode.data === data) {
            return currentNode;
        } else {
            return this.findNodeRecursively(data, currentNode.next);
        }
    }
}

module.exports = LinkedList;
