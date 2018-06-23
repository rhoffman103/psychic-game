// variables to hold # wins, losses, guesses left
var wins = 0
var losses = 0
var guessesLeft = 9

// arrays for computerKeys and guesses
var computerKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var guesses = [
    // {guess: null,
    // space: ' '}
]

// Randomly chooses a choice from the options array. This is the Computer's guess.
const ChooseNewKey = function () {
    chosenKey = computerKeys[Math.floor(Math.random() * computerKeys.length)];
}
ChooseNewKey();

// Erase content inside guesses array
const clearGuesses = function () {
    guesses.length = 0;
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Perform guessCheck
    var checkDuplicateGuess = guesses.indexOf(userGuess);

    // Check if user input is a letter
    var isLetter = computerKeys.indexOf(userGuess);

    // Adds userGuess to array of guesses
    const addGuess = function (guess) {
        guesses.push(guess)
    }
    
    // Logic determines outcome of game
    if(isLetter >= 0) {
        if (checkDuplicateGuess >= 0) {
            alert(`Already guessed letter "${userGuess}"!!!`);
        }
        if (userGuess === chosenKey) {
            wins++;
            guessesLeft = 9;
            ChooseNewKey();
            clearGuesses();
        } 
        else if ((userGuess != chosenKey) && (checkDuplicateGuess == -1)) {
            guessesLeft = guessesLeft -1;
            addGuess(userGuess);
        }
        if (guessesLeft < 1) {
            losses++;
            guessesLeft = 9;
            ChooseNewKey();
            clearGuesses();
        }
    } else {
        alert("Choose a letter");
    }
    
    // alert(userGuess + chosenKey);

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
    `<p>Wins: ${wins}</p>
    <p>Losses: ${losses}</p>
    <p>Guesses Left: ${guessesLeft}</p>
    <p>Your Guesses so far:${guesses}</p>`

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html; 
}
