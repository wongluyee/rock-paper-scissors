let items = ['rock','paper','scissors'];
function getComputerChoice(){
    return items[Math.floor(Math.random()*items.length)];
}

/*Define player score and computer score outside the function,
so that both playRound() function and game() function can access it.
*/
let playerScore = 0;
let computerScore = 0;
let incorrectInput = 0;

function playRound (playerSelection, computerSelection){
  const win = `You win! ${playerSelection} beats ${computerSelection}.`;
  const lose = `You lose! ${computerSelection} beats ${playerSelection}.`;
  const draw = `It's a draw! Both of you selected ${playerSelection}.`;
  
  /*
  return statement need to be the last, if not it will stop executing the function,
  and score wouldn't be added, result text wouldn't be shown.
  */
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
        incorrectInput++;
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        /*Define player selection and computer selection inside the function
        so that they can be looped also, if not JS will keep using the 1st entry that player entered.
        */
        const playerSelection = prompt('Choose from rock, paper, or scissors.').toLowerCase();
        const computerSelection = getComputerChoice();
        /*Need to include the parameters, 
        if not player selection and computer selection will become undefined.
        */
        console.log(playRound(playerSelection, computerSelection));
        
        if (incorrectInput > 0) {
            i-=1;
            incorrectInput = 0;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations!You win!");
    } else if (playerScore < computerScore ){
        console.log("Sorry! You lose...");
    } else {
        console.log("It is a draw!");
    }
}

//If written as console.log(game());, it will return undefined in the last row of console.
game();
