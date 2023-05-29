class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

class KaryTree {
    constructor() {
        this.root = null;
    }

    addRoot(value) {
        if (this.root) {
            console.log("Root node already exists.");
            return;
        }
        this.root = new Node(value);
    }

    addNode(parentValue, value) {
        if (!this.root) {
            console.log("Root node does not exist.");
            return;
        }

        const parent = this.findNode(this.root, parentValue);
        if (!parent) {
            console.log("Parent node not found.");
            return;
        }

        const newNode = new Node(value);
        parent.addChild(newNode);
    }

    findNode(node, value) {
        if (node.value === value) {
            return node;
        }

        for (let child of node.children) {
            const foundNode = this.findNode(child, value);
            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }

    traverseDF(callback) {
        this._traverseDF(this.root, callback);
    }

    _traverseDF(node, callback) {
        callback(node.value);

        for (let child of node.children) {
            this._traverseDF(child, callback);
        }
    }

    traverseBF(callback) {
        if (!this.root) {
            return;
        }

        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const node = queue.shift();
            callback(node.value);

            for (let child of node.children) {
                queue.push(child);
            }
        }
    }
}

// Example usage
const tree = new KaryTree();

tree.addRoot("A");

tree.addNode("A", "B");
tree.addNode("A", "C");
tree.addNode("A", "D");
tree.addNode("B", "E");
tree.addNode("B", "F");
tree.addNode("B", "G");  
tree.addNode("C", "H");
tree.addNode("C", "I");
tree.addNode("C", "J");
tree.addNode("D", "K");

console.log("Depth-First Traversal:");
tree.traverseDF((value) => console.log(value));

console.log("Breadth-First Traversal:");
tree.traverseBF((value) => console.log(value));

