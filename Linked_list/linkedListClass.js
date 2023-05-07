
/* The class defines a Node with a value and a reference to the next Node. */
class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

/* This is a class for a singly linked list data structure with methods for checking if it's empty,
getting its size, and adding a new node to the beginning of the list. */
class LinkedList {
    constructor() {
        this.head = null,
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        console.log('node', node);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            node.head = node;
        }
        this.size++;
    }
}


/* This code creates a new instance of the LinkedList class and assigns it to the variable `list`. It
then calls the `isEmpty()` and `getSize()` methods on the `list` object and logs the results to the
console. The `isEmpty()` method checks if the linked list is empty and returns a boolean value. The
`getSize()` method returns the size of the linked list. */
let list = new LinkedList();
console.log('is list empty? ', list.isEmpty());
console.log('list size: ', list.getSize());

/* `list.prepend(10)` is adding a new node with a value of 10 to the beginning of the linked list. It
creates a new instance of the `Node` class with a value of 10 and sets its `next` property to the
current head of the linked list. If the linked list is empty, it sets the new node as the head.
Finally, it increments the `size` property of the linked list. */
list.prepend(10);
list.prepend(20);
list.prepend(30);