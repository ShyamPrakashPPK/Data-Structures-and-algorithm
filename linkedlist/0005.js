class Node{
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
        return this.size === 0
    }

    getSize() {
        return this.size
    }


    //adding elements in the first position
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
         this.head=node
        } else {
            this.head = this.next
            this.head = node
        }
    }
    

    // adding elements in the last position
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
}