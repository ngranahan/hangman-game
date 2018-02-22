
// Things I would Fix with More Time: 1. had trouble figuring out how to start game with initial key stroke and collect user guesses with each following keystroke. Used start button to get around this first step. 2. Prevent guessesLeft from going into negative numbers if player continues to press buttons 3. Display alert when player loses. Seems like comparison code isn't working.


var words = ["milkshake", "cupcake", "sundae", "donut", "popsicle", "cake"];
var keyStrokesCounter = 0;
var computerPick = "";
var guessDisplay = "";
var allGuesses = [];
var numberGuesses = 0;
var guessesLeft = 0;
var userPick = [];
var wins = 0;
var loseMessage = "";

// Step 2, Step 3, Step 4, Step 5
// Start Button Function
function startGame() {
    document.getElementById("word-divs").innerHTML = "";
    document.getElementById("letterGuessed").innerHTML = "";
    document.getElementById("winAlert").innerHTML = "";
    userPick = [];
    allGuesses = [];
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
        document.getElementById("milkshake").setAttribute("class", "img-responsive center-block img-active");
    } else if (computerPick === "cupcake") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("cupcake").setAttribute("class", "img-responsive center-block img-active");
    } else if (computerPick === "sundae") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("sundae").setAttribute("class", "img-responsive center-block img-active");
    } else if (computerPick === "donut") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("donut").setAttribute("class", "img-responsive center-block img-active");
    } else if (computerPick === "popsicle") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("popsicle").setAttribute("class", "img-responsive center-block img-active");
    } else if (computerPick === "cake") {
        document.getElementsByClassName("img-active")[0].setAttribute("class", "img-responsive center-block hide");
        document.getElementById("cake").setAttribute("class", "img-responsive center-block img-active");
    }
}

// Step 6, Step 7, Step 8, Step 9

document.onkeyup = function (event) {
    var keyChar = String.fromCharCode(event.keyCode).toLowerCase();
    var allGuessesStr = allGuesses.toString();
    //if key pressed does not equal any of the previously pressed keys, do the following
    if (allGuessesStr.includes(keyChar) === false) {
        keyStrokesCounter++
        guessesLeft = numberGuesses - keyStrokesCounter;
        document.getElementsByClassName("display-guesses")[0].innerHTML = guessesLeft;
        allGuesses.push(" " + keyChar);
        document.getElementById("letterGuessed").innerHTML = allGuesses;
    }
    
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
        loseMessage = document.createElement("div");
        document.getElementById("winAlert").appendChild(loseMessage).setAttribute("class", "special alert alert-success alert-dismissible");
        document.getElementsByClassName("special")[0].innerHTML = "<p>Yay! You won. Now let's play again!</p>";
        wins++
        var displayWins = document.createElement("div");
        document.getElementById("wins").appendChild(displayWins).setAttribute("class", "win-count");
        document.getElementsByClassName("win-count")[0].innerHTML = wins;
    }
    //not running for some reason. needs testing.
    if (guessesLeft === 0) {
        alert("you lose.")
        loseMessage = document.createElement("div");
        document.getElementById("loseAlert").appendChild(loseMessage).setAttribute("class", "lose alert alert-warning alert-dismissible");
        document.getElementsByClassName("lose")[0].innerHTML = "<p>No sprinkles for you! Let's play again!</p>";
    }

}







