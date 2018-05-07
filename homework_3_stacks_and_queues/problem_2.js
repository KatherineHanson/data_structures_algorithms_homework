// Implement a stack. Feel free to use your dynamic array 
/// implementation from homework 2 or your programming language’s 
// standard library’s list (just don’t use any stack-specific 
// functionality). 

// Your stack should start empty and support the following methods:
var Stack = (function () {
    function Node(item, node) {
      this.item = item;
      this.next = node;
    }

    function Stack() {
        this.head = new Node(undefined, null);
        this.count = 0;
    }

    // push(item) adds the item to the top of the stack
    Stack.prototype.push = function(item) {
        this.head.next = new Node(item, this.head.next);
        this.count++;
    };

    // pop() removes and returns the most recently added item
    Stack.prototype.pop = function() {
        if (this.isEmpty()) {
            throw new Error("cannot pop() when stack is empty, check isEmpty() before pop()");
        }

        var first = this.head.next;
        this.head.next = first.next;
        this.count--;
        return first.item;
    };

    // peek() returns the most recently added item, but does not remove it
    Stack.prototype.peek = function() {
        var first = this.head.next;
        return first !== null ? first.item : null;
    };

    // isEmpty() returns true if the stack is empty
    Stack.prototype.isEmpty = function() {
        return this.head.next === null;
    };

    // size() returns the number of items on the stack
    Stack.prototype.length = function() {
        return this.count;
    };

    return Stack;
})();


var stack = new Stack();
console.log('stack.length() should be 0: ', stack.length());
stack.push(4);
stack.push(3);
stack.push('cats');
console.log('stack.head.next.item should be \'cats\': ', stack.head.next.item);
console.log('stack.head.next.next.item should be 3: ', stack.head.next.next.item);
console.log('stack.head.next.next.next.item should be 4: ', stack.head.next.next.next.item);
console.log('stack.peek() should be cats: ', stack.peek());
console.log('stack.length() should be 3: ', stack.length());
console.log('stack.pop() should return \'cats\'', stack.pop())
console.log('stack.head.next.next.next should be null: ', stack.head.next.next.next);
console.log('stack.peek() should be 3: ', stack.peek());
console.log('stack.isEmpty() should be false: ', stack.isEmpty());
console.log('stack.length() should be 2: ', stack.length());
stack.pop()
stack.pop()
console.log('stack.length() should be 0: ', stack.length());