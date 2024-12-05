import { askQuestion } from './helpers.js';
import { randomUpTo } from './randomNumber.js';
import { MIN_MENU_OPTION, MAX_MENU_OPTION } from '../constants/menu.js';
import { MENU_TEXT } from '../constants/menuText.js';

const validateMenuChoice = async (menuChoice) => {
  menuChoice = Number(menuChoice);
  while (menuChoice < MIN_MENU_OPTION || menuChoice > MAX_MENU_OPTION || isNaN(menuChoice) || menuChoice === '') {
    console.log(MENU_TEXT.invalidNumber.white.bgRed);
    menuChoice = await askQuestion(MENU_TEXT.menuPrompt.black.bgYellow);
    menuChoice = Number(menuChoice);
  }
  return menuChoice;
};

const validateNumberInput = async (numNotStr) => {
  if (numNotStr === 'r') {
    return randomUpTo(100);
  }
  while (isNaN(numNotStr) && numNotStr !== 'r') {
    console.log(MENU_TEXT.invalidNumber.white.bgRed);
    numNotStr = await askQuestion(`${numNotStr}${MENU_TEXT.invalidNumberPrompt}`.green.bold);
  }
  return numNotStr === 'r' ? randomUpTo(100) : Number(numNotStr);
};

export { validateMenuChoice, validateNumberInput };
