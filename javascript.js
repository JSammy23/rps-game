let userChoice = prompt("Please choose Rock, Paper, or Scissors").toUpperCase();
console.log(userChoice);
let computerChoice = Math.random();
if (computerChoice <= 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67){
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log(computerChoice);