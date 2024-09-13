const boxes = document.querySelectorAll(".box");

let turn = 0;
const checkWin = () => {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            alert(`Player ${boxes[a].textContent} wins!`);
            return true;
        }
    }
    return false;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && turn === 0) {
            box.textContent = "X";
            if (checkWin()) {
                boxes.forEach((b) => b.textContent = "");
                turn = 0;
            } else {
                turn = 1;
            }
        } else if (box.textContent === "" && turn === 1) {
            box.textContent = "O";
            if (checkWin()) {
                boxes.forEach((b) => b.textContent = "");
                turn = 0;
            } else {
                turn = 0;
            }
        }
    });
});

const b = document.querySelector("#restart");
b.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
    });
    turn = 0;
})