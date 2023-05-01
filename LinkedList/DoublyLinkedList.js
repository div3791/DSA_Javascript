class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    appendAt(index, value) {
        if (index > this.size || index < 0) return;
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const node = new Node(value)
        let i = 0;
        let prev = this.head;
        while (i < index - 1) {
            prev = prev.next;
            i++;
        }

        node.next = prev.next;
        prev.next = node;
        this.size++
    }

    removeAt(index) {
        if (this.isEmpty()) return;

        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let i = 0;
            let prev = this.head;

            while (i < index - 1) {
                prev = prev.next;
                i++;
            }

            let removedNode = prev.next;
            prev.next = removedNode.next;
        }

        this.size--;
    }

    removeValue(value) {
        if (this.isEmpty()) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let item = this.head;
        while (item.next && item.next.value !== value) {
            item = item.next;
        }

        if (item.next) {
            let removedItem = item.next;
            item.next = removedItem.next;
            removedItem.next = null;
            this.size--;
            return
        }

        console.log('Node not found')
    }

    search(value) {
        if (this.isEmpty()) {
            console.log('Item not found');
            return -1;
        }

        if (value === this.head.value) {
            return 0;
        }

        let i = 0;
        let item = this.head;
        while (item) {
            if (item.value === value) return i
            item = item.next;
            i++;
        }
        return -1
    }

    reverse() {
        if (this.isEmpty()) return

        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    print() {
        if (this.isEmpty()) return console.log('List is empty')

        let current = this.head;

        while (current) {
            console.log('Prev:', current.prev?.value);
            console.log('Value:', current.value);
            console.log('Next:', current.next?.value);

            current = current.next;
        }
    }
}

let list = new DoublyLinkedList();

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.append(60)

// console.log('Tail:', list.tail.value)
// console.log('Head:', list.head.value);

list.print()