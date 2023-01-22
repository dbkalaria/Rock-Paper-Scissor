let playerScore = 0
let computerScore = 0  
const choices = ["rock", "paper", "scissor"]

function getComputerSelection() {
    const random = Math.floor(Math.random() * choices.length);   
    return choices[random] 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "player";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "player";
    } else {
        return "computer";
    }
}  

function game(playerSelection) {
    const computerSelection = getComputerSelection();
    const currentPlayerScore = document.getElementById("player-score");
    const currentComputerScore = document.getElementById("computer-score");

    round_winner = playRound(playerSelection, computerSelection);

    if (round_winner == "player") {
        ++playerScore;
        currentPlayerScore.innerHTML = playerScore;
    } else if (round_winner == "computer") {
        ++computerScore;
        currentComputerScore.innerHTML = computerScore;
    }

    if (playerScore === 5) {
        playerScore = 0
        computerScore = 0
        currentPlayerScore.innerHTML = 0;
        currentComputerScore.innerHTML = 0;
        alert("Hurray! You Win.");   
    } else if (computerScore === 5) {
        playerScore = 0
        computerScore = 0
        currentPlayerScore.innerHTML = 0;
        currentComputerScore.innerHTML = 0;
        alert("Oops! Computer Wins.");
    }
}
