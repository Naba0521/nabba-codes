// let person = {
//     firstName: "Naba",
//     lastName: "M",
//     age: 26,
//     nation: "Mongol",
//     eye: {
//         eyeColor: "Bor",
//         eyeGlass: {
//             eyeGlassColor: "Saaral",
//         }
//     },
//     hobby: ["Sags", "Hool"],
//     gerlelt: ["Gerlesen", "Ganst biy"],
// }

// const getMarriageStatus = (isMarried) => {
//     if (isMarried) {
//         return person.gerlelt[0]
//     } else { return person.gerlelt[1] }
// }

// let myInformation = `Namaig ${person.firstName}  gedeg bi ${person.age} nastai. person["age"]
// ${person.nation} ornoos irsen. ${person.eye.eyeColor} ongiin nvdtei. ${person.eye.eyeGlass.eyeGlassColor} ongiin nvdnii shil zvvdeg. ${person.hobby[0]} togloh durtai. Bi ${getMarriageStatus(person.gerlelt)}. `

// console.log(myInformation)

// Array dotor utguudiig zaaj ogood daraa n toog n gargah vildel hiisen 

// const countOccurence = (arr) => {
//     let count = {};
//     for (let i = 0; i < arr.length; i++) {
//         // const num = arr[i]
//         if (count[arr[i]] == undefined) {
//             count[arr[i]] = 1
//         } else {
//             count[arr[i]]++;
//         }
//     }
//     return count
// }
// const a = [5, 1, 5, 3, 3, 2, 2, 22, 5, 77]
// console.log(countOccurence(a))

// 1 Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.

// const a = [5, 1, 5, 3, 10]
// function sum(toonuud) {
//     let niilber = 0
//     for (let i = 0; i < toonuud.length; i++) {
//         niilber = toonuud[i] + niilber
//     }
//     return niilber
// }
// const result = sum(a);
// console.log(result);

// 2 Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.

// const a = [-10, 5, 1, 20, 5, 3, 10, -10]
// function sum(toonuud) {
//     let niilber = 0
//     for (let i = 0; i < toonuud.length; i++) {
//         if (toonuud[i] > 0) {
//             niilber = toonuud[i] + niilber
//         }
//     }
//     return niilber
// }
// const result = sum(a);
// console.log(result);

// 3 Өгөгдсөн массивын хамгийн бага элементийг ол.

// const a = [-10, 5, 6, 7, 67869, 10];
// const b = [80, 900, 300, 980, 50];
// function min(toonuud) {
//     let bagatoo = toonuud[0]
//     for (let i = 1; i < toonuud.length; i++) {
//         if (bagatoo > toonuud[i]) {
//             bagatoo = toonuud[i]
//         }
//     } return bagatoo
// }
// const result = min(a);
// console.log(result);

// 4 Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ ? Хэрэв хамгийн их элементийн тоо 1 - ээс олон бол бага дугаарыг нь хэвлэнэ.

// const b = [980, -1, -80, 980, 980];
// function max(toonuud) {
//     let ihtooniiindex = 0;
//     let ihtoo = toonuud[0];
//     for (let i = 1; i < toonuud.length; i++) {
//         if (ihtoo < toonuud[i]) {
//             ihtoo = toonuud[i]
//             ihtooniiindex = i
//         }
//     } return ihtooniiindex
// }
// const result = max(b);
// console.log(result);

// 1. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// const b = [10, 11, 12, 13, 14];
// function reverse(toonuud) {
//     let reverseindex = [];
//     for (let i = toonuud.length - 1; i >= 0; i--) {
//         reverseindex.push(toonuud[i])
//     }
//     return reverseindex
// }
// const result = reverse(b);
// console.log(result);

// 2. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// const b = [30, 20, 12, 30, 50, 10, 25, 5, 900];
// function max(toonuud) {
//     let butsaah = [];
//     for (let i = 1; i < toonuud.length; i++) {
//         if (toonuud[i] > toonuud[i - 1] && toonuud[i] > toonuud[i + 1]) {
//             butsaah.push(toonuud[i])
//         }
//     }
//     if (toonuud[0] > toonuud[1]) {
//         butsaah.push(toonuud[0])
//     }

//     if (toonuud[toonuud.length - 1] > toonuud[toonuud.length - 2]) {
//         butsaah.push(toonuud[toonuud.length - 1])
//     }

//     return butsaah.length
// }
// const result = max(b);
// console.log(result);


// 3. Өгөгдсөн массивийн бүх хосыг хэвлэ
// const b = [10, 11, 12, 13, 14, 15];
// function reverse(toonuud) {
//     let hosbutsaah = [];

//     for (let i = 0; i < toonuud.length; i++) {
//         for (let g = i + 1; g < toonuud.length; g++) {
//             hosbutsaah.push([toonuud[i], toonuud[g]])
//         }
//     }
//     return hosbutsaah
// }
// const result = reverse(b);
// console.log(result);

// 4. Массив болон тоо өгөгдөв.Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
// const a = 23
// const b = [10, 11, 12, 14, 9, 20, 3];
// function reverse(toonuud, target) {
//     let hosbutsaah = [];

//     for (let i = 0; i < toonuud.length; i++) {
//         for (let g = i + 1; g < toonuud.length; g++) {
//             if (toonuud[i] + toonuud[g] == target) {
//                 hosbutsaah.push([toonuud[i], toonuud[g]])
//             }
//         }
//     }
//     return hosbutsaah
// }
// const result = reverse(b, a);
// console.log(result);


// 5. Өгөгдсөн 2 массивийн огтлолцлыг ол
// const a = [10, 11, 13, 14, 15];
// const b = [10, 11, 12, 13, 14, 15];
// function reverse(toonuud, target) {
//     let hosbutsaah = [];

//     for (let i = 0; i < toonuud.length; i++) {
//         for (let g = 0; g < target.length; g++) {
//             if (toonuud[i] == target[g]) {
//                 hosbutsaah.push([toonuud[i], target[g]])
//             }
//         }
//     }
//     return hosbutsaah
// }
// const result = reverse(b, a);
// console.log(result);

// 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// const b = [10, 11, -10, 12, 13, 14, -15];
// function reverse(toonuud) {
//     let reverseindex = [];
//     for (let i = 0; i < toonuud.length; i++) {
//         if (toonuud[i] < 0) {
//             reverseindex.push(toonuud[i])
//         }
//     }
//     for (let i = 0; i < toonuud.length; i++) {
//         if (toonuud[i] > 0) {
//             reverseindex.push(toonuud[i])
//         }
//     }
//     return reverseindex
// }
// const result = reverse(b);
// console.log(result);

// 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул/ zow arga n

// function rearrange(num) {
//     let j = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (num[i] < 0) {
//             let temp = num[j];
//             num[j] = num[i]
//             num[i] = temp;
//             j++;
//         }
//     }
//     return num;
// }

// const a = [200, -1, 45, -23, 90, -500, -1];
// const result = rearrange(a);
// console.log(result);



// // 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв.Тэр тоог оl
// // include ashiglaj olj baigaa arga
// const a = [16, 10, 11, 13, 14, 15];
// const min = (arr) => {
//     let minnum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minnum) {
//             minnum = arr[i]
//         }
//     }
//     return minnum
// }
// const max = (arr) => {

//     let maxnum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxnum) {
//             maxnum = arr[i]
//         }
//     }
//     return maxnum
// }

// function rearrange(arr) {
//     let j = max(arr);
//     let g = min(arr);
//     let k = [];
//     for (let i = g; i < j; i++) {
//         if (!a.includes(i)) {
//             k.push(i)
//         }
//     }
//     return k
// }
// const result = rearrange(a);
// console.log(result);

// // 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв.Тэр тоог оl
// // include ashiglahgvi olj baigaa arga
// const a = [16, 10, 11, 13, 14, 15];
// const min = (arr) => {
//     let minnum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minnum) {
//             minnum = arr[i]
//         }
//     }
//     return minnum
// }
// const max = (arr) => {

//     let maxnum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxnum) {
//             maxnum = arr[i]
//         }
//     }
//     return maxnum
// }
// function rearrange(arr) {
//     let j = max(arr);
//     let g = min(arr);
//     let k = [];
//     for (let i = g; i < j; i++) {
//         k.push(g++);
//     }
//     return k
// }
// const result = rearrange(a);

// // baihgvi toog oloh
// const d = a;
// const f = result;
// function reverse(toonuud, target) {
//     for (let i = 0; i < target.length; i++) {
//         let isFound = false;
//         for (let g = 0; g < toonuud.length; g++) {
//             if (target[i] === toonuud[g]) {
//                 isFound = true
//             }
//         }
//         if (!isFound) return target[i]
//     }

// }
// const result1 = reverse(d, f);
// console.log(result1);

// // 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв.Тэр тоог оl
// // BAGSHIIN ZAAJ OGSON ARGA
// const a = [16, 10, 11, 13, 14, 15];
