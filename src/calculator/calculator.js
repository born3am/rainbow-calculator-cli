class Calculator {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.pi = 3.141592653589793;
    this.e = 2.718281828459045;
  }

  ratio() {
    return Math.abs(this.y) / Math.abs(this.x) * this.width;
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
      return this.x / this.y;
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
}

export { Calculator };
