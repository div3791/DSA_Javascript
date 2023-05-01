let LinkedList = require('./linkedListTail');

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        this.list.removeFront()
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.size;
    }

    print() {
        this.list.print()
    }
}

let list = new LinkedListQueue();

list.enqueue(10);
list.enqueue(20);
list.enqueue(30);

list.print();
console.log("Size: ", list.getSize())

console.log('-----------');

list.dequeue();

list.print();
console.log("Size: ", list.getSize())

console.log('-----------');

console.log('Peek:', list.peek())