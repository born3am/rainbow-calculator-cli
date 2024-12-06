import { MIN_MENU_OPTION, MAX_MENU_OPTION } from '../constants/constants.js';

const COPY_EN = {
  welcome: '\n\n    Welcome to the "RAINBOW CALCULATOR"    \n\n\n\n',
  enterName: 'Please enter your name here: ',
  getGreetings: (nameInput) => `\nHello ${nameInput}! What you wanna do with our calculator?\n`,
  invalidName: '\nCome on, tell me your name man!\n',
  menuPrompt: `\nChoose a menu number (${MIN_MENU_OPTION}-${MAX_MENU_OPTION}) and press enter: `,
  xVariablePrompt: 'Choose a NUMBER as your "x" variable (type "r" for random): ',
  yVariablePrompt: 'Choose a NUMBER as your "y" variable (type "r" for random): ',
  widthVariablePrompt: 'Choose a NUMBER as your "width" variable (type "r" for random): ',
  resultPrompt: 'Great! Press now enter to get your result!',
  farewell: 'I hope you had fun. See you later!!!\n',
  invalidNumber: '\nNot a valid number ',
  invalidNumberPrompt: `" is not valid. Type a NUMBER: `,
  divisorError: '\nERROR: the divisor cannot be "0"',
};

export { COPY_EN };
