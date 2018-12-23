/* FCC26 Basic Algorithm Scripting - Return Largest Numbers in Arrays */

function largestOfFour(arr) {
    let largestNumbers = [];
    console.log(arr[3]);
    console.log(Math.max(...arr[3]));
    
    for (let i = 0; i < arr.length; i++) {
        largestNumbers.push(Math.max(...arr[i]));
    }
    return largestNumbers;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Other solutions in the hints, one reduce()

// This is it :.)
