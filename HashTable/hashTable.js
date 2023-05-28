

/* The HashTable class is a data structure that allows for efficient storage and retrieval of key-value
pairs using a hash function. */
class HashTable {
    constructor (size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}


/* `const table = new HashTable(50);` is creating a new instance of the `HashTable` class with a size
of 50 and assigning it to the constant variable `table`. This creates a new hash table with 50 slots
that can be used to store key-value pairs. */
const table = new HashTable(50);

/* `table.set('name', 'neel');` is setting the value `'neel'` to the key `'name'` in the hash table
`table`. This means that the value `'neel'` can be retrieved later by calling `table.get('name')`. */
table.set('name', 'neel');
table.set('age', 25);
table.set('role', 'nodejs')
table.set('city', 'new york')

/* `table.display();` is a method of the `HashTable` class that is used to display all the key-value
pairs stored in the hash table. It iterates over the hash table and logs each non-empty slot along
with its corresponding value to the console. */
table.display();

/* `console.log(table.get('name'))` is retrieving the value associated with the key `'name'` from the
hash table `table` using the `get` method of the `HashTable` class, and then logging that value to
the console using `console.log()`. In this case, the value associated with the key `'name'` is
`'neel'`, so `'neel'` will be logged to the console. */
console.log(table.get('name'));

/* `table.remove('city');` is removing the key-value pair with the key `'city'` from the hash table
`table`. It does this by setting the value at the index corresponding to the hash of the key
`'city'` to `undefined`. */
table.remove('city');
table.display();

console.log(table.get('city'));
