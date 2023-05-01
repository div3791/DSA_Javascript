class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.tail = node;
        } else {
            node.next = this.head;

        }
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++
    }

    removeFront() {
        if (this.isEmpty()) return null;

        this.head = this.head.next;

        this.size--

        return this.head.value
    }

    removeEnd() {

        if (this.isEmpty()) return null;

        let value = this.tail.value;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let item = this.head;
            while (item.next != this.tail) {
                item = item.next;
            }
            this.tail = item;
            item.next = null;
        }

        this.size--;

        return value;
    }

    print() {
        if (this.isEmpty()) return console.log('List is empty')

        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = LinkedList;