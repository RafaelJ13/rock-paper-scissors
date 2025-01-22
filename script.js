function playRound() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = options[random];
    console.log(computerChoice);

    let computerPoints = document.getElementById("computerPoints");

    let humanChoice = document.getElementById("humanChoice");

    let humanPoints = document.getElementById("humanPoints");

    if (
        (computerChoice === "rock" && humanChoice.value === "scissors") ||
        (computerChoice === "paper" && humanChoice.value === "rock") ||
        (computerChoice === "scissors" && humanChoice.value === "paper")
    ) {
        document.getElementById("result").innerText = "Computer wins!, computer choice was: " + computerChoice + " and your choice was: " + humanChoice.value;
        computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
    } else if (
        (humanChoice.value === "rock" && computerChoice === "scissors") ||
        (humanChoice.value === "paper" && computerChoice === "rock") ||
        (humanChoice.value === "scissors" && computerChoice === "paper")
    ){
        document.getElementById("result").innerText = "You win!, computer choice was: " + computerChoice + " and your choice was: " + humanChoice.value
        humanPoints.innerText = parseInt(humanPoints.innerText) + 1;
    } else {
        alert("It's a tie!, computer choice was: " + computerChoice + " and your choice was: " + humanChoice.value);
    }
}
