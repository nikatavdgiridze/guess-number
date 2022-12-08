'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // no input
    if (!guess) {
        displayMessage('No Number!');
        // player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game');
            displayScore(0);
        }
    }
    // guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


});

// again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('body').style.backgroundColor = '#222';

    displayScore(score);

    displayMessage('Start guessing...');

    document.querySelector('.guess').value = '';

});