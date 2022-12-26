let items = ['rock','paper','scissors'];
function getComputerChoice(item){
    return items[Math.floor(Math.random()*items.length)];
}

let playerScore = 0;
let computerScore = 0;

//Play single round
function playRound(playerSelection, computerSelection){
    const win = `You win! ${playerSelection} beats ${computerSelection}.`;
    const lose = `You lose! ${computerSelection} beats ${playerSelection}.`;
    const draw = `It's a draw! Both of you selected ${playerSelection}.`;

    if (playerSelection !== 'rock' | 'paper' | 'scissors'){
        return "Please enter your selection correctly.";
    } else if (playerSelection == computerSelection) {
        return draw;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'rock')){
        return lose;
        computerScore++;
    } else ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissors' && computerSelection == 'paper'))
        return win;
        playerScore++;
}

//Loop 5 rounds and keep score
function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
}

game();

const playerSelection = prompt('Choose from rock, paper, or scissors.').toLowerCase();
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));