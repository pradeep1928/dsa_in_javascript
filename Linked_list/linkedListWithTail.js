
/* The class defines a Node with a value and a reference to the next Node. */
class NodeOfList {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList_T {
    constructor() {
        this.head = null,
        this.tail = null,
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
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

    // Big-O --> O(1)
    append(value) {
        const node = new NodeOfList(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    } 

    // Big-O --> O(1)
    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        } 
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    // Big-O --> O(n)
    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null
        } else {
            let prev = this.head;
            while (prev.next != this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
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

// *** to implement stack exporting it.
module.exports = LinkedList_T

// *** uncomment the following to use linkedList methods.
// const list1 = new LinkedList_T()
// console.log('is list1 empty? ', list1.isEmpty());
// console.log('list1 size: ', list1.getSize());
// list1.print()

// /* `list1.append(3)` is adding a new node with a value of `3` to the end of the linked list `list1`. It
// does this by creating a new `NodeOfList` object with a value of `3`, setting the `next` property of
// the current tail node to point to the new node, and updating the `tail` property of the linked list
// to point to the new node. If the list is empty, it sets both the `head` and `tail` properties to
// point to the new node. */
// list1.append(3);
// list1.append(4);

// /* `list1.prepend(2)` is adding a new node with a value of `2` to the beginning of the linked list
// `list1`. It does this by creating a new `NodeOfList` object with a value of `2`, setting the `next`
// property of the new node to point to the current head node, and updating the `head` property of the
// linked list to point to the new node. If the list is empty, it sets both the `head` and `tail`
// properties to point to the new node. */
// list1.prepend(2);
// list1.prepend(1)
// list1.print();
// console.log('list1 size: ', list1.getSize());

// /* `list1.removeFromFront()` is removing the first node (head) of the linked list `list1` and returning
// its value. It does this by updating the `head` property of the linked list to point to the next node
// in the list, effectively removing the first node from the list. If the list is empty, it returns
// `null`. */
// list1.removeFromFront();


// /* `list1.removeFromEnd()` is removing the last node (tail) of the linked list `list1` and returning
// its value. It does this by updating the `tail` property of the linked list to point to the
// second-to-last node in the list, effectively removing the last node from the list. If the list is
// empty, it returns `null`. */
// list1.removeFromEnd()

// list1.print()
