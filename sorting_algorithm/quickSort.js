

/**
 * Sort an array in ascending  order.
 * Quick Sort Algorithm.
 * If the array is less than 2, return the array, otherwise, set the pivot to the last element in the
 * array, create two empty arrays, loop through the array and push the elements to the left array if
 * they are less than the pivot, otherwise, push them to the right array, then return the left array,
 * the pivot, and the right array.
 * @param arr - the array to be sorted
 * @returns sorted array such as: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 * Big - O 
   Worst case: O(n^2) - when array is already sorted.
   Average case: O(nlogn)
 */
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

let arr = [11, 9, 6, 4, 1, -2, -5];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [9, 7, 5, 3, 1, -1];

console.log("eg --> 1: ", quickSort(arr));
console.log("eg --> 2: ", quickSort(arr2));
console.log("eg --> 3: ", quickSort(arr3));

