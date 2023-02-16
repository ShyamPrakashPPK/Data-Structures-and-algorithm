class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Add a new node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Delete a node with the given data
    delete(data) {
        if (!this.head) {
            return;
        }

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (currentNode === this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                } else if (currentNode === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }
            currentNode = currentNode.next;
        }
    }
}
   