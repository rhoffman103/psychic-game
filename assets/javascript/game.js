// variables to hold # wins, losses, guesses left
var wins = 0
var losses = 0
var guessesLeft = 10
var space = " "

// arrays for computerKeys and guesses
var computerKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var guesses = [];
var allGuesses = "";

// Randomly chooses a choice from the options array. This is the Computer's guess.
const ChooseNewKey = function () {
    chosenKey = computerKeys[Math.floor(Math.random() * computerKeys.length)];
};
ChooseNewKey();

// Erase content inside guesses array
const clearGuesses = function () {
    guesses.length = 0;
};

// Print each guess with a comma and space
const addGuess = function (guess) {
    guesses.push(guess);
};

const resetGame = function () {
    guessesLeft = 10;
    ChooseNewKey();
    clearGuesses();
}

// Creating variables to hold new HTML.
const updateTracker = function () {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#guesses").innerHTML = guesses.join(", ");
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // Perform guessCheck
    var checkDuplicateGuess = guesses.indexOf(userGuess);

    // Check if user input is a letter
    var isLetter = computerKeys.indexOf(userGuess);

    // if (!userGuess.match(/[a-z]/i)) return;
    
    // Logic determines outcome of game
    if(isLetter >= 0) {
        if (checkDuplicateGuess >= 0) {
            alert(`Already guessed letter "${userGuess}"!!!`);
        } else if (userGuess === chosenKey) {
            wins++;
            alert("Winner winner chicken dinner!");
            resetGame();
        } else if ((userGuess != chosenKey) && (checkDuplicateGuess == -1)) {
            if (guessesLeft <= 1) {
                losses++;
                alert("You lose! Try again!");
                resetGame();
            } else {
                guessesLeft -= 1;
                addGuess(userGuess);
            }
        }
    } else {
        alert("Choose a letter");
    }

    updateTracker();
}