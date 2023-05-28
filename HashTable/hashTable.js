

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
        // this.table[index] = value;
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index]
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key) 
                if (sameKeyItem) {
                    bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
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

table.set('mane', 'harry')

table.display();

/* `table.remove('mane')` is removing the key-value pair with the key `'mane'` from the hash table
`table`. It does this by finding the index of the slot in the hash table where the key-value pair is
stored, and then removing the key-value pair from the array stored at that index. After this
operation, calling `table.get('mane')` will return `undefined`, since the key `'mane'` is no longer
present in the hash table. */
table.remove('mane');

console.log(table.get('mane'));
