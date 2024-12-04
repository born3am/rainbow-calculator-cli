// Color NPM Packages
const prompt = require("prompt-sync")({ sigint: true });
const colors = require("colors");
// const chalk = require("chalk");
const chalkAnimation = require("chalk-animation");
const { randomUpTo } = require("./utils");

// END: Color NPM packages

// Variables declared
let welcome;
let menu;
let xValue;
let yValue;
let width;

// END: Variables declared

const validation1 = function (menuChoice) {
  while (
    menuChoice < 0 ||
    menuChoice > 10 ||
    isNaN(menuChoice) ||
    menuChoice == ""
  ) {
    console.log("");

    console.log("Not a valid number ".white.bgRed);

    console.log("");

    menuChoice = Number(
      prompt("Choose a menu number (0-10) and press enter: ".black.bgYellow)
    );
  }

  return Number(menuChoice);
};

const validation2 = function (numNotStr) {
  if (numNotStr == "r") {
    return randomUpTo(100);
  }

  while (isNaN(numNotStr) & (numNotStr != "r")) {
    console.log("");

    console.log("Not a valid number ".white.bgRed);

    console.log("");

    numNotStr = prompt(
      `"${numNotStr}" is not valid. Type a NUMBER: `.green.bold
    );
  }
  if (numNotStr == "r") {
    return randomUpTo(100);
  }
  return numNotStr;
};

// END: Functions validation

// WELCOME
console.clear();

console.log(
  '\n\n  😀  Welcome to the "RAINBOW CALCULATOR"    \n\n\n\n'
    .rainbow
);

welcome = prompt("Please enter your name here: ".black.bgWhite);

console.clear();

while (welcome == "" || parseFloat(welcome) || welcome.length < 3) {
  console.log("\nCome on, tell me your name man!\n".green);

  welcome = prompt("Please enter your name here: ".black.bgWhite);
}

// END: WELCOME

// MENU

console.clear();

console.log(
  `\nHello ${welcome.italic.underline.bold}! What you wanna do with our calculator?`
    .yellow
);

console.log(
  `\n
0 - Calculate Number PI
1 - Calculate Eulner's number
2 - Calculate Ratio (x,y, width)
3 - Calculate Percentage (x,y)
4 - calculate.add(x, y)
5 - calculate.subtract(x, y)
6 - calculate.multiply(x, y)
7 - calculate.divide(x, y)
8 - calculate.modulation(x, y)
9 - calculate.elevate(x, y)
10 - calculate.sqrt(x)\n`.italic.cyan
);

menu = prompt("  Choose a menu number(0-10) and press enter: ".black.bgYellow);

menu = validation1(menu);

if (Number(menu) == 2) {
  console.clear();

  console.log(
    '\n This function calculates the "height" considering a given "width" an a given ratio "x (width) : y (height)". Choose next your variables: '
      .italic
  );
} else if (Number(menu) == 3) {
  console.clear();

  console.log(
    '\n This function calculates the percentage of "x" in "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 4) {
  console.clear();

  console.log(
    '\n This function calculates the simply sum of "x" + "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 5) {
  console.clear();

  console.log(
    '\n This function calculates the simply subtraction of "x" - "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 6) {
  console.clear();

  console.log(
    '\n This function calculates the multiplication "x" * "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 7) {
  console.clear();

  console.log(
    '\n This function calculates the division of "x" / "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 8) {
  console.clear();

  console.log(
    '\n This function returns the remainder of "x" divided by "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 9) {
  console.clear();

  console.log(
    '\n This function returns the power of "x" elevated to "y". Choose next your variables:'
      .italic
  );
} else if (Number(menu) == 10) {
  console.clear();

  console.log(
    '\n This function returns the square root of "x". Choose next your variables:'
      .italic
  );
}

// END: MENU

// VALUES INPUT

// first Value: X

if (
  Number(menu) == 2 ||
  Number(menu) == 3 ||
  Number(menu) == 4 ||
  Number(menu) == 5 ||
  Number(menu) == 6 ||
  Number(menu) == 7 ||
  Number(menu) == 8 ||
  Number(menu) == 9 ||
  Number(menu) == 10
) {
  xValue = prompt(
    'Choose a NUMBER as your "x" variable (type "r" for random): '.green.bold
  );

  xValue = validation2(xValue);

  console.log(`\nNumber chosen was: ${xValue}\n\n`.magenta);
}
// second Value: Y
{
  if ((Number(menu) >= 2) & (Number(menu) < 10)) {
    yValue = prompt(
      'Choose a NUMBER as your "y" variable (type "r" for random): '.green.bold
    );

    yValue = validation2(yValue);

    console.log(`\nNumber chosen was: ${yValue}\n\n`.magenta);
  }
}
// third Value: width
{
  if (Number(menu) == 2) {
    width = prompt(
      'Choose a NUMBER as your "width" variable (type "r" for random): '.green
        .bold
    );

    width = validation2(width);

    console.log(`\nNumber chosen was: ${width}\n\n`.magenta);
  }
}

// END: VALUES INPUT

console.clear();

pause = prompt("Great! Press now enter to get your result!".bold);

// Class Declaration

class Calculator {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.pi = 3.141592653589793;
    this.e = 2.718281828459045;
  }

  // Class Methods
  ratio() {
    let ratio = Math.abs(this.y) / Math.abs(this.x);
    return ratio * this.width;
  }

  percentage() {
    return `${(this.x / this.y) * 100}%`;
  }

  add() {
    return +this.x + +this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  multiply() {
    return this.x * this.y;
  }

  divide() {
    if (this.y == 0) {
      console.log('\nERROR: the divisor cannot be "0"'.red);
    } else {
      return this.x % this.y;
    }
  }

  modulation() {
    if (this.y == 0) {
      console.log('\nERROR: the divisor cannot be "0"'.red);
    } else {
      return this.x % this.y;
    }
  }

  elevate() {
    return Math.pow(this.x, this.y);
  }

  sqrt() {
    return Math.sqrt(this.x);
  }

  // END - Class Methods and Class Declaration
}

// Class Instance

const calculate = new Calculator(xValue, yValue, width);

// Returns PI (3.141592653589793)
if (Number(menu) == 0) {
  console.log(`\nPI = ${calculate.pi}\n`.rainbow);
}

// Returns Eulner's number (2.718281828459045)
if (Number(menu) == 1) {
  console.log(`\nEulner's number = ${calculate.e}\n`.rainbow);
}

//return height is --- on ratio x:y
if (Number(menu) == 2) {
  console.log(`\nHeigh = ${calculate.ratio()}\n`.rainbow);
}

// return percentage of x in y.
if (Number(menu) == 3) {
  console.log(
    `\n"x"(${xValue}) = ${calculate.percentage()} of "y"(${yValue})\n`.rainbow
  );
}

// Returns the sum of x added to y.
if (Number(menu) == 4) {
  console.log(
    `\n"x"(${xValue}) + "y"(${yValue}) = ${calculate.add()}\n`.rainbow
  );
}

// Returns the difference of y subtracted from x.
if (Number(menu) == 5) {
  console.log(
    `\n"x"(${xValue}) - "y"(${yValue}) = ${calculate.subtract()}\n`.rainbow
  );
}

// Returns the product of x multiplied by y.
if (Number(menu) == 6) {
  console.log(
    `\n"x"(${xValue}) * "y"(${yValue}) = ${calculate.multiply()}\n`.rainbow
  );
}

// Returns the quotient of x divided by y.
if (menu == 7) {
  console.log(
    `\nQuotient of "x"(${xValue}) / "y"(${yValue}) = ${calculate.divide()}\n`
      .rainbow
  );
}

// Returns the remainder of x divided by y.
if (Number(menu) == 8) {
  console.log(
    `\nRemainder of "x"(${xValue}) / "y"(${yValue}) = ${calculate.modulation()}\n`
      .rainbow
  );
}

// Returns x raised to the power of y.
if (Number(menu) == 9) {
  console.log(
    `\n"x"(${xValue}) raised to the power of "y"(${yValue}) = ${calculate.elevate()}\n`
      .rainbow
  );
}

// Returns the square root of x.
if (Number(menu) == 10) {
  console.log(
    `\nSquare root of "x"(${xValue}) = ${calculate.sqrt()}\n`.rainbow
  );
}

// END - Class Instance

// FINAL ANIMATION

const rainbow = chalkAnimation.rainbow("See you later!!!"); // Animation starts

chalkAnimation.rainbow("I hope you had fun. See you later!!!", 1);
setTimeout(() => {
  // Stop the animation, then write on a new line.
  console.log("");
}, 1000);

// let str = 'Loading...';
// const loading = chalkAnimation.rainbow(str);

// // Add a new dot every second
// setInterval(() => {
// 	loading.replace(str += '.');
// }, 1000);
