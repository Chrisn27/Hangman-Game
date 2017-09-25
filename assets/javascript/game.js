var options = ["cat", "dog", "hamster", "hedgehog", "fox", "ferret", "fish", "corgi", "golden",
"labrador", "voldemort", "slytherin", "hufflepuff", "gryffindor", "ravenclaw", "moldy", "wand",
"beer", "tacos", "burrito", "moldy", "lamp", "packers", "ducks", "angels", "spurs", "avocado",
"mazda", "bottle", "logic", "diablo", "wizard", "barbarian", "amazon", "druid", "sushi", "stark"];
var userGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wordBlanks = [];
var gameWord;
var dummy = true;

    // function called on load to

    function reset () {
        guessesLeft = 10;
        userGuesses = [];
        wordBlanks = [];
        startGame();    
    };

    function startGame() {
        
        gameWord = options[Math.floor(Math.random() * options.length)];

        // I've got a blank space for you
        for (var i = 0; i < gameWord.length; i++) {
        wordBlanks.push("_")

        }

        // Determines which key was pressed by user

        document.onkeydown = function(event) {
        
        // translates user input to lowercase
        userGuess = event.key.toLowerCase();
        var guessIsGood = userGuess.match("^[a-zA-Z]*$");

            if (guessIsGood) {

                var arr = [];

            if (gameWord.indexOf(userGuess) > -1){
     
                for (var i=0; i < gameWord.length; i++) {

                    if (userGuess==gameWord.charAt(i)) {

                        wordBlanks[i]=userGuess;

                    } 
                }


                if (wordBlanks.join("") == gameWord) {
                    alert("You win!  The word was " + gameWord);
                    wins++;
                    reset();
                }

                } else { 

                guessesLeft--;

                if (guessesLeft < 0) {
                    alert("You lose!  The word was " + gameWord);
                    losses++;
                    reset();   
                }

                }

                console.log(wordBlanks.join("")); 

                userGuesses.push(userGuess);
                var guessed = userGuesses.join(', ') + "</p>";
                document.querySelector("#guessedLetters").innerHTML = guessed;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                document.querySelector("#losses").innerHTML = "Losses: " + losses;
                document.querySelector("#remaining").innerHTML = guessesLeft;
                document.querySelector("#targetword").innerHTML = wordBlanks.join("");
                document.querySelector("#remaining").innerHTML = guessesLeft;
                console.log(gameWord);
    
            }
        };
};

startGame();
          