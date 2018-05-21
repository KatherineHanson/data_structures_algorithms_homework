'use strict';

class Node {
  constructor(data){
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.root = null;
    this.length = 0
  }

  get(index){
    var count = 0;
    var currentNode = this.root;

    if(index > this.length || index < 0)
      return 'Invalid index!';
    else{
      while(count < index) {
        currentNode = currentNode.next;
        count++;
      }
    }

    return currentNode.value;
  }

  set(index, data){
    var count = 0;
    var currentNode = this.root;

    if(index > this.length || index < 0)
      return 'Invalid index!';
    else{
      while(count < index) {
        currentNode = currentNode.next;
        count++;
      }
    }
    
    currentNode.value = data;
    return currentNode.value;
  }

  append(data){
    var node = new Node(data);
    var currentNode = this.root;

    if (this.root === null)
      this.root = node;
    else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length++;
    }
  }
}

let ll = new LinkedList();
ll.append(5);
console.log('ll: ', ll);
console.log('ll.root.value should be 5: ', ll.root.value);
ll.append(34);
console.log('ll.root.next.value should be 34: ', ll.root.next.value);
ll.append(45);
console.log('ll.root.next.next.value should be 45: ', ll.root.next.next.value);
console.log('ll: ', ll);
console.log('ll.length should be 2: ', ll.length);
console.log('ll.get(0) should return 5: ', ll.get(0))
console.log('ll.get(1) should return 34: ', ll.get(1))
console.log('ll.get(2) should return 45: ', ll.get(2))
console.log('ll.get(3) should return \'Invalid index!\': ', ll.get(3))
console.log('ll.set(100, 500) should return \'Invalid index!\': ', ll.set(100, 500));
console.log('ll.set(2, 500) should return 500: ', ll.set(2, 500));
console.log('ll.get(2) should return 500: ', ll.get(2))