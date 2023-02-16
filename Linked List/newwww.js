class Node{
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertfirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node
   
    append(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head=node
        } else {
            let current;
            while (current.next) {
                current = current.next;
            }
            current.next=node
        }
        this.size++
    }

    //insert at index

    insertAt(data, index) {
        //check if the index is out of bound
        if (index > 0 && index > this.size) {
            return;
        }

        //if we have to instert in first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);

        let current, previous;
        //set current to first 
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;//node before the node we want to insert
            count++;
            current = current.next;//node after the index

            node.next = current;
            previous.next = node;

            this.size++;

        }

    }

    //Get at index

    //remove index

    //clear list

    //print list
    printList() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        } 
    }
}

const list = new LinkedList();


list.append(101)
list.insertfirst(100)
list.insertfirst(300)

list.insertAt(200, 2)


list.printList();