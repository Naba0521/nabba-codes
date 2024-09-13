const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.startbtn');
const stopbtn = document.querySelector('.stopbtn');
const resetbtn = document.querySelector('.resetbtn');

let count = 0.0;
let id;
let a = true;

startbtn.addEventListener('click', () => {
    if (a == true) {
        id = setInterval(() => {
            count += 0.1;
            timer.textContent = count.toFixed(2);
        }, 100)
        a = false
    }

});
stopbtn.addEventListener('click', () => {
    a = true
    clearInterval(id);
});
resetbtn.addEventListener('click', () => {
    a = true
    clearInterval(id);
    timer.textContent = '0.0';
    count = 0;
});