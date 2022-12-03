//global variables
let compChoice = "";
let userInput = "";
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let compInput = Math.floor((Math.random() * 3) + 1);
    switch (compInput) {
        case 1:
            compChoice = "rock";
            break;
        case 2:
            compChoice = "paper";
            break;
        case 3:
            compChoice = "scissors";
    }
    return compChoice;
}

function userPlay() {
    userInput = prompt("Rock, Paper or Scissors?");

    userInput = userInput.toLowerCase();
    return userInput;
}

function round(player, computer) {
    //tie
    if (player == computer) {
        return "it's a tie";
    } //rock > scissors conditions
    else if (player == "rock" && computer == "scissors") {
        playerPoints++;
        return "You win! Rock beats Scissors!";
    }
    else if (player == "scissors" && computer == "rock") {
        computerPoints++;
        return "You lose! Rock beats Scissors!";
    }//scissors > paper
    else if (player == "scissors" && computer == "paper") {
        playerPoints++;
        return "You win! Scissors beats Paper!";
    }
    else if (player == "paper" && computer == "scissors") {
        computerPoints++;
        return "You lose! Scissors beats Paper!";
    }//paper > rock conditions
    else if (player == "paper" && computer == "rock") {
        playerPoints++;
        return "You win! Paper beats Rock!";
    }
    else if (player == "rock" && computer == "paper") {
        computerPoints++;
        return "You lose! Paper beats Rock!";
    } else {
        return "what?";
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        userPlay();
        console.log(round(userInput, compChoice));
    }
    if (playerPoints > computerPoints) {
        return "You win the game with: " + playerPoints + " points!";
    } else if (computerPoints > playerPoints) {
        return "Computer wins the game with " + computerPoints + " points!";
    } else {
        return "It's a tie with " + computerPoints + " points!";
    }
}
console.log(game());