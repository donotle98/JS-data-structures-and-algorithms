//Hash maps map keys to their related values, and are one of the most efficient data structures when it comes to retrieving stored data
//This is because the key associated with every value added allows for faster retrieval later on
//When you come across a coding problem that requires you to store and retrieve data, keep in mind that hash maps will often be the most efficient data structure for that scenario
//A hash function takes a string (or some other type of data) as input and returns an array index as output
//Hash tables
//Hash functions
//Hash maps
//Hash values
//Hash collision
//Separate chaining
// - Saving keys
// - Linear probing
//A hash map is:
// - Built on top of an array using a special indexing system.
// - A key-value storage with fast assignments and lookup.
// - A table that represents a map from a set of keys to a set of values.

const LinkedList = require('./LinkedList');
const Node = require('./Node');

class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        console.log(`Storing ${value} at index ${arrayIndex}`);
        if (linkedList.head === null) {
            linkedList.addToHead({ key, value });
            return;
        }
        let current = linkedList.head;
        while (current) {
            if (current.data.key === key) {
                current.data = { key, value };
            }
            if (!current.next) {
                current.next = new Node({ key, value });
                break;
            }
            current = current.next;
        }
    }

    retrieve(key) {
        const arrayIndex = this.hash(key);
        let current = this.hashmap[arrayIndex].head;
        while (current) {
            if (current.data.key === key) {
                console.log(
                    `\nRetrieving ${current.data.value} from index ${arrayIndex}`
                );
                return current.data.value;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = HashMap;
