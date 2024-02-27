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
    this.length++;
  }

  append(value) {
    let node = new Node(value);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  toString() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  size() {
    console.log(this.length);
  }
}

const ll = new LinkedList();
ll.preappend(3);
ll.preappend(2);
ll.preappend(1);
ll.append(4);
ll.append(5);
ll.toString();
ll.size();
