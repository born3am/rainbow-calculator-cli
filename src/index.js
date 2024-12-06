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

  let menu = await askQuestion(COPY_EN.menuPrompt.black.bgYellow);
  menu = await validateMenuChoice(menu);

  const { xValue, yValue } = await getUserInputs(menu);

  const calculate = new Calculator(xValue, yValue);
  switch (menu) {
    case 1:
      console.log(`\nPI = ${calculate.pi}\n`.rainbow);
      break;
    case 2:
      console.log(`\nEuler's Number = ${calculate.eulerNumber}\n`.rainbow);
      break;
    case 3:
      console.log(`\nPercentage = ${calculate.percentage()}\n`.rainbow);
      break;
    case 4:
      console.log(`\nSum = ${calculate.add()}\n`.rainbow);
      break;
    case 5:
      console.log(`\nDifference = ${calculate.subtract()}\n`.rainbow);
      break;
    case 6:
      console.log(`\nProduct = ${calculate.multiply()}\n`.rainbow);
      break;
    case 7:
      console.log(`\nQuotient = ${calculate.divide()}\n`.rainbow);
      break;
    case 8:
      console.log(`\nModulus = ${calculate.modulation()}\n`.rainbow);
      break;
    case 9:
      console.log(`\nPower = ${calculate.elevate()}\n`.rainbow);
      break;
    case 10:
      console.log(`\nSquare Root = ${calculate.sqrt()}\n`.rainbow);
      break;
  }

  const rainbow = chalkAnimation.rainbow(COPY_EN.farewell, 1);
  setTimeout(() => {
    rainbow.stop();
    rl.close();
  }, 1000);
};

main();
