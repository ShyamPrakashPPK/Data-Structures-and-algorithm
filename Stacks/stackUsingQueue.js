class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(val) {
        const newNode = new Node(val)

        if (!this.size) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    dequeue() {
        if (!this.size) return null

        let temp = this.head
        this.head = this.head.next
        temp.next = null

        this.size--
        return temp.data
    }

    peek() {
        return this.head.data
    }

    empty() {
        return this.size === 0
    }

    display() {
        if (!this.size) return null
        let current = this.head
        let listValues = ''
        while (current) {
            listValues = listValues + ` ${current.data} `
            current = current.next
        }
        console.log(listValues);
    }
}


class MyStack {
    constructor() {
        this.queue = new MyQueue()
    }

    push(val) {
        let rotate = this.queue.size

        this.queue.enqueue(val)

        while (rotate) {
            this.queue.enqueue(this.queue.dequeue())
            rotate--
        }
    }

    pop() {
        return this.queue.dequeue()
    }

    top() {
        return this.queue.peek()
    }

    empty() {
        return this.queue.empty()
    }

    display() {
        return this.queue.display()
    }
}


const sq = new MyStack()

sq.push(100)
sq.push(200)
sq.push(300)
sq.push(400)
sq.push(500)

sq.display()

console.log('STACK TOP :', sq.top());

console.log('DEQUEUED :', sq.pop());

console.log('STACK TOP :', sq.top());