const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerSelectionEl = document.getElementById('player-selection');
const computerSelectionEl = document.getElementById('computer-selection');
const resultEl = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
const resetBtn = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
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
      resultEl.textContent = 'You win this round!';
    } else if (winner === 'computer') {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultEl.textContent = 'You lose this round!';
    } else {
      resultEl.textContent = "It's a tie!";
    }

    checkGameOver();
  });
});

resetBtn.addEventListener('click', resetGame);

function getWinner(player, computer) {
  if (player === computer) return 'tie';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return 'player';
  return 'computer';
}

function checkGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    const popup = document.getElementById('popup');
    const winnerText = document.getElementById('winner-text');
    popup.style.display = 'flex';
    winnerText.textContent = playerScore === 5 ? '🎉 You Win the Game!' : '💻 Computer Wins!';
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playerSelectionEl.textContent = '❔';
  computerSelectionEl.textContent = '❔';
  resultEl.textContent = 'Make your move!';
  document.getElementById('popup').style.display = 'none';
}
