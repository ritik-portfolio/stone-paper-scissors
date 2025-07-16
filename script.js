const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerSelectionEl = document.getElementById('player-selection');
const computerSelectionEl = document.getElementById('computer-selection');
const resultEl = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = getWinner(playerChoice, computerChoice);

        playerSelectionEl.textContent = emojis[playerChoice];
        computerSelectionEl.textContent = emojis[computerChoice];

        if (winner === 'player') {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            resultEl.textContent = 'You win!';
        } else if (winner === 'computer') {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            resultEl.textContent = 'You lose!';
        } else {
            resultEl.textContent = "It's a tie!";
        }
    });
});

function getWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}
