import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const genGcdGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const biggerNumber = Math.max(firstNumber, secondNumber);
  const lesserNumber = Math.min(firstNumber, secondNumber);
  const correctAnswer = String(getGcd(biggerNumber, lesserNumber));

  return [question, correctAnswer];
};

const startGcdGame = () => ({ generateRound: genGcdGameData, description });

export default startGcdGame;
