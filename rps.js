
let result = document.getElementById("result")
let rpsButton = document.querySelectorAll(".rpsButton")
let totalScore = document.getElementById("total")
let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * choice.length)
    return choice[random]
}

function getResult(playerChoice, computerChoice) {
    let score = " "
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        score = 1
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        score = -1
    } else if (playerChoice == "Rock" && computerChoice == "Rock") {
        score = 0
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        score = -1
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        score = -1
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        score = 1
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        score = 1
    } else {
        score = 0
    }
    return score
}


function showResult(score, playerChoice, computerChoice) {
    if (score == 1) {
        result.innerText = `Your choice: ${playerChoice} and Computer's choice: ${computerChoice}. You won`
        // totalScore.innerText = playerScore += score
    } else if (score == 0) {
        result.innerText = `Your choice: ${playerChoice} and Computer's choice: ${computerChoice}. Draw`
    } else if (score == -1) {
        result.innerText = `Your choice: ${playerChoice} and Computer's choice: ${computerChoice}. You lost`
    }
}

let computerChoice
let score 
function onClickRPS(playerChoice) {
    computerChoice = getComputerChoice()
    score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
    totalScore.innerText = `Your score: ${playerScore += score}`
    totalScore.innerText = `Your score: ${computerScore += score}`
    return totalScore
}


function playGame() {
    
    rpsButton.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })
    let endGameButton = document.getElementById("endGameButton")
    endGameButton.onclick = () => endGame()
}

function endGame() {
    let playerscore = document.getElementById("player-score")
    let hands = document.getElementById("hands")
    let result = document.getElementById("result")
    playerscore.innerText = " "
    hands.innerText = " "
    result.innerText = " "
    totalScore.innerText = " "
}
playGame()