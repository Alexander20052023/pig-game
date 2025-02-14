"use strict";
// defining var and const values
const player1Score = document.querySelector(".player2-score");
const player2Score = document.querySelector(".player1-score");
const hold = document.querySelector(".hold");
const player1Name = document.querySelector(".player1");
const player2Name = document.querySelector(".player2");
const newGameBtn = document.querySelector(".new-game");
const diceImage = document.querySelector(".dice-image");
const player1CurrentScore = document.querySelector(
  ".player1-current-dice-score-textContent"
);
const player2CurrentScore = document.querySelector(
  ".player2-current-dice-score-textContent"
);
const rollDice = document.querySelector(".roll-dice");

// defining functions for long codes
const playerSScores = function () {
  player1Score.textContent = Number(0);
  player2Score.textContent = Number(0);
};
const playerSCurrentScores = function () {
  player1CurrentScore.textContent = Number(0);
  player2CurrentScore.textContent = Number(0);
};

// main functuality starts here
playerSScores();
playerSCurrentScores();
diceImage.classList.add("hide-dice-img");

// new game buttons functuality starts here!!!
newGameBtn.addEventListener("click", () => {
  activePlayer = 1;
  playerSScores();
  playerSCurrentScores();
  diceImage.classList.add("hide-dice-img");
  diceImage.classList.remove("show-dice-img");
  currentScore = 0;
});

//roll dice functuality starts here
let currentScore = 0;
let activePlayer = 1;
let unactivePlayer = 2;
for (let i = 100; i <= 900; i = i + 200) {
  rollDice.addEventListener("click", () => {
    const diceRandomImg = Math.trunc(Math.random() * 6 + 1);
    setTimeout(() => {
      diceImage.classList.add("show-dice-img");
      diceImage.src = `./images/dice-${diceRandomImg}.png`;
    }, i);

    if (diceRandomImg !== 1) {
      if (i === 900) {
        setTimeout(() => {

          currentScore += diceRandomImg;
          document.querySelector(`.player${activePlayer}-current-dice-score-textContent`).textContent = currentScore;
        }, 900);
      }
    } else {
      if (i === 900) {
        setTimeout(() => {
          document.querySelector(`.player${activePlayer}-current-dice-score-textContent`).textContent = Number(0);
          activePlayer = activePlayer === 1 ? 2 : 1;
          currentScore = 0;


          unactivePlayer = unactivePlayer === 1 ? 2 : 1;

          document.querySelector(`.player${unactivePlayer}`).classList.add('unactive-color');

          document.querySelector(`.player${activePlayer}`).classList.add('active-color');
          document.querySelector(`.player${activePlayer}`).classList.remove('unactive-color');
        }, 900);
      }

    }

  });
}

/* run game screeen code
document.querySelector(".enter-screen-box").addEventListener("click", () => {
  document.querySelector(".enter-screen-wrapper").style.opacity = "0";
  document.querySelector(".enter-screen-wrapper").style.visibility = "hidden";
});
*/