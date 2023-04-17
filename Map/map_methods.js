
/* The code is creating a new Map object with initial key-value pairs of 'a' mapped to 1, 'b' mapped to
2, and 'c' mapped to 3 using map constructor. */
let map = new Map([['a', 1], ['b', 2], ['c', 3]])

/* `map.set('d', 4)` is adding a new key-value pair to the Map object. The key is 'd' and the value is
4. */
map.set('d', 4)

/* `console.log("check if exists --> ", map.has('d'))` is checking if the Map object `map` has a key
named 'd'. The `map.has()` method returns a boolean value of `true` if the key exists in the Map
object, and `false` otherwise. The result of this check is being logged to the console along with
the message "check if exists --> ". */
console.log("check if exists --> ", map.has('d'))

/* `console.log("printing entire map 1--> ", map)` is logging the entire Map object `map` to the
console along with the message "printing entire map 1--> ". This will display all the key-value
pairs in the Map object. */
console.log("printing entire map 1--> ", map);

/* `for (let [key, value] of map)` is a for...of loop that iterates over the key-value pairs in the Map
object `map`. The loop assigns each key-value pair to the variables `key` and `value`, respectively,
and then logs them to the console using a template literal. The output of this loop will be a list
of all the key-value pairs in the Map object, with each pair displayed as "key: value". */
for (let [key, value] of map) {
    console.log(`printing as a key:value pair --> ${key}: ${value}` );
}

/* `map.delete('d')` is deleting the key-value pair with the key 'd' from the Map object `map`. After
this operation, if we check if the key 'd' exists in the Map object using `map.has('d')`, it will
return `false`. */
map.delete('d');

/* `map.clear()` is a method that removes all key-value pairs from the Map object `map`, effectively
emptying the Map. After this method is called, the Map object will have a size of 0. */
map.clear();

console.log("printing entire map 2--> ", map);