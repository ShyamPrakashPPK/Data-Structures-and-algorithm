class MyQueue {
    constructor() {
        this.pushStack = []
        this.popStack = []
    }

    push(val) {
        this.pushStack.push(val)
    }

    pop() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop()
    }

    peek() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length - 1]
    }

    empty() {
        return !this.pushStack.length && !this.popStack.length
    }
}

const qs = new MyQueue()

qs.push(89)
qs.push(39)
qs.push(99)

console.log(qs.peek());
console.log(qs.pop());
console.log(qs.peek());