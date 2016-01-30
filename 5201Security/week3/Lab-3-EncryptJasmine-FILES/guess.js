function guessNum(guess) {
    
    var secretGuess = 10;
    if (isNaN(guess)) {
        throw ("A number was not input");
    }
    if (guess === "") {
        throw ("You did not enter a number.");
    }
    if (guess > 10) {
        throw ("You guessed too high.");
    }
    if (guess < 1) {
        throw ("You guessed too low.");
    }
    if (parseInt(guess) === secretGuess) {
        return "You guessed it, it was " + secretGuess + "!";
    }else{
        return "Guess again.";
    }
}