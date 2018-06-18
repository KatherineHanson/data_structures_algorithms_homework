var a = '';
var b = '';

class Node {
  constructor(data){
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  // 1. Write a function that takes in a list of integers, 
  // creates a binary search tree with those integers, 
  // and returns the tree.
  create_tree(values){

    if(!this.root)
       this.root = new Node(values[0]);
    
    var i, n;
    var curr = this.root;

    for (i = 1; i < values.length; i++){
      n = new Node(values[i]);
      curr = this.root; 
      
      while(curr){
        if(values[i] < curr.value){
          if(!curr.left){
            curr.left = n;
            break;
          }
          else {
            curr = curr.left;
          }
        }
        else {
          if(!curr.right){
            curr.right = n;
            break;
          }
          else {
            curr = curr.right;
          }
        }
      }
    }
  }

  // 2. Write a function that returns the in-order traversal 
  // of a given tree as space-separated string. 
  // For example, a tree created with the value list 
  // [10, 15, 7, 9, 3, 24] should produce the output 3 7 9 10 15 24.
  in_order(tree){
    var node = tree;
    if(node.root)
      node = node.root;
    if(node.left)
      this.in_order(node.left);
    a+=(node.value + ' ');
    if(node.right)
      this.in_order(node.right);

  return a.split(' ').slice(0,-1).join(' ');
  }

  // 3. Write a function that returns the pre-order traversal of a 
  // given tree as space-separated string. For example, a tree 
  // created with the value list [10, 15, 7, 9, 3, 24] should 
  // produce the output 10 7 3 9 15 24.
  pre_order(tree){
    var node = tree;
    if(node.root)
      node = node.root;
    b+=(node.value + ' ');
    if(node.left)
      this.pre_order(node.left);
    if(node.right)
      this.pre_order(node.right);

  return b.split(' ').slice(0,-1).join(' ');
  }

  // 4. Recall that the height of a tree is the length of the 
  // longest path from the root to a leaf. The blue example tree 
  // above would have a height of 2. A tree with only one node 
  // (the root node) would have a height of 0. Write a function 
  // that determines the height of a given tree.
  height(tree){
    if(!tree)
      return -1;
    return Math.max(this.height(tree.left),this.height(tree.right)) + 1;
  }

  // 5. Write a function that returns the sum of all values in a tree.
  sum(tree){
    if(!tree)
      return 0;
    return (tree.value + this.sum(tree.left) + this.sum(tree.right));
  }

  // 6. Write a function that returns a bool indicating that a value 
  // exists (or not) in a given tree.
  exists(tree, value){
    if(tree.root)
      tree = tree.root;
    while(tree){
      if(value > tree.value){
        tree = tree.right;
      }
      else if(value < tree.value){
        tree = tree.left;
      }
      else
        return true;
    }
    return false;
  }
}

let bst1 = new BinarySearchTree();
let bst2 = new BinarySearchTree();
let bst3 = new BinarySearchTree();
let bst4 = new BinarySearchTree();
let bst5 = new BinarySearchTree();
let bst6 = new BinarySearchTree();
bst1.create_tree([10]);
bst2.create_tree([5, 10]);
bst3.create_tree([10, 5]);
bst4.create_tree([10, 5, 15]);
bst5.create_tree([10, 5, 15, 20, 17, 2, 7]);
bst6.create_tree([10, 1, 2, 3, 4, 5, 6, 15, 14, 13, 16, 17, 20, 22, 19]);
console.log('bst1: ', bst1);
console.log('bst2: ', bst2);
console.log('bst3: ', bst3);
console.log('bst4: ', bst4);
console.log('bst5: ', bst5);
console.log('bst6: ', bst6);
console.log();
console.log('bst6.in_order(bst6) should return 1 2 3 4 5 6 10 13 14 15 16 17 19 20 22: ', bst6.in_order(bst6));
console.log();
console.log('bst6.pre_order(bst6) should return 10 1 2 3 4 5 6 15 14 13 16 17 20 19 22: ', bst6.pre_order(bst6));
console.log();
console.log('bst1.height(bst1) should return 0: ', bst1.height(bst1.root));
console.log('bst2.height(bst2) should return 1: ', bst2.height(bst2.root));
console.log('bst3.height(bst3) should return 1: ', bst3.height(bst3.root));
console.log('bst3.height(bst4) should return 1: ', bst4.height(bst4.root));
console.log('bst3.height(bst5) should return 3: ', bst5.height(bst5.root));
console.log('bst6.height(bst6) should return 6: ', bst6.height(bst6.root));
console.log();
console.log('bst1.sum(bst1) should return 10: ', bst1.sum(bst1.root));
console.log('bst2.sum(bst2) should return 15: ', bst2.sum(bst2.root));
console.log('bst3.sum(bst3) should return 15: ', bst3.sum(bst3.root));
console.log('bst4.sum(bst4) should return 30: ', bst4.sum(bst4.root));
console.log('bst5.sum(bst5) should return 76: ', bst5.sum(bst5.root));
console.log('bst6.sum(bst6) should return 167: ', bst6.sum(bst6.root));
console.log();
console.log('bst6.exists(bst6,13) should return true: ', bst6.exists(bst6,13));
console.log('bst6.exists(bst6,1) should return true: ', bst6.exists(bst6,13));
console.log('bst6.exists(bst6,131) should return false: ', bst6.exists(bst6,131));
console.log('bst6.exists(bst6,0) should return false: ', bst6.exists(bst6,0));