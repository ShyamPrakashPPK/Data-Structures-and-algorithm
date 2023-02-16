class stack{
    constructor() {
        this.array = [];
    }
    peek() {
        console.log(this.array[this.array.length - 1]);
        return this.array[this.array.length-1]
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }
}

const mystack = new stack;
mystack.push(20)
mystack.peek()
mystack.push(10)
mystack.peek()
mystack.pop()
mystack.peek()