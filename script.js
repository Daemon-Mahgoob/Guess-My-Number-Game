'use strict';
/*
// Selecting And Manipulating Elements

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
