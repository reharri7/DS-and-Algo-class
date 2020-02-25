class Node{
  constructor(value){
  this.value = value;
  this.left = null;
  this.right = null;
  }
}

class BinarySearchTree {
constructor(){
  this.root = null;
}

insert(value){
 const newNode = new Node(value);
 if(this.root === null){
  this.root = newNode;
  return this;
  } else {
    let currentNode = this.root;
    while(true){
      if(value < currentNode.value){
        //left
        if(!currentNode.left){
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else{
        //right
        if(!currentNode.right){
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

}
lookup(value){
  if(!this.root){
    return false
  }
  let currentNode = this.root;
  while(currentNode){
    if(value < currentNode.value){
      currentNode = currentNode.left;
    } else if(value > currentNode.value){
      currentNode = currentNode.right;
    } else if(currentNode.value === value){
      return currentNode;
    }
  }
  return false;
}

remove(value){
  if(!this.root){
    return false;
  }
  let currentNode = this.root;
  let parentNode = null;
  while(currentNode){
    if(value < currentNode.value){
      parentNode = currentNode;
      currentNode = currentNode.left;
    }else if(value > currentNode.value){
      parentNode = currentNode;
      currentNode = currentNode.right;
    }else if (currentNode.value === value){
      //We have a match, get to work!

      //Option 1: No right child:
      if (!currentNode.right){
        if(parentNode === null) {
          this.root = currentNode.left;
        }else{
          //if parent > current value, make current left child a achild of parent
          if(currentNode.value < parentNode.value){
            parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
          } else if(currentNode.value > parentNode.value){
            parentNode.right = currentNode.left;
          }
        }


        //Option 2: Right child which doesn't have a left child
      } else if(currentNode.right.left === null){
          currentNode.right.left = currentNode.left;
          if(parentNode === null){
            this.root = currentNode.right;
          } else {

            //if parent . current, make right child of the left parent
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value){
              parentNode.right = currentNode.right;
            }
          }
       //Option 3: Right child that has a left child
      }else{
        //find the Right child's left most child
        let leftMost = currentNode.right.left;
        let leftMostParent = currentNode.right;
        while(leftMost.left !== null){
          leftMostParent = leftMost;
          leftMost = leftMost.left;
        }

        //Parent's left subtree is now leftmost's right subtree
        leftMostParent.left = leftmost.right;
        leftMost.left = currentNode.left;
        leftMost.right = currentNode.right;

        if(parentNode === null){
          this.root = leftMost;
        } else {
          if(currentNode.value < parentNode.value){
            parentNode.left = leftMost;
          } else if(currentNode.value > parentNode.value){
            parentNOde.right = leftMost;
          }
        }
      }
      return true;
    }
  }
}
}

const myBinaryTree = new BinarySearchTree;
myBinaryTree.insert(9);
myBinaryTree.insert(6);
myBinaryTree.insert(20);
myBinaryTree.insert(170);
myBinaryTree.insert(15);
(myBinaryTree.insert(1));
console.log(myBinaryTree.remove(170));
