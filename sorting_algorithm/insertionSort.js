

/**
 * Sort an array in ascending  order.
 * Inserttion sort algorithm.
 * For each element in the array, starting with the second element, compare it to the element before it
 * and swap them if the element before it is greater than the element after it.
 * @param arr - the array to sort
 * Big-O = O(n^2)
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
}

let arr = [6,3,2,6,7,3,12,5,12,5]
let arr2 = [8, 6, 4, 3, 2, -2, -6]
let arr3 = [2,4,6,8,10]
insertionSort(arr);
insertionSort(arr2);
insertionSort(arr3);
console.log("eg --> 1: ", arr)
console.log("eg --> 2: ", arr2)
console.log("eg --> 3: ", arr3)
