/* MAIN */
/* Play "Rock - Paper - Scissors" until user or computer reaches five wins */

let scorePlayer = 0;
let scoreComputer = 0;
const outputComputer = document.querySelector("#outputComputer");
const outputPlayer = document.querySelector("#outputPlayer");
const interimResult = document.querySelector("#interimResult");
const finalResult = document.querySelector('#finalResult');

const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', () => initializeGame("rock"));

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => initializeGame("paper"));

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', () => initializeGame("scissors"));

/* FUNCTIONS */

/* 1. Get from computer a random choice of "Rock", "Paper", "Scissors" */
function getComputerChoice () {
    let randomInteger = Math.floor(Math.random()*3 + 1);  
    let computerChoice;
    switch(randomInteger) {
    case 1:
        computerChoice = "rock";
        break;
    case 2:
        computerChoice = "paper";
        break;
    case 3:
        computerChoice = "scissors";
        break;   
    }
    return computerChoice;
}
   
/* 2. Compare user's vs. computer's choice, update counts for user and computer, output winner */
function playRound (playerSelection, computerSelection) {  
    finalResult.textContent = "";

    if (playerSelection === computerSelection) {
        interimResult.textContent = `Draw! You both chose ${playerSelection}.`;
    }
    else if (playerSelection === "paper" & computerSelection === "rock" || playerSelection === "scissors" & computerSelection === "paper" || playerSelection === "rock" & computerSelection === "scissors") {
        scorePlayer++;
        interimResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        scoreComputer++;
        interimResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    
    outputComputer.textContent = `Computers' score: ${scoreComputer}`;
    outputPlayer.textContent = `Players' score: ${scorePlayer}`;
    
    if (scorePlayer === 5) {
        finalResult.textContent = "Game over! You win!";
        scorePlayer = 0;
        scoreComputer = 0;
    }

    if (scoreComputer === 5) {
        finalResult.textContent = "Oh no, you lost! Try again :)";
        scorePlayer = 0;
        scoreComputer = 0;
    }
}

/* Initialize Game*/ 

function initializeGame(playerSelection) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}
    