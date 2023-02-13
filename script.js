let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
// CHALLANGES
const getAbsoluteDistance = (target, guess) => {
  Math.abs(target - guess);
};
const compareGuesses = (humanGuess, compGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess >= 10) {
    window.alert(
      `Your Number is out of a range to get better results put a number between 0 and 9`
    );
  }
  return (
    getAbsoluteDistance(targetGuess - humanGuess) <=
    getAbsoluteDistance(targetGuess - compGuess)
  );
  end;
};
/*const compareGuesses = (humanGuess, compGuess, targetGuess) => {
                    // OPTION A
  // if (humanTargetGuess <= compTargetGuess) {
  //   return true;
  // } else {
  //   return false;
  // }
                    // OPTION B
  return (humanTargetGuess <= compTargetGuess ? true : false);
};*/

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore += 1; // variableName++;
    case "computer":
      computerScore += 1;
  }
};
const advanceRound = () => {
  currentRoundNumber += 1;
};

