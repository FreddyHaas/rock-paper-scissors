/* MAIN */
/* Play "Rock - Paper - Scissors" until user or computer reaches five wins */

let scorePlayer = 0;
let scoreComputer = 0;

while (scorePlayer < 5 && scoreComputer < 5 ) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();
    console.log(playRound(playerSelection, computerSelection));
    console.log (scorePlayer);
    console.log (scoreComputer);
} 

if (scorePlayer === 5) {
    console.log("Congrats, you win!");
}
else {
    console.log("You lost, try again :) ");
}
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

/* 2. Get from user a random choice of "Rock", "Paper", "Scissors" */
function getPlayerSelection () {
    /* 2.1 Prompt user for input */
    let userInput = prompt ("Now you choose: rock, paper or scissors?");
    /* 2.2 Clean up user input and show prompt again if input is not valid*/
    let cleanUserInput = userInput.toLowerCase();
    while (!(cleanUserInput === "rock" || cleanUserInput === "paper" || cleanUserInput === "scissors")) {
        userInput = prompt ("Invalid input! Type: rock, paper or scissors");
        cleanUserInput = userInput.toLowerCase();
    }
    /* 2.3 Return result */
    return cleanUserInput;
}

/* 3. Compare user's vs. computer's choice, update counts for user and computer, output winner */
function playRound (playerSelection, computerSelection) {  
    /* 3.1 If user's choice = computer's choice return draw and do not update count */
    if (playerSelection === computerSelection) {
        return `Draw! You both chose ${playerSelection}.`;
    }
    /* 3.2 User (u) and computer (c): If u = "Paper" & c = "Rock" OR u = "Scissors" & c = "Paper" OR u ="Rock" & "Scissors" -> return player wins and update count*/
    else if (playerSelection === "paper" & computerSelection === "rock" || playerSelection === "scissors" & computerSelection === "paper" || playerSelection === "rock" & computerSelection === "scissors") {
        scorePlayer++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    /* 3.3 Else return computer wins and update count */
    else {
        scoreComputer++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}