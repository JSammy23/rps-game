let playerScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice(){
    let random = Math.random();
    if (random <= 0.33){
        return "rock";
    } else if (random >= 0.66){
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(userChoice, computerChoice) {
    //Tie breaker
    if (userChoice === computerChoice){
        tie++;
        return "Tie!"
    }
    else if ( //Player wins scenarios
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        playerScore++;
        return "You Win!"
    }
     else if ( //Computer wins scenarios
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore++;
        return "Computer Wins!"
    }
}

function game(){
    for (var i = 0; i < 5; i++){
        //let playerChoice = prompt("Choose Rock, Paper, or Scissors").toUpperCase();
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice,computerChoice));
        console.log("Player Score = " + playerScore);
        console.log("Computer Score = " + computerScore);
        console.log("Tie Breakers = " + tie);
    }
}





// User Interface //
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', player);
paper.addEventListener('click', player);
scissors.addEventListener('click', player);

function player() {
    var userChoice = this.id;
    let computerChoice = getComputerChoice();
    console.log("user: " + userChoice);
    console.log("Computer: " + computerChoice);
    console.log(playRound(userChoice, computerChoice));
}

