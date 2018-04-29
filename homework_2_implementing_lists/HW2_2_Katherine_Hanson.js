'use strict';

function LinkedList(value) {
    this.value = value;
    this.next = null;
}

let  result = new LinkedList(3);
console.log('result.value should be 3: ', result.value);
console.log('result.next should be null: ', result.next)
