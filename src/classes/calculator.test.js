import jest from 'jest-mock';

import { Calculator } from './calculator.js';
import { PI, EULER_NUMBER } from '../constants/constants.js';
import { COPY_EN } from '../l10n/copyEN.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(10, 5);
  });

  test('should return the value of PI', () => {
    expect(calculator.pi).toBe(PI);
  });

  test("should return the value of Euler's number", () => {
    expect(calculator.eulerNumber).toBe(EULER_NUMBER);
  });

  test('should calculate the percentage of x in y', () => {
    expect(calculator.percentage()).toBe('200%');
  });

  test('should add x and y', () => {
    expect(calculator.add()).toBe(15);
  });

  test('should subtract y from x', () => {
    expect(calculator.subtract()).toBe(5);
  });

  test('should multiply x and y', () => {
    expect(calculator.multiply()).toBe(50);
  });

  test('should divide x by y', () => {
    expect(calculator.divide()).toBe(2);
  });

  test('should return error message when dividing by zero', () => {
    calculator = new Calculator(10, 0);
    console.error = jest.fn();
    calculator.divide();
    expect(console.error).toHaveBeenCalledWith(COPY_EN.divisorError.red);
  });

  test('should calculate the modulus of x divided by y', () => {
    expect(calculator.modulation()).toBe(0);
  });

  test('should return error message when calculating modulus by zero', () => {
    calculator = new Calculator(10, 0);
    console.error = jest.fn();
    calculator.modulation();
    expect(console.error).toHaveBeenCalledWith(COPY_EN.divisorError.red);
  });

  test('should elevate x to the power of y', () => {
    expect(calculator.elevate()).toBe(100000);
  });

  test('should calculate the square root of x', () => {
    calculator = new Calculator(16, 0);
    expect(calculator.sqrt()).toBe(4);
  });
});
