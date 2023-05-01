// Clock
// Streaming data
// Traffic lights

class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.capacity === this.currentLength;
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        } else {
            console.error('Queue is full')
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity
            this.currentLength--
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return item;
        }
        return null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {

            let i = this.front;
            let str = ''
            while (i !== this.rear) {
                str += this.items[i] + ' ';
                i = (i + 1) % this.capacity;
            }

            // console.log(str)
            console.log(str += this.items[i])
        }
    }
}

const q1 = new CircularQueue(5);

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)

q1.dequeue()

q1.enqueue(2)
q1.enqueue(5)


q1.print()