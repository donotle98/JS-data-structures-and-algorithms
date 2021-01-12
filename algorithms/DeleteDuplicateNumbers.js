//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
// - Input = head 11 11 11 13 13 20 tail
// - Output = head 11 13 20 tail

const LinkedList = require('../data-structures/LinkedList');
function DupNumbers() {
    let llist = new LinkedList();
    llist.addToHead(13);
    llist.addToHead(20);
    llist.addToHead(13);
    llist.addToHead(11);
    llist.addToHead(11);
    llist.addToHead(20);
    llist.addToHead(11);
    llist.printList();

    let temp = llist.head;
    let newList = new LinkedList();
    let obj = Object.create(null);
    if (!temp) {
        return;
    }
    while (temp) {
        if (!obj[temp.data]) {
            obj[temp.data] = 1;
            newList.addToHead(temp.data);
        } else {
            temp = temp.next;
        }
    }

    console.log(newList.printList());
}

DupNumbers();
