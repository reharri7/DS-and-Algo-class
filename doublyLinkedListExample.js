
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }

    this.tail = this.head;
    this.length = 1;
  }
    append(value) {
      const newNode = new Node(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.printList();
    }
    
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode
      this.head = newNode;
      this.length++;
      return this.printList();;
    }
    printList() {
      const array = [];
      let currentNode = this.head;

      while (currentNode !== null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }

      return array;

    }

    insert(index, value){
      //Check params
      if (index >= this.length){
        return this.append(value);
      }

      const newNode = new Node(value)

      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length++;
      return this.printList();
    }

    traverseToIndex(index){
      let counter = 0;
      let currentNode = this.head;
      while(counter!== index) {
        currentNode = currentNode.next;
        counter++; 
      }
      return currentNode;
    }

    remove(index){
      if(index >= this.length){
        console.log('Cannot remove', index, 'because it does not exist.');
      }
      else if(index === 0){
        this.head = this.head.next;
        return this.printList();
      }

      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      leader.next = follower;
      follower.prev = leader;
      this.length--;
      return this.printList();
    }
  
}

const myLinkedList = new doublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(4, 99);
myLinkedList.remove(2);