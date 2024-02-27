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

  pop() {
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.length--;
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

  hasValue(value) {
    let current = this.head;
    let count = 0;
    while (count <= this.length) {
      count++;
      if (current.value === value) {
        return console.log(true);
      }
      if (current.next == null) {
        return console.log(false);
      }
      current = current.next;
    }
  }

  findValue(value) {
    let current = this.head;
    let count = 0;
    while (count <= this.length) {
      count++;
      if (current.value === value) {
        return console.log(count);
      }
      if (current.next == null) {
        return console.log(null);
      }
      current = current.next;
    }
  }

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
    let string = "";
    while (current) {
      string += `( ${current.value} ) -> `;
      if (current.next === null) {
        string += "null";
      }
      current = current.next;
    }
    console.log(string);
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
// ll.printHead();
// ll.printTail();
// ll.atIndex(4);
ll.pop();
ll.size();
ll.toString();
ll.hasValue(4);
ll.hasValue(19);
ll.findValue(4);
