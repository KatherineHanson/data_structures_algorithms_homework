// Implement a queue using a linked list. 
// Feel free to use your linked list implementation from homework 2. 
// Your queue should start empty and support the following methods:

var Queue = (function () {
    function Node(item, node) {
        this.item = item;
        this.next = node;
    }

    function Queue() {
        this.head = new Node(undefined, null);
        this.last = this.head;
        this.count = 0;
    }

    // enqueue(item) adds the item to the back of the queue
    Queue.prototype.enqueue = function(item) {
        this.last.next = new Node(item, null);
        this.last = this.last.next;
        this.count++;
    };

    // dequeue() removes and returns the item at the front of the queue
    Queue.prototype.dequeue = function() {
        var first = this.head.next;
        this.head.next = first.next;
        this.count--;
        return first.item;
    };

    // peek() returns the front-most item, but does not remove it
    Queue.prototype.peek = function() {
        var first = this.head.next;
        return first !== null ? first.item : null;
    };

    // isEmpty() returns true if the queue is empty
    Queue.prototype.isEmpty = function() {
        return this.head.next === null;
    };

    // size() returns the number of items in the queue
    Queue.prototype.size = function() {
        return this.count;
    };

    return Queue;
})();

var queue = new Queue();
console.log('queue.size() should be 0: ', queue.size());
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue('cats');
console.log('queue.head.next.item should be 4: ', queue.head.next.item);
console.log('queue.head.next.next.item should be 3: ', queue.head.next.next.item);
console.log('queue.head.next.next.next.item should be \'cats\': ', queue.head.next.next.next.item);
console.log('queue.peek() should be 4: ', queue.peek());
console.log('queue.size() should be 3: ', queue.size());
console.log('queue.dequeue() should return 4:  ', queue.dequeue())
console.log('queue.head.next.next.next should be null: ', queue.head.next.next.next);
console.log('queue.peek() should be 3: ', queue.peek());
console.log('queue.isEmpty() should be false: ', queue.isEmpty());
console.log('queue.size() should be 2: ', queue.size());
queue.dequeue()
queue.dequeue()
console.log('queue.size() should be 0: ', queue.size());