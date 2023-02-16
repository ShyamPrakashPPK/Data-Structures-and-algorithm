class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class linkedlist {  
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }


//prepend operation... inserting in the first position
  //Time compexity is O(1)  --constant
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      this.head = this.next
      this.head= node
    }
}


  //append operation... inserting inthe last position 
  //Time complexity is  O(n)  --linear
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }


  //inserting a value at any given position////
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return
    }
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }


  //removing  an value from the index////
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return null;
    } 
    //removing the head node has constant time compelexity
    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    } else {
      //removing the node from any other position has linear time compexity

      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if (prev.next) {
        const removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }
      return null
    }
  }
 

  //search operation... time complexity is always linear
  search(value) {
    if (this.isEmpty()) {
      return -1
    }
    let i = 0
    let curr = this.head
    while (curr) {
      if (curr.value === value) {
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }

  //reversing a linked list.. time complexity is always linear  O(n)

  reverse() {
    let prev = null;
    let curr = this.head
    while (curr)
      {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  //printing.. time compexity is linear 
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head
      let listValues = ' '
      while (curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log( listValues ," <-------values");
    }
  }

}

const list = new linkedlist()
console.log('List size', list.getSize())
list.print()

list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print() 

list.insert(30, 1)
list.print()

list.prepend(40, 2)
list.print()

console.log('List size', list.getSize())


list.reverse()

list.print()