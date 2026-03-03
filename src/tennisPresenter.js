import Tennis from "./tennis.js";

const player1Button = document.querySelector("#player1-button");
const player2Button = document.querySelector("#player2-button");
const resetButton = document.querySelector("#reset-button");
const scoreDisplay = document.querySelector("#score-display");

let game = new Tennis();

function updateScore() {
  scoreDisplay.innerHTML = game.score();
}

player1Button.addEventListener("click", () => {
  game.player1Scores();
  updateScore();
});

player2Button.addEventListener("click", () => {
  game.player2Scores();
  updateScore();
});

resetButton.addEventListener("click", () => {
  game = new Tennis();
  updateScore();
});