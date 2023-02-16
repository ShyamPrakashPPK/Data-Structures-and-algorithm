class Node{
    constructor(value) {
        this.value = value
        this.next = null;
    }
}
class stack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        console.log(this.top);
        return this.top;
    }
    push(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode; 
        } else {
            let currentTop = this.top;
            this.top = newNode
            this.top.next=currentTop
        }
        this.length++
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        } else {
          this.top=this.top.next
        }
    }
}
const mystack = new stack()
mystack.push(10)
mystack.peek()