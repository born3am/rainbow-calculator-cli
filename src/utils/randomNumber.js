const randomUpTo = (max) => {
  const randomNum = Math.floor(Math.random() * (max + 1));
  console.log(`Random number chosen: ${randomNum}`);
  return Number(randomNum);
};

export { randomUpTo };
