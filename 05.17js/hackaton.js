// // Function to reverse a number
// function reverseNumber(n) {
//     return parseInt(n.toString().split('').reverse().join(''), 10);
// }

// // Function to check if a number is a perfect square
// function isPerfectSquare(x) {
//     let s = Math.sqrt(x);
//     return s * s === x;
// }

// // Function to check if a number contains the digit '0'
// function containsZero(n) {
//     return n.toString().includes('0');
// }

// // Function to count interesting numbers between A and B
// // function countInterestingNumbers(A, B) {
// //     let interestingCount = 0;
// //     let start = Math.ceil(Math.sqrt(A));
// //     let end = Math.floor(Math.sqrt(B));

// //     for (let i = start; i <= end; i++) {
// //         let originalSquare = i * i;
// //         if (originalSquare < A || originalSquare > B || containsZero(i) || containsZero(originalSquare)) {
// //             continue;
// //         }

// //         let reversedI = reverseNumber(i);
// //         if (containsZero(reversedI)) {
// //             continue;
// //         }

// //         let reversedSquare = reversedI * reversedI;
// //         if (reversedSquare >= A && reversedSquare <= B && isPerfectSquare(reversedSquare)) {
// //             interestingCount++;
// //             console.log(reversedSquare)
// //         }
// //     }

// //     return interestingCount;
// // }

// // Given range
// let A = 50;
// let B = 150;

// // Output the result
// console.log(countInterestingNumbers(A, B));  // Expected output: 2

function countDistinctPanels(n, visitors) {
    let maxPanelsRequired = 0;
    let visitsPerDay = new Array(n).fill(0);
    
    for (let i = 0; i < visitors.length; i++) {
        // Record the number of visitors for each day
        visitsPerDay[i] = visitors[i].length;
    }

    // Find the maximum number of visitors on any single day
    for (let day = 0; day < visitsPerDay.length; day++) {
        maxPanelsRequired = Math.max(maxPanelsRequired, visitsPerDay[day]);
    }

    return maxPanelsRequired;
}

// Reading input
const input = `5
1 1
2 1 2
1 2
1 2
1 1`.split('\n');

let n = parseInt(input[0]);
let visitors = [];

for (let i = 1; i <= n; i++) {
    let dayVisitors = input[i].split(' ').slice(1).map(Number);
    visitors.push(dayVisitors);
}

// Output the result
console.log(countDistinctPanels(n, visitors));  // Expected output: 4