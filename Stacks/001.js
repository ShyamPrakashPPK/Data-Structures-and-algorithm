class Stack{
    constructor() {
        this.items=[]
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }

    //recursive method to insert an item x in sorted way 
    sortedInsert(s, x) {
        //base case , either stack is empty or newly inserted element is greater than the top (more than all the existing element)
        if (s.length == 0 || x > s[s.length - 1]) {
            s.push(x)
            return;
        }
        //If top is greater, remove the top item and recur
        let temp = s.pop();
        this.sortedInsert(s, x);
        //put th element back to the top
        s.push(temp)
    }

    //method to sort the stack 
    sortStack() {
        //if the stack is not empty
        if (this.items.length != 0) {
            //remove the top item 
            let x = this.items.pop();
            //sort remaining stack
            this.sortStack(this.items, x)
            //push the top item back in sorted stack 
            this.sortedInsert(this.items, x);

        }
    }


}

const stack = new Stack()

stack.push(-3)
stack.push(14)
stack.push(18)
stack.push(-5)
stack.push(30)





stack.print()


stack.sortStack()


stack.print()
