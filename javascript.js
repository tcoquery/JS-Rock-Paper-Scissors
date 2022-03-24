let playerScore = 0;
let computerScore = 0;
const rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];

/* This chooses a random index in the array containing our three choices
and returns the answer */
function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}
        
/* This function takes two arguments : the user input and the computer selection, for each possibility, 
it checks the user input against the computer selection and return whether it's a win, a loss or a draw and
updates the scores accordingly */
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        console.log("It's a draw") ; 
        } else if (playerSelection == "ROCK" & computerSelection == "PAPER") {
            computerScore++;
            console.log(`You lose ! The score is Player : ${playerScore} - Computer : ${computerScore}`) ;
        } else if (playerSelection == "ROCK" & computerSelection == "SCISSORS") {
            playerScore++;
            console.log(`You win ! The score is Player : ${playerScore} - Computer : ${computerScore}`) ;      
        } else if (playerSelection == "PAPER" & computerSelection == "SCISSORS") {
            computerScore++;
            console.log(`You lose ! The score is Player : ${playerScore} - Computer : ${computerScore}`) ;     
        } else if (playerSelection == "PAPER" & computerSelection == "ROCK") {
            playerScore++;
            console.log(`You win ! The score is Player : ${playerScore} - Computer : ${computerScore}`) ;        
        } else if (playerSelection == "SCISSORS" & computerSelection == "ROCK") {
            computerScore++;
            console.log(`You lose ! The score is Player : ${playerScore} - Computer : ${computerScore}`) ;
        } else if (playerSelection == "SCISSORS" & computerSelection == "PAPER") {
            playerScore++;
            console.log(`You win ! The score is Player : ${playerScore} - Computer : ${computerScore}`) ; 
        }
    }

function game() {

    /* Plays a round of Rock, Paper, Scissors until five rounds are played */
    for (let i = 0; i < 5; i++) {

        /* Asks the user his choice */
        let userInput = prompt("Rock, Paper, Scissors ?");
        
        /* Checks whether the user input a correct answer 
        while (userInput.toUpperCase() !== "ROCK" || "PAPER" || "SCISSORS") {
            throw "Select again"
        } */

        let computerSelection = computerPlay();
        let playerSelection = userInput.toUpperCase();
        playRound(playerSelection, computerSelection);
    }

    /* Once five rounds have been played, it checks the score of the player against the computer and displays the winner*/
    if (playerScore > computerScore) {
        console.log("You win the game :)") ;
    } else if (playerScore < computerScore) {
        console.log("You lose the game :(") ;
    } else {
        console.log("No one won the game :|") ;
    }

}

game();