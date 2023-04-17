/* The class Queue1 represents a data structure that follows the First-In-First-Out (FIFO) principle and
provides methods to manipulate and access its elements. */
/* The class Queue1 implements a queue data structure with methods for enqueue, dequeue, isEmpty, peak,
size, and print. */
class Queue1 {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peak() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

/* `let queue = new Queue();` is creating a new instance of the `Queue` class and assigning it to the
variable `queue`. This allows us to use the methods and properties of the `Queue` class on this
specific instance of the queue. */
let queue = new Queue1();

/* `console.log("is queue empty 1 --> ", queue.isEmpty());` is calling the `isEmpty()` method of the
`Queue` class on the `queue` instance and printing the result to the console. It will print "is
queue empty 1 --> true" if the queue is empty (i.e. it has no elements), and "is queue empty 1 -->
false" if the queue is not empty. */
console.log("is queue empty 1 --> ", queue.isEmpty());

/* `queue.enqueue(12); queue.enqueue(13); queue.enqueue(14);` is adding the elements 12, 13, and 14 to
the end of the queue in that order. The `enqueue()` method of the `Queue` class adds an element to
the end of the queue. */
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);

/* `console.log("queue size --> ", queue.size());` is calling the `size()` method of the `Queue` class
on the `queue` instance and printing the result to the console. It will print "queue size --> n"
where `n` is the number of elements in the queue. */
console.log("queue size --> ", queue.size());

/* `queue.print()` is calling the `print()` method of the `Queue` class on the `queue` instance and
printing the elements of the queue to the console as a comma-separated string. */
queue.print();

/* `console.log("removing itme from queue --> ", queue.dequeue());` is calling the `dequeue()` method
of the `Queue` class on the `queue` instance and printing the removed element to the console along
with the message "removing item from queue -->". The `dequeue()` method removes and returns the
first element of the queue (i.e. the element that has been in the queue the longest). */
console.log("removing itme from queue --> ", queue.dequeue());

/* `console.log("peak item of queue --> ", queue.peak());` is calling the `peak()` method of the
`Queue` class on the `queue` instance and printing the result to the console. The `peak()` method
returns the first element of the queue (i.e. the element that has been in the queue the longest)
without removing it from the queue. The message "peak item of queue -->" is also printed to the
console along with the returned element. */
console.log("peak item of queue --> ", queue.peak());

console.log("is queue empty 1 --> ", queue.isEmpty());
