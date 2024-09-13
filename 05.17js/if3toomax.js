function max(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a
        } else {
            return c
        }
    } else {
        if (b > c) {
            return b
        } else {
            return c
        }
    }
}
const x = max(5, 100, 7)
console.log(x)
