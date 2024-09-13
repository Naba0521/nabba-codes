// const a = "88280102";
// const b = "99280102";

// function findoperator(y) {
//     const firstTwo = y.slice(0, 2);
//     switch (firstTwo) {
//         case "94":
//         case "99":
//             return "Mobicom";
//         case "88":
//             return "Unitel";
//         default:
//             return "invalid number"
//     }
// }
// const result = findoperator(b);
// console.log(result);


// matrix iig diagnaldaj haruulah
// const arr2 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
// const b = []
// function findoperator(a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             if (i == j) {
//                 b.push(a[i][j])
//             }
//         }
//     }
//     return b

// }
// const result = findoperator(arr);
// console.log(result);

// // matrix iig diagnaldaj haruulah
// const a = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

// const printDiagnol = (arr) => {
//     for (const i in arr) {
//         console.log(arr[i][i])
//     }
// }
// printDiagnol(a)

//for each ashiglah
// let names = ["naba", "zori", "gvnjee"]
// names.forEach((name) => {
//     console.log(name + "@pinecone.edu.mn")
// })


//for each ashiglan ih toog oloh
// let numbers = [11, 5, 1, 2, 5, 3, 9];

// const findmax = (arr) => {
//     let max = 0;
//     arr.forEach((element) => {
//         if (element > max) {
//             max = element
//         }
//     });
//     return max
// }
// const result = (findmax(numbers))
// console.log(result)

// //for each ashiglan ih toonii indexiig oloh
// let numbers = [11, 5, 1, 2, 5, 3, 9]
// const findmax = (arr) => {
//     let max = 0;
//     arr.forEach((el, index) => {
//         if (el > arr[max]) {
//             max = index
//         }
//     });
//     return max;
// }
// console.log(findmax(numbers))

// //for each ashiglan ih toonii indexiig oloh oloh
// let numbers = [1, 2, 3]
// const findmax = (arr) => {
//     let max = 0;
//     arr.forEach((el, index) => {
//         if (arr[max] < el) {
//             max = index
//         }
//     });
//     return max;
// }
// console.log(findmax(numbers))


// for each sum-iig oloh
// let numbers = [1, 2, 3]
// const sum = (arr) => {
//     let sum = 0;
//     arr.forEach(element => {
//         sum = sum + element
//     });
//     return sum
// }
// const result = sum(numbers)
// console.log(result)


//map ashiglah 
// let array = [2, 4, 6, 8]
// let element = array.map((el) => {
//     return el * 2
// })
// console.log(element)

//map ashiglaj sam bagshiin 
// let grades = [83, 28, 57, 38, 37];
// let roundedGrades = grades.map((grade) => {
//     if (grade < 38) {
//         return grade
//     } else if ((grade % 5) >= 3) {
//         return grade + (5 - (grade % 5))
//     } else {
//         return grade
//     }
// })
// console.log(roundedGrades)

//.filter ashiglaj tegsh toog awii

// const arr = [1, 2, 3, 4, 5, 6]
// const fillteredarr = arr.filter((el) => {
//     return el % 2 === 0;
// });
// console.log(fillteredarr)

// .reduce ashiglaj sum oloh

const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((acc, current) => {
    return acc + current
}, 0)
console.log(sum)