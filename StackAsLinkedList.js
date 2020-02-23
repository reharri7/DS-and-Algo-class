class Node {
  constructor(value){
  this.value = value;
  this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }


//TODO: Fix this code and use it as a boolean function
isEmpty(){
  if(this.top === null){
    return true;
  }
  else{
    return false;
  }
}

peek(){
  if(this.top !== null){
  return this.top;
  }
  else{
    return "There is nothing to peek at.";
  }
}
push(value){
  const newNode = new Node(value);

//Check isEmpty
if(this.top === null){
  this.top = newNode
  this.bottom = newNode;
  this.length++;
  return this;
}else{
  const holdingPointer = this.top;
  this.top = newNode;
  this.top.next = holdingPointer;
  }
  this.length++;
  return this;
}

pop(){
  //Check isEmpty
  if(!this.top){
    return null;
  }
  const holdingPointer = this.top;
  this.top = this.top.next;
  this.length--;
  return holdingPointer;
}

}

myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy.com');
myStack.push('youtube');
myStack.pop();