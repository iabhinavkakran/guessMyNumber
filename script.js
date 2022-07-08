'use strict';

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // No Number Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Input';
  }
  // Correct Guess
  else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '🥳 Correct Guess';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Guess is higher than Number
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Guess is lower than Number
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Guess out of Range of 1 to 20
  else if (guess >= 21 || guess <= 0) {
    document.querySelector('.message').textContent = '😒 Out Of Range';
  }

  // Resetting all values to play again
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    guess = document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
