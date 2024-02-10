let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    guesses++;

    if (guess < randomNumber) {
        document.getElementById("result").innerText = "Too low! Try again.";
    } else if (guess > randomNumber) {
        document.getElementById("result").innerText = "Too high! Try again.";
    } else {
        document.getElementById("result").innerText = "Congratulations! You guessed the number in " + guesses + " guesses.";
    }
}
