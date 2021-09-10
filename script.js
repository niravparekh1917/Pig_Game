'use strict';
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const diceLogo = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// diceLogo.classList.add('hidden');
let isPlayer1Active = true;
let diceNo = 0;
console.log(diceNo);
let currentScoreValue = 0;
function One() {
  currentScore0.textContent = currentScoreValue;
}
function Two() {
  isPlayer1Active = false;
  currentScore0.textContent = 0;
  currentScoreValue = 0;
  player0.classList.remove('player--active');
  player1.classList.add('player--active');
}
function Three() {
  currentScore1.textContent = currentScoreValue;
}
function Four() {
  isPlayer1Active = true;
  currentScore1.textContent = 0;
  currentScoreValue = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
btnRoll.addEventListener('click', function () {
  diceNo = Math.trunc(Math.random() * 6) + 1;
  diceLogo.src = `./dice-${diceNo}.png`;
  diceLogo.classList.remove('hidden');
  currentScoreValue += diceNo;

  if (diceNo !== 1 && isPlayer1Active) {
    One();
  } else if (diceNo === 1 && isPlayer1Active) {
    Two();
  } else if (diceNo !== 1 && !isPlayer1Active) {
    Three();
  } else {
    Four();
  }
});
let scoreOfPlayer1 = 0;
let scoreOfPlayer2 = 0;
btnHold.addEventListener('click', function () {
  if (isPlayer1Active) {
    scoreOfPlayer1 += currentScoreValue;
    scoreEl0.textContent = scoreOfPlayer1;
    Two();
  } else {
    scoreOfPlayer2 += currentScoreValue;
    scoreEl1.textContent = scoreOfPlayer2;
    Four();
  }
});

btnNew.addEventListener('click', function () {
  Two();
  Four();
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceLogo.classList.add('hidden');
});

// if (diceNo !== 1 && isPlayer1Active) {
//   console.log(`if`);
//   console.log(isPlayer1Active);
//   currentScore0.textContent = currentScoreValue;
// } else if (diceNo === 1) {
//   console.log(`if else`);
//   console.log(isPlayer1Active);
//   currentScore0.textContent = 0;
//   currentScoreValue = 0;
//   player0.classList.remove('player--active');
//   player1.classList.add('player--active');
//   isPlayer1Active = false;
// }
// if (diceNo !== 1 && !isPlayer1Active) {
//   console.log(`if else if`);
//   console.log(isPlayer1Active);
//   currentScore1.textContent = currentScoreValue;
// } else {
//   console.log(`if else if else`);
//   console.log(isPlayer1Active);
//   currentScore1.textContent = 0;
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');
//   isPlayer1Active = true;
// }
