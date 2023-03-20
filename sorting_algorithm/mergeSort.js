

/**
 * Sort an array in ascending  order.
 * Merge Sort Algorithm.
 * If the array is less than 2, return the array, otherwise, split the array in half, sort the left and
 * right halves, and merge the sorted halves.
 * @param arr - the array to be sorted
 * @returns sorted array such as: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Big - O = O(nlogn) --> n for mergeSort() and logn for merge()
 * Merge Sort has the best time complexity for sorting an array.
 */
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

let arr = [11, 9, 6, 4, 1, -2, -5, -10, -20];
let arr2 = [1, 2, 3, 4, 5, 6, 8, 9];
let arr3 = [9, 7, 5, 3, 1, -1, 4, 10, -2];

console.log("eg --> 1: ", mergeSort(arr));
console.log("eg --> 2: ", mergeSort(arr2));
console.log("eg --> 3: ", mergeSort(arr3));
