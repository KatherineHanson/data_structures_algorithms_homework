'use strict';

class LinkedList {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new Error('USAGE ERROR: node must be a LinkedList');
    if(!this.next)
      this.next = node;
    else
      this.next.append(node);

    return this;
  }

  remove(node){
    if(!(node instanceof LinkedList))
      throw new Error('USAGE ERROR: node must be a LinkedList');

    if(!this.next){
      return this;
    } else if (this.next === node){
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }

    return this;
  }
}

let  result = new LinkedList(3);
console.log('result.value should be 3: ', result.value);
console.log('result.next should be null: ', result.next)

// 'use strict';

// function LinkedList(value) {
//     this.value = value;
//     this.next = null;
// }

// let  result = new LinkedList(3);
// console.log('result.value should be 3: ', result.value);
// console.log('result.next should be null: ', result.next)
