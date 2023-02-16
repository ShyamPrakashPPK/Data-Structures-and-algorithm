class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //peek

    peek() {
        console.log(this.first);
        return this.first;
    }

    //push called enqueue

    enqueue(value) {
        let newNode=new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next=newNode
            this.last=newNode
        }
        this.length++
        return this

    }

    //pop also called dequeue
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.length--;
        return this;
     }
}

const myQueue = new queue()

myQueue.enqueue(100)

myQueue.peek()

myQueue.enqueue(200)

myQueue.peek()

myQueue.dequeue()

myQueue.peek()