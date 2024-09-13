const box = document.getElementsByClassName("box")[0];

box.addEventListener("click", () => {
    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "black";
        box.textContent = 0;
    } else {
        box.style.backgroundColor = "red";
        box.textContent = 0;
    }
})

const btn1 = document.querySelector("#plus1")
box.textContent = 0;
btn1.addEventListener("click", () => {
    box.textContent++;
})

const btn2 = document.querySelector("#minus1")
btn2.addEventListener("click", () => {
    box.textContent--;
})


// const btn1 = document.querySelector("#plus1")
// let num = 0;
// box.textContent = num;

// btn1.addEventListener("click", () => {
//     num++;
//     box.textContent = num
// })

// const btn2 = document.querySelector("#minus1")
// btn2.addEventListener("click", () => {
//     num--;
//     box.textContent = num
// })