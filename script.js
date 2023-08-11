// JS implementation of Rock, Paper, Scissor Program
// The aim is to follow the mentioned steps in the tutorial and completing the problem

const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return  OPTIONS[Math.floor(Math.random() * 3)];
}

function singleRoundGame(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return "Draw";   
    }   
    else if (computerSelection ==="rock" && playerSelection === "scissor"){
        return "Computer";
    }
    else if (computerSelection ==="scissor" && playerSelection === "paper"){
        return "Computer";
    }
    else if (computerSelection ==="paper" && playerSelection === "rock"){
        return "Computer";
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

// testing single game

alert("Welcome to the Game of Life and Death!!!!");
const playerName = prompt("Please share your name!!!");
let playerSelection =  prompt(`Please share your response. Your options are ${OPTIONS}`).toLowerCase();
let computerSelection = getComputerChoice();
let winnerFirstRound = singleRoundGame(playerSelection, computerSelection );
if (winnerFirstRound === "Computer" ){
    alert(`The winner is Computer!!  Computer's response was ${computerSelection} and ${playerName}'s response was ${playerSelection}`);
}
else if (winnerFirstRound === "Draw"){
    alert(`There is no winner. The match is Draw!! Computer's response was ${computerSelection} and ${playerName}'s response was ${playerSelection}`);
}
else{
    alert(`The winner is ${playerName}!! Computer's response was ${computerSelection} and ${playerName}'s response was ${playerSelection}`);
}