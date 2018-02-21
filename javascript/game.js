
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
// 12. keep track of wins

// Issues: 1. had trouble figuring out how to start game with initial key stroke and collect user guesses with each following keystroke. Used start button to get around this first step. Will go back to fix if time allows. 2. Determine if player has won. 3. 

//Additional Steps If Time
// 13. If var keyChar (letter guessed) != any letter that has already been guessed append keyChar to HTML, else do nothing
// 14. If guessesLeft === wordLength display hint alert. Hint will be alert a rhyming word.
//15.

var words = ["milkshake", "cupcake", "sunday", "donut", "popsicle", "cake"];
var keyStrokesCounter = 0;
var computerPick = "";
var guessDisplay = "";
var numberGuesses = 0;
var guessesLeft = 0;
var userPick = [];
var wins = 0;
var indices = [];

// Step 2, Step 3, Step 4, Step 5
// Start Button Function
function startGame() {
    document.getElementById("word-divs").innerHTML = "";
    document.getElementById("letterGuessed").innerHTML = "";
    userPick = [];
    keyStrokesCounter = 0;
    computerPick = words[Math.floor(Math.random() * words.length)]
    console.log("Random Word: " + computerPick);
    var wordLength = computerPick.length;
    for (var i = 0; i < wordLength; i++) {
        userPick.push("-");
        var wordChar = computerPick.charAt(i);
        var placeHolder = document.createElement("div");
        document.getElementById("word-divs").appendChild(placeHolder).setAttribute("class", wordChar + " place-holder letter-guessed"); 
    }
    numberGuesses = wordLength * 2;
    guessDisplay = document.createElement("div");
    document.getElementById("guesses").appendChild(guessDisplay).setAttribute("class", "display-guesses");
    document.getElementsByClassName("display-guesses")[0].innerHTML = numberGuesses;

    //changes image to match computer selected word
    if (computerPick === "milkshake") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("milkshake").setAttribute("class", "img-responsive center-block img-active").classList.remove("hide");
    } else if (computerPick === "cupcake") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("cupcake").setAttribute("class", "img-responsive center-block img-active").classList.remove("hide");
    } else if (computerPick === "sunday") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("sunday").setAttribute("class", "img-responsive center-block img-active").classList.remove("hide");
    } else if (computerPick === "donut") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("donut").setAttribute("class", "img-responsive center-block img-active").classList.remove("hide");
    } else if (computerPick === "popsicle") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("popsicle").setAttribute("class", "img-responsive center-block img-active").classList.remove("hide");
    } else if (computerPick === "cake") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("cake").setAttribute("class", "img-responsive center-block img-active").classList.remove("hide");
    }
}

// Step 6, Step 7, Step 8, Step 9

document.onkeyup = function (event) {
    keyStrokesCounter++
    guessesLeft = numberGuesses - keyStrokesCounter;
    document.getElementsByClassName("display-guesses")[0].innerHTML = guessesLeft;
    var keyChar = String.fromCharCode(event.keyCode).toLowerCase();
    var guessed = document.createElement("div");
    document.getElementById("letterGuessed").appendChild(guessed).setAttribute("class", "guessed-letters");
    document.getElementsByClassName("guessed-letters")[0].append(" " + keyChar);
    if (computerPick.includes(keyChar)) {

        //finds each index for characters that appear multiple times and pushes them to their specific location in userPick array
        for (var n = 0; n < computerPick.length; n++) {
            if (computerPick[n] === keyChar) {
                userPick.splice(n, 1, keyChar);
            }
        }

        var x = document.getElementsByClassName(keyChar);
        for (var j = 0; j < x.length; j++) {
            x[j].innerHTML = keyChar;
            x[j].classList.remove("place-holder");
        }

        //determines wins and losses
        if (computerPick.length !== userPick.length)
            return false;
        for (var a = computerPick.length; a--;) {
            if (computerPick[a] !== userPick[a])
                return false;
        }
        // alert("you win");
        wins++
        var displayWins = document.createElement("div");
        document.getElementById("wins").appendChild(displayWins).setAttribute("class", "win-count");
        document.getElementsByClassName("win-count")[0].innerHTML = wins;
    }




}





