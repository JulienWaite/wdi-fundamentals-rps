////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'." + "\n");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return(move || getInput());
}

function getComputerMove(move) {
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;

    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if ((playerMove === "rock" && computerMove === "scissors") 
        || (playerMove === "scissors" && computerMove === "paper") 
        || (playerMove === "paper" && computerMove === "rock")){
        winner = 'player';
    }
    else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
// After each 'round', display some text in the console indicating who played what, who won, and what the 
// current scoreboard looks like.
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0; 
    var ties = 0;
    
    while (playerWins < 5 && computerWins < 5) {
    var playerMove = getInput();
    var computerMove = randomPlay();
    var winner = getWinner(playerMove,computerMove);
  
        if (winner === 'computer') { 
            computerWins++; 
        }
        else if (winner === 'player') { 
            playerWins++;
        }
        else { 
            ties++;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove +'.');
        console.log('The score is currently ' + playerWins + ' player wins to ' + computerWins + ' computer wins and ' + ties + ' ties.\n');
    }
    return [playerWins, computerWins];
}


function playTo(x) {
// Write another function called playTo(x) that allows us to play Rock Paper Scissors 
// until either the player or the computer has won x times. 
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0; 
    var ties = 0;
  
    while (playerWins < x && computerWins < x) {
    var playerMove = getInput();
    var computerMove = randomPlay();
    var winner = getWinner(playerMove,computerMove); 
        if (winner === 'computer') { 
            computerWins++; 
        }
        else if (winner === 'player') { 
            playerWins++;
        }
        else { 
            ties++;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove +'.');
        console.log('The score is currently ' + playerWins + ' player wins to ' + computerWins + ' computer wins and ' + ties + ' ties.\n');
    }
    return [playerWins, computerWins];
}

//playToFive();
playTo(3);




