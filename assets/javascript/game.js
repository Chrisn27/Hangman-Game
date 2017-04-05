var options = ["cat", "dog", "hamster", "hedgehog", "fox", "ferret", "fish", "corgi", "golden",
"labrador", "voldemort", "slytherin", "hufflepuff", "gryffindor", "ravenclaw", "moldy", "wand",
"beer", "tacos", "burrito", "moldy", "lamp", "packers", "ducks", "angels", "spurs", "avocado",
"mazda", "bottle", "logic", "diablo", "wizard", "barbarian", "amazon", "druid", "sushi", "stark"];
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userGuesses = [];
var numGuesses = 0;
var wordLength = "";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wordBlanks = [];
var blanks= 0;
var test = [];
var setWord = [];

    var reset = function() {

	  	guessesLeft = 10;
	  	userGuesses = [];

	}
    
    window.onload = function() {
    startGame();
    }

    // function called on load to

    function startGame() {

    guessesLeft = 10;
    userGuesses = [];
    
    var gameWord = options[Math.floor(Math.random() * options.length)];
    setWord.push(gameWord)

    console.log(gameWord);

    //splits word into array
    var wordLength = gameWord.split("");

    // I've got a blank space for you
    blanks = wordLength.length;
    for (var i = 0; i < blanks; i++) {
    wordBlanks.push("_")

    }

    console.log(wordBlanks.join(" "));

    document.querySelector("#targetword").innerHTML = wordBlanks.join("");
    document.querySelector("#remaining").innerHTML = guessesLeft;

    }

	// Determines which key was pressed by user
    document.onkeydown = function(event) {
        
    // translates user input to lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // adds last user button down to UserGuesses and pushes guesses letters to page
    userGuesses.push(userGuess);
    var guessed = userGuesses.join(', ') + "</p>";
    document.querySelector("#guessedLetters").innerHTML = guessed;
    document.querySelector("#remaining").innerHTML = guessesLeft;
    
    // testing setWord global access
    console.log(setWord);
    
    };

          