// Get computer choice of rock, paper or scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        default:
            return 'scissors';
    }
}

// Compare computer choice with player choice and return results
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                console.log('You Lose! Paper beats Rock.');
                return 'computer';
                break;
            case 'scissors':
                console.log('You Win! Rock beats Scissors.');
                return 'player';
                break;
            default:
                console.log('It`s a tie!');
                return 0;
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                console.log('You Win! Paper beats Rock.');
                return 'player';
                break;
            case 'scissors':
                console.log('You Lose! Scissors beats Paper.');
                return 'computer';
                break;
            default:
                console.log('It`s a tie!');
                return 0;
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                console.log('You Lose! Rock beats Scissors.');
                return 'computer';
                break;
            case 'paper':
                console.log('You Win! Scissors beats Paper.');
                return 'player';
                break;
            default:
                console.log('It`s a tie!');
                return 0;
        }
    } else {
        console.log('Wrong value selected.');
        return 0;
    }
}

// Play 5 games, asking for choice values every game
// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;
    
//     let playerSelection = getPlayerChoice();
//     let computerSelection = getComputerChoice();
//     let winner = playRound(playerSelection, computerSelection);
//     if (winner === 'player') {
//         playerPoints++;
//     } else if (winner === 'computer') {
//         computerPoints++;
//     }
//     console.log(`Current score:\nPlayer: ${playerPoints} points\nComputer: ${computerPoints} points`);

    // if (playerPoints > computerPoints) {
    //     console.log('Congratulations, you win!');
    // } else if (playerPoints < computerPoints) {
    //     console.log('You lose, better luck next time!');
    // } else {
    //     console.log('No one wins, it`s a tie!');
    // }
// }


let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('button');

const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const winnerMessage = document.querySelector('#winner');

// Select buttons and add Event Listeners to playRound() with player's choice
buttons.forEach(button => button.addEventListener('click',() => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    // Display results in DOM after each round
    if (winner === 'player') {
        playerPoints++;
    } else if (winner === 'computer') {
        computerPoints++;
    }
    player.textContent = 'Player: ' + playerPoints;
    computer.textContent = 'Computer: ' + computerPoints;

    //  Display the winner when someone reaches 5 points
    if(playerPoints === 5) {
        winnerMessage.textContent = 'Congratulations, you win!';
    } else if (computerPoints === 5) {
        winnerMessage.textContent = 'You lose, better luck next time!';
    }
}));