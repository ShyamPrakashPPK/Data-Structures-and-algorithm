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
    constructor(k) {
        this.root = null;
        this.k = k;
    }

    insert(value, parentValue) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const parentNode = this.searchNode(parentValue, this.root);
        if (!parentNode) {
            console.log('Parent node not found');
            return;
        }

        if (parentNode.children.length >= this.k) {
            console.log('Max children limit reached');
            return;
        }

        parentNode.children.push(newNode);
    }
    searchNode(value, node = this.root) {
        if (node.value === value) {
            return node;
        }

        for (let child of node.children) {
            const foundNode = this.searchNode(value, child);
            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }
 
}


const tree = new KaryTree(3);

tree.insert('A');
tree.insert('B', 'A');
tree.insert('C', 'A');
tree.insert('D', 'A');
tree.insert('E', 'B');
tree.insert('F', 'B');

console.log(tree);