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

  insertAt(value, index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.preappend(value);

    const node = new Node(value);
    let current, previous;

    current = this.head;
    let count = 0;
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.length++;
  }

  atIndex(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.head;

    let current = this.head;
    let count = 0;
    while (count < index) {
      count++;
      current = current.next;
    }
    return current;
  }

  pop() {}

  printHead() {
    console.log(this.head.value);
  }

  printTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log(current.value);
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
ll.printHead();
ll.printTail();
ll.atIndex(4);
