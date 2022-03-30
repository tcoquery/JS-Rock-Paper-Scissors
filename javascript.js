let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".button")
const playAgain = document.querySelector(".playAgain")
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const winner = document.querySelector(".winner");
const choices = document.querySelector(".choices");
const roundWinner = document.querySelector(".roundWinner");

function computerPlay() {
    const rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

function tie() {
    roundWinner.textContent = "It's a tie.";
} 

function showChoices(playerChoice, computerChoice) {
    choices.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}`;
}

function updateHumanScore() {
    playerScore++;
    const humanScore = document.querySelector(".humanScore");
    humanScore.textContent = playerScore;
    roundWinner.textContent = "You win this round";
}

function updateComputerScore() {
    computerScore++;
    const cpuScore = document.querySelector(".computerScore");
    cpuScore.textContent = computerScore;
    roundWinner.textContent = "The computer wins this round";
}

function endGame() {
    
    if (playerScore == 5) { 
        winner.textContent = "You won.";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        roundWinner.textContent ="";
    } 
    if (computerScore == 5) {
        winner.textContent = "You lost."
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        roundWinner.textContent ="";
    }
}
    

/* This function takes two arguments : the user input and the computer selection, for each possibility, 
it checks the user input against the computer selection and return whether it's a win, a loss or a draw and
updates the scores accordingly */
function playRound(playerSelection) {
    computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
        showChoices(playerSelection, computerSelection);
        tie();
        } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") ||
                  (playerSelection == "SCISSORS" && computerSelection == "ROCK") ||
                  (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
            showChoices(playerSelection, computerSelection);
            updateComputerScore();
            endGame();
        } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
                  (playerSelection == "PAPER" && computerSelection == "ROCK") ||
                  (playerSelection == "SCISSORS" && computerSelection == "PAPER"))  {
            showChoices(playerSelection, computerSelection);
            updateHumanScore();
            endGame();
            }
        }  

playAgain.addEventListener("click", function(){
    location.reload();
})

buttons.forEach(button =>{
    button.addEventListener("click", function(){
         playRound(button.value.toUpperCase());
    })
})
