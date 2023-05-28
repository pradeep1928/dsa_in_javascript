
/* The class defines a Node with a value and left and right child nodes. */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

/* The BinarySearchTree class is a data structure that allows for the insertion and searching of nodes
in a binary tree. */
class BinarySearchTree {
    constructor () {
        this.root = null
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
}


/* `let bst = new BinarySearchTree();` creates a new instance of the `BinarySearchTree` class and
assigns it to the variable `bst`. This allows us to use the methods and properties defined in the
`BinarySearchTree` class on the `bst` object. */
let bst = new BinarySearchTree();

/* `console.log('Is tree empty? ', bst.isEmpty());` is calling the `isEmpty()` method of the
`BinarySearchTree` class on the `bst` object and logging the result to the console. It checks if the
`root` property of the `bst` object is `null` and returns `true` if it is, indicating that the tree
is empty, and `false` otherwise. */
console.log('Is tree empty? ', bst.isEmpty());

/* `bst.insert(10)` is inserting a new node with a value of 10 into the binary search tree. */
bst.insert(10)
bst.insert(5)
bst.insert(15)

/* `bst.search(bst.root, 10)` is searching for a node with a value of 10 in the binary search tree represented by the `bst` object. It starts the search from the root node of the tree, which is accessed using `bst.root`. If a node with the value of 10 is found in the tree, the method returns `true`, otherwise it returns `false`. */
console.log('is node in bst? ', bst.search(bst.root, 10))

console.log('is node in bst? ', bst.search(bst.root, 15))
console.log('is node in bst? ', bst.search(bst.root, 5))
console.log('is node in bst? ', bst.search(bst.root, 50))

console.log('Is tree empty? ', bst.isEmpty());
