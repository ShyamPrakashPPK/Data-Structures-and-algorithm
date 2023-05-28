class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1;
        return this;
    }


    prepend(value) {
        
    }
}