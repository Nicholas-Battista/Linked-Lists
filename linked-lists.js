class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  preappend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    let node = new Node(value);
    let current;
  }

  toString() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.preappend(3);
ll.preappend(2);
ll.preappend(1);
ll.toString();
