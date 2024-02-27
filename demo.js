import { LinkedList } from "./linked-lists.js";

const linkedList = new LinkedList();

// appends a new node with passed value to the front (head) of the list i.e 1, 2, 3
linkedList.preappend(3);
linkedList.preappend(2);
linkedList.preappend(1);

// console logs the current node list from head to tail and null
linkedList.toString(); // logs ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// appends a new node at the end (tail) of the list i.e 1, 2, 3, 4, 5;
linkedList.append(4);
linkedList.append(5);

linkedList.toString(); // returns ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null

// returns the size of the list
linkedList.size(); // returns 5

// returns the value contained in either the head or tail
linkedList.printHead(); // returns 1
linkedList.printTail(); // returns 5

// returns the value stored at that index in the list (counting from 0, last element being null)
linkedList.atIndex(4); // returns 5

// removes the last item from the list
linkedList.pop(); // list is now ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null

// inserts a new node with passed value at the given index
linkedList.insertAt(5, 4); // list is back to ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null

// checks if any node in the list has the passed value, returns T or F
linkedList.hasValue(4); // returns true
linkedList.hasValue(19); // returns false

// returns the index of which node contains the value passed in
linkedList.findValue(4); // returns 3 -> the index where the nodes value = 4

// removes the node at the specified index
linkedList.removeAt(0); // removes the head which is 1. leaving us with ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null
