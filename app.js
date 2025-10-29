let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let result = document.querySelector("#win");
let currentPlayer = "X";
let w = "X";
let gameOver = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Prevent clicking when game is over or box already filled
    if (gameOver || box.textContent !== "") return;

    box.textContent = currentPlayer;
    w = currentPlayer;
    checkWinner();

    // Only switch player if game not yet over
    if (!gameOver) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

btn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.style.pointerEvents = "auto"; // Enable clicking again
  });
  currentPlayer = "X";
  gameOver = false;
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

        // Disable further clicking on all boxes
        boxes.forEach((b) => (b.style.pointerEvents = "none"));

        gameOver = true;
        return;
      }
    }
  }
};
