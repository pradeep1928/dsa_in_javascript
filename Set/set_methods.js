
/* `let set = new Set([1, 2, 3, 'hello', true])` is creating a new Set object with the values 1, 2, 3,
'hello', and true. The Set object is a collection of unique values, meaning that duplicates are not
allowed. */
let set = new Set([1, 2, 3, 'hello', true])  // using Set constructor.

/* `set.add('world')` is adding the value `'world'` to the Set object `set`. Since Sets only allow
unique values, if `'world'` already exists in the Set, it will not be added again. */
set.add('world')

/* `console.log("printing entire set 1 --> ", set);` is printing the entire Set object `set` to the
console, along with the string "printing entire set 1 --> " as a label. This will display all the
unique values in the Set, including the value `'world'` that was added using `set.add('world')`. */
console.log("printing entire set 1 --> ", set);

/* `console.log("checking in set --> ", set.has('world'))` is checking if the value `'world'` exists in
the Set object `set`. The `has()` method returns a boolean value of `true` if the value exists in
the Set, and `false` if it does not. The result of this check is then printed to the console along
with the string "checking in set --> " as a label. */
console.log("checking in set --> ", set.has('world'));

/* `console.log('length of set --> ', set.size)` is printing the size of the Set object `set` to the
console. The `size` property of a Set object returns the number of unique values in the Set. The
output of this line will be a string "length of set --> " followed by the size of the Set object. */
console.log('length of set --> ', set.size);

/* `for (let item of set) { console.log('printing set items --> ', item); }` is a for...of loop that
iterates over each value in the Set object `set`. For each value, the loop prints the string
"printing set items --> " followed by the value itself to the console. This allows you to see each
unique value in the Set object. */
for (let item of set) {
    console.log('printing set items --> ', item);
}

/* `set.delete('world')` is removing the value `'world'` from the Set object `set`. If the value exists
in the Set, it will be removed and the method will return `true`. If the value does not exist in the
Set, the method will return `false`. In this case, since `'world'` was added to the Set earlier
using `set.add('world')`, it will be removed from the Set using `set.delete('world')`. */
set.delete('world');

/* `set.clear()` is a method that removes all the values from the Set object `set`, effectively
emptying the Set. After calling `set.clear()`, the Set will have a size of 0 and will not contain
any values. */
set.clear()

/* `console.log("printing entire set 2 --> ", set);` is printing the entire Set object `set` to the
console, along with the string "printing entire set 2 --> " as a label. This will display all the
unique values in the Set after calling `set.clear()`, which should be an empty Set. */
console.log("printing entire set 2 --> ", set);