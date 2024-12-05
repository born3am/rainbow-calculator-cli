import { askQuestion, rl } from "./utils/helpers.js";
import { Calculator } from "./calculator/calculator.js";
import { MENU_OPTIONS } from "./constants/menu.js";
import { validateMenuChoice, validateNumberInput } from "./utils/validation.js";
import { MENU_TEXT } from "./constants/menuText.js";
import chalkAnimation from "chalk-animation";
import colors from "colors";

const displayMenu = (welcome) => {
  console.clear();
  console.log(`\nHello ${welcome.italic.underline.bold}! What you wanna do with our calculator?`.yellow);
  MENU_OPTIONS.forEach((option, index) => console.log(`${index} - ${option}`.italic.cyan));
};

const getUserInputs = async (menu) => {
  let xValue, yValue, width;
  if (menu >= 2 && menu <= 10) {
    xValue = await askQuestion(MENU_TEXT.xVariablePrompt.green.bold);
    xValue = await validateNumberInput(xValue);
    if (menu < 10) {
      yValue = await askQuestion(MENU_TEXT.yVariablePrompt.green.bold);
      yValue = await validateNumberInput(yValue);
    }
    if (menu === 2) {
      width = await askQuestion(MENU_TEXT.widthVariablePrompt.green.bold);
      width = await validateNumberInput(width);
    }
  }
  return { xValue, yValue, width };
};

const main = async () => {
  console.clear();
  console.log(MENU_TEXT.welcome.rainbow);

  let welcome = await askQuestion(MENU_TEXT.enterName.black.bgWhite);
  while (welcome === "" || parseFloat(welcome) || welcome.length < 3) {
    console.log(MENU_TEXT.invalidName.green);
    welcome = await askQuestion(MENU_TEXT.enterName.black.bgWhite);
  }

  displayMenu(welcome);

  let menu = await askQuestion(MENU_TEXT.menuPrompt.black.bgYellow);
  menu = await validateMenuChoice(menu);

  const { xValue, yValue, width } = await getUserInputs(menu);

  const calculate = new Calculator(xValue, yValue, width);
  switch (menu) {
    case 0: console.log(`PI = ${calculate.pi}`.rainbow); break;
    case 1: console.log(`Euler's Number = ${calculate.e}`.rainbow); break;
    case 2: console.log(`Height = ${calculate.ratio()}`.rainbow); break;
    case 3: console.log(`Percentage = ${calculate.percentage()}`.rainbow); break;
    case 4: console.log(`Sum = ${calculate.add()}`.rainbow); break;
    case 5: console.log(`Difference = ${calculate.subtract()}`.rainbow); break;
    case 6: console.log(`Product = ${calculate.multiply()}`.rainbow); break;
    case 7: console.log(`Quotient = ${calculate.divide()}`.rainbow); break;
    case 8: console.log(`Modulus = ${calculate.modulation()}`.rainbow); break;
    case 9: console.log(`Power = ${calculate.elevate()}`.rainbow); break;
    case 10: console.log(`Square Root = ${calculate.sqrt()}`.rainbow); break;
  }

  const rainbow = chalkAnimation.rainbow(MENU_TEXT.farewell, 1);
  setTimeout(() => {
    rainbow.stop();
    rl.close();
  }, 1000);
};

main();