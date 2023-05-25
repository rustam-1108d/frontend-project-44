import readlineSync from 'readline-sync';

const runGameLogic = (gameRounds, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i < gameRounds.length; i += 1) {
    const [question, answer] = gameRounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

const startGame = (generateGameRound, gameDescription, roundCount = 3) => {
  const gameRounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    gameRounds[i] = generateGameRound();
  }
  return runGameLogic(gameRounds, gameDescription);
};

export default startGame;
