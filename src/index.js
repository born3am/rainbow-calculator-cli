import chalkAnimation from 'chalk-animation';
// eslint-disable-next-line no-unused-vars
import colors from 'colors';

import { Calculator } from './classes/calculator.js';
import { MENU_OPTIONS } from './constants/menu.js';
import { MENU_TEXT } from './constants/menuText.js';
import { askQuestion, rl } from './utils/helpers.js';
import { validateMenuChoice, validateNumberInput } from './utils/validation.js';

const displayMenu = (welcome) => {
  console.clear();
  console.log(`\nHello ${welcome.italic.underline.bold}! What you wanna do with our calculator?`.yellow);
  Object.entries(MENU_OPTIONS).forEach(([index, option]) => {
    console.log(`${index} - ${option.title}`.italic.cyan);
  });
};

const getUserInputs = async (menu) => {
  let width, xValue, yValue;
  if (menu >= 3 && menu <= 10) {
    xValue = await askQuestion(MENU_TEXT.xVariablePrompt.green.bold);
    xValue = await validateNumberInput(xValue);
    if (menu < 10) {
      yValue = await askQuestion(MENU_TEXT.yVariablePrompt.green.bold);
      yValue = await validateNumberInput(yValue);
    }
  }
  return { xValue, yValue, width };
};

const main = async () => {
  console.clear();
  console.log(MENU_TEXT.welcome.rainbow);

  let welcome = await askQuestion(MENU_TEXT.enterName.black.bgWhite);
  while (welcome === '' || parseFloat(welcome) || welcome.length < 3) {
    console.log(MENU_TEXT.invalidName.green);
    welcome = await askQuestion(MENU_TEXT.enterName.black.bgWhite);
  }

  displayMenu(welcome);

  let menu = await askQuestion(MENU_TEXT.menuPrompt.black.bgYellow);
  menu = await validateMenuChoice(menu);

  const { xValue, yValue } = await getUserInputs(menu);

  const calculate = new Calculator(xValue, yValue);
  switch (menu) {
    case 1:
      console.log(`\nPI = ${calculate.pi}\n`.rainbow);
      break;
    case 2:
      console.log(`\nEuler's Number = ${calculate.e}\n`.rainbow);
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

  const rainbow = chalkAnimation.rainbow(MENU_TEXT.farewell, 1);
  setTimeout(() => {
    rainbow.stop();
    rl.close();
  }, 1000);
};

main();
