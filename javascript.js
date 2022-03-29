let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input")
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

function computerPlay() {
    const rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

function updateHumanScore() {
    playerScore++;
    const humanScore = document.querySelector(".humanScore");
    humanScore.textContent = playerScore;
}

function updatecomputerScore() {
    computerScore++;
    const cpuScore = document.querySelector(".computerScore");
    cpuScore.textContent = computerScore;
}

function endGame() {
    const winner = document.querySelector(".winner");
    if (playerScore == 5) { 
        winner.textContent = "You won.";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } else if (computerScore == 5) {
        winner.textContent = "You lost."
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}
    

/* This function takes two arguments : the user input and the computer selection, for each possibility, 
it checks the user input against the computer selection and return whether it's a win, a loss or a draw and
updates the scores accordingly */
function playRound(playerSelection) {
    computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
        console.log("It's a draw") ; 
        } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") ||
                  (playerSelection == "SCISSORS" && computerSelection == "ROCK") ||
                  (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
            updatecomputerScore();
            endGame();
        } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
                  (playerSelection == "PAPER" && computerSelection == "ROCK") ||
                  (playerSelection == "SCISSORS" && computerSelection == "PAPER"))  {
            updateHumanScore();    
            endGame();
            }
        }  

buttons.forEach(button =>{
    button.addEventListener('click', function(){
         playRound(button.value.toUpperCase());
    })
})
