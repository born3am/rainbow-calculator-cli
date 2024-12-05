

const randomUpTo = (max) => {
  randomNum = Math.floor(Math.random() * (max + 1));
  return Number(randomNum);
};

export { randomUpTo };