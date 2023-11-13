const escolhas = ['rock', 'paper', 'scissors'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * escolhas.length);
  return escolhas[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return 'It\'s a tie!';
  } else if ((user === 'rock' && computer === 'scissors') ||
             (user === 'paper' && computer === 'rock') ||
             (user === 'scissors' && computer === 'paper')) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function userChoice(user) {
  const computer = computerChoice();
  const resultado = determineWinner(user, computer);
  document.getElementById('resultado').innerHTML = `You chose ${user}. Computer chose ${computer}. ${resultado}`;
}

