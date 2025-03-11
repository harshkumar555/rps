// script.js

// Elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const yourChoiceSpan = document.getElementById('your-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const gameResult = document.getElementById('game-result');
const resetBtn = document.getElementById('reset');

// Choices
const choices = ['rock', 'paper', 'scissors'];

// Function to generate computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the result of the game
function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'Computer Wins!';
    }
}

// Function to play the game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    // Display choices and result
    yourChoiceSpan.textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    computerChoiceSpan.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = result;

    resultDiv.classList.remove('hidden');
}

// Event listeners for the buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Reset game
resetBtn.addEventListener('click', () => {
    resultDiv.classList.add('hidden');
    gameResult.textContent = '';
});
