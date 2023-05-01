class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
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
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
            let item = this.head;
            while (item.next) {
                item = item.next;
            }
            item.next = node;
        } else {
            this.head = node;

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

    peek() {
        if (this.isEmpty()) return null;

        return this.head;
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

const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

list.reverse()

list.print()
console.log(list.size)