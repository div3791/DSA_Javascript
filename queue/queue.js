//FIFO
// Constant time complexity for insert and remove

class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front == 0
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items)
    }

    peek() {
        return this.items[this.front]
    }
}

module.exports = Queue

const q = new Queue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

console.log(q.size())

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

console.log(q.size())


