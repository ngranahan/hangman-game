
// 1. Game page loads with instructions for user to press any key to start (all html and css)
// 2. When user presses any key computer selects random word from a list of possible words
// 3. Computer determines the length of the selected word
// 4. Function applies a number of divs, equal to the length of the word, to the html, to represent place holders for the letters. Each placeholder div needs to have an attribute tag that corresponds to the character that it represents in the string.
// 5. User receives a notification that they have x number of guesses. X should be equal to length of the selected word times 2.
// 6.  each time the user makes a guess, a counter is updated and added to the html to show how many guesses remain.
// 7. within the same function, each user guess will also display to the screen.
// 8. Computer evaluates if user guess equals any character in string
// 9. If the user guess equals any letter in the string, that particular placeholder div should be replaced with the letter.
// 10. If all of the letters in the string are selected before the number of guesses equals zero, a notification that the user won will display.
// 11. If user guesses equals zero before the user selects all of the letters in the string, a notification that the user lost will display and ask the user to play again.

// Issues: 1. had trouble figuring out how to start game with initial key stroke and collect user guesses with each following keystroke. Used start button to get around this first step. Will go back to fix if time allows.

var words = ["car", "bicycle", "airplane", "train"];
var keyStrokesCounter = 0;
var computerPick = "";
var numberGuesses = 0;

// Step 2, Step 3, Step 4, Step 5
// Start Button Function
function startGame() {
    computerPick = words[Math.floor(Math.random() * words.length)]
    console.log("Random Word: " + computerPick);
    var wordLength = computerPick.length;
    for (var i = 0; i < wordLength; i++) {
        var wordChar = computerPick.charAt(i);
        var placeHolder = document.createElement("div");
        document.getElementById("word-divs").appendChild(placeHolder).setAttribute("class", wordChar + " place-holder letter-guessed");
    }
    numberGuesses = wordLength * 2;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + numberGuesses;
}

// Step 6, Step 7, Step 8, Step 9

document.onkeyup = function (event) {
    keyStrokesCounter++
    var guessesLeft = numberGuesses - keyStrokesCounter;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
    var keyChar = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("letters-guessed").append(keyChar + ", ");
    if (computerPick.includes(keyChar)) {
        document.getElementsByClassName(keyChar)[0].innerHTML = keyChar;
        document.getElementsByClassName(keyChar)[0].classList.remove("place-holder");
    }
}




