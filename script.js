/* 
JS implementation of Rock, Paper, Scissor Program

Program Structure
1. Function to capture random choice (using Math.random() function)
2. Function to play a single game
3. Function to loop through mentioned number of games and prompting / alerting the result

*/ 

// defining constants
const OPTIONS = ['rock', 'paper', 'scissor'];
const totalWins = 5;
let playerWins = 0;
let computerWins = 0;
let draw = 0;
const computerName = "Mogambo";

/*
Generates a random choice out of Options declared in the constant declaration section
*/
function getComputerChoice(){
    return  OPTIONS[Math.floor(Math.random() * 3)];
}

/*
Includes game rules. Takes the option selected by the player and random generated option for the Computer and returns the winner
*/
function singleRoundGame(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return "Draw";   
    }   
    else if (computerSelection ==="rock" && playerSelection === "scissor"){
        return computerName;
    }
    else if (computerSelection ==="scissor" && playerSelection === "paper"){
        return computerName; 
    }
    else if (computerSelection ==="paper" && playerSelection === "rock"){
        return computerName;
    }
    else if (computerSelection ==="scissor" && playerSelection === "rock"){
        return playerName;
    }
    else if (computerSelection ==="paper" && playerSelection === "scissor"){
        return playerName;
    }
    else if (computerSelection ==="rock" && playerSelection === "paper"){
        return playerName;
    }
}



/*
Main program execution. Defining the story and prompt component.
*/
alert("Well Hello Stranger!!!! I see you sneaking up there!!");
alert("It looks like you are trying to SAVE THE WORLD")
alert("The fate of the world is in your hands. Lets play a GAME!!")
const playerName = prompt("I command you to divulge your name, stranger!!");

while (playerWins < totalWins && computerWins < totalWins){
    let playerSelection =  prompt(`Utter your response. Your options are: ${OPTIONS}`).toLowerCase();
    let computerSelection = getComputerChoice();
    let winnerRound = singleRoundGame(playerSelection, computerSelection);
    if (winnerRound === computerName){
        computerWins += 1;
    }
    else if(winnerRound === "Draw") {
        draw += 1;
    }
    else {
        playerWins += 1;
    }
    if (winnerRound === computerName ){
        alert(`The winner is ${computerName}!!  ${computerName}'s response was ${computerSelection} and ${playerName}'s response was ${playerSelection}.`);
        alert(`Score: ${playerName}: ${playerWins}   ${computerName}: ${computerWins}   Draw:${draw}.`);
    }
    else if (winnerRound === "Draw"){
        alert(`There is no winner. The match is Draw!! ${computerName}'s response was ${computerSelection} and ${playerName}'s response was ${playerSelection}.`);
        alert(`Score: ${playerName}: ${playerWins}   ${computerName}: ${computerWins}   Draw:${draw}.`);
    }
    else{
        alert(`The winner is ${playerName}!! ${computerName}'s response was ${computerSelection} and ${playerName}'s response was ${playerSelection}.`);
        alert(`Score: ${playerName}: ${playerWins}   ${computerName}: ${computerWins}   Draw:${draw}.`);
    }
}
alert("This is the moment of Truth")

if (playerWins > computerWins){
    alert(`The ultimate winner is ${playerName}. The world lives another day.`);
}
else{
    alert(`The ultimate winner is ${computerName}. The world is lost. You should be ASHAMED.`)
}