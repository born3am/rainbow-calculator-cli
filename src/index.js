import chalkAnimation from 'chalk-animation';
// eslint-disable-next-line no-unused-vars
import colors from 'colors'; // It is being used under the hood

import { Calculator } from './classes/calculator.js';
import { MENU_OPTIONS } from './constants/constants.js';
import { COPY_EN } from './l10n/copyEN.js';
import { askQuestion, getUserInputs, rl } from './utils/helpers.js';
import { validateMenuChoice } from './utils/validation.js';
import { minUserNameLength } from '../config/config.js';

const displayMenu = (nameInput) => {
  console.clear();
  console.log(COPY_EN.getGreetings(nameInput).yellow);
  Object.entries(MENU_OPTIONS).forEach(([index, option]) => {
    console.log(`${index} - ${option.title}`.italic.cyan);
  });
};

const main = async () => {
  console.clear();
  console.log(COPY_EN.welcome.rainbow);

  let welcome = await askQuestion(COPY_EN.enterName.black.bgWhite);
  while (welcome.trim() === '' || welcome.trim().length < minUserNameLength) {
    console.log(COPY_EN.invalidName.green);
    welcome = await askQuestion(COPY_EN.enterName.black.bgWhite);
  }

  displayMenu(welcome);

  let menuChoice = await askQuestion(COPY_EN.menuPrompt.black.bgYellow);
  menuChoice = await validateMenuChoice(menuChoice);

  const { xValue, yValue } = await getUserInputs(menuChoice);

  const calculate = new Calculator(xValue, yValue);

  const option = MENU_OPTIONS[menuChoice];
  if (option) {
    const result = calculate[option.method]();
    console.log(`\n${option.title} = ${result}\n`.rainbow);
  }

  const rainbow = chalkAnimation.rainbow(COPY_EN.farewell, 1);
  setTimeout(() => {
    rainbow.stop();
    rl.close();
  }, 1000);
};

main();
