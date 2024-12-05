import { askQuestion, rl } from "./utils/helpers.js";
import { randomUpTo } from "./utils/randomNumber.js";
import { Calculator } from "./calculator/calculator.js";
import { MENU_OPTIONS } from "./constants/menu.js";
import chalkAnimation from "chalk-animation";
import colors from "colors";

const validation1 = async (menuChoice) => {
  while (menuChoice < 0 || menuChoice > 10 || isNaN(menuChoice) || menuChoice == "") {
    console.log("\nNot a valid number ".white.bgRed);
    menuChoice = await askQuestion("Choose a menu number (0-10) and press enter: ".black.bgYellow);
  }
  return Number(menuChoice);
};

const validation2 = async (numNotStr) => {
  if (numNotStr === "r") {
    return randomUpTo(100);
  }
  while (isNaN(numNotStr) && numNotStr !== "r") {
    console.log("\nNot a valid number ".white.bgRed);
    numNotStr = await askQuestion(`"${numNotStr}" is not valid. Type a NUMBER: `.green.bold);
  }
  return numNotStr === "r" ? randomUpTo(100) : Number(numNotStr);
};

const main = async () => {
  console.clear();
  console.log('\n\n  😀  Welcome to the "RAINBOW CALCULATOR"    \n\n\n\n'.rainbow);

  let welcome = await askQuestion("Please enter your name here: ".black.bgWhite);
  while (welcome === "" || parseFloat(welcome) || welcome.length < 3) {
    console.log("\nCome on, tell me your name man!\n".green);
    welcome = await askQuestion("Please enter your name here: ".black.bgWhite);
  }

  console.clear();
  console.log(`\nHello ${welcome.italic.underline.bold}! What you wanna do with our calculator?`.yellow);
  MENU_OPTIONS.forEach((option, index) => console.log(`${index} - ${option}`.italic.cyan));

  let menu = await askQuestion("Choose a menu number (0-10) and press enter: ".black.bgYellow);
  menu = await validation1(Number(menu));

  let xValue, yValue, width;
  if (menu >= 2 && menu <= 10) {
    xValue = await askQuestion('Choose a NUMBER as your "x" variable (type "r" for random): '.green.bold);
    xValue = await validation2(xValue);
    if (menu < 10) {
      yValue = await askQuestion('Choose a NUMBER as your "y" variable (type "r" for random): '.green.bold);
      yValue = await validation2(yValue);
    }
    if (menu === 2) {
      width = await askQuestion('Choose a NUMBER as your "width" variable (type "r" for random): '.green.bold);
      width = await validation2(width);
    }
  }

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

  const rainbow = chalkAnimation.rainbow("I hope you had fun. See you later!!!", 1);
  setTimeout(() => {
    rainbow.stop(); // Stop the animation
    rl.close(); // Close the readline interface
  }, 1000);
};

main();
