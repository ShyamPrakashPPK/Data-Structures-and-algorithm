class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node to the end of the linked list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    // Partition the linked list using a pivot value
    partition(low, high) {
        const pivot = high.value;
        let i = low;

        for (let j = low; j !== high; j = j.next) {
            if (j.value < pivot) {
                const temp = i.value;
                i.value = j.value;
                j.value = temp;
                i = i.next;
            }
        }

        const temp = i.value;
        i.value = high.value;
        high.value = temp;

        return i;
    }

    // Sort the linked list using Quick Sort
    quickSort(low, high) {
        if (!low || !high || low === high) {
            return;
        }

        if (low !== high) {
            const pivot = this.partition(low, high);
            this.quickSort(low, pivot === low ? pivot : pivot.prev);
            this.quickSort(pivot.next, high);
        }
    }

    // Print the linked list
    printList() {
        let current = this.head;
        const result = [];

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(3);
list.append(6);
list.append(2);
list.append(8);

console.log("Original list:");
list.printList();

list.quickSort(list.head, list.head.next ? list.head.next : list.head);

console.log("Sorted list:");
list.printList();
