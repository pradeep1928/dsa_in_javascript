
/* The below class is a basic implementation of a stack data structure in JavaScript. */
class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop(element) {
        return this.items.pop()
    }

    peak() {
        return this.items[this.items.length - 1]
    }
    
    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }
}



/* `let stack = new Stack();` is creating a new instance of the `Stack` class and assigning it to the
variable `stack`. This allows us to use the methods and properties defined in the `Stack` class on
this specific instance of the stack. */
let stack = new Stack();

/* `console.log('isEmpty method --> ', stack.isEmpty());` is calling the `isEmpty()` method of the
`Stack` class on the `stack` instance and printing the result to the console. The result will be
either `true` if the stack is empty or `false` if it is not empty. */
console.log('isEmpty method 1 --> ', stack.isEmpty());

/* `stack.push(10)`, `stack.push(20)`, and `stack.push(30)` are adding the values 10, 20, and 30 to the
top of the stack respectively. The `push()` method is a part of the `Stack` class and is used to add
elements to the top of the stack. */
stack.push(10)
stack.push(20)
stack.push(30)

/* `console.log("size of stack --> ",stack.size())` is calling the `size()` method of the `Stack` class
on the `stack` instance and printing the result to the console along with the string "size of stack
--> ". The `size()` method returns the number of elements in the stack. */
console.log("size of stack --> ",stack.size())

/* `stack.print()` is calling the `print()` method of the `Stack` class on the `stack` instance and
printing the elements of the stack to the console as a comma-separated string. The `print()` method
is used to display the elements of the stack in a readable format. */
stack.print();

/* `console.log('removing item from stack --> ', stack.pop());` is calling the `pop()` method of the
`Stack` class on the `stack` instance and printing the removed element to the console along with the
string "removing item from stack --> ". The `pop()` method removes and returns the top element of
the stack. */
console.log('removing item from stack --> ', stack.pop());

/* `console.log('peak item of the stack --> ', stack.peak());` is calling the `peak()` method of the
`Stack` class on the `stack` instance and printing the top element of the stack to the console along
with the string "peak item of the stack --> ". The `peak()` method returns the top element of the
stack without removing it. */
console.log('peak item of the stack --> ', stack.peak());

console.log('isEmpty method 2 --> ', stack.isEmpty());
