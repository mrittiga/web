let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").innerText = `You chose: ${userChoice}`;
    document.getElementById("computer-choice").innerText = `Computer chose: ${computerChoice}`;

    let result = getWinner(userChoice, computerChoice);
    document.getElementById("result").innerText = `Winner: ${result}`;

    if (result === "User") userScore++;
    if (result === "Computer") computerScore++;

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function getWinner(user, computer) {
    if (user === computer) return "It's a Tie!";

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "User";
    } else {
        return "Computer";
    }
}
