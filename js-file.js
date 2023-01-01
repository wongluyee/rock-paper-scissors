const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

function getComputerChoice(){
    let items = ['rock','paper','scissors'];
    return items[Math.floor(Math.random()*items.length)];
}

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})

function playRound (playerSelection){
    let computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        score.textContent = `It's a draw! Both of you selected ${playerSelection}.
        Your score: ${playerScore}, Computer's score: ${computerScore}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'rock')){
        computerScore+=1;
        score.textContent = `You lose, ${computerSelection} beats ${playerSelection}.
        Your score: ${playerScore}, Computer's score: ${computerScore}`;

        if (computerScore === 5) {
            result.textContent = "Sorry, you lose...Reload the page to try again."
            disableButtons();
        }
    } else if((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore+=1;
        score.textContent = `You win, ${playerSelection} beats ${computerSelection}. 
        Your score: ${playerScore}, Computer's score: ${computerScore}`;

        if (playerScore === 5) {
            result.textContent = "Congratulations! You win! Reload the page to play again."
            disableButtons();
        }
    } 
}

function disableButtons (){
    buttons.forEach(btn => {
        btn.disabled = true;
    })
}