
/**
 * Recursive Binary Search Algorithm.
 * Given array should be sorted.
 * If the target is less than the middle index, search the left half of the array, otherwise search the
 * right half of the array.
 * @param arr - the array to search
 * @param target - the value we're searching for
 * @returns The index of the target value in the array.
 *  * Big-O = O(log n)
 */
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length -1) 
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    } 
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex -1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log("eg - 1: ", recursiveBinarySearch([1,2,3,4,5,7,8], 7));
console.log("eg - 2: ", recursiveBinarySearch([-3, 0, 4, 6, 9], 6));
console.log("eg - 3: ", recursiveBinarySearch([-5, -3, 3, 6, 8], 9));
console.log("eg - 4: ", recursiveBinarySearch([-5, -3, 3, 6, 8, 9, 10, 12, 14], 14));
