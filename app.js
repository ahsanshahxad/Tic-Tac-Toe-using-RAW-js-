let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let result = document.querySelector("#win");
let currentPlayer = "X";
let w = "X";
let gameOver = false; // <-- NEW FLAG

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return; // Stop moves if game ended
        if (box.textContent === "") {
            if (currentPlayer === "X") {
                box.textContent = "X";
                currentPlayer = "O";
                w = "X";
            } else {
                box.textContent = "O";
                currentPlayer = "X";
                w = "O";
            }
        }
        checkWinner();
    });
});

btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
    });
    currentPlayer = "X";
    gameOver = false; // Reset flag
    result.innerHTML = "";
    console.log("Game Reset");
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                result.innerHTML = `Player <span style="color:red;">${w}</span> has won the Game!`;
                gameOver = true; // Stop the game here
                return;
            }
        }
    }
};
