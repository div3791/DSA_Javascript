let LinkedList = require('./linkedListTail');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        this.list.removeFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.size
    }

    print() {
        this.list.print()
    }
}

let list = new LinkedListStack();

list.push(10);
list.push(20);
list.push(30);

list.print();
console.log("Size: ", list.getSize())

console.log('-----------');

list.pop();

list.print();
console.log("Size: ", list.getSize())

console.log('-----------');

console.log('Peek:', list.peek())
