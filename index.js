var prompt = require('prompt');


console.log('Donnez un chiffre entre 1 et 100 :');

var mysteryNumber = Math.floor((Math.random() * 100) + 1);
var count = 3;

function getNumber() {
    prompt.start();
    prompt.get(['number'], function (err, result) {
        calculateScore(parseInt(result.number));
    });
};

function calculateScore(playerNumber) {
    if (mysteryNumber === playerNumber) {
        winGame();
    }
    else if (mysteryNumber < playerNumber) {
        console.log('Choisissez un nombre plus petit');
        count--;
        getNumber();
    } else if (mysteryNumber > playerNumber) {
        console.log('Choisissez un nombre plus grand !');
        count--;
        getNumber();
    } else if (count === 0) {
        looseGame();
    }
}
function winGame() {
    return console.log('Bravo !');
}

function looseGame() {
    return console.log('Perdu !');
}

getNumber();