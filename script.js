//global variables
let compChoice = "";
let userInput = "";

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
    //get user input
    userInput = prompt("Rock, Paper or Scissors?");

    userInput = userInput.toLowerCase();
    return userInput;
}

function compare(a, b) {
    //computer wins ?
    if (a === b) {
        return "It's a Tie";
    }
    //if player wins
    else if (a === "rock" && b === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (a == "paper" && b == "rock") {
        return "You win! Paper beats Rock";
    } else if (a == "scissors" && b == "paper") {
        return "You win! Scissors beats Paper";
    }
    //if computer wins
    else if (b == "rock" && a == "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (b == "paper" && a == "rock") {
        return "You lose! Paper beats Rock";
    } else if (b == "scissors" && a == "paper") {
        return "You lose! Scissors beats Paper";
    }
    //rock > scissors
    //paper > rock
    //scissors >paper
    //tie

}

console.log(computerPlay());
computerPlay();
console.log(userPlay());

// console.log(userPlay());
console.log(compare(userInput, compChoice));
