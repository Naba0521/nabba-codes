// function calcArea(a, b, c) {
//     if (c >= a + b) return 0
//     if (a >= b + c) return 0
//     if (b >= a + c) return 0
//     const s = (a + b + c) / 2
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return area
// }
// const x = calcArea(40, 10, 10)
// console.log(x)


function oloh(a) {
    if (a % 2 == 0) {
        return "tegsh"
    } else {
        return "sondgoi"
    }

}
const x = oloh(6)
console.log(x)
