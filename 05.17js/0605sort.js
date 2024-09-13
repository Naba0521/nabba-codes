// Dawhar loop ashiglaj sortloh arga yorn bol selection sortloh arga yum bna hamgiin bagiig n urd awchirch tawij bga
// a = [4, 3, 6, 65, 8, 7, 90, 10, 5]
// function sort(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 temp = nums[j]
//                 nums[j] = nums[i]
//                 nums[i] = temp
//             }
//         }
//     }
//     return nums;
// }
// const result = sort(a);
// console.log(result);

//dan loop

// a = [4, 3, 6, 65, 8, 7, 90, 10, 5]
// function sort(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[i + 1]) {
//             temp = nums[i + 1]
//             nums[i + 1] = nums[i]
//             nums[i] = temp
//             i = -1
//         }
//     }
//     return nums;
// }
// const result = sort(a);
// console.log(result);


// Bubble sortiin arga hamgiin ih utgiig hamgiin hoino awaachaad sortloh arga
// function swap(nums, i, j) {
//     temp = nums[i]
//     nums[i] = nums[j]
//     nums[j] = temp
// }

// a = [4, 3, 6, 65, 8, 7, 90, 10, 5];

// function bubbleSort(arrey) {
//     for (let k = 0; k < arrey.length; k++) {
//         for (let i = 0; i < arrey.length - 1 - k; i++) {
//             if (arrey[i] > arrey[i + 1]) {
//                 swap(arrey, i, i + 1)
//             }
//         }
//     } return arrey
// }
// const result = bubbleSort(a);
// console.log(result);

// // Selection sortiin arga
// function swap(nums, i, j) {
//     temp = nums[i]
//     nums[i] = nums[j]
//     nums[j] = temp
// }

// const findMinIndex = (arr, start) => {
//     let minIndex = start;
//     for (let i = start + 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//     }
//     return minIndex
// }

// function selectionSort(arrey) {
//     for (let i = 0; i < arrey.length; i++) {
//         minIndex = findMinIndex(arrey, i)
//         swap(arrey, i, minIndex)
//     }
// }
// a = [4, 3, 6, 65, 8, 7, 90, 10, 5];
// selectionSort(a);
// console.log(a);

//insertion sort

// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = key;
//     }
// }
// a = [4, 3, 6, 65, 8, 7, 90, 10, 5];
// insertionSort(a);
// console.log(a);

// // sort method
// const arr = [1, 5, 2, 6, 3, 7, 4, 8];
// arr.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     } else {
//         return 0
//     }
// })
// console.log("After sort:", arr)

// const arr = ["asdasd", "asdasdaf", "a", "as"];
// arr.sort((a, b) => a.length - b.length);
// console.log("After sort:", arr)

// const arr = ["asdasd", "bsdasdaf", "a", "as"];
// arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//     return 0
// })
// console.log("After sort:", arr)

let a = 10, b;
if (a > 5) {
    b = true;
} else {
    b = false
}
// eniig ingej bichij bolno
b = a > 5 ? true : false;
console.log(b)