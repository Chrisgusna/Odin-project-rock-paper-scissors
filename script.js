function getComputerChoice() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
  
    // Map the random number to 'Rock', 'Paper', or 'Scissors'
    if (randomNumber < 0.33) {
      return 'Rock';
    } else if (randomNumber < 0.67) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }
  
  // Test the function by printing the computer's choice
  const computerChoice = getComputerChoice();
  console.log('Computer chooses:', computerChoice);

  function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();
  
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'rock') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'rock' && computerSelection === 'paper')
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return "It's a Tie! Both chose " + playerSelection;
    }
  }
  
  // Example usage:
  const playerChoice = 'rock';
//   const computerChoice = getComputerChoice(); // Assuming you have the previous getComputerChoice function
  
  const result = playRound(playerChoice, computerChoice);
  console.log(result);
  