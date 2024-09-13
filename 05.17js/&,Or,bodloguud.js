// -Өгөгдсөн тоо эерэг бол "positive" ,
//  сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү .

// function oloh(a) {
//     if (a == 0) {
//         return "Zero"
//     }
//     if (a > 0) {
//         return "Positive"
//     } else {
//         return "Negative"
//     }

// }
// const x = oloh(-2)
// console.log(x)

// -Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 
// 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү.

// function nasshalgah(a) {
//     if (a > 18) {
//         return console.log("You are old enough to drive")
//     } else {
//         return console.log(`"You are left with" ${18 - a} "years to drive"`)

//     }
// }
// const x = nasshalgah(19)

// const 1 == true
// const 0 == false
// console.log(!(1 || (0 && 1 && 1) || 0))
// console.log((1 || 1 || 0 && 1 || (1 || 0) && 1))
// console.log(!(1 == 0))
// console.log(!(0 || 0))

// function nasshalgah(a) {
//     const b=
//     if (a > 18) {
//         return console.log("You are old enough to drive")
//     } else {
//         return console.log(`"You are left with" ${18 - a} "years to drive"`)

//     }
// }
// const x = nasshalgah(19)

// suragchiin nasaar angi oloh
// function angioloh(age, gender) {
//     if ((age >= 6 && age <= 17) && gender == "er") {
//         return console.log(`${age - 5}-r angiin suragch eregtei suragch `)
//     } else if ((age >= 6 && age <= 17) && gender == "em") {
//         return console.log(`${age - 5}-r angiin emegtei suragch `)
//     } else if (age < 6) {
//         console.log(`Tsetserlegiin maamaa min surguuld orohod ${6 - age} jil vldsen baina.`)
//     } else if (age > 17) {
//         console.log(`Ta ulirsan eswel surguuld hotsorch oroogvi l bol arwan jilee togsood ${age - 17} jil bolj baina`)
//     }
// }
// const x = angioloh(15, "er")

// // -Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .

// function oloh(a) {
//     if (a % 2 == 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// const x = oloh(2)
// console.log(x)

// -Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth" , 24-64 бол "Adults" ,
//  64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
// function oloh(a) {
//     if (a < 14) {
//         return "Children"
//     } else if (a >= 14 && a < 24) {
//         return "Youth"
//     } else if (a >= 24 && a < 64) {
//         return "Adults"
//     } else {
//         return "Seniors"
//     }
// }
// const x = oloh(70)
// console.log(x)

// -Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
//  for example : 
//       a=5 b=6 c=7 / is valid 
//       a=4 b=8 c=19 / is invalid 

// function oloh(a, b, c) {
//     if (a <= b + c && b <= a + c && c <= a + b) {
//         return "is Valid"
//     } else {
//         return "is invalid"
//     }
// }

// const x = oloh(4, 8, 19)
// console.log(x)

// // Өгөгдсөн 2 тооноос ихийг нь олж хэвлэнэ үү .
// function oloh(a, b) {
//     if (a < b) {
//         return b
//     } else {
//         return a
//     }
// }

// const x = oloh(12, 8)
// console.log(x)

// // Өгөгдсөн 2 тооноос ихийг нь олж хэвлэнэ үү .
// const x = [1, 12, 561111, 8, 15, 25, 21412]
// console.log(Math.max(...x))

// Exercises (condition && operation)

// 2.Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.

// function oloh(a) {
//     if (a % 5 == 0) {
//         return "5-d huwaagddag"
//     } else {
//         return "5-d huwaagdadgvi"
//     }
// }
// const x = oloh(10)
// console.log(x)

// 3.Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
// function oloh(vseg) {
//     if (vseg == "a" || vseg == "e" || vseg == "i" || vseg == "o" || vseg == "u") {
//         return "vowel"
//     } else {
//         return "consonant"
//     }
// }
// const x = oloh("t")
// console.log(x)

// 4.Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .

// function oloh(a) {
//     if (a > 1 && a < 100) {
//         return "include"
//     } else {
//         return "exclude"
//     }
// }
// const x = oloh(170)
// console.log(x)

// 5. 3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .
// function max(a, b, c) {
//     if (a > b) {
//         if (a > c) {
//             return a
//         } else {
//             return c
//         }
//     } else {
//         if (b > c) {
//             return b
//         } else {
//             return c
//         }
//     }
// }
// const x = max(5, 100, 7)
// console.log(x)

// 5.3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .

// const x = [1, 12, 561111, 8, 15, 25, 21412]
// console.log(Math.max(...x))

// 6.Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .

// function oloh(a) {
//     if (a == 2021 || a % 4 == 0 && a >= 1896 && a !== 2020) {
//         return "Олимпийн жил мөн"
//     } else {
//         return "Олимпийн жил биш"
//     }
// }
// const x = oloh(2020)
// console.log(x)

// 7.Check the given number is not a prime number .
// 8.Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false

const a = (10);
const prime = (number) => {
    if ((number < 2)) {
        return false
    }

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }
    } return true
}
const result = prime(a)
console.log(result)