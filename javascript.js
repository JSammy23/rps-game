let playerScore = 0;
let computerScore = 0;
let tie = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const userScore = document.querySelector('#userScore');
const comScore = document.querySelector('#computerScore');
const roundResults = document.querySelector('#results');
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const endMessage = document.querySelector('.modal-body');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
      reloadPage()
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
      reloadPage()
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

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
        roundResults.textContent= "Tie!"
        return "Tie!"
    }
    else if ( //Player wins scenarios
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        playerScore++;
        roundResults.textContent= `You Win! ${userChoice} beats ${computerChoice}`;
        return "You Win!"
    }
     else if ( //Computer wins scenarios
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore++;
        roundResults.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
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

function reloadPage() {
  window.location.reload();
}
// User Interface //

// Buttons to select player choice and start round //
rock.addEventListener('click', player);
paper.addEventListener('click', player);
scissors.addEventListener('click', player);

function player() {
    let userChoice = this.id;
    let computerChoice = getComputerChoice();
    console.log("Player: " + userChoice);
    console.log("Computer: " + computerChoice);
    console.log(playRound(userChoice, computerChoice));
    // ScoreBoard //
    userScore.innerHTML = `Score: ${playerScore}`;
    comScore.innerHTML = `Score: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5){
        openModal(modal)
        endMessage.textContent= "That's all Folks!"
    }
}

