let items = ['rock','paper','scissors'];
function getComputerChoice(){
    return items[Math.floor(Math.random()*items.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection){
  const win = `You win! ${playerSelection} beats ${computerSelection}.`;
  const lose = `You lose! ${computerSelection} beats ${playerSelection}.`;
  const draw = `It's a draw! Both of you selected ${playerSelection}.`;

  if (playerSelection == computerSelection) {
        return draw;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'rock')){
        computerScore+=1;
        console.log(lose);
        return `Your score: ${playerScore}, Computer's score: ${computerScore}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore+=1;
        console.log(win);
        return `Your score: ${playerScore}, Computer's score: ${computerScore}`;
    } else {
        console.log("Please enter your selection correctly.");
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose from rock, paper, or scissors.').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("Congratulations!You win!");
    } else if (playerScore < computerScore ){
        console.log("Sorry! You lose...");
    } else {
        console.log("It is a draw!");
    }
}

game();
