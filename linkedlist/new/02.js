class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1;
    }

    printList(){
        const array=[]
        let currentNode=this.head;
        while(currentNode){
            array.push(currentNode.value)
            currentNode=currentNode.next
        }
        console.log(array);
        return array;
    }

    append(value){
        let newNode=new Node(value);
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }

    prepend(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        this.length++
        return this;
    }


    //to insert at any given index
    //traverse to the given index
    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head
        while(counter!==index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insertAt(index,value){
        if(index>=this.length){
            return this.append(value)
        }
        let newNode= new Node(value)
        let firstNode=this.traverseToIndex(index-1)
        let nextNode=firstNode.next
        firstNode.next=newNode;
        newNode.next=nextNode;
        this.length++
    }
}