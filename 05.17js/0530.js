// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа
// const a = [10, 11, 12, 14, 9, 20, 3];
// const b = 23
// function find(toonuud, target) {
//     for (let i = 0; i < toonuud.length; i++) {
//         if (toonuud[i] == target) {
//             return i
//         }
//     } return -1
// }
// const result = find(a, b);
// console.log(result);

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4
// const a = [1, 2, 3, 4, 5];
// function rerange(num) {
//     temp = num[4]
//     num[4] = num[3]
//     num[3] = num[2]
//     num[2] = num[1]
//     num[1] = num[0]
//     num[0] = temp;
//     return num

// }
// const result = rerange(a);
// console.log(result);

// const a = [1, 2, 3, 4, 5];
// function rerange(num) {
//     temp = num[num.length - 1]
//     for (let i = num.length - 1; i > 0; i--) {
//         num[i] = num[i - 1];
//     }
//     num[0] = temp;
//     return num;
// }

// const result = rerange(a);
// console.log(result);

// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа
// const b = [20, 25, 30, 35, 40];
// function max(toonuud) {
//     for (let i = 1; i < toonuud.length; i++) {
//         if (toonuud[i] < toonuud[i - 1])  {
//             return false
//         }  
//     } return true
// }
// const result = max(b);
// console.log(result);

// 4
// const a = [84, 28, 57, 38, 37];
// function dvnoloh(a) {
//     const roundedGrades = [];
//     for (let i = 0; i < a.length; i++) {
//         const grade = a[i];
//         if (grade < 38) {
//             roundedGrades.push(grade);
//         }
//         if (Math.ceil(grade / 5) * 5 - grade < 3 && grade >= 38) {
//             roundedGrades.push(Math.ceil(grade / 5) * 5);
//         } else if (grade >= 38) {
//             roundedGrades.push(grade);
//         }
//     }
//     return roundedGrades;
// }
// const result = dvnoloh(a);
// console.log(result);

// 4. bagshiin sanaagaar vldegdliig ashiglaj bodson
const a = [83, 28, 57, 38, 37];
function dvnoloh(a) {
    const roundedGrades = [];
    for (let i = 0; i < a.length; i++) {
        const grade = a[i];
        if (grade < 38) {
            roundedGrades.push(grade);
        } else if ((grade % 5) >= 3) {
            roundedGrades.push(grade + (5 - (grade % 5)));
        } else {
            roundedGrades.push(grade);
        }
    }
    return roundedGrades;
}
const result = dvnoloh(a);
console.log(result);