// Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings,
// i.e., it returns 0 if both strings are the same,
// 1 if the 1st linked list is lexicographically greater, and
// -1 if the 2nd string is lexicographically greater.

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o`
// - Output: `1`
// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`
// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b`
// - Output: `-1`

const LinkedList = require('../data-structures/LinkedList');

let firstList = new LinkedList();
firstList.addToHead('B');
firstList.addToHead('i');
firstList.addToHead('l');
firstList.addToHead('b');
firstList.addToHead('o');
firstList.addToHead('a');

let secondList = new LinkedList();
secondList.addToHead('B');
secondList.addToHead('i');
secondList.addToHead('l');
secondList.addToHead('b');
secondList.addToHead('o');

function getCountOfList(list) {
    let temp = list.head;
    let count = 0;
    while (temp.next) {
        count++;
        temp = temp.next;
    }
    return count;
}
function compare(firstlist, secondlist) {
    let firstCount = getCountOfList(firstlist);
    let secondCount = getCountOfList(secondlist);

    if (firstCount > secondCount) {
        return 1;
    }
    if (firstCount < secondCount) {
        return -1;
    }
    if (firstCount === secondCount) {
        return 0;
    }
}

console.log(compare(firstList, secondList));
