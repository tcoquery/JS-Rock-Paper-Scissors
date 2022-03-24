const rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    /* This chooses a random index in the array containing our three choices
    and returns the answer */
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

/* Asks the user his choice */
let userInput = prompt("Rock, Paper, Scissors ?");

/* Checks whether the user input a correct answer 
while (userInput.toUpperCase() !== "ROCK" || "PAPER" || "SCISSORS") {
    throw "Select again"
} */

function game(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw"; 
    } else if (playerSelection == "ROCK" & computerSelection == "PAPER") {
        return "You lose !";  
    } else if (playerSelection == "ROCK" & computerSelection == "SCISSORS") {
        return "You win !";
    } else if (playerSelection == "PAPER" & computerSelection == "SCISSORS") {
        return "You lose !";
    } else if (playerSelection == "PAPER" & computerSelection == "ROCK") {
        return "You win !";
    } else if (playerSelection == "SCISSORS" & computerSelection == "ROCK") {
        return "You lose !";
    } else if (playerSelection == "SCISSORS" & computerSelection == "PAPER") {
        return "You win !";
    }
}

const computerSelection = computerPlay();
const playerSelection = userInput.toUpperCase();
console.log(game(playerSelection, computerSelection));