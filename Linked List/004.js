class node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new node(value)
        if (this.isEmpty()) {
            this.head=node 
        } else {
            node.next = this.head 
            this.head = node
        }
        this.size++
    }
}

const list = new LinkedList
console.log('List is Empty ? ', list.isEmpty());
console.log('List Size', list.getSize());

list.prepend(10)
list.prepend

