class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class binarySearchTree{
    constructor(){
        this.root=null
    }


    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){

        if(newNode.value<root.value){
            if(this.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(this.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}



const bst=new binarySearchTree()


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)

