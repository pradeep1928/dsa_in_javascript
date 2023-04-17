/* The class Queue2 implements a queue data structure in JavaScript using an object. */
class Queue2 {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peak() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

/* `const queue = new Queue2();` is creating a new instance of the `Queue2` class and assigning it to
the variable `queue`. This allows us to use the methods and properties defined in the `Queue2` class
on this specific instance of the queue. */
const queue = new Queue2();

/* `queue.isEmpty()` is a method of the `Queue2` class that checks if the queue is empty or not. It returns `true` if the queue is empty (i.e., if the `rear` and `front` pointers are at the same position), and `false` otherwise. In the given code, `queue.isEmpty()` is called twice to check if the queue is empty before and after adding elements to it. */
console.log("is queue empty 1 --> ", queue.isEmpty());

/* `queue.enqueue(11); queue.enqueue(12); queue.enqueue(13);` is adding three elements (11, 12, and 13)
to the queue using the `enqueue()` method of the `Queue2` class. The `enqueue()` method adds an
element to the end of the queue by assigning it to the `rear` index of the `items` object and
incrementing the `rear` pointer. */
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);

/* `queue.size()` is a method of the `Queue2` class that returns the number of elements in the queue. It does this by subtracting the `front` pointer from the `rear` pointer, which gives the number of elements between them. */
console.log("size of queue --> " ,queue.size());

/* `queue.print()` is a method of the `Queue2` class that prints the current state of the queue to the
console. It does this by logging the `items` object to the console, which contains all the elements
currently in the queue. */
queue.print();

/* `queue.dequeue()` is a method of the `Queue2` class that removes and returns the element at the front of the queue. It does this by assigning the element at the `front` index of the `items` object to a variable, deleting the element from the `items` object, incrementing the `front` pointer, and returning the variable containing the removed element. In the given code, the result of `queue.dequeue()` is logged to the console. */
console.log("removing item from queue --> " ,queue.dequeue());

/* `queue.peak()` is a method of the `Queue2` class that returns the element at the front of the queue without removing it. It does this by accessing the element at the `front` index of the `items` object and returning it. In the given code, the result of `queue.peak()` is logged to the console. */
console.log("peak item of queue --> " ,queue.peak());

console.log("is queue empty 2 --> ", queue.isEmpty());
