// Tower of Hanoi problem.


/**
 * The function towerOfHanoi recursively solves the Tower of Hanoi puzzle by moving disks from one rod
 * to another while following the rules of the game.
 * @param n - The number of disks in the tower of Hanoi puzzle.
 * @param fromRod - The starting rod from which the disks are moved.
 * @param toRod - The rod where the disks need to be moved to.
 * @param usingRod - The rod that is not the starting rod or the destination rod, used as an
 * intermediate step in moving the disks.
 * @returns There is no return value specified in the code, so the function will return `undefined` by
 * default. However, the function is designed to print out the steps to solve the Tower of Hanoi
 * problem.
 */
let count = 0;
function towerOfHanoi (n, fromRod, toRod, usingRod) {
    if (n === 1) {
        count++;
        console.log(`${count}: Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    count++
    console.log(`${count}: Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

/* The function `towerOfHanoi` is being called with the arguments `3` for the number of disks, `'A'`
for the starting rod, `'C'` for the destination rod, and `'B'` for the intermediate rod. This will
solve the Tower of Hanoi puzzle with 3 disks, moving the disks from rod A to rod C while using rod B
as an intermediate step. The function will print out the steps taken to solve the puzzle. */
towerOfHanoi(3, 'A', 'C', 'B')