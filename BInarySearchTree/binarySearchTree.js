
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
    constructor() {
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
        if (!root) {
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

    // following 3 are for DFS
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // BFS 
    levelOrder() {
        const queue = [];
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
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
bst.insert(3)
bst.insert(7)


/* `bst.search(bst.root, 10)` is searching for a node with a value of 10 in the binary search tree represented by the `bst` object. It starts the search from the root node of the tree, which is accessed using `bst.root`. If a node with the value of 10 is found in the tree, the method returns `true`, otherwise it returns `false`. */
console.log('is node in bst? ', bst.search(bst.root, 10))

console.log('is node in bst? ', bst.search(bst.root, 15))
console.log('is node in bst? ', bst.search(bst.root, 5))
console.log('is node in bst? ', bst.search(bst.root, 50))

console.log('Is tree empty? ', bst.isEmpty());

/* *** Depth First Search (DFS):
There can be three types of DFS travarsal.
1. pre order, 2. in order, 3. post order
/* `bst.preOrder(bst.root)` is calling the `preOrder()` method of the `BinarySearchTree` class on the
`bst` object and passing in the `root` node of the binary search tree as an argument. This method
performs a pre-order traversal of the binary search tree, which means it visits the root node first,
then the left subtree, and finally the right subtree. During the traversal, it logs the value of
each node to the console. */
bst.preOrder(bst.root)
console.log('-----preOrder above--------------------------------');

/* `bst.inOrder(bst.root)` is calling the `inOrder()` method of the `BinarySearchTree` class on the
`bst` object and passing in the `root` node of the binary search tree as an argument. This method
performs an in-order traversal of the binary search tree, which means it visits the left subtree
first, then the root node, and finally the right subtree. During the traversal, it logs the value of
each node to the console in ascending order. */
bst.inOrder(bst.root)
console.log('-----inOrder above--------------------------------');

/* `bst.postOrder(bst.root)` is calling the `postOrder()` method of the `BinarySearchTree` class on the
`bst` object and passing in the `root` node of the binary search tree as an argument. This method
performs a post-order traversal of the binary search tree, which means it visits the left subtree
first, then the right subtree, and finally the root node. During the traversal, it logs the value of
each node to the console. */
bst.postOrder(bst.root)
console.log('-----postOrder above--------------------------------');

/* `bst.levelOrder()` is calling the `levelOrder()` method of the `BinarySearchTree` class on the `bst`
object. This method performs a breadth-first search (BFS) traversal of the binary search tree, which
means it visits all the nodes at each level of the tree before moving on to the next level. During
the traversal, it logs the value of each node to the console. */
bst.levelOrder()
console.log('-----levelOrder above--------------------------------');
