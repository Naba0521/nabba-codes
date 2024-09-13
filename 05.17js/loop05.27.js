// Array methods

// const x = [5, 100, 7];
// const y = x.push(1);
// console.log(x)

// const x = [5, 100, 7];
// const y = x.pop();
// console.log(x)

// loop dawtalt n too ogohod nemegddeg function vvsgeh

// function count(n) {
//     for (let a = 1; a <= n; a++) {
//         console.log(a)
//     }
// }
// count(5)

// loop dawtalt n too ogohod nemegddeg array vvsgeh

// function count(n) {
//     const arr = [];
//     for (let a = 1; a <= n; a++) {
//         arr.push(a);
//     }
//     return arr;
// }
// const h = count(5)
// console.log(h)

// loop dawtalt n too ogohod hasagddag array vvsgeh

// function count(n) {
//     const arr = [];
//     for (let a = n; a >= 0; a -= 1) {
//         arr.push(a);
//     }
//     return arr;
// }
// const h = count(5)
// console.log(h)

// loop ogogdson arreyg jagsaalt bolgon tvvnii urtaar utga bolgon hewlej ogoh
// const a = [1, 5, 2, 7, 45];
// const b = [1, 2, 4]
// function printArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printArr(a);
// printArr(b);

// arrey dotorh utguudaas heden tegsh too baigaag hewlelee

// const a = [1, 4, 2, 7, 45];
// function even(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count
// }
// console.log(even(a));

// 

// const a = [10, 5, 6, 7, 67869, 10];
// const b = [80, 900, 300, 980, 50];
// function max(toonuud) {
//     let ihtoo = toonuud[0]
//     for (let i = 1; i < toonuud.length; i++) {
//         if (ihtoo < toonuud[i]) {
//             ihtoo = toonuud[i]
//         }
//         // console.log(ihtoo)
//         // console.log(toonuud[i])
//     } return ihtoo
// }
// const result = max(b);
// console.log(result); //67869

// array function ashiglaj hiih 

// const a = [10, 5, 6, 7, 67869, 10];

// const max = (arr) => {

//     let maxnum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxnum) {
//             maxnum = arr[i]
//         }
//     }
//     return maxnum
// }
// const result = max(a)
// console.log(result)

// prime number oloh 

// const a = (11);
// const prime = (number) => {
//     if ((number < 2)) {
//         return false
//     }

//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             return false
//         }
//     } return true
// }
// const result = prime(a)
// console.log(result)
