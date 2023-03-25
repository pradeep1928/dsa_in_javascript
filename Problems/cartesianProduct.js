

/**
 * It takes two arrays and returns an array of all possible combinations of the elements of the two
 * arrays
 * @param arr1 - [1, 2, 3]
 * @param arr2 - [4, 5, 6]
 * @returns array with cartesian product of two arrays.
 * Big-O = O(mn) if length is equal for both array then O(n^2)
 */
function cartesianProduct(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }

    return result;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("cartesianProduct ---> ", cartesianProduct(arr1, arr2));