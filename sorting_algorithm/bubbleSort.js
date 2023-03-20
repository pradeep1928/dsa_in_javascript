

/**
 * Sort an array in ascending  order.
 * Bubble sort algorithm.
 * If the current element is greater than the next element, swap them.
 * @param arr - The array to sort.
 * Big-O = O(n*2)
 */
function bubbleSort(arr) {
    let swapped 
    do {
        swapped  = false
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

let arr = [6,3,2,6,7,3,12,5,12,5]
let arr2 = [8, 6, 4, 3, 2, -2, -6]
bubbleSort(arr);
bubbleSort(arr2);
console.log("eg --> 1: ", arr)
console.log("eg --> 2: ", arr2)

