/* 1. Get from computer a random choice of "Rock", "Paper", "Scissors" */
function getComputerChoice () {
    /* 1.1 Generate random integer between one and three */ 
    let randomInteger = Math.floor(Math.random()*3 + 1);
    console.log(randomInteger);   
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
console.log (getComputerChoice());

/* 2. Get from user a random choice of "Rock", "Paper", "Scissors" */
function getPlayerSelection () {
    /* 2.1 Prompt user for input */
    let userInput = prompt ("Now you choose: rock, paper or scissor?");
    /* 2.2 Clean up user input and show prompt again if input is not valid*/
    let cleanUserInput = userInput.toLowerCase();
    while (!(cleanUserInput === "rock" || cleanUserInput === "paper" || cleanUserInput === "scissor")) {
        userInput = prompt ("Invalid input! Type: rock, paper or scissor");
        cleanUserInput = userInput.toLowerCase();
    }
    /* 2.3 Return result */
    return cleanUserInput;
}
console.log (getPlayerSelection());

/* 3. Compare user's vs. computer's choice, update counts for user and computer, output winner */
    /* 3.1 If user's choice = computer's choice return draw and do not update count */
    /* 3.2 User (u) and computer (c): If u = "Paper" & c = "Rock" OR u = "Scissor" & c = "Paper" OR u ="Rock" & "Scissor" -> return player wins and update count*/
    /* 3.3 Else return computer wins and update count */
/* 4. Repeat steps one to three until user or computer reaches five wins and declare overall winner */