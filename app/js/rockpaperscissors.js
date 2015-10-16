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
    var playerMove;
    var computerMove;
    while ((computerWins<5)&&(playerWins<5))
    {
        playerMove=getInput();
        computerMove= randomPlay();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        if (getWinner(playerMove,computerMove)== "player")
        {
            playerWins +=1;
            console.log("Player won")
        }
        else
        {
            computerWins+=1;
            console.log("computer won")
        }
        onsole.log('The score is currently- Player: ' + playerWins + ' to ' + 'Computer:' computerWins + '\n');
    }    
    return [playerWins, computerWins];
}

