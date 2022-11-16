let userChoice = prompt("Please choose Rock, Paper, or Scissors").toUpperCase();
console.log(userChoice);
let computerChoice = Math.random();
if (computerChoice <= 0.34) {
    computerChoice = "ROCK";
} else if (computerChoice <= 0.67){
    computerChoice = "PAPER";
} else {
    computerChoice = "SCISSORS";
}
console.log(computerChoice);

let playerScore = 0;
let computerScore = 0;
let roundWinner = " ";

function playRound(userChoice, computerChoice){
    if (userChoice === computerChoice){
        roundWinner = "Tie"
    }
    if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ){
        playerScore++;
        roundWinner = "Player"
    }
    if (
        (userChoice === "ROCK" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "ROCK")
    ){
        computerScore++;
        roundWinner = "Computer"
    }
}
console.log(playRound(userChoice,computerChoice));