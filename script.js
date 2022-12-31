'use strict';
const $ = selector => document.querySelector(selector);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  $('.message').textContent = message;
};

$('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    $('.number').textContent = secretNumber;

    $('body').style.backgroundColor = '#60b347';
    $('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      $('.highscore').textContent = highscore;
    }
  } else if (score !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      $('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      $('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     $('.message').textContent = '📈 Too high!';
  //     score--;
  //     $('.score').textContent = score;
  //   } else {
  //     $('.message').textContent = '💥 You lost the game';
  //     $('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     $('.message').textContent = '📉 Too low!';
  //     score--;
  //     $('.score').textContent = score;
  //   } else {
  //     $('.message').textContent = '💥 You lost the game';
  //     $('.score').textContent = 0;
  //   }
  // }
});

// Challenge
$('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  $('.score').textContent = score;
  $('.number').textContent = '?';
  $('.guess').value = '';
  $('body').style.backgroundColor = '#222';
  $('.number').style.width = '15rem';
});
