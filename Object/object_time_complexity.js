// Object - Big-O time complexity 

/* The comments are indicating the time complexity (Big-O notation) of various operations that can be
performed on an object in JavaScript. */

// Insert - Big-O --> O(1)

// remove - Big-O --> O(1) 

// access - Big-O --> O(1) 

// search - Big-O --> O(n)

// Object.keys - Big-O --> O(n)

// Object.values - Big-O --> O(n)

// Object.entries - Big-O --> O(n)



/* The code is creating an object named `Obj` with four properties: `name`, `role`, `city`, and
`is-active`. The `name` property has a value of `'harry'`, the `role` property has a value of
`'webdev'`, the `city` property has a value of `'london'`, and the `is-active` property has a value
of `true`. The `is-active` property has a hyphen in its name, so it is enclosed in quotes to avoid
syntax errors. */
let Obj = {
    name: 'harry',
    role: 'webdev',
    city: 'london',
    'is-active': true
}

/* `Obj.hobby = 'coding'` is adding a new property `hobby` with the value `'coding'` to the `Obj`
object. */
Obj.hobby = 'coding'

console.log('printing entire object --> ', Obj);

/* `delete Obj.hobby` is removing the `hobby` property from the `Obj` object. */
delete Obj.hobby

console.log('printing entire object --> ', Obj);

console.log('accessing element --> ', Obj.name);  // using dot notation.

console.log('accessing element --> ', Obj['is-active']); // using bracket notation.
