// Array - Big-O time complexity.

// insert / remove from end - Big-O --> O(1)

// insert / remove from beginning - Big-O --> O(n)

// Access data from array - - Big-O --> O(1)

// Searcg data in array - - Big-O --> O(n)

// push / pop methods on array - - Big-O --> O(1)

// shift / unshift / concat / slice / splice - Big-O --> O(n)

// forEach / map / filter / reduce - Big-O --> O(n)


let arr = [1, 2, 3, 'harry', true]

/* `arr.unshift("start")` is adding the element "start" to the beginning of the `arr` array. */
arr.unshift("start")
/* `arr.push('ending')` is adding the element "ending" to the end of the `arr` array. */
arr.push('ending')

/* Iterating over the elements of the `arr` array and logging each element to the console with the
message "elements 2 -->". */
for (let elem of arr) {
    console.log('elements 1 --> ', elem);
}

/* `arr.pop()` is removing the last element from the `arr` array. */
arr.pop();
/* `arr.shift()` is removing the first element from the beginning of the `arr` array. */
arr.shift()

for (let elem of arr) {
    console.log('elements 2 --> ', elem);
}
