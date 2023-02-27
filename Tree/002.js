class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root == null
    }
    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }
        else {
            let currNode = this.root
            while (true) {
                if (value < currNode.value) {
                    if (!currNode.left) {
                        currNode.left = node
                        return this
                    }
                    currNode = currNode.left
                }
                else {
                    if (!currNode.right) {
                        currNode.right = node
                        return this
                    }
                    currNode = currNode.right
                }
            }

        }
    }
    recinsert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }
        else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node
                // return
            }
            else {
                this.insertNode(root.left, node)
            }
        }
        else {
            if (root.right == null) {
                root.right = node
            }
            else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(value) {
        if (this.isEmpty()) {
            console.log("empty tree");
        }
        else {

            this.valsearch(this.root, value)
        }

    }
    valsearch(root, value) {
        if (!root) {
            return console.log(false);
        }
        if (root.value == value) {
            return console.log(true);
        } else {
            if (value < root.value) {
                this.valsearch(root.left, value)
            } else {
                this.valsearch(root.right, value)
            }
        }
    }

    inOrder() {
        return this.traverseInorder(this.root, [])
    }

    traverseInorder(root, list) {
        if (root.left) {
            this.traverseInorder(root.left, list)
        }
        list.push(root.value)
        if (root.right) {
            this.traverseInorder(root.right, list)
        }

        return list
    }
    preOrder() {
        return this.traversePreorder(this.root, [])
    }
    traversePreorder(root, list) {
        list.push(root.value)
        if (root.left) {
            this.traversePreorder(root.left, list)
        }
        if (root.right) {
            this.traversePreorder(root.right, list)
        }
        return list
    }
    postOrder() {
        return this.traversePostorder(this.root, [])
    }
    traversePostorder(root, list) {
        if (root.left) {
            this.traversePostorder(root.left, list)
        }
        if (root.right) {
            this.traversePostorder(root.right, list)
        }
        list.push(root.value)
        return list
    }
    bfs() {
        const queue = []
        const list = []
        let curr = this.root
        queue.push(curr)
        while (queue.length > 0) {
            curr = queue.shift()
            list.push(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        return list
    }
    min(root) {
        if (!root.left) {
            return root.value
        }
        else { return this.min(root.left) }
    }

    delete(value) {
        this.root = this.nodedel(this.root, value)
    }
    nodedel(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.nodedel(root.left, value)
        } else if (value > root.value) {
            root.right = this.nodedel(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            } else {
                root.value = this.min(root.right)
                root.right = this.nodedel(root.right, root.value)
            }
        }
        return root
    }
}



const bst = new BST()
// console.log(bst.isEmpty());
bst.recinsert(9)
bst.recinsert(4)
bst.recinsert(6)
bst.recinsert(20)
bst.recinsert(170)
bst.recinsert(15)
// bst.recinsert(1)
// console.log(bst);
// console.log(bst.postOrder()); 
console.log(bst.bfs());

bst.delete(9)
//    console.log( bst.min(bst.root));
console.log(bst.bfs());