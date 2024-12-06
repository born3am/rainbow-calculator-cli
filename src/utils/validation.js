import { askQuestion } from './helpers.js';
import { randomUpTo } from './randomNumber.js';
import { MIN_MENU_OPTION, MAX_MENU_OPTION, MENU_OPTIONS } from '../constants/menu.js';
import { COPY_EN } from '../l10n/copyEN.js';

const validateMenuChoice = async (menuChoice) => {
  let choice = Number(menuChoice);
  while (choice < MIN_MENU_OPTION || choice > MAX_MENU_OPTION || isNaN(choice) || choice === '') {
    console.log(COPY_EN.invalidNumber.white.bgRed);
    choice = await askQuestion(COPY_EN.menuPrompt.black.bgYellow);
    choice = Number(choice);
  }
  console.log(`\n${MENU_OPTIONS[choice].description}\n`.green);
  return choice;
};

const validateNumberInput = async (numNotStr) => {
  let num = numNotStr;
  if (num === 'r') {
    return randomUpTo(100);
  }
  while (isNaN(num) && num !== 'r') {
    console.log(COPY_EN.invalidNumber.white.bgRed);
    num = await askQuestion(`${num}${COPY_EN.invalidNumberPrompt}`.green.bold);
  }
  return num === 'r' ? randomUpTo(100) : Number(num);
};

export { validateMenuChoice, validateNumberInput };
