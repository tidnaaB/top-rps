//

function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * choices.length);
	let computerRandom = choices[random];

	return computerRandom;
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a draw!";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		return "You win! Rock beats scissors!";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		return "You lose! Paper beats rock!";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return "You win! Paper beats rock!";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		return "You lose! Scissors beat paper!";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return "You win! Scissors beat paper!";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		return "You lose! Rock beats scissors!";
	}
}

function playGame() {
	let playerWins = 0;
	let computerWins = 0;

	for (let round = 1; round <= 5; round++) {
		console.log("Round " + round + ":");
		console.log("Player Selected: " + playerSelection);
		console.log("Computer Selected: " + computerSelection);

		let result = playRound(playerSelection, computerSelection);
		console.log(result);

		if (result.includes("win")) {
			playerWins++;
		} else if (result.includes("lose")) {
			computerWins++;
		}
	}
	console.log("Game over!");
	console.log("Player Wins: " + playerWins);
	console.log("Computer Wins: " + computerWins);
}

// console.log(playerSelection);
// console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
console.log(playGame());
