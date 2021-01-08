//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
// - Input = head 11 11 11 13 13 20 tail
// - Output = head 11 13 20 tail

const LinkedList = require('../data-structures/LinkedList');
function DupNumbers() {
    let llist = new LinkedList();
    llist.addToHead(20);
    llist.addToHead(13);
    llist.addToHead(13);
    llist.addToHead(11);
    llist.addToHead(11);
    llist.addToHead(11);
    llist.printList();

    temp = llist.head;
    if (!temp) {
        return;
    }
    while (temp.next) {
        //loop through linked list as long as the next value is not null
        if (temp.data === temp.next.data) {
            //if the current nodes data equal the next nodes data
            let newTemp = temp.next.next; //assign the next.next node to a new temp variable
            temp.next = null; //the next node is now assigned null
            temp.next = newTemp; //the next.next is now the next node
        } else {
            //if the two nodes in front are not equal
            temp = temp.next; //assign the temp head to the next node in line
        }
    }
    return llist.printList();
}

DupNumbers();
