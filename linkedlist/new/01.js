class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    //print a linkedlist by making it an array
    printList() {
        const array = [];
        let currentNode = this.head; 
        while (currentNode) {
            array.push(currentNode.value)
            currentNode=currentNode.next
        }
        console.log(array);
        return array
    }


    //append operation inserts element in the last position
    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this;
    }

    //prepend operaation inserts elements in the first position

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    //to insert at any given index

    //first let do a traversal method
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++;
        }
        return currentNode;
    }

    insertAt(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        let newNode = new Node(value)

        let firstNode = this.traverseToIndex(index - 1)
        let nextNode = firstNode.next
        
        firstNode.next = newNode;
        newNode.next = nextNode;
        this.length++
        return this.printList()
    }


    //to remove a node at any given index
    remove(index) {
        //check the parameter given
        let firstNode = this.traverseToIndex(index - 1)
        let unwantedNode = firstNode.next
        firstNode.next = unwantedNode.next
        this.length--;
        return this.printList()
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let firstnode = this.head;
        let secondnode = firstnode.next;
        while (secondnode) {
            const temp = secondnode.next;
            secondnode.next = firstnode;
            firstnode = secondnode;
            secondnode=temp
        }
        this.head.next = null;
        this.head = firstnode;
    }
}


const ll = new LinkedList(10)

ll.append(5)
ll.append(50)
ll.append(69)
ll.printList()
ll.insertAt(2, 80)
ll.reverse()
ll.printList()