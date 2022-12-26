let items = ['Rock','Paper','Scissors'];

function getComputerChoice(item){
    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection !== 'Rock' | 'Paper' | 'Scissors'){
        return "Please input your selection correctly.";
    } else if (playerSelection == computerSelection) {
        return `It's a draw! Both of you selected ${playerSelection}.`;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') 
    || (playerSelection == 'Paper' && computerSelection == 'Scissors') 
    || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else ((playerSelection == 'Rock' && computerSelection == 'Scissors')
    || (playerSelection == 'Paper' && computerSelection == 'Rock')
    || (playerSelection == 'Scissors' && computerSelection == 'Paper'))
        return `You win! ${playerSelection} beats ${computerSelection}.`
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));