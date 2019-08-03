// Create const getUserChoice so the user can type rock, paper or scissors (and a cheating code...)
const getUserChoice = userInput => {
userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid Item.');
  }
};
// Create const getComputerChoice son the computer randomly selects rock, paper or scissors
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
// Create const determineWinner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!'
  }
  if (userChoice === 'bomb') {
    return 'BOOOMMM!!! You\'ve killed the computer.'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, you\'ve lost!'
    } else {
      return 'You\'ve won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, you\'ve lost!'
    } else {
      return 'You\'ve won!'
    }
  }  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, you\'ve lost!'
    } else {
      return 'You\'ve won!'
    }
  }
}
// Insert choice inside getUserChoice and run to play the game
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`User: ${userChoice} vs. COMP: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
