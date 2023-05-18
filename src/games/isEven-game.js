import randomNumber from '../utils.js';

const isEven = (question) => question % 2 === 0;

const isEvenGame = () => {
  const question = randomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default isEvenGame;
