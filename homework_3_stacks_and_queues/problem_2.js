// Implement a stack. Feel free to use your dynamic array implementation
// from homework 2 or your programming language’s standard library’s list
// (just don’t use any stack-specific functionality).

// Stack class
class Stack {

    // Your stack should start empty
    constructor()
    {
        this.items = [];
    }

    // and support the following methods:

    // push(item) adds the item to the top of the stack
    push(item)
    {
        // push item into the items
        this.items.push(item);
    }

    // pop() removes and returns the most recently added item
    pop()
    {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek() returns the most recently added item, but does not remove it
    peek()
    {
        return this.items[this.items.length - 1];
    }

    // isEmpty() returns true if the stack is empty
    isEmpty()
    {
        return this.items.length == 0;
    }

    // size() returns the number of items on the stack
    size()
    {
      return this.items.length;
    }
}

var stack = new Stack()
console.log('this should be an empty stack: ', stack);
stack.push(4);
stack.push(2);
stack.push(30);
console.log('stack.items[0] should return 4: ', stack.items[0]);
console.log('stack.peek() should return 30: ', stack.peek());
console.log('stack.isEmpty() should return false: ', stack.isEmpty());
console.log('stack.size() should return 3: ', stack.size());
console.log('stack.pop() should return 30', stack.pop());
console.log('stack.peek() should return 2: ', stack.peek());
stack.pop();
stack.pop();
console.log('stack.isEmpty() should return true: ', stack.isEmpty());
console.log('stack.size() should return 0: ', stack.size());
console.log('stack.peek() should return undefined: ', stack.peek());
