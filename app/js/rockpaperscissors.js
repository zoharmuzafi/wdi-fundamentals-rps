////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) 
{
    move=move||getInput();
    return move;
    //
}

function getComputerMove(move)
{
    move=move||randomPlay();
    return move; 
}

function getWinner(playerMove,computerMove) 
{   
    var winner;
    if (playerMove===computerMove)
        {winner="tie";}
    else if (((playerMove=='rock')&&(computerMove=='scissors'))||((playerMove=='paper')&& (computerMove=='rock'))||((playerMove=='scissors')&&(computerMove=='paper'))) 
        {winner="player";}
    else 
        {winner="computer";}

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

