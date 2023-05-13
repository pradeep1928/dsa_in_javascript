
/* The class defines a Node with a value and a reference to the next Node. */
class NodeOfList {
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

    // Big-O --> O(1)
    prepend(value) {
        const node = new NodeOfList(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // Big-O --> O(n)
    append(value) {
        const node = new NodeOfList(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    } 

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index.');
            return 
        } 
        if (index === 0) {
            this.prepend(value) 
        } else {
            const node = new NodeOfList(value);
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev =  prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null
        } 
        let removeNode 
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--
        return removeNode.value;
    }

    print() {
        if (this.isEmpty()) {
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}


/* This code creates a new instance of the LinkedList class and assigns it to the variable `list`. It
then calls the `isEmpty()` and `getSize()` methods on the `list` object and logs the results to the
console. The `isEmpty()` method checks if the linked list is empty and returns a boolean value. The
`getSize()` method returns the size of the linked list. */
let list = new LinkedList();
console.log('is list empty? ', list.isEmpty());
console.log('list size: ', list.getSize());

/* `list.print()` is a method of the `LinkedList` class that prints the values of all nodes in the
linked list to the console. It first checks if the linked list is empty, and if not, it iterates
through each node in the list and appends its value to a string. Finally, it logs the string of node
values to the console. */
list.print()

/* `list.prepend(10)` is adding a new node with a value of 10 to the beginning of the linked list. It
creates a new instance of the `Node` class with a value of 10 and sets its `next` property to the
current head of the linked list. If the linked list is empty, it sets the new node as the head.
Finally, it increments the `size` property of the linked list. */
list.prepend(10);

list.print()

list.prepend(20);
list.prepend(30);

/* `list.insert(40, 0)` is inserting a new node with a value of 40 at the beginning of the linked list.
It calls the `insert()` method of the `LinkedList` class and passes in the value `40` and the index
`0`. The `insert()` method first checks if the index is valid (not negative and not greater than the
size of the linked list). Since the index is `0`, it calls the `prepend()` method to add the new
node to the beginning of the linked list. The `prepend()` method creates a new instance of the
`Node` class with a value of `40` and sets its `next` property to the current head of the linked
list. If the linked list is empty, it sets the new node as the head. Finally, it increments the
`size` property of the linked list. */
list.insert(40, 3)
list.insert(60, 4)

list.print()

/* `console.log(list.removeFrom(4))` is calling the `removeFrom()` method of the `LinkedList` class on
the `list` object and passing in the index `4`. This method removes the node at the specified index
from the linked list and returns its value. The returned value is then logged to the console using
`console.log()`. */
console.log(list.removeFrom(4))
console.log(list.removeFrom(10))
console.log(list.removeFrom(0))

/* `list.append(5)` is adding a new node with a value of 5 to the end of the linked list. It creates a
new instance of the `Node` class with a value of 5 and sets its `next` property to `null`. If the
linked list is empty, it sets the new node as the head. Otherwise, it iterates through the linked
list until it reaches the last node and sets the `next` property of that node to the new node.
Finally, it increments the `size` property of the linked list. */
list.append(5);
list.append(1)

list.print()
