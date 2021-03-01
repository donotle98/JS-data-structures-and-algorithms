//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
// - Input = head 11 11 11 13 13 20 tail
// - Output = head 11 13 20 tail

const LinkedList = require('../data-structures/LinkedList');
function DupNumbers() {
    //O(n)
    let llist = new LinkedList();
    llist.addToHead(13); //O(1)
    llist.addToHead(20);
    llist.addToHead(13);
    llist.addToHead(11);
    llist.addToHead(11);
    llist.addToHead(20);
    llist.addToHead(11);
    llist.printList();

    let temp = llist.head; //O(1)
    let newList = new LinkedList(); //O(1)
    let obj = Object.create(null); //O(1)
    if (!temp) {
        //O(1)
        return;
    }
    while (temp) {
        //O(n)
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
