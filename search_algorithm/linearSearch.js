
/**
 * For each element in the array, check if it is the target. If it is, return the index. If not, return
 * -1.
 * @param arr - the array to search through
 * @param target - the value we're looking for
 * @returns The index of the target value.
 * Big-O = O(n)
 */
function linearSearch(arr, target) {
    for (let i  = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}

console.log("eg - 1: ", linearSearch([1,2,3,4,5], 3));
console.log("eg - 2: ", linearSearch([11, 34, 54, 23, 89], 89));
console.log("eg - 3: ", linearSearch([4,5,6,7,8], 9));