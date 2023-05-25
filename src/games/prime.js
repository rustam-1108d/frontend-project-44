import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => startGame(generateGameRound, gameDescription);

export default runPrimeGame;
