/* MAIN */
/* Play "Rock - Paper - Scissors" until user or computer reaches five wins */

let scorePlayer = 0;
let scoreComputer = 0;
const outputComputer = document.querySelector("#outputComputer");
const outputPlayer = document.querySelector("#outputPlayer");
const interimResult = document.querySelector("#interimResult");
const finalResult = document.querySelector('#finalResult');

const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

/* FUNCTIONS */

/* 1. Get from computer a random choice of "Rock", "Paper", "Scissors" */
function getComputerChoice () {
    /* 1.1 Generate random integer between one and three */ 
    let randomInteger = Math.floor(Math.random()*3 + 1);  
    /* 1.2 Associate number with 1 = "Rock"; 2 ="Paper" ; 3 = "Scissors" */
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
    /* 1.3 Return result */
    return computerChoice;
}
   
/* 2. Compare user's vs. computer's choice, update counts for user and computer, output winner */
function playRound (playerSelection, computerSelection) {  
    /* 3.0 Set result from previous round to zero */
    finalResult.textContent = "";

    /* 3.1 If user's choice = computer's choice return draw and do not update count */
    if (playerSelection === computerSelection) {
        interimResult.textContent = `Draw! You both chose ${playerSelection}.`;
    }
    /* 3.2 User (u) and computer (c): If u = "Paper" & c = "Rock" OR u = "Scissors" & c = "Paper" OR u ="Rock" & "Scissors" -> return player wins and update count*/
    else if (playerSelection === "paper" & computerSelection === "rock" || playerSelection === "scissors" & computerSelection === "paper" || playerSelection === "rock" & computerSelection === "scissors") {
        scorePlayer++;
        interimResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    /* 3.3 Else return computer wins and update count */
    else {
        scoreComputer++;
        interimResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    /* 3.4 Show scores and output winner */
    outputComputer.textContent = `Computers' score: ${scoreComputer}`;
    outputPlayer.textContent = `Players' score: ${scorePlayer}`;

    /* 3.5 Show overall winner */
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