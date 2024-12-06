import { PI, EULER_NUMBER } from '../constants/constants.js';
import { COPY_EN } from '../l10n/copyEN.js';

class Calculator {
  constructor(xValue, yValue) {
    this.xValue = xValue;
    this.yValue = yValue;
    this.pi = PI;
    this.eulerNumber = EULER_NUMBER;
  }

  percentage() {
    return `${(this.xValue / this.yValue) * 100}%`;
  }

  add() {
    return +this.xValue + +this.yValue;
  }

  subtract() {
    return this.xValue - this.yValue;
  }

  multiply() {
    return this.xValue * this.yValue;
  }

  divide() {
    if (this.yValue === 0) {
      console.error(COPY_EN.divisorError.red);
    } else {
      return this.xValue / this.yValue;
    }
  }

  modulation() {
    if (this.yValue === 0) {
      console.error(COPY_EN.divisorError.red);
    } else {
      return this.xValue % this.yValue;
    }
  }

  elevate() {
    return Math.pow(this.xValue, this.yValue);
  }

  sqrt() {
    return Math.sqrt(this.xValue);
  }

  getPi() {
    return this.pi;
  }

  getEulerNumber() {
    return this.eulerNumber;
  }
}

export { Calculator };
