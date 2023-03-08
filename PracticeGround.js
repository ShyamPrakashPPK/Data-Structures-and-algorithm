class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right=null
    }
}

class tree{
    constructor() {
        this.root=null
    }

    isEmpty() {
        return this.root===null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.root=newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left=newNode
            } else {
                this.insertNode(root.left,newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    checkBinary() {
        if (this.root.left < this.root.right) {
            console.log("binary search tree");
        }
    }
}


const treeee = new tree()

treeee.insert("5")
treeee.insert("3")
treeee.insert("6")
treeee.insert("4")

treeee.checkBinary()


console.log(treeee);