
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
            console.log("prev: ", prev);
            console.log("node: ", node);
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

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value == value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            } 
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let curr = this.head;
        while(curr) {
            if (curr.value == value) {
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
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

/* `console.log(list.removeValue(11));` is calling the `removeValue()` method of the `LinkedList` class
on the `list` object and passing in the value `11`. This method removes the first node in the linked
list that has a value equal to the specified value and returns its value. If no node with the
specified value is found, it returns `null`. The returned value is then logged to the console using
`console.log()`. */
console.log(list.removeValue(11));
console.log(list.removeValue(5));
console.log(list.removeValue(20));

list.print()

/* `console.log(list.search(10));` is calling the `search()` method of the `LinkedList` class on the
`list` object and passing in the value `10`. This method searches the linked list for the first node
that has a value equal to the specified value and returns the index of that node. If no node with
the specified value is found, it returns `-1`. The returned value is then logged to the console
using `console.log()`. */
console.log(list.search(10));
console.log(list.search(89));
console.log(list.search(1));

list.print()
/* `list.reverse()` is a method of the `LinkedList` class that reverses the order of the nodes in the
linked list. It does this by iterating through the linked list and reversing the `next` pointers of
each node so that they point to the previous node instead of the next node. Finally, it sets the
head of the linked list to the last node, which is now the first node after the reversal. */
list.reverse();
list.print()