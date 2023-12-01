class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
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


    // delete middle element //----------------
    // Delete the middle element of the linked list
    deleteMiddle() {
        if (this.head === null) {
            return;
        }

        let slow = this.head;
        let fast = this.head;
        let previous = null;

        // Move 'fast' by two steps and 'slow' by one step until 'fast' reaches the end
        while (fast !== null && fast.next !== null) {
            previous = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // Delete the middle node (slow)
        if (previous === null) {
            // If the list has only one or two elements, delete the head
            this.head = slow.next;
        } else {
            previous.next = slow.next;
        }

        this.size--;
    }



    // bubble sort //-------------
    sort() {
        let swapped;
        let current;
        let next;

        if (this.head === null) {
            return;
        }

        do {
            swapped = false;
            current = this.head;

            while (current.next !== null) {
                next = current.next;

                if (current.data > next.data) {
                    // Swap nodes
                    const temp = current.data;
                    current.data = next.data;
                    next.data = temp;
                    swapped = true;
                }

                current = current.next;
            }
        } while (swapped);
    }



    // merge sort //------------------------------------
    mergeSort() {
        this.head = this.mergeSortRecursive(this.head);
    }

    // Recursive function to perform merge sort
    mergeSortRecursive(node) {
        if (node === null || node.next === null) {
            return node;
        }

        // Find the middle of the list
        const middle = this.getMiddle(node);
        const nextToMiddle = middle.next;

        // Split the list into two halves
        middle.next = null;

        // Recursively sort the two halves
        const left = this.mergeSortRecursive(node);
        const right = this.mergeSortRecursive(nextToMiddle);

        // Merge the sorted halves
        return this.merge(left, right);
    }

    // Merge two sorted linked lists
    merge(left, right) {
        let result = null;

        if (left === null) {
            return right;
        }
        if (right === null) {
            return left;
        }

        if (left.data <= right.data) {
            result = left;
            result.next = this.merge(left.next, right);
        } else {
            result = right;
            result.next = this.merge(left, right.next);
        }

        return result;
    }

    // Helper function to find the middle of the linked list
    getMiddle(node) {
        if (node === null) {
            return node;
        }

        let slow = node;
        let fast = node;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }


}

const list = new LinkedList();


list.append(101);
list.append(97);
list.append(105);
list.append(89);

console.log("Original List:");
list.printList();

// Delete the middle element of the linked list
list.deleteMiddle();

console.log("\nList after deleting the middle element:");
list.printList();


// list.append(101);
// list.append(97);
// list.append(105);
// list.append(89);

// console.log("Original List:");
// list.printList();

// // Merge sort the linked list
// list.mergeSort();

// console.log("\nList after merge sort:");
// list.printList();