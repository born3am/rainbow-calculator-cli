import readline from 'readline';

import { validateNumberInput } from './validation.js';
import { MENU_OPTIONS } from '../constants/menu.js';
import { COPY_EN } from '../l10n/copyEN.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

const getUserInputs = async (menu) => {
  let xValue, yValue;
  const inputCount = MENU_OPTIONS[menu].input;

  if (inputCount >= 1) {
    xValue = await askQuestion(COPY_EN.xVariablePrompt.green.bold);
    xValue = await validateNumberInput(xValue);
  }

  if (inputCount >= 2) {
    yValue = await askQuestion(COPY_EN.yVariablePrompt.green.bold);
    yValue = await validateNumberInput(yValue);
  }

  return { xValue, yValue };
};

export { askQuestion, getUserInputs, rl };
