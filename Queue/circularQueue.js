

/* The CircularQueue class is a data structure that allows for elements to be added and removed in a
circular manner, with a fixed capacity. */
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peak() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is Empty.');
        } else {
            let i;
            let str = '';
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
}


/* `const c_queue = new CircularQueue(5);` is creating a new instance of the `CircularQueue` class with
a capacity of 5 and assigning it to the constant variable `c_queue`. */
const c_queue = new CircularQueue(5);


/* `console.log('is queue empty --> ', c_queue.isEmpty());` is logging the result of the `isEmpty()`
method of the `CircularQueue` instance `c_queue` to the console. It will print `true` if the queue
is empty and `false` if it is not. */
console.log('is queue empty --> ', c_queue.isEmpty());


/* These lines of code are adding elements to the circular queue `c_queue`. The `enqueue()` method is
called on the `c_queue` instance with the values `10`, `20`, `30`, `40`, and `50` as arguments,
respectively. This adds these elements to the circular queue in the order they are called. */
c_queue.enqueue(10)
c_queue.enqueue(20)
c_queue.enqueue(30)
c_queue.enqueue(40)
c_queue.enqueue(50)


/* `c_queue.print()` is printing the elements of the circular queue `c_queue` to the console in the
order they are stored. If the queue is empty, it will print "Queue is Empty." */
c_queue.print();


/* `console.log('is queue full --> ', c_queue.isFull());` is logging the result of the `isFull()`
method of the `CircularQueue` instance `c_queue` to the console. It will print `true` if the queue
is full and `false` if it is not. */
console.log('is queue full --> ', c_queue.isFull());


/* `console.log('removing item from queue --> ', c_queue.dequeue());` is calling the `dequeue()` method
on the `CircularQueue` instance `c_queue` to remove the first element from the queue and logging the
removed element along with the message "removing item from queue --> " to the console. */
console.log('removing item from queue --> ', c_queue.dequeue());


/* `console.log('peak of queue --> ', c_queue.peak());` is logging the first element of the circular
queue `c_queue` to the console without removing it. The `peak()` method of the `CircularQueue`
instance `c_queue` is called to retrieve the first element of the queue, and it is then logged to
the console along with the message "peak of queue --> ". If the queue is empty, it will print
`null`. */
console.log('peak of queue --> ', c_queue.peak());


c_queue.enqueue(60)

c_queue.print();
