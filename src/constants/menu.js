const MENU_OPTIONS = {
  1: {
    title: 'Calculate Number PI',
    description: 'Returns the value of PI',
    input: 0,
  },
  2: {
    title: "Calculate Euler's number",
    description: "Returns Euler's number",
    input: 0,
  },
  3: {
    title: 'Calculate Percentage (x, y)',
    description: 'Calculates the percentage of x in y',
    input: 2,
  },
  4: {
    title: 'Addition (x + y)',
    description: 'Calculates the sum of x and y',
    input: 2,
  },
  5: {
    title: 'Subtraction (x - y)',
    description: 'Calculates the difference of x and y',
    input: 2,
  },
  6: {
    title: 'Multiplication (x * y)',
    description: 'Calculates the product of x and y',
    input: 2,
  },
  7: {
    title: 'Division (x / y)',
    description: 'Calculates the quotient of x divided by y',
    input: 2,
  },
  8: {
    title: 'Modulus (x % y)',
    description: 'Returns the remainder when x is divided by y',
    input: 2,
  },
  9: {
    title: 'Exponentiation (x ^ y)',
    description: 'Calculates x raised to the power of y',
    input: 2,
  },
  10: {
    title: 'Square Root of x',
    description: 'Calculates the square root of x',
    input: 1,
  },
};

const MIN_MENU_OPTION = 1;
const MAX_MENU_OPTION = 10;

export { MAX_MENU_OPTION, MENU_OPTIONS, MIN_MENU_OPTION };
