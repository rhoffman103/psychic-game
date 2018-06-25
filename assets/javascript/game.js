// Player Object
var player = {
    // variables to hold # wins, losses, guesses left, array for guesses
    wins: 0,
    losses: 0,
    guessesLeft: 10,
    guesses: [],

    // Player Methods
    clearGuesses: function () {
        this.guesses.length = 0;
    }, 
    addGuess: function (guess) {
        this.guesses.push(guess);
    },
}

// computer object
var computer = {
    computerKeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    ChooseNewKey: function () {
        chosenKey = this.computerKeys[Math.floor(Math.random() * this.computerKeys.length)];
    },
}

const resetGame = function () {
    player.guessesLeft = 10;
    computer.ChooseNewKey();
    player.clearGuesses();
};

computer.ChooseNewKey();

// Creating variables to hold new HTML.
const updateTracker = function () {
    document.querySelector("#wins").innerHTML = player.wins;
    document.querySelector("#losses").innerHTML = player.losses;
    document.querySelector("#guessesLeft").innerHTML = player.guessesLeft;
    document.querySelector("#guesses").innerHTML = player.guesses.join(", ");
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // Perform guessCheck
    var checkDuplicateGuess = player.guesses.indexOf(userGuess);

    // Check if user input is a letter
    var isLetter = computer.computerKeys.indexOf(userGuess);
    
    // Logic determines outcome of game
    if(isLetter >= 0) {
        if (checkDuplicateGuess >= 0) {
            alert(`Already guessed letter "${userGuess}"!!!`);
        } else if (player.userGuess === chosenKey) {
            wins++;
            alert("Winner winner chicken dinner!");
            resetGame();
        } else if ((player.userGuess != chosenKey) && (checkDuplicateGuess == -1)) {
            if (player.guessesLeft <= 1) {
                losses++;
                alert("You lose! Try again!");
                resetGame();
            } else {
                player.guessesLeft -= 1;
                player.addGuess(userGuess);
            }
        }
    } else {
        alert("Choose a letter");
    }
    updateTracker();
}