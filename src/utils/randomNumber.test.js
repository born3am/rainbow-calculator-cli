import { randomUpTo } from './randomNumber';
import jest from 'jest-mock';

describe('randomUpTo', () => {
  test('should return a number between 0 and the specified max value', () => {
    const max = 10;
    const randomNum = randomUpTo(max);
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThanOrEqual(max);
  });

  test('should return a number between 0 and 100 when max is 100', () => {
    const max = 100;
    const randomNum = randomUpTo(max);
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThanOrEqual(max);
  });

  test('should return a number between 0 and 0 when max is 0', () => {
    const max = 0;
    const randomNum = randomUpTo(max);
    expect(randomNum).toBe(0);
  });

  test('should log the chosen random number', () => {
    console.log = jest.fn();
    const max = 10;
    const randomNum = randomUpTo(max);
    expect(console.log).toHaveBeenCalledWith(`Random number chosen: ${randomNum}`);
  });
});