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
function round(player, computer) {
    //tie
    if (player == computer) {
        return "it's a tie";
    }

    //computer wins

    //player wins
}

console.log(computerPlay());
console.log(userPlay());
console.log(round(userInput, compChoice));
