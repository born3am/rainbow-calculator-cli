class Calculator {
  constructor(xValue, yValue, width) {
    this.xValue = xValue;
    this.yValue = yValue;
    this.width = width;
    this.pi = 3.141592653589793;
    this.eulerNumber = 2.718281828459045;
  }

  ratio() {
    return (Math.abs(this.yValue) / Math.abs(this.xValue)) * this.width;
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
      console.log('\nERROR: the divisor cannot be "0"'.red);
    } else {
      return this.xValue / this.yValue;
    }
  }

  modulation() {
    if (this.yValue === 0) {
      console.log('\nERROR: the divisor cannot be "0"'.red);
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
