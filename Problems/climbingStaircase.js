

/**
 * The number of ways to climb a staircase of n steps is the sum of the number of ways to climb a
 * staircase of n-1 steps and the number of ways to climb a staircase of n-2 steps.
 * @param n - the number of steps in the staircase
 * @returns The number of ways to climb a staircase of n steps.
 * Big-O = O(n)
 */
function climbingStaircase(n) {
  let num_of_ways = [1, 2];
  for (let i = 2; i < n; i++) {
    num_of_ways[i] = num_of_ways[i - 1] + num_of_ways[i - 2]
  }
  return num_of_ways[n - 1]
}

console.log("eg - 1 ----> ", climbingStaircase(1));
console.log("eg - 2 ----> ", climbingStaircase(2));
console.log("eg - 3 ----> ", climbingStaircase(3));
console.log("eg - 4 ----> ", climbingStaircase(4));
console.log("eg - 5 ----> ", climbingStaircase(5));
console.log("eg - 6 ----> ", climbingStaircase(6));