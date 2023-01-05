// Get computer choice of rock, paper or scissors.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

// Get case insensitive player choice
function getPlayerChoice() {
    let playerChoice = prompt("Rock paper scissors! ");
    return playerChoice.toLowerCase();
}

// Compare computer choice with player choice and print message about the results
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                return "You Lose! Paper beats Rock.";
                break;
            case "scissors":
                return "You Win! Rock beats Scissors."
                break;
            default:
                return "It's a tie!";
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You Win! Paper beats Rock.";
                break;
            case "scissors":
                return "You Lose! Scissors beats Paper."
                break;
            default:
                return "It's a tie!";
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You Lose! Rock beats Scissors.";
                break;
            case "paper":
                return "You Win! Scissors beats Paper."
                break;
            default:
                return "It's a tie!";
        }
    } else {
        return "Wrong value selected.";
    }
}

function game() {

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));