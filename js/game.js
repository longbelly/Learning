//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number:");
var guess = Number(stringGuess);
console.log(guess);

//check guess
if (guess === secretNumber) {
    alert("Correct!");
} else if (guess < secretNumber) {
    alert("Too low! Guess again");
} else {
    alert("Too high! Guess again.");
}
