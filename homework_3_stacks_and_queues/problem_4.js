// Use your stack implementation from problem 2 to implement
// problem 3. You function can take an input of either
// the string of parentheses, or a list of individual parentheses.

var Stack = (function () {
    function Node(item, node) {
      this.item = item;
      this.next = node;
    }

    function Stack() {
        this.head = new Node(undefined, null);
        this.count = 0;
    }

    Stack.prototype.push = function(item) {
        this.head.next = new Node(item, this.head.next);
        this.count++;
    };

    Stack.prototype.pop = function() {
        var first = this.head.next;
        this.head.next = first.next;
        this.count--;
        return first.item;
    };

    Stack.prototype.peek = function() {
        var first = this.head.next;
        return first !== null ? first.item : null;
    };

    Stack.prototype.isEmpty = function() {
        return this.head.next === null;
    };

    Stack.prototype.length = function() {
        return this.count;
    };

    // Use your stack implementation from problem 2 to implement
    // problem 3. You function can take an input of either
    // the string of parentheses, or a list of individual parentheses.
    Stack.prototype.balanced = function(string) {
        if(typeof string !== 'string') {
            return false;
        } else {
            var depth = this.length();
            for(var i in string){   
                if(string[i] == '('){
                    depth++;
                } else if(string[i] == ')') {
                    depth--;
                } else {
                    return false;
                }  
                if (depth < 0) return false;
            }
            if(depth > 0) return false;
            this.push(string);
            return true;
        }
    };

    return Stack;
})();

console.log('new Stack().balanced(\'((())())()\') should be true: ', new Stack().balanced('((())())()'));
console.log('new Stack().balanced(\')()(\') should be false: ', new Stack().balanced(')()('));
console.log('new Stack().balanced(\'())\') should be false: ', new Stack().balanced('())'));
console.log('new Stack().balanced(4) should be false: ', new Stack().balanced(4));
console.log('new Stack().balanced(\'hi\') should be false: ', new Stack().balanced('hi'));