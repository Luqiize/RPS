const words = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return words[Math.floor(Math.random() * words.length)];
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = document.querySelector(
  'div.rock, div.paper, div.scissors'
);

const rstBtn = document.getElementById('try-again');
const winner = document.getElementById('winner');

winner.style.display = 'none';
rstBtn.style.display = 'none';

rstBtn.addEventListener('click', function () {
  playerScore = 0;
  computerScore = 0;
  document.querySelector('.player-score').textContent = 0;
  document.querySelector('.computer-score').textContent = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  rstBtn.style.display = 'none';
  winner.style.display = 'none';
});

function checkWinner() {
  if (computerScore === 5) {
    rstBtn.style.display = 'block';
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You lost :(';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else if (playerScore === 5) {
    rstBtn.style.display = 'block';
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You won! :D';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function playRound(playerSelection) {
  winner.style.display = 'none';
  const computerSelection = computerPlay();
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    document.querySelector('.player-score').textContent =
      playerScore.toString();
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You win! :)';
    checkWinner();
  }
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    document.querySelector('.computer-score').textContent =
      computerScore.toString();
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You lose :(';
    checkWinner();
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    document.querySelector('.computer-score').textContent =
      computerScore.toString();
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You lose :(';
    checkWinner();
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    document.querySelector('.player-score').textContent =
      playerScore.toString();
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You win! :)';
    checkWinner();
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    document.querySelector('.player-score').textContent =
      playerScore.toString();
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You win! :)';
    checkWinner();
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    document.querySelector('.computer-score').textContent =
      computerScore.toString();
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'You lose :(';
    checkWinner();
  }
  if (playerSelection === computerSelection) {
    winner.style.display = 'block';
    document.querySelector('#winner').textContent = 'Tie!';
  }
}
