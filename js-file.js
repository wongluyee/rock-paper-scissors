const buttons = document.querySelectorAll('button');

let items = ['rock','paper','scissors'];
function getComputerChoice(){
    return items[Math.floor(Math.random()*items.length)];
}

let playerScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();
let playerSelection = buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playerSelection = button.value;
        console.log(playRound(playerSelection, computerSelection));
    })
});

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
        return lose;
    } else if((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore+=1;
        return win;
    } 
}