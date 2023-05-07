
/* The class defines a Node with a value and a reference to the next Node. */
class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

/* The class LinkedList represents a linked list data structure with methods to check if it's empty and
get its size. */
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
}


/* This code creates a new instance of the LinkedList class and assigns it to the variable `list`. It
then calls the `isEmpty()` and `getSize()` methods on the `list` object and logs the results to the
console. The `isEmpty()` method checks if the linked list is empty and returns a boolean value. The
`getSize()` method returns the size of the linked list. */
let list = new LinkedList();
console.log('is list empty? ', list.isEmpty());
console.log('list size: ', list.getSize());