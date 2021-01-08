//They are the building blocks for many of the data structures
//Contain data, which can be a variety of data types
//Contain links to other nodes. If a node has no links, or they are all null, you have reached the end of the path you were following.
//Can be orphaned if there are no existing links to them

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }

    setPreviousNode(node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        } else {
            throw new Error('Previous node must be a member of the Node class');
        }
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}

module.exports = Node;
