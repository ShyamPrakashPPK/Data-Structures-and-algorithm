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
    //insert last node
    append(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head; // Initialize current here
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }


    deleteWithValue(value) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === value) {
                // Node with the specified value found, remove it
                if (previous === null) {
                    // If the node to be removed is the head
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return; // Exit the loop after deleting the node
            }

            previous = current;
            current = current.next;
        }
    }


    deleteWithValue(value) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === value) {
                // Node with the specified value found, remove it
                if (previous === null) {
                    // If the node to be removed is the head
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return; // Exit the loop after deleting the node
            }

            previous = current;
            current = current.next;
        }
    }




    //insert at index

    insertAt(data, index) {
        // check if the index is out of bounds
        if (index < 0 || index > this.size) {
            return;
        }

        // if we have to insert at the beginning
        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        const node = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;

        // Move to the node at the specified index
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        // Insert the new node
        node.next = current;
        previous.next = node;

        this.size++;
    }


    insertBefore(dataToInsert, targetData) {
        const newNode = new Node(dataToInsert);
        let current = this.head;
        let previous = null;

        // Traverse the list to find the node with the target data
        while (current !== null && current.data !== targetData) {
            previous = current;
            current = current.next;
        }

        // If the target data is found, insert the new node before it
        if (current !== null) {
            newNode.next = current;
            if (previous === null) {
                // If the target data is in the head node, update the head
                this.head = newNode;
            } else {
                previous.next = newNode;
            }
            this.size++;
        }
    }


    insertAfter(dataToInsert, targetData) {
        const newNode = new Node(dataToInsert);
        let current = this.head;

        // Traverse the list to find the node with the target data
        while (current !== null && current.data !== targetData) {
            current = current.next;
        }

        // If the target data is found, insert the new node after it
        if (current !== null) {
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    }
   

    printReverse(node = this.head) {
        if (node === null) {
            return;
        }
        this.printReverse(node.next);
        console.log(node.data);
    }

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

list.append(101);
list.append(102);
list.append(104);

console.log("Original List:");
list.printList();

// Insert a node with data 201 just after the node with data 102
list.insertAfter(103, 102);

console.log("\nList after inserting node with data 201 after data 102:");
list.printList();