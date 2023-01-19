const choices = ["rock", "paper", "scissor"]

function getComputerSelection() {
    const random = Math.floor(Math.random() * choices.length);   
    return choices[random] 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "player";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    while (playerScore < 5 && computerScore < 5) {
        console.log(playerScore)
        console.log(computerScore)
        const computerSelection = getComputerSelection();
        let playerSelection = prompt("Select between rock, paper or scissor.").toLowerCase();
        while (true) {
            if (choices.includes(playerSelection)) {
                break
            } else {
                playerSelection = prompt("please select between rock, paper or scissor only!").toLowerCase();
            }
        }

        round_winner = playRound(playerSelection, computerSelection);
        if (round_winner == "player") {
            playerScore++;
        } else {
            computerScore++;
        }
    } 
    if (playerScore === 5) {
        alert("Hurray! You Win.");
    } else {
        alert("Computer Wins!");
    }
}