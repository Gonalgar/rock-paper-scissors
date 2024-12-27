let humanScore = 0;
let computerScore = 0;
    
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            return 'The computer wins!';
        } else {
            return 'You win!';
        }
    }
    if (humanChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            return 'The computer wins!';
        } else {
            return 'You win!';
        }
    }
    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            return 'The computer wins!';
        } else {
            return 'You win!';
        }
    }

}


function playGame(humanChoice) {
    console.log('Game started');
    const humanScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result === 'You win!') {
        humanScore++;
        humanScoreText.textContent = humanScore;
    } else if (result === 'The computer wins!') {
        computerScore++;
        computerScoreText.textContent = computerScore;
    }

    const resultText = document.querySelector('.result-text');
    resultText.textContent = `You chose ${humanSelection}. The computer chose ${computerSelection}. ${result}`;

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play again';

    if (humanScore === 5 || computerScore === 5) {
        const resetButton = document.createElement('button');
        resetButton.classList.add('reset-button');
        resetButton.textContent = 'Play again';
        resetButton.addEventListener('click', newGame);
        document.body.appendChild(resetButton);

        if (humanScore === 5) {
            resultText.textContent = 'You win the game!';
        } else if (computerScore === 5) {
            resultText.textContent = 'The computer wins the game!';
        }
    }
    
}

function newGame() {
    humanScore = 0;
    computerScore = 0;
    const humanScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    const resetButton = document.querySelector('.reset-button');
    if (resetButton) {
        resetButton.remove();
    }

    const resultText = document.querySelector('.result-text');
    resultText.textContent = 'Make your choice to start the game';

    const options = document.querySelectorAll('.option');
    options.forEach(option => option.addEventListener('click', () => playGame(option.textContent)));
}

newGame();
