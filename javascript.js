let playerScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice(){
    let random = Math.random();
    if (random <= 0.33){
        return "ROCK";
    } else if (random >= 0.66){
        return "PAPER";
    } else {
        return "SCISSORS"
    }
}

function playRound(userChoice, computerChoice) {
    //Tie breaker
    if (userChoice === computerChoice){
        tie++;
        return "Tie!"
    }
    else if ( //Player wins scenarios
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ){
        playerScore++;
        return "You Win!"
    }
     else if ( //Computer wins scenarios
        (userChoice === "ROCK" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "ROCK")
    ){
        computerScore++;
        return "Computer Wins!"
    }
}

function game(){
    for (var i = 0; i < 5; i++){
        let playerChoice = prompt("Choose Rock, Paper, or Scissors").toUpperCase();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice,computerChoice));
        console.log("Player Score = " + playerScore);
        console.log("Computer Score = " + computerScore);
        console.log("Tie Breakers = " + tie);
    }
}



console.log(game());